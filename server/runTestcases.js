const async=require('async');
const htmlhint =process.argv[0];
const eslint =process.argv[1];
const mocha =process.argv[2];
const istanbul =process.argv[3];
const reponame=process.argv[4];
const repobranch=process.argv[5];
const owner=process.argv[6];
const mochaTest=require('./services/mochaTest');
const eslintTest=require('./services/eslintTest');
const htmlhintTest=require('./services/htmlhintTest');
const istanbulTest=require('./services/istanbulTest');
async.parallel([
  mochaTest.bind(null,mocha),
  htmlhintTest.bind(null,htmlhint),
  eslintTest.bind(null,eslint),
  istanbulTest.bind(null,istanbul)
  ],(err, results) => {
      if(err) { console.error('error', err); return; }
      if(results) {console.log('tested Successfully',results)};

}

  );
