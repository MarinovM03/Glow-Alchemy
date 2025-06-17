import express, { urlencoded } from 'express';

const app = express();

app.use(express.static('src/public'));

app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello World!'); 
});

app.listen(3000, console.log('Server is listening on http://localhost:3000...'));