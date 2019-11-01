/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {

    pgm.createTable('categories', {
        id: { primaryKey: true, type: 'varchar(255)', notNull: true, unique: true },
        picture_url: { type: 'varchar(500)', notNull: true, default: 'https://github.com/dlacreme/pls-assets/category/default.png' },
    });

    pgm.addColumn('categories', {
        parent_id: { type: 'varchar(255)', notNull: false, references: '"categories"' }
    });

    pgm.createTable('i18n_categories', {
        id: { type: 'varchar(255)', notNull: true, references: '"categories"' },
        language_id: { type: 'varchar(3)', notNull: true, default: 'en', references: '"languages"' },
        label: { type: 'varchar(500)', notNull: true }
    });

};

exports.down = (pgm) => {
    pgm.dropTable('i18n_categories');
    pgm.dropTable('categories');
};
