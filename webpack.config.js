module.exports = {
    entry: "./public/javascripts/entry.js",
    output: {
        path: __dirname + "/public/javascripts/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};