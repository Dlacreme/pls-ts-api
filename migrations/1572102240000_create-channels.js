/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {

    pgm.createTable('channels', {
        id: { primaryKey: true, type: 'uuid', notNull: true, unique: true, default: pgm.func('uuid_generate_v4()') },
        label: { type: 'varchar(500)', notNull: true },
        desc: { type: 'text' },
        created_by: { type: 'uuid', notNull: true, references: '"users"' },
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        updated_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        disabled_at: { type: 'timestamp', notNull: false }
    });

    pgm.createTable('messages', {
        id: { primaryKey: true, type: 'uuid', notNull: true, unique: true, default: pgm.func('uuid_generate_v4()') },
        content: { type: 'text', notNull: true },
        channel_id: { type: 'uuid', notNull: true, references: '"channels"' },
        created_by: { type: 'uuid', notNull: true, references: '"users"' },
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        disabled_at: { type: 'timestamp', notNull: false }
    });

};

exports.down = (pgm) => {
    pgm.dropTable('channels');
    pgm.dropTable('messages');
};
