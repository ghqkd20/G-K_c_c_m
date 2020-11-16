const spawn = require('child_process').spawn;
const path = require('path');
const uniqueFilename = require('unique-filename');
const fs = require('fs');

//TLE condition in milliseconds
const TIMEOUT = 3000;

/*
It need g++, gcc, python
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
  filename = uniqueFilename('.') + '.py';
  let promise = new Promise(function(resolve, reject) {
    fs.writeFile('./tmp/' + filename, program, function (err) {
      if (err){
        console.log('here')
        return console.log(err);
      }
      //execute the output file
          var run = spawn('python3',['./' + 'tmp/' + filename,[]]);
          run.stdin.write(inputData + '\n');
          
          //TLE
          var ok = setTimeout(
            function () {
              deletefile(filename,err);
              console.log("?1");
              reject('TLE');
              run.kill()
            },
            TIMEOUT
          );

          run.stdout.on('data', function (data) {
            Rstdout = String(data);
            if (!(Rstdout.length === 0)) {
              deletefile(filename,err);
              console.log("?2");
              resolve([Rstdout, Rstderr]);
              clearTimeout(ok);
            }
          });
          
        
    });
  });

  return promise
    .then(function(data) {
      return data;
    })
    .catch(function(data) {
      //TODO : figure out how this can be useful.
      return data;
    });
}
module.exports = { judge };