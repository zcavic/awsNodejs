import Express from 'express';

const port = process.env.PORT || 3000;
const app = Express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})