// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
};