import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

export default function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h1" className={classes.heading}>
        Sobre o projeto
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        O intuito do projeto se constitui em atender as dificuldades enfrentadas
        por alunos do Ensino Médio e Ensino Fundamental II durante o processo de
        aprendizagem dos conteúdos de genética, pois, são conteúdos geralmente
        massivos de serem estudados e, por conta de serem temáticas bastante
        interdisciplinares, envolvendo temas de probabilidade e estatística
        juntamente com conteúdos de biologia, acabam se tornando difíceis de
        serem absorvidos. Para deixar o conteúdo menos abstrato, a ideia de
        criação da plataforma foi baseada em exercícios interativos com foco em
        gamificação. Além disso, a plataforma conta com vídeos ilustrativos e
        didáticos e, conteúdos explicativos relacionados aos principais temas
        abordados.
      </Typography>
      <Typography variant="h1" className={classes.heading}>
        Conteúdos Abordados
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        Genes, Alelo, Cromossomo, Homozigótico, Gameta, Genealogias Heredograma,
        Dominância Genética, Recessividade Genética, Hereditariedade, Genótipo,
        Fenótipo, Daltonismo, Cruzamento Genético, Estatística, Probabilidade,
        Arranjo, Combinação, Teoria dos Jogos e Fatorial.
      </Typography>
      <Typography variant="h1" className={classes.heading}>
        Desenvolvedores
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        O projeto foi desenvolvido pelos estudantes do 5º semestre de
        Licenciatura em Computação (UnB 2020) Pedro Pessoa Ramos e Kesley Kenny,
        pela disciplina Projeto Interdisciplinar de Licenciatura em Computação,
        professora Leticia Lopes Leite.
      </Typography>
      <Typography>
        <Link href="/page" className={classes.link}>
          Prosseguir para próxima página &rarr;
        </Link>
      </Typography>
    </Box>
  );
}
