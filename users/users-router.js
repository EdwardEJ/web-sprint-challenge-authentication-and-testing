const router = require('express').Router();

const Users = require('./users-model');

router.get('/', (req, res) => {
  Users.getAll()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
