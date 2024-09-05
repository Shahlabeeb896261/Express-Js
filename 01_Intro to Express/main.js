import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/home', (req, res) => {
    res.send('Hello, This is the home page!');
})

app.get('/about', (req, res) => {
    res.send('Hello, This is the about page!');
})

app.get('/contact', (req, res) => {
    res.send('Hello, This is the Contact page!');
})

app.get('/blog', (req, res) => {
    res.send('Hello, This is the blog page!');
})

app.get('/blog/:slug', (req, res) => {
    res.send(`Hello, This is the ${req.params.slug} page!`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})