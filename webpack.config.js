const path = require('path') // nativo de Node.js

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // igual _dirname
        publicPath: 'dist' // habilita el hot reloading
    },
    // para que webpack use los .map que genera el comando tsc de typescript
    // y a su vez, para habilitar el debuging en el navegador desde los
    // archivos originales
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};