import { expect } from 'chai';
import FizzBuzz from '../src/fizzbuzz';


describe('Main File', function () {

  it('should return `Fizz` if number is multiple of `3`', function () {
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` if number is multiple of `5`', function () {
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` if number is multiple of `3` and `5`', function () {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return number if this is not multiple of `3` and `5`', function () {
    expect(FizzBuzz(14)).to.be.equal(14);
  });

});