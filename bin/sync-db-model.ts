import * as dotenv from 'dotenv';
const {exec} = require('child_process');

dotenv.config();
const envPath = process.env.NODE_ENV === 'production' ?
  './environments/prod.env' : './environments/dev.env';
dotenv.config({path: envPath});

exec(`node ${__dirname}/../node_modules/typeorm-model-generator/bin/typeorm-model-generator
      -h 127.0.0.1
      -p 5432
      -u pls
      -x pls_rules
      -d pls_dev
      -e postgres --noConfig --ce pascal -o ${__dirname}/../src/models`.replace(/\n/g, ''), (err, stdout, stderr) => {
  console.log(stdout);
  console.error(stderr);
});
