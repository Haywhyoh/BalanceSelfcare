import * as migration_20261005_133213_initial from './20261005_133213_initial';
import * as migration_20261005_134501_add_author_name from './20261005_134501_add_author_name';

export const migrations = [
  {
    up: migration_20261005_133213_initial.up,
    down: migration_20261005_133213_initial.down,
    name: '20261005_133213_initial',
  },
  {
    up: migration_20261005_134501_add_author_name.up,
    down: migration_20261005_134501_add_author_name.down,
    name: '20261005_134501_add_author_name'
  },
];
