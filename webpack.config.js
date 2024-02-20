const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './client/Index.tsx', // tells webpack which file to start building its dependency tree from
    output: {
        path: path.resolve(__dirname, 'dist'), // tells webpack to output the bundle into a folder called dist, in the current directory
            filename: 'bundle.js' // call our output file bundle.js
    },
    devServer: {
        proxy: [
            {
              context: ['/'],
              target: 'http://localhost:3000',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './client/static/index.html',
        }),
      ],
    module: {
        rules: [ // define a bunch of rules for transpiling our code
            {
                test: /\.(ts|tsx)$/i, // if any file ends in ts or tsx
                loader: 'ts-loader', // use the ts-loader
                exclude: ['/node_modules/'], // dont apply this to anything in the node modules folder
            },
            {
                test: /\.css$/i, // if any file ends in css
                use: ['style-loader', 'css-loader'], // use the style loader and css loader
                exclude: ['/node_modules/'], // dont apply this to anything in the node modules folder
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.css'], // this will resolve extension on imports in our project
    },
}

// export our config
module.exports = () => {
    return config;
  };
  