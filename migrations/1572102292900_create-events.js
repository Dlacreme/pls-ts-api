/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {

    pgm.createTable('events', {
        id: { primaryKey: true, type: 'uuid', notNull: true, unique: true, default: pgm.func('uuid_generate_v4()') },
        label: { type: 'varchar(500)', notNull: true },
        desc: { type: 'text' },
        privacy_id: { type: 'varchar(55)', notNull: true, default: 'public', references: '"privacies"' },
        address_id: { type: 'uuid', notNull: true, references: '"addresses"' },
        min_members: { type: 'smallint', notNull: false },
        max_member: { type: 'smallint', notNull: false },
        start_at: { type: 'timestamp', notNull: true },
        end_at: { type: 'timestamp', notNull: false },
        channel_id: { type: 'uuid', notNull: true, references: '"channels"' },
        community_id: { type: 'uuid', notNull: false, references: '"communities"' },
        created_by: { type: 'uuid', notNull: true, references: '"users"' },
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        updated_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        disabled_at: { type: 'timestamp', notNull: false },
    });

};

exports.down = (pgm) => {
    pgm.dropTable('events');
};
