const express = require('express');
const exec = require('child_process').exec;
const yaml = require('js-yaml'); 
const fs = require('fs');

const app = express();
const port = 3000;

app.use('/download', express.static('download'));

app.get('/:configName/:reason', (req, res) => {
    let configName = req.params.configName;
    let reason = req.params.reason;
    const config = yaml.safeLoad(fs.readFileSync('config-'+configName+'.yml', 'utf8'));
    let message;
    if (config) {
        console.log('npm start -s '+configName+' '+reason);
        exec('npm start -s '+configName+' '+reason, (error, stdout, stderr) => {
            if (error) {
              console.error(`exec error: ${error}`);
              return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
            message = "<html><body><div>Attestation pour "+reason+ "envoyée à :</div><ul>";
            for (let people of config.gens) {
                if (people.email) {
                    message += "<li>"+people.email+"</li>";
                }
            }
            message += "</ul></body></html>";
            res.send(message);
          }
        );
    } else {
        message = "<html><body><div>La configuration "+configName+" n'a pas été trouvée</div></body></html>";
        res.send(message);
    }
})
  
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})