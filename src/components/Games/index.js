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
import axios from "../../services/axios-instance";

import useStyles from "./styles";

export default function Exercises(props) {
  const userToken = useSelector((state) => state.user.token);
  const classes = useStyles();
  const history = useHistory();
  const [initialTime, setInitialTime] = useState(null);
  const [gameData, setGameData] = useState(null);
  const [ranking, setRanking] = useState([]);
  const [gameStatus, setGameStatus] = useState(null);

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
        setRanking(res.data.dados.ranking)
        setInitialTime(new Date());
      })
      .catch(() => {
        console.log("Erro");
      });
  }, [props.match.params.id]);

  const atualizarRanking = () => {
    let body = new FormData();
    body.append("class", "jogos");
    body.append("function", "getjogo");
    body.append("id", props.match.params.id);

    axios
      .post("/", body)
      .then((res) => {
        setRanking(res.data.dados.ranking)
      })
      .catch(() => {
        console.log("Erro");
      });
  }

  const onFinishGameHandler = (gameStatus, gameWeight) => {
    if (gameStatus !== "WIN") {
      return setGameStatus("GAME_OVER");
    }

    const elapsedTime = Math.abs(new Date() - initialTime) / 1000;
    let pts = (gameWeight * 600) / elapsedTime;

    if (pts < 0) {
      pts = 0;
    }

    const gameId = props.match.params.id;

    const body = new FormData();
    body.append("function", "responder");
    body.append("class", "jogos");
    body.append("token", userToken);
    body.append("jogo", gameId);
    body.append("pts", pts);

    axios
      .post("/", body)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log("Erro");
      })
      .finally(() => {
        atualizarRanking();
        setGameStatus("WIN");
      });
  };

  const SelectGameHandler = () => {
    switch (gameData?.Tipo) {
      case "Forca":
        const word = gameData.Jogo.palavra;
        const wordLength = word.length;

        return (
          <HangmanGame
            word={word}
            onFinish={(status) => onFinishGameHandler(status, wordLength / 2)}
          />
        );
      case "Memoria":
        const words = gameData.Jogo.map((carta) => carta.carta1);
        const wordsLength = words.length;

        return (
          <MemoryGame
            words={words}
            onFinish={(status) => onFinishGameHandler(status, wordsLength)}
          />
        );
      default:
        return null;
    }
  };

  const ShowRankingHandler = () => {
    return ranking.length > 0 !== undefined?ranking.map((item, index) => (
      <p key={index} className={classes.rankItem}>
        {item?.nome} - {parseFloat(item?.pontuacao).toFixed(2)} pts
      </p>
    )):null;
  };

  const FinishButton = () => {
    if (gameStatus === "GAME_OVER") {
      return (
        <Typography color="secondary" style={{ fontWeight: "bold" }}>
          GAME OVER! Estude mais e tente novamente.
        </Typography>
      );
    }
    if (gameStatus === "WIN") {
      return (
        <Typography color="primary" style={{ fontWeight: "bold" }}>
          Parabéns! Você finalizou o jogo com êxito.
        </Typography>
      );
    }
    return null;
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
          <ShowRankingHandler />
        </Box>

        <Box className={classes.rightBox}>
          <div className={classes.exerciseContent}><SelectGameHandler /></div>
          <div className={classes.rightBottomBox}><FinishButton /></div>
        </Box>
      </Box>
    </Box>
  );
}
