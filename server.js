import express from 'express';

const PORT = 8080;
const PUBLIC_PATH = __dirname + '/dist';
const app = express();
const options = { beautify: true };
const isDevelopment = true;
    // process.env.NODE_ENV === 'development';

if (isDevelopment) {
    console.log('Development.');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config.js');
    const compiler = webpack(webpackConfig);
    app.use(require('webpack-dev-middleware')(compiler, {
        hot: true,
        stats: {
            colors: true
        }
    }));
    app.use(require('webpack-hot-middleware')(compiler));
} else {
    console.log('Production.');
    app.use(express.static(PUBLIC_PATH));
}
app.set('views', __dirname + '/src/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine(options));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.listen(PORT, function() {
    console.log('Listening on port ' + PORT + '...');
});

app.get("/",function (req,res) {
    res.render('login.jsx');
});
app.get("/dashboard",function (req,res) {
    res.render('home/index.jsx');
});
app.post('/login',function(req,res){
    console.log(req.body.user[0]);
    console.log(req.body.user[1]);
    res.send(req.body.user[0]+':'+req.body.user[1]);
});
