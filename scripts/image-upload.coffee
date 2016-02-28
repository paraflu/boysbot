var pg = require('pg');

module.exports = (robot) ->

  robot.respond /add image/i, (res) ->
    robot.say "indica la parola da associare:"

    robot.hear /^.*/, (res) ->


  upload_file = (key, file) ->

    pg.connect(process.env.DATABASE_URL, function(err, client) {
      if (err) throw err;

      fs.readFile(file,  function(err, imgData) {
        client.query('insert into image_ref (key, image_base64) values ($1, $2)',
           [key, new Buffer(imgData).toString('base64')],
            function(err, writeResult) {
              console.log('err',err,'pg writeResult',writeResult);
            });
      });
    });
