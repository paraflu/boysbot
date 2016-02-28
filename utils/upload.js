

var argv = require('yargs').argv
  .demand(['k', 'f')
  .alias('k','key')
  .alias('f', 'image')
var pg = require('pg');

pg.connect(process.env.DATABASE_URL + '?ssl=true', function(err, client) {
  if (err) throw err;

  console.log('Connected to postgres! Getting schemas...');

  fs.readFile(argv.file,  function(err, imgData) {
          console.log('imgData',imgData);
          client.query('insert into image_ref (key, image) values ($1, $2)',
                 [argv.key, imgData],
            function(err, writeResult) {
              console.log('err',err,'pg writeResult',writeResult);
            });
          });

});

/*
create table image_ref (
id int auto increment primary key,
key varchar
,
image_base64 varchar);
*/
