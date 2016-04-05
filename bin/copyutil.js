var path = require('path')
var fs = require('fs')

/** Copy htaccess */
fs.createReadStream(path.join(__dirname, '../', 'htaccess')).pipe(fs.createWriteStream(path.join(__dirname, '../dist', '.htaccess')))
