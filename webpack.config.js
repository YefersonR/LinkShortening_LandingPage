const path = require('path')
const  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(js||jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                {
                                    runtime:'automatic'
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [

                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ],
            },
            {
                type: "asset",
                test:/\.(png|svg|jpg|jpeg|gif|ico)$/i,
            }
        ]
    },
    resolve:{
        extensions: ['.js','.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'src/index.html'
        })
    ],
    devServer:{
        open:true,
        port:3000
    }

}