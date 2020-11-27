import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import EmojiEventsTwoToneIcon from "@material-ui/icons/EmojiEventsTwoTone";

import useStyles from "./styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, totalScore, score1, score2, score3) {
  return { name, totalScore, score1, score2, score3 };
}

const rows = [
  createData("Pedro Pessoa", 40, 12, 12, 16),
  createData("Keydson Estrela", 40, 12, 12, 16),
  createData("Pedro Henrique", 40, 12, 12, 16),
  createData("Letícia Dias", 40, 12, 12, 16),
  createData("Kesley Kenny", 40, 12, 12, 16),
];

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <div className={classes.trophyTitleHolder}>
        <EmojiEventsTwoToneIcon className={classes.trophyIcon} />
        <Typography className={classes.trophyText}>Ranking Total</Typography>
      </div>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Usuário</StyledTableCell>
            <StyledTableCell align="center">Pontuação</StyledTableCell>
            <StyledTableCell align="center">Fase I</StyledTableCell>
            <StyledTableCell align="center">Fase II</StyledTableCell>
            <StyledTableCell align="center">Fase III</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.totalScore}</StyledTableCell>
              <StyledTableCell align="center">{row.score1}</StyledTableCell>
              <StyledTableCell align="center">{row.score2}</StyledTableCell>
              <StyledTableCell align="center">{row.score3}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
