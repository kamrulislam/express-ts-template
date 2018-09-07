const R = require('ramda');
const {isNil, isEmpty, either} = R;
const isNilOrEmpty = either(isNil, isEmpty);
const program = require('commander');
program
  .version('1.0.0')
  .option('-c, --container-name [containerName]', 'The name of docker container')
  .parse(process.argv);

console.log('host-ip containerName: %s', program.containerName);

if (R.isNil(program.containerName)) {
  throw new Error('You must provide a container name to find the ip host address');
}

const shell = require('shelljs');

const ip = shell.exec(`docker exec ${program.containerName} /sbin/ip route|awk '/default/ { print $3 }'`, {silent:true}).stdout;

console.log('host-ip ip: %s', ip);

if (isNilOrEmpty(ip)) {
  throw new Error(`Unable to find the ip address of ${program.containerName}`);
}

shell.echo(ip);
