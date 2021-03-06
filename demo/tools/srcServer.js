import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config.dev';

/* eslint-disable no-console*/
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        chunks: false,
        colors: true,
    },
}).listen(3000, 'localhost', (err) => {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3000');
});
