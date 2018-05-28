const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/all', (req, res) => {
  var queryString = `SELECT * FROM "feedback"
                     ORDER BY "feedback"."id";`;
  pool.query(queryString)
      .then(response => {
        console.log('Successful SELECT from "feedback"');
        res.send(response.rows);
      })
      .catch(error => {
        console.log('Error with SQL SELECT: ', error);
        res.sendStatus(500);
      })
});

router.post('/add', (req, res) => {
  var newFeedback = req.body;
  var queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
  pool.query(queryString, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
      .then(response => {
        console.log('Successful INSERT into "feedback"');
        res.sendStatus(201);
      })
      .catch(error => {
        console.log('Error with SQL INSERT: ', error);
        res.sendStatus(500);
      })
});

router.delete('/remove/:id', (req, res) => {
  var removeId = req.params.id;
  var queryString = `DELETE FROM "feedback"
                     WHERE "id" = $1;`;
  pool.query(queryString, [removeId])
      .then(response => {
        console.log('Successful DELETE from "feedback"');
        res.sendStatus(200);
      })
      .catch(error => {
        console.log('Error with SQL DELETE: ', error);
        res.sendStatus(500);
      })
});

module.exports = router;