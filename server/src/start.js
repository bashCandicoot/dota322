const app = require('./app');

app.set('port', process.env.PORT);

// const server = app.listen(app.get('port'));
app.listen(app.get('port'));
