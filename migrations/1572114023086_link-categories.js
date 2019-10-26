/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {

    // event categories
    pgm.createTable('event_categories', {
        event_id: { type: 'uuid', notNull: true, references: '"events"' },
        category_id: { type: 'varchar(255)', notNull: true, references: '"categories"' },
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    });

    pgm.createIndex('event_categories', 'event_id');
    pgm.createIndex('event_categories', 'category_id');

    // community categories
    pgm.createTable('community_categories', {
        community_id: { type: 'uuid', notNull: true, references: '"communities"' },
        category_id: { type: 'varchar(255)', notNull: true, references: '"categories"' },
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
    });

    pgm.createIndex('community_categories', 'community_id');
    pgm.createIndex('community_categories', 'category_id');

    // user favorite categories
    pgm.createTable('user_categories', {
        user_id: { type: 'uuid', notNull: true, references: '"users"' },
        category_id: { type: 'varchar(255)', notNull: true, references: '"categories"' },
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        disabled_at: { type: 'timestamp', notNull: false },
    });

    pgm.createIndex('user_categories', 'user_id');
    pgm.createIndex('user_categories', 'category_id');

};

exports.down = (pgm) => {
    pgm.dropTable('event_categories');
    pgm.dropTable('community_categories');
    pgm.dropTable('user_categories');
};
