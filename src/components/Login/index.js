import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import LockIcon from "@material-ui/icons/Lock";
import AccountCircle from "@material-ui/icons/AccountCircle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Alert from "@material-ui/lab/Alert";
import LinearProgress from "@material-ui/core/LinearProgress";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import axios from "../../services/axios-instance";

import useStyles from "./styles";

import { useSelector, useDispatch } from "react-redux";

export default function TransitionsModal() {
  const userToken = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [tipoConta, setTipoConta] = useState(false);


  useEffect(() => {
    if (userToken) {
      setLoading(true);
      let body = new FormData();
      body.append("class", "Auth");
      body.append("function", "verify");
      body.append("token", userToken);
      axios
        .post("/", body)
        .then((res) => {
          if (res.data.dados != "Token valido!") {
            storeLogout()
            setErrorMessage("Sessão encerrada.");
          }
          setLoading(false);
        })
        .catch((res) => {
          storeLogout()
          setErrorMessage("Sessão encerrada.");
          setLoading(false);
        });
    }
  }, []);

  const storeLogin = (token) => {
    dispatch({ type: "Login", token: token });
  };
  const storeLogout = () => {
    dispatch({ type: "Logout"});
  };

  const onSubmittedFormHandler = async () => {
    setErrorMessage("");
    setLoading(true);

    const bodyFormData = new FormData();
    bodyFormData.append("class", "Auth");
    bodyFormData.append("function", "login");
    bodyFormData.append("email", account);
    bodyFormData.append("senha", password);
    bodyFormData.append("conta", (tipoConta?'professor':'aluno'));

    axios
      .post("/", bodyFormData)
      .then(function (res) {
        setLoading(false);
        let token = res.data.dados;
        storeLogin(token);
      })
      .catch(function (res) {
        setErrorMessage("Usuário não encontrado.");
        setLoading(false);
      });
  };

  const errorAlert = errorMessage ? (
    <Alert severity="error" className={classes.alert}>
      {errorMessage}
    </Alert>
  ) : null;

  const linearProgress = loading ? (
    <LinearProgress className={classes.linearProgress} />
  ) : null;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={!userToken}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={!userToken}>
          <div className={classes.paper}>
            {errorAlert}
            <TextField
              className={classes.margin}
              onChange={(e) => setAccount(e.target.value)}
              label="Usuário"
              autoFocus={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className={classes.margin}
              onChange={(e) => setPassword(e.target.value)}
              label="Senha"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => onSubmittedFormHandler()}
            >
              Logar
            </Button>
            <FormControlLabel 
              control={
                <Switch 
                  checked={tipoConta}
                  onChange={ () => {setTipoConta(!tipoConta)} }
                />
              }
              label="Professor"
            />
              
            {linearProgress}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
