import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Box from "@material-ui/core/Box";
import EmojiEventsTwoToneIcon from "@material-ui/icons/EmojiEventsTwoTone";
import Typography from "@material-ui/core/Typography";
import MemoryGame from "./Memory";
import HangmanGame from "./Hangman";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import axios from "../../services/axios-instance";

import useStyles from "./styles";

export default function Exercises(props) {
  const userToken = useSelector((state) => state.user.token);
  const classes = useStyles();
  const history = useHistory();
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const gameId = props.match.params.id;

    const body = new FormData();
    body.append("class", "jogos");
    body.append("function", "getjogo");
    body.append("id", gameId);

    axios
      .post("/", body)
      .then((res) => {
        setGameData(res.data.dados);
      })
      .catch(() => {
        console.log("Erro");
      });
  }, [props.match.params.id]);

  const onFinishGameHandler = () => {
    const gameId = props.match.params.id;

    const body = new FormData();
    body.append("function", "responder");
    body.append("class", "jogos");
    body.append("token", userToken);
    body.append("jogo", gameId);
    body.append("pts", 10);

    axios
      .post("/", body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Erro");
      });
  };

  const onSelectGameHandler = () => {
    switch (gameData.Tipo) {
      case "Forca":
        const word = gameData.Jogo.palavra;

        return (
          <HangmanGame word={word} onFinish={() => onFinishGameHandler()} />
        );
      case "Memoria":
        const words = gameData.Jogo.map((carta) => carta.carta1);

        return (
          <MemoryGame words={words} onFinish={() => onFinishGameHandler()} />
        );
      default:
        return null;
    }
  };

  const onShowRankingHandler = () => {
    return gameData.ranking.map((item, index) => (
      <p key={index} className={classes.rankItem}>
        {item.nome} - {item.pontuacao}pts
      </p>
    ));
  };

  let selectedGame;
  let rankData;
  if (gameData) {
    selectedGame = onSelectGameHandler();
    rankData = onShowRankingHandler();
  }

  return (
    <Box className={classes.main}>
      <Breadcrumbs separator="›">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/page">
          Páginas
        </Link>
        <Link
          color="inherit"
          onClick={() => {
            history.goBack();
          }}
        >
          Página
        </Link>
        <Link color="textPrimary" aria-current="page">
          Jogo
        </Link>
      </Breadcrumbs>
      <Box className={classes.root}>
        <Box className={classes.leftBox}>
          <div className={classes.trophyTitleHolder}>
            <EmojiEventsTwoToneIcon className={classes.trophyIcon} />
            <Typography className={classes.trophyText}>
              Ranking Parcial
            </Typography>
          </div>
          {rankData}
        </Box>

        <Box className={classes.rightBox}>
          <div className={classes.exerciseContent}>{selectedGame}</div>
        </Box>
      </Box>
    </Box>
  );
}
