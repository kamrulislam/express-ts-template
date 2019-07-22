/**
 * rambda vs ramda
 * rambda is simply faster than ramda.
 * So whatever the function you find in rambda use it, otherwise use ramda
 * If you list in RB then if there is no function, then typescript will complain for you.
 * https://github.com/selfrefactor/rambda#benchmark
 */
import * as R from 'ramda';
import * as RB from 'rambda';

export const {
  and,
  lensProp,
  lensPath,
  view,
  add,
  set,
  over,
} = R;

export const {
  contains,
  isNil,
  prop,
  path,
  equals,
  has,
  isEmpty,
  both,
  either,
  multiply,
  toPairs,
  type,
} = RB;

export const createLensProp = (val: string): any => {
  return lensProp(val);
};

export const toNumber = (val: string): number => {
  console.debug('toNumber: %s, %s', val, isNilOrEmpty(val));
  return isNilOrEmpty(val) ? null : +val;
};

const isStringNullOrNil = (val: string): boolean => equals('null', val) || equals('undefined', val)  || isNil(val);
export const isNilOrEmpty = either(isStringNullOrNil, isEmpty);
