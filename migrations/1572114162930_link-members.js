/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {

    // community members

    pgm.createTable('event_users', {
        event_id: { type: 'uuid', notNull: true, references: '"events"' },
        user_id: { type: 'uuid', notNull: true, references: '"users"' },
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        disabled_at: { type: 'timestamp', notNull: false },
    });

    pgm.createIndex('event_users', 'event_id');
    pgm.createIndex('event_users', 'user_id');

    // Event members

    pgm.createTable('community_users', {
        community_id: { type: 'uuid', notNull: true, references: '"communities"' },
        user_id: { type: 'uuid', notNull: true, references: '"users"' },
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        disabled_at: { type: 'timestamp', notNull: false },
    });

    pgm.createIndex('community_users', 'community_id');
    pgm.createIndex('community_users', 'user_id');

};

exports.down = (pgm) => {
    pgm.dropTable('event_users');
    pgm.dropTable('community_users');
};
