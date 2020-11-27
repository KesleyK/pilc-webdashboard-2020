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
import axios from "../../services/axios-instance";

import useStyles from "./styles";


export default function TransitionsModal() {

  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    let token = localStorage.getItem('token')
    if(token){
      setLoading(true);
      let body = new FormData();
      body.append("class", "Auth");
      body.append("function", "verify");
      body.append("token", token);
      axios.post('/',body)
      .then((res)=>{
        if(res.data.dados == "Token valido!"){
          handleClose();
        }else{
          localStorage.clear();
          setErrorMessage("Sessão encerrada.");
        }
        setLoading(false);
      }).catch((res)=>{
        localStorage.clear();
        setErrorMessage("Sessão encerrada.");
        setLoading(false);
      })
    }
  },[]);

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmittedFormHandler = async () => {
    setErrorMessage("");
    setLoading(true);

    const bodyFormData = new FormData();
    bodyFormData.append("class", "Auth");
    bodyFormData.append("function", "login");
    bodyFormData.append("email", account);
    bodyFormData.append("senha", password);
    bodyFormData.append("conta", "professor");

    axios
      .post("/", bodyFormData)
      .then(function (res) {
        setLoading(false);
        handleClose();
        localStorage.setItem('token',res.data.dados)
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
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
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
            {linearProgress}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
