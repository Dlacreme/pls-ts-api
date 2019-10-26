/* eslint-disable camelcase */

exports.shorthands = undefined;



exports.up = (pgm) => {

    pgm.createTable('user_roles', {
        id: { primaryKey: true, type: 'varchar(55)', notNull: true, unique: true },
    });

    pgm.createTable('profiles', {
        id: { primaryKey: true, type: 'uuid', notNull: true, unique: true, default: pgm.func('uuid_generate_v4()') },
        email: { type: 'varchar(500)' },
        name: { type: 'varchar(500)' },
        first_name: { type: 'varchar(500)' },
        last_name: { type: 'varchar(500)' },
        phone_number: { type: 'varchar(20)' },
        last_name: { type: 'varchar(500)' },
        picture_url: { type: 'varchar(500)' },
        birthdate: { type: 'date' },
        about: { type: 'text' },
        updated_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') }
    });

    pgm.createTable('users', {
        id: { primaryKey: true, type: 'uuid', notNull: true, unique: true, default: pgm.func('uuid_generate_v4()') },
        email: { type: 'varchar(500)', notNull: true, unique: true },
        password: { type: 'varchar(500)', notNull: false },
        provider_type: { type: 'varchar(55)', notFull: false },
        provider_id: { type: 'varchar(500)', notNull: false },
        role_id: { type: 'varchar(55)', notNull: true, default: 'user', references: '"user_roles"' },
        profile_id: { type: 'uuid', notNull: true, references: '"profiles"' },
        language_id: { type: 'varchar(3)', notNull: true, default: 'en', references: '"languages"' },
        created_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        updated_at: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') },
        disabled_at: { type: 'timestamp', notNull: false }
    });

    pgm.addColumn('addresses', {
        created_by: { type: 'uuid', notNull: true, references: '"users"' },
    });

};

exports.down = (pgm) => {
    pgm.dropTable('user_roles');
    pgm.dropTable('profiles');
    pgm.dropTable('users');
};
