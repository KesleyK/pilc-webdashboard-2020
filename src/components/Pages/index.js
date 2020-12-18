import React, { useState, useEffect } from "react";
import axios from "../../services/axios-instance";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import VideoCarousel from "../VideoCarousel";

import useStyles from "./style";

const Pages = ({ history }) => {
  const [paginas, setPaginas] = useState([]);
  const classes = useStyles();

  const carregarPaginas = () => {
    let body = new FormData();
    body.append("class", "Pagina");
    body.append("function", "getPaginas");
    axios
      .post("/", body)
      .then((el) => {
        if (el.data.status === "sucesso") {
          setPaginas(el.data.dados);
          console.log(el.data.dados);
        }
      })
      .catch(() => {
        console.log("erro");
      });
  };
  useEffect(carregarPaginas, []);
  return (
    <Box className={classes.mainBox}>
      <Breadcrumbs separator="›">
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="textPrimary" aria-current="page">
          Páginas
        </Link>
      </Breadcrumbs>
      <Box className={classes.containerCenter}>
        <Box className={classes.pageBox}>
          {paginas.map((pagina) => (
            <Card className={classes.card}>
              <CardActionArea
                onClick={() => {
                  history.push("/page/" + pagina.id);
                }}
                className={classes.cardActionArea}
              >
                <Box>
                  <CardMedia
                    component="img"
                    image={pagina.img}
                    title={pagina.titulo}
                    alt={pagina.titulo}
                    height="140"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom component="h5">
                      {pagina.titulo}
                    </Typography>
                  </CardContent>
                </Box>
                <CardActions className={classes.chipsHolder}>
                  {pagina.tags
                    ? pagina.tags.map((tag) => (
                        <Chip
                          variant="outlined"
                          size="small"
                          label={tag}
                          className={classes.chips}
                        />
                      ))
                    : null}
                </CardActions>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Pages;
