//require express framework
const express = require('express');
//express function
const app = express();
//Deprecation of res.sendfile is invalid, "sendFile" is currently not working, so ignore the console log, as it's not true.
loadstring1 = 'functions are correct if ur seeing this'


// GET / file/index landing /
app.get('/', (req, res) => {
  res.sendfile('src/views/pages/landing.htm')
});
// GET/SEND file
app.get('/portfolio', (req, res) => {
  res.sendfile('src/views/pages/portfolio.html')
});

// GET/SEND file
app.get('/license', (req, res) => {
  res.sendfile('src/views/pages/license.htm')
});

app.get('/standwithukraine', (req, res) => {
  res.sendfile('src/views/blog/ukraine.html')
});

app.get('/imagedesigners', (req, res) => {
  res.sendfile('src/views/pages/ineed.htm')
});

app.get('/src/cdn/', (req, res) => {
  res.sendfile('src/misc/srcdir.html')
});

app.get('/src/', (req, res) => {
  res.sendfile('src/misc/srcdir.html')
});

app.get('/new', (req, res) => {
  res.sendfile('src/views/pages/newsite.html')
});

app.get('/tsscac', (req, res) => {
  res.sendfile('src/misc/tsscac/tsscac.html')
});

app.get('/privacy', (req, res) => {
  res.sendfile('src/views/pages/privacy.html')
});

app.get('/terms', (req, res) => {
  res.sendfile('src/views/pages/terms.html')
});

//src/misc/tsscac/agr0001.md
// Call Public Static
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/public/style.css', express.static(process.cwd() + '/public/style.css'));
app.use('/public/front.js', express.static(process.cwd() + '/public/front.js'));
// Call Public Static
app.use('/src/cdn', express.static(process.cwd() + '/src/cdn'));
app.use('/src/misc', express.static(process.cwd() + '/src/misc'));
app.use('/index.js', express.static(process.cwd() + '/index.js'));
app.use('/src/errors/404.htm', express.static(process.cwd() + '/src/errors/404.htm'));
app.use('/src/errors/500.htm', express.static(process.cwd() + '/src/errors/500.htm'));

// Handle 404
app.use(function(req, res) {
  res.sendfile('src/errors/404.htm', 404);
});

// Handle 500
app.use(function(error, req, res, next) {
  res.sendfile('src/errors/500.htm', 500);
});
//listen on ports and give serverstart and serverready
app.listen(3000, () => {
  console.log('Server Started, await res.sendfile');
  
  console.log(loadstring1)
});
