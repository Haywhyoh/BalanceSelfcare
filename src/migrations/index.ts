import * as migration_20261005_133213_initial from './20261005_133213_initial';

export const migrations = [
  {
    up: migration_20261005_133213_initial.up,
    down: migration_20261005_133213_initial.down,
    name: '20261005_133213_initial'
  },
];
