const shell = require('shelljs');
const ip = shell.exec(`docker exec wras_api_1 /sbin/ip route|awk '/default/ { print $3 }'`, {silent:true}).stdout;
shell.echo(ip);
