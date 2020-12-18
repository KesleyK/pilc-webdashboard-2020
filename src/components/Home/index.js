import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from '@material-ui/core';

import useStyles from "./styles";

import { useSelector } from "react-redux";


export default function Home() {
  const classes = useStyles();
  const user = useSelector((state) => state.user);

  return (
    <Box className={classes.root}>
      <Typography variant="h1" className={classes.heading}>
        Sobre o projeto
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        O intuito do projeto é atender as dificuldades enfrentadas
        por alunos do Ensino Médio e Ensino Fundamental II durante o processo de
        aprendizagem dos conteúdos de genética. Geralmente, são conteúdos
        massivos de serem estudados por causa das temáticas
        interdisciplinares, envolvendo temas de probabilidade e estatística
        juntamente com conteúdos de biologia. Para deixar o conteúdo menos abstrato, a ideia de
        criação da plataforma foi baseada em exercícios interativos com foco em
        gamificação. Além disso, a plataforma conta com vídeos ilustrativos e
        didáticos e conteúdos explicativos relacionados aos principais temas
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
      <br/>
      <Typography variant="h1" className={classes.heading}>
        Tutorial
      </Typography>
      {user?.conta === 'aluno'?(
      <>
        <br/>
        <Typography variant="h5" className={classes.heading}>
          Exemplo da navegação do portal
        </Typography>
        <CardMedia
          component="img"
          image={window.location.origin +'/img/PaginacaoAluno.gif'}
          title={'Exemplo da navegação do portal'}
          alt={'Gif de Exemplo da navegação do portal'}
          height="auto"
          width="auto"
          className={classes.cardMedia}
        />
      </>
      ):(null)
      }
      <br/>
      <Typography variant="h5" className={classes.heading}>
        Mudança de senha
      </Typography>
      <Typography paragraph className={classes.paragraph}>
        É recomendado a mudança da senha autogerada para facilitar o processo de login
      </Typography>
      <CardMedia
        component="img"
        image={window.location.origin +'/img/AlterarSenha.gif'}
        title={'Mudança de senha'}
        alt={'Gif de Mudança de senha'}
        height="auto"
        width="auto"
        className={classes.cardMedia}
      />
      {user?.conta === 'professor'?
      (
      <>
        <br/>
        <Typography variant="h5" className={classes.heading}>
          Adicionar novos Alunos ou professores
        </Typography>
        <Typography paragraph className={classes.paragraph}>
          Para adicionar novas contas é necessario ir no menu da sua conta {'>'} Adicionar Aluno ou Adicionar Professor {'>'} Preencher o formulario com os dados da contas.
          A senha provisoria será enviada para o email informado e o Aluno/Professor poderá utilizar o portal  
        </Typography>
        <CardMedia
          component="img"
          image={window.location.origin +'/img/AddProfessor.gif'}
          title={'Adicionar nova conta'}
          alt={'Gif de Adicionar nova conta'}
          height="auto"
          width="auto"
          className={classes.cardMedia}
        />
        <br/>
        <Typography variant="h5" className={classes.heading}>
          Turmas
        </Typography>
        <Typography paragraph className={classes.paragraph}>
          O portal têm o recurso de turmas para o professor acompanhar o desempenho dos alunos. Para criar Turmas e adicionar novos alunos é só seguir o passo a passo do gif abaixo
        </Typography>
        <Typography variant="caption" display="block" className={classes.txACenter} gutterBottom>
          Adicionar nova turma
        </Typography>
        <CardMedia
          component="img"
          image={window.location.origin +'/img/AddTurma.gif'}
          title={'Adicionar nova turma'}
          alt={'Gif de Adicionar nova turma'}
          height="auto"
          width="auto"
          className={classes.cardMedia}
        />
        <Typography variant="caption" display="block" className={classes.txACenter} gutterBottom>
          Adicionar aluno na turma
        </Typography>
        <CardMedia
          component="img"
          image={window.location.origin +'/img/AddAlunoTurma.gif'}
          title={'Adicionar aluno na turma'}
          alt={'Gif de Adicionar aluno na turma'}
          height="auto"
          width="auto"
          className={classes.cardMedia}
        />
        <Typography variant="caption" display="block" className={classes.txACenter} gutterBottom>
          Relatório da turma
        </Typography>
        <CardMedia
          component="img"
          image={window.location.origin +'/img/RelatorioTurma.gif'}
          title={'Relatório da turma'}
          alt={'Gif de Relatório da turma'}
          height="auto"
          width="auto"
          className={classes.cardMedia}
        />
      </>
      ):(null)}
    </Box>
  );
}
