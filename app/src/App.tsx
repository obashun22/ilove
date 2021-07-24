import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            I LOVE ONSYA
          </Typography>
          <Button color="inherit">HIHIHI</Button>
        </Toolbar>
      </AppBar>

      {/* main */}
      <Container maxWidth="sm">
        <canvas style={{backgroundColor: "pink"}}>

        </canvas>
        <TextField id="outlined-basic" label="ONSYA NAME" variant="outlined" />
        <Button variant="contained" color="primary">生成する</Button>
        <Button variant="contained" color="primary">保存</Button>
        <p>©2021 shunsuke oba</p>
      </Container>
    </div>
  );
}

export default App;
