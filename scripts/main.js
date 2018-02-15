const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.listen(8080, () => { });

app.get('/',(req, res) =>{
  
  const file = fs.readFileSync(path.resolve(__dirname + '\\..\\index.html'),'utf-8');
  res.send(file);
});
