const app = require('./src/app');

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Slowlyy date API listening on port ${port}`);
});
