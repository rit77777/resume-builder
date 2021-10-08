const express = require('express');
const pdf = require('html-pdf');
const cors = require('cors');
const pdfTemplate = require('./template');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Working !!!');
// });

app.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('Resume.pdf', (err) => {
    if (err) {
      res.send(Promise.reject());
      console.log(err);
    }
    res.send(Promise.resolve());
    console.log('Success');
  });
});

app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/Resume.pdf`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
