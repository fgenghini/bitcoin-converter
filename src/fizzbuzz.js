const FizzBuzz = (num) => {
  let fizzBuzz = '';

  if (num % 3 === 0) {
    fizzBuzz = 'Fizz';
  }

  if (num % 5 === 0) {
    fizzBuzz += 'Buzz';
  }

  return fizzBuzz || num;
};

export default FizzBuzz;
