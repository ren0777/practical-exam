const express = require('express');
const app = express();

const authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;

  if (auth !== 'admin123') {
    return res.status(403).send('Access Denied');
  }

  next();
};

app.get('/public', (req, res) => {
  res.send('Welcome to public route');
});
app.get('/private', authMiddleware, (req, res) => {
  res.send('Welcome to private route');
});


app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
