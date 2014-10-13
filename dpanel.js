var program = require('commander');
var dpanel = require('./lib/dpanel.js');



program.version('0.0.1');

program.command('init')
    .description('initialize dpanel images')
    .action( function(){
        dpanel.init();
    });

program.command('start <domain>')
    .description('start a vhost with image')
    .option('-i, --image [image]','Specify [image] to create container with', 'wordpress')
    .action( function(domain,options){
        switch(options.image){
            case 'wordpress':
                image = 'oskarhane/docker-wordpress-nginx-ssh';
                break;
        }
        dpanel.start(domain,image);
    });

program.parse(process.argv);

if(process.argv.length == 2){
    program.help();
}