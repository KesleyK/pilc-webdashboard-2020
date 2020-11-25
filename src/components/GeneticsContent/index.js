import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

export default function GeneticsContent() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h1" className={classes.heading}>
        Sobre Genética
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        A Genética é a parte da Biologia que estuda a hereditariedade, ou seja,
        a forma como as características são repassadas de geração para geração.
        Considera-se que essa ciência iniciou-se com os experimentos e leis
        propostas por um monge chamado Gregor Mendel, em um trabalho publicado
        em 1866.
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        Para a realização de seus trabalhos, Mendel escolheu ervilhas e analisou
        sete características: o tamanho da planta, textura da semente, cor da
        semente, forma da vagem, cor da vagem, cor da flor e posição da flor. A
        escolha da planta foi essencial para o sucesso de suas pesquisas, uma
        vez que a ervilha apresenta fácil cultivo, várias sementes e ciclo
        reprodutivo curto.
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        Uma das leis propostas por Mendel em seu trabalho foi a segregação dos
        fatores, conhecidos hoje por genes. Segundo o pesquisador, cada pessoa
        apresenta uma par de fatores para cada característica que se separa no
        momento da formação dos gametas. No momento da fecundação, os gametas do
        pai e da mãe juntam-se, levando consigo suas características.
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        Mendel contribuiu de maneira grandiosa para os estudos da Genética e,
        por isso, é considerado hoje o pai dessa ciência. Os trabalhos desse
        pesquisador, no entanto, ficaram esquecidos por muitos anos, sem nenhuma
        utilização. Entretanto, em 1900, os pesquisadores Correns, Tschesmak e
        De Vries redescobriram independentemente os trabalhos de Mendel ao
        estudar plantas híbridas. Esses três botânicos contribuíram para a
        aceitação das ideias de Mendel e para o início dos estudos genéticos em
        humanos.
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        O avanço da Genética modificou completamente o mundo atual, tornando
        possível, por exemplo, criar clones, alimentos transgênicos resistentes
        às pragas, realizar testes de paternidade e solucionar crimes, mapear
        doenças e realizar aconselhamento genético.
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        Confira os textos dispostos mais abaixo para conhecer as novidades no
        campo da genética e entender os princípios que norteiam esse campo de
        estudos da Biologia.
      </Typography>
      <Typography variant="caption">
        [Fonte:{" "}
        <a href="https://brasilescola.uol.com.br/biologia/genetica.htm">
          https://brasilescola.uol.com.br/biologia/genetica.htm
        </a>{" "}
        ]
      </Typography>
    </Box>
  );
}
