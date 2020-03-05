// Requerimos el modulo de path y el html-webpack-plugin que instalamos
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// Creamos un modulo que vamos a exportar con la siguiente configuración
module.exports = {
    entry: "./src/index.js", // Iniciamos por la entrada del proyecto
    output: { // Definimos donde vamos a guardar los archivos resultantes después de hacer el build
        // __dirname hace referencia al directorio actual y dist es una nueva carpeta que crearemos
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js" // El nombre del archivo resultante.
    },
    resolve: {
        // Resuelve las extensiones que vamos a utilizar
        extensions: [".js", ".jsx"]
    },
    // Modulo de reglas necesarias
    module: {
        rules: [
            {
                // Expresión regular para todos los archivos .js o .jsx
                test: /\.(js|jsx)$/,
                // Excluimos los de la carpeta /node_modules/
                exclude: /node_modules/,
                // Usamos el babel-loader que habiamos instalado.
                use: {
                    loader: "babel-loader"
                }
            },
            {
                // Igual que el anterio pero con html
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/[hash].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    // Se añaden los plugins que usaremos
    plugins: [
        // Creamos una nueva instancia del plugin importado
        new HtmlWebPackPlugin({
            // Ubicación del template que usaremos
            template: "./public/index.html",
            // El nombre que va a tener
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "assets/[name].css"
        })
    ]
}