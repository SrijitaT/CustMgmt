import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webconfig from './webpack.config';
import open from 'open';
import config from './config'
import apiRouter from './api/index';
//import './serverRender';

const port = 3000;
//const host='0.0.0.0';
const app = express();
const compiler = webpack(webconfig);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webconfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use('/scripts', express.static('scripts'));
app.use('/api',apiRouter);
app.get('/', (req, res) => 
{     
    res.sendfile('src/index.html')    
});


app.listen(config.port,config.host,function(err) {
    if (err) {
      console.log(err);
    } else {
      open(`http://localhost:${port}`);
    }
  });
