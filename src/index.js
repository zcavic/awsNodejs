const express = require('express');
const dotenv = require('dotenv');
const { userController } = require('./controllers/index');

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/getUser', async (req, res, next) => {
    await userController.getUser(req, res, next);
});
  
app.get('/postUser', async (req, res, next) => {
    await userController.postUser(req, res, next);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})