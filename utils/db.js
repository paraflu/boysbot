

var pg = require('pg');

var connectionString = "pg://etrpblywcdfeoj:VVNzPzXW_g8SXQRsn6_oY9X_Va@ec2-54-225-215-233.compute-1.amazonaws.com:5432/d8adsn2btjot7s?ssl=true"
pg.connect(connectionString, function(err, client, done) {
      client.query('SELECT name FROM users WHERE email = $1', ['brian@example.com'], function(err, result) {
        assert.equal('brianc', result.rows[0].name);
        done();  // client idles for 30 seconds before closing
      });
  });

