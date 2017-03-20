import express from 'express';
import path from 'path';

const PORT = 7700;
const USERS = [
  { id: 1, name: "Alexey", age: 30 },
  { id: 2, name: "Ignat", age: 15 },
  { id: 3, name: "Sergey", age: 26 },
];
const PUBLIC_PATH = __dirname + '/public';

const app = express();
const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.babel').default;
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    stats: {
      colors: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static(PUBLIC_PATH));
}

app.get("/users", function(req, res) {
  res.send(USERS);
});

app.all("*", function(req, res) {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});