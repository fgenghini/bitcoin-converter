const expect = require('chai').expect;
const exec = require('child_process').exec;

const bitcoinConverter = './src/main.js';

const pkg = require('../package.json');

describe('Main CLI', () => {

  it('should return version', (done) => {
    exec(`${bitcoinConverter} --version`, (err, stdout, stderr) => {
      if (err) {
        throw err;
      }
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return currency as an option', (done) => {
    exec(`${bitcoinConverter} --help`, (err, stdout, stderr) => {
      if (err) {
        throw err;
      }
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });

  it('should return amount as an option', (done) => {
    exec(`${bitcoinConverter} --help`, (err, stdout, stderr) => {
      if (err) {
        throw err;
      }
      expect(stdout.includes('--amount')).to.be.true;
      done();
    });
  });

});

