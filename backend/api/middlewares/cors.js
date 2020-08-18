module.exports = function (req, res, next) {
    console.log('EXÉCUTION DU MIDDLEWARE')
    req.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'GET POST PUT PATCH DELETE')

    if (req.method === 'OPTION') {
        req.header('Access-Control-Allow-Methods', 'Origin X-Request-With Content-Type Authorization')
    }
    next()
}