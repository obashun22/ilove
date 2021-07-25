import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// material-ui
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// 画像を生成する
const generateImage = (canvas: HTMLCanvasElement, keyword: string) => {
  let ctx = canvas.getContext('2d')!;
  const width = canvas.width;
  const height = canvas.height;

  // 背景
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, width, height);
  
  // 図形
  ctx.font = "400px 'Dela Gothic One'";
  ctx.fillStyle = "hsla(348, 88%, 51%, 0.15)";
  ctx.fillText("❤︎", 645, height - 195);

  // I
  ctx.fillStyle = "#333";
  ctx.font = "180px 'Dela Gothic One'";
  ctx.fillText("I", 110, height - 250);

  // LOVE
  ctx.fillStyle = "#f0133f";
  ctx.font = "150px 'Dela Gothic One'";
  ctx.fillText("LOVE", 295, height - 250);

  // Keyword
  ctx.font = "150px 'Dela Gothic One'";
  ctx.fillStyle = "#333";
  ctx.fillText(keyword, 110, height - 80);
};

// 画像を保存する
const saveCanvas = (canvas: HTMLCanvasElement) => {
	//アンカータグを作成
	let a = document.createElement('a');
	//canvasをJPEG変換し、そのBase64文字列をhrefへセット
	a.href = canvas.toDataURL('image/png', 1);
	//ダウンロード時のファイル名を指定
	a.download = 'download.png';
	//クリックイベントを発生させる
	a.click();
};

// material-uiにおけるスタイル適応に用いる
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    canvas: {
      width: '100%',
      border: 'solid 1px gray',
    },
    btn: {
      margin: theme.spacing(1),
    },
    bagReport: {
      color: 'silver',
    }
  }),
);

const App: React.FC = () => {
  const classes = useStyles();
  const [keyword, setKeyword] = useState<string>("ONSYA！"); // キーワードを保持

  const canvasRef = useRef<HTMLCanvasElement | null>(null); // canvasの参照

  useEffect(() => {
    if (canvasRef.current) {
      let canvas = canvasRef.current;
      generateImage(canvas, keyword); // 初期画面の描画
    }
  }, []);

  return (
    <div className="App">
      {/* header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            I LOVE Generator
          </Typography>
        </Toolbar>
      </AppBar>

      {/* main */}
      <Container maxWidth="sm">
        {/* Boxはスタイル適応のためのdiv要素に近い */}
        <Box py={3}>
          <canvas
            id="canvas"
            className={classes.canvas}
            width="1920"
            height="1080"
            ref={canvasRef}
          />
        </Box>

        <Box py={1}>
          <TextField
            label="I LOVE"
            variant="outlined"
            value={keyword}
            onChange={ e => setKeyword(e.target.value) }
          />
        </Box>

        <Box py={1}>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={ () => { generateImage(canvasRef.current!, keyword); } }>
            生成する
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.btn}
            onClick={ () => { saveCanvas(canvasRef.current!) } }>
            保存
          </Button>
        </Box>

        <h3>使い方</h3>
        1. <strong>好きなもの</strong>を入力<br />
        2. 【<strong>生成する</strong>】をクリック<br />
        3. 【<strong>保存</strong>】をクリック<br />
        ※PCのみ対応
        <p>
          様々なオンラインイベントの背景画像として使えます。<br />
          例. 就活の面接、商談、交流会、授業など
        </p>
        <div className={classes.bagReport}>
          <h3>バグ</h3>
          <p>
            初回読み込み時にフォントが反映されない<br />
            たまにフォントが日本語非対応<br />
            スマホで保存できない
          </p>
        </div>
        <hr />
        <p>©2021 shunsuke oba</p>
      </Container>
    </div>
  );
}

export default App;