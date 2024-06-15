const fs = require('fs');
const chalk = require('chalk');

global.numerodono = "917466008456";
global.nomedono = ":Tech God sir: YouTube name -  Tech God";
global.prefixo = ".";
global.packnome = "Done por:\ncriador:\ncanal:";
global.author = "Tech God\n917466008456\nyoutube.com/@techgod143";
global.autoGravar = false;
global.autoDigitar = false;
global.autoreDigitarGravar = true;
global.autoVisualizarMsg = false;
global.autobio = true;
global.autovisualizar_status = true;
global.antilink_grupo = false;


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`configurar.js foi atualizado!`))
    delete require.cache[file]
    require(file)
})