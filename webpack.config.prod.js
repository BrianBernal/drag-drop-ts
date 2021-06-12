const path = require('path'); // nativo de Node.js
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // igual _dirname
    },
    // para que webpack use los .map que genera el comando tsc de typescript
    // y a su vez, para habilitar el debuging en el navegador desde los
    // archivos originales
    devtool: 'none', // DIFERENTE EN DEV (webpack.config.js)
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
    },
    plugins: [
        // antes de generar el bundle, limpie todo lo referente al output
        new CleanPlugin.CleanWebpackPlugin()
    ]
};