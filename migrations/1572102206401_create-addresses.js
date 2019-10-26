/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {

    pgm.createTable('languages', {
        id: { primaryKey: true, type: 'varchar(3)', notNull: true, unique: true },
    });

    pgm.createTable('countries', {
        id: { primaryKey: true, type: 'varchar(3)', notNull: true, unique: true },
        language_id: { type: 'varchar(3)', notNull: true, default: 'en', references: '"languages"' }
    });

    pgm.createTable('i18n_countries', {
        id: { type: 'varchar(3)', notNull: true, unique: true, references: '"countries"' },
        language_id: { type: 'varchar(3)', notNull: true, default: 'en', references: '"languages"' },
        label: { type: 'varchar(500)', notNull: true }
    })

    pgm.createTable('cities', {
        id: { primaryKey: true, type: 'uuid', notNull: true, unique: true, default: pgm.func('uuid_generate_v4()') },
        country_id: { type: 'varchar(3)', notNull: true, references: '"countries"' }
    });

    pgm.createTable('i18n_cities', {
        id: { type: 'uuid', notNull: true, unique: true, references: '"cities"' },
        language_id: { type: 'varchar(3)', notNull: true, default: 'en', references: '"languages"' },
        label: { type: 'varchar(500)', notNull: true }
    });

    pgm.createTable('addresses', {
        id: { primaryKey: true, type: 'uuid', notNull: true, unique: true, default: pgm.func('uuid_generate_v4()') },
        label: { type: 'varchar(500)', notNull: true },
        desc: { type: 'text' },
        complement: { type: 'text' },
        complement_additional: { type: 'text' },
        city_id: { type: 'uuid', notNull: false, references: '"cities"' },
        geo: { type: 'point' },
        google_id: { type: 'varchar(255)' },
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        updated_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        disabled_at: { type: 'timestamp', notNull: false }
    });
};

exports.down = (pgm) => {
    pgm.dropTable('languages');
    pgm.dropTable('countries');
    pgm.dropTable('i18n_countries');
    pgm.dropTable('cities');
    pgm.dropTable('i18n_cities');
    pgm.dropTable('addresses');
};
