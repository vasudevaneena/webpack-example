const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
    entry:'./src/index.js',
    output:{
        path: path.join(__dirname,'/dist'),
        filename:'index_bundle.js'

    },
    module:{
        rules:[
            {
            test:/\.js$/,
            include: [
                path.resolve(__dirname, "src")
              ],
              use: {
                loader: 'babel-loader'
              },
             
            exclude: /node_modules/,
            // use: {
            //     loader:'babel_loader'
            // }
            },

            {
                      test: /\.module\.s(a|c)ss$/,
                       loader: [
                          'style-loader' ,
                         {
                           loader: 'css-loader',
                           options: {
                              modules: true,
                              sourceMap: isDevelopment
                            }
                          },
                         {
                            loader: 'sass-loader',
                            options: {
                              sourceMap: isDevelopment
                            }
                          }
                        ]
                      },
                      {
                        test: /\.s(a|c)ss$/,
                        exclude: /\.module.(s(a|c)ss)$/,
                        loader: [
                          'style-loader',
                          'css-loader',
                          {
                            loader: 'sass-loader',
                            options: {
                              sourceMap: isDevelopment
                            }
                          }
                        ]
                     },
                     {
                      // Now we apply rule for images
                      test: /\.(png|jpe?g|gif|svg)$/,
                      use: [
                             {
                               // Using file-loader for these files
                               loader: "file-loader",
                
                               // In options we can set different things like format
                               // and directory to save
                               options: {
                                 outputPath: 'images'
                               }
                             }
                           ]
                    }
        ]
    },
    resolve: {       
            extensions: ['.js', '.jsx', '.scss']
          },
    plugins:[
        new HtmlWebpackPlugin (
            {
                template: './src/index.html'
            }
        )
    ]
}