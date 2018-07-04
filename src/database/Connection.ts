/**
 * Created by hxg on 9/10/17.
 * converted to TS by kis on 3/7/18
 */
import {default as log} from '../logs/Log';
const pgp = require('pg-promise')();

class Connection {
  private static db: any;

  public static init(){
    if(!!this.db) {
      log.info('DbConnection.init db already inited..')
      return;
    }

    // const CERT_FILE_PATH = `${__dirname}/../../rds-combined-ca-bundle.pem`;
    // log.info('DbConnection.init CERT_FILE_PATH: %s', CERT_FILE_PATH);
    log.info('DbConnection.init POSTGRES_SSL: %s', process.env.POSTGRES_SSL);

    const CON = {
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DATABASE,
      user:  process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      ssl: process.env.POSTGRES_SSL,
    }

    this.db = pgp(`postgres://${CON.user}:${CON.password}@${CON.host}:${CON.port}/${CON.database}?ssl=${CON.ssl}`);

    log.info('DbConnection.init created db with CON: %s, process.env.NODE_ENV: %s', CON, process.env.NODE_ENV);
  }

  public static getDb(){
    log.debug('DbConnection.db');

    if(!this.db) {
      this.init();
    }

    return this.db;
  }

  public static pgpHelper(){
    return pgp.helpers;
  }
}

export default Connection;

