/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    // required for UUID
    pgm.createExtension(['uuid-ossp', 'pgcrypto']);
};

exports.down = (pgm) => {
    pgm.dropExtension(['uuid-ossp', 'pgcrypto']);
};
