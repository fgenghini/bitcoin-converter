#!/usr/bin/env node

const pkg = require('../package.json');

const program = require('commander');

const Converter = require('./converter');

program.version(pkg.version)
  .description('Converts Bitcoin to any currency.')
  .option('-C, --currency <currency>', 'The currency to be converted to. Default USD.')
  .option('-A, --amount <amount>', 'Value in Bitcoin to convert. Default 1.')
  .parse(process.argv);

Converter(program.currency, program.amount);
