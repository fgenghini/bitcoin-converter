const request = require('request');
const ora = require('ora');
const chalk = require('chalk');

const spinner = ora({
  text: 'Retrieving Bitcoin data...',
  color: 'yellow',
});

function Converter(currency = 'USD', amount = 1) {
  const apiUrl = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  spinner.start();

  request(apiUrl, (error, response, body) => {
    let apiResponse;
    spinner.stop();

    try {
      apiResponse = JSON.parse(body);
    } catch (parseError) {
      console.log(chalk.red('Something went wrong in the API. Please try again in a few minutes.'));
      return parseError;
    }

    console.log(`${chalk.red(amount)} Bitcoin to ${chalk.cyan(currency)} = ${chalk.yellow(apiResponse.price)}`);
  });
}

module.exports = Converter;
