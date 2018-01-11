const nock = require('nock');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
const chalk = require('chalk');

chai.use(sinonChai);

const Converter = require('../src/converter');

describe('Converter', () => {

  let consoleStub;

  const reponseMock = {
    "time": "2018-01-10 21:58:31",
    "price": 14514.68,
    "success": true
  };

  beforeEach(() =>{
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach( () => {
    console.log.restore();
  });


  it('should return USD (currency) and 1 (amount) as default options', (done) => {

    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'USD', amount: 1 })
      .reply(200, reponseMock);

    Converter();

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith(`${chalk.red('1')} Bitcoin to ${chalk.cyan('USD')} = ${chalk.yellow('14514.68')}`);
      done();
    }, 300)

  });


  it('should return BRL (currency) and default amount 1 as options', (done) => {

    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'BRL', amount: 1 })
      .reply(200, reponseMock);

    Converter('BRL', 1);

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith(`${chalk.red('1')} Bitcoin to ${chalk.cyan('BRL')} = ${chalk.yellow('14514.68')}`);
      done();
    }, 300)

  });


  it('should return BRL (currency) and 10 (amount) as options', (done) => {

    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'BRL', amount: 10 })
      .reply(200, reponseMock);

    Converter('BRL', 10);

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith(`${chalk.red('10')} Bitcoin to ${chalk.cyan('BRL')} = ${chalk.yellow('14514.68')}`);
      done();
    }, 300)

  });


  it('should return an error to the user if something went wrong', (done) => {

    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'BRL', amount: 10 })
      .replyWithError('Error');

    Converter('BRL', 10);

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith(chalk.red('Something went wrong in the API. Please try again in a few minutes.'));
      done();
    }, 300)

  });

});