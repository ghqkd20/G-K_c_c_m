const spawn = require('child_process').spawn;
const path = require('path');
const uniqueFilename = require('unique-filename');
const fs = require('fs');

//TLE condition in milliseconds
const TIMEOUT = 3000;

/*
for g++
*/
function deletefile(filename, err){
    fs.access('./tmp/' + filename, function (err) {
      if (!err) {
        fs.unlink('./tmp/' + filename, function (err) {
          if (err)
            console.log(err);
        });
      } else {
        console.log(err);
      }
    });
  }

function judge(program, inputData) {
  var Rstdout = null, Rstderr = null;
  filename = uniqueFilename('.') + '.cpp';
  let promise = new Promise(function(resolve, reject) {
    fs.writeFile('./tmp/' + filename, program, function (err) {
      if (err){
        return console.log(err);
      }
      var compile = spawn('gcc',['./tmp/' + filename, '-o', './tmp/'+filename +'.out']);
      compile.stdout.on('data', function (data) {
        Rstdout = data;
      });
      compile.stderr.on('data', function (data) {
        Rstderr = String(data);
        if (!(Rstderr.length === 0))
          resolve([Rstdout, Rstderr]);
      });
      compile.on('close', function (data) {
        fs.access('./tmp/' + filename, function (err) {
          if (!err) {
            fs.unlink('./tmp/' + filename, function (err) {
              if (err)
                console.log(err);
            });
          } else {
            console.log(err);
          }
        });
        if (data === 0) {
          var run = spawn('./' + 'tmp/' + filename + '.out', []);
          run.stdin.write(inputData + '\n');
          
          //TLE
          var ok = setTimeout(
            function () {
              deletefile(filename+'.out',err);
              reject('TLE');
              run.kill()
            },
            TIMEOUT
          );

          run.stdout.on('data', function (data) {
            Rstdout = String(data);
            if (!(Rstdout.length === 0)) {
              deletefile(filename+'.out',err);
              resolve([Rstdout, Rstderr]);
              clearTimeout(ok);
            }
          });
          
        }
      });
    });
  });

  return promise
    .then(function(data) {
      return data;
    })
    .catch(function(data) {
      return data;
    });
}

module.exports = { judge };