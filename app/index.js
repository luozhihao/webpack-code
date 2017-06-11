var $ = require('jquery');
var str = require('./hello');

require('./style');

console.log(process.env.NODE_ENV);

function main() {
    $('body').html(str);
}

main();