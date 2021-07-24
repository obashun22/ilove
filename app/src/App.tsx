import React, { useState, useEffect } from 'react';
import './App.css';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    canvas: {
      width: '95%',
    },
    btn: {
      margin: theme.spacing(1),
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  const [onsyaName, setOnsyaName] = useState<string>("");

  return (
    <div className="App">
      {/* header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            I LOVE ONSYA
          </Typography>
        </Toolbar>
      </AppBar>

      {/* main */}
      <Container maxWidth="sm" style={{backgroundColor: "white"}}>
        <Box py={3}>
          <canvas style={{backgroundColor: "pink"}} className={classes.canvas}>

          </canvas>
        </Box>
        <Box py={1}>
          <TextField
            label="ONSYA NAME"
            variant="outlined"
            value={onsyaName}
            onChange={ e => setOnsyaName(e.target.value) }
          />
        </Box>
        <Box py={1}>
          <Button variant="contained" color="primary" className={classes.btn}>生成する</Button>
          <Button variant="contained" color="primary" className={classes.btn}>保存</Button>
        </Box>
        <p>©2021 shunsuke oba</p>
      </Container>
    </div>
  );
}

export default App;
