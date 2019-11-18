
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('vin', 128).unique();
      tbl.string('make', 128);
      tbl.string('model', 128);
      tbl.decimal('milage');
      tbl.string('transmission', 128);
      tbl.string('title', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.droptblIfExists('car-dealer');
};
