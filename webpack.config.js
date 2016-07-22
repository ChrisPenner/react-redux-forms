webpack = require('webpack');

module.exports = {
    entry  : './main',
    output : {
        path     : __dirname,
        filename : './dist/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module : {
        loaders: [ {
                test   : /.jsx?$/,
                loader : 'babel-loader'
            }
        ]
    }
};
