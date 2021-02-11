const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;

console.log('Hello from mars');
console.log(__dirname);
console.log(process.env.USER);
console.log(process.env.PORT);

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/*', (_, res) => {
  res.json({ data: 'Hello from mars' });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
