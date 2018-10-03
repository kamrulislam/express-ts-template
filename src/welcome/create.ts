import {createLog} from '../logs/logging';
import {default as connection} from '../database/Connection';
import {UNIQUE_INDEX_CONSTRAINTS} from '../database/error-codes';
import { snakeCase } from '../snakeCase';
import { conflict } from 'boom';
import R = require('ramda');

const {prop, equals} = R;

const log = createLog(__filename);

export interface Details {
  name: string;
}

const create = async (toCreate: Details): Promise<Details> => {
  const db = connection.getDb();
  const tableName = 'yourTable';
  const query = connection.pgpHelper().insert(snakeCase(toCreate), null, tableName) + ' returning id';
  log.debug('create query: %s', query);

  try {
    const created = await db.one(query);
    return toCreate;
    // return findById(created.id);
  } catch (error) {
    log.error('create  error: %j, %s, params: %s ', error, error, toCreate);
    switch (prop('code', error)) {
      case UNIQUE_INDEX_CONSTRAINTS: {
        const msg = `Already exists in ${tableName}. Nothing modified`;
        await Promise.reject(conflict(msg));
      }
      default:
        await Promise.reject(error);
    }
  }
};

export {create};
