const db = require('../database/dbConfig');

module.exports = {
  getAll,
  add,
  findBy,
  findById,
};

function getAll() {
  return db('users');
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then((ids) => {
      const id = ids[0];

      return findById(id);
    })
    .catch((err) => {
      console.log(err);
    });
}

function findBy(filter) {
  return db('users').where(filter);
}

function findById(id) {
  return db('users').where({ id }).first();
}
