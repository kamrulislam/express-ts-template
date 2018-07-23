/**
 * Created by hxg on 12/10/17.
 */
import * as _ from "lodash";

const snakeCase = (camelCaseObject: any): any => {
    return _.mapKeys(camelCaseObject, (value, key) => _.snakeCase(key.toString()));

}

export default snakeCase ;