//const express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));
// parse incoming data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//start server
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
