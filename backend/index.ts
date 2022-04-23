import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';
import example from './interfaces';
// import dotenv from 'dotenv';

// dotenv.config();

const app: Express = express();
const port = 8080;//process.env.PORT;
//var jsonParser = bodyParser.json()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/sessions/:sessionID', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
 
app.post('/', (req: Request, res: Response) => {
  // if(req.body.Key3 == undefined) {
  //   res.send('Error Undefined')
  // }
  res.send('Post' + req.body.Key2);
})

app.put('/', (req: Request, res: Response) => {
  res.send('Put');
})

app.delete('/', (req: Request, res: Response) => {
  res.send('Delete');
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});