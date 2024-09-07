const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebar = require('express-handlebars');
const app = express();
const port = 3000;

//Http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebar.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'resources/views/layouts'),
  partialsDir: path.join(__dirname, 'resources/views/partials') // Đảm bảo đường dẫn này chính xác
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})          