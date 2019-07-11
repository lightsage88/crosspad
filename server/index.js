const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(cors());

const corsOptions = {
    origin: 'https://api-v3.igdb.com'
}

app.options('*', cors());
app.post(`${process.env.REACT_APP_IGDB_API_URL}/games/?search=mario&fields=
name,
id`, cors(corsOptions), (req, res)=>{
console.log(req, res);
})

app.get('/', (req,res)=>{
    const {url} =  req.query;

})

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);