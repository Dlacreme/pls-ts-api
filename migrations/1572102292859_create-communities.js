/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {

    pgm.createTable('privacies', {
        id: { primaryKey: true, type: 'varchar(55)', notNull: true },
    })

    pgm.createTable('i18n_privacies', {
        id: { type: 'varchar(55)', notNull: true, unique: true, references: '"privacies"' },
        label: { type: 'varchar(255)' },
        desc: { type: 'text' },
    });


    pgm.createTable('communities', {
        id: { primaryKey: true, type: 'uuid', notNull: true, unique: true, default: pgm.func('uuid_generate_v4()') },
        label: { type: 'varchar(500)', notNull: true },
        desc: { type: 'text' },
        privacy_id: { type: 'varchar(55)', notNull: true, default: 'public', references: '"privacies"' },
        channel_id: { type: 'uuid', notNull: true, references: '"channels"' },
        created_by: { type: 'uuid', notNull: true, references: '"users"' },
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        updated_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        disabled_at: { type: 'timestamp', notNull: false }
    });

};

exports.down = (pgm) => {
    pgm.dropTable('privacies');
    pgm.dropTable('i18n_privacies');
    pgm.dropTable('communities');
};
