const webpack = require('webpack');

const env = process.env.NODE_ENV;

const reactExternal = {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react',
};

const config = {
    externals: {
        react: reactExternal,
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
        ],
    },
    output: {
        library: 'moro-components',
        libraryTarget: 'umd',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env),
        }),
    ],
};

if (env === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compressor: {
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            warnings: false,
        },
    }));
    config.plugins.push(new webpack.optimize.DedupePlugin());
}

module.exports = config;
