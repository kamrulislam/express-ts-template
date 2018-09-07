const R = require('ramda');
const program = require('commander');
program
  .version('1.0.0')
  .option('-c, --container-name', 'The name of docker container')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (R.isNil(program.containerName)) {
  throw new Error('You must provide a container name to find the ip host address');
}

const shell = require('shelljs');
const ip = shell.exec(`docker exec ${program.containerName} /sbin/ip route|awk '/default/ { print $3 }'`, {silent:true}).stdout;

if (R.isNil(ip)) {
  throw new Error(`Unable to find the ip address of ${program.containerName}`);
}

shell.echo(ip);
