const calculatorMatchers = {
  toBeBetween: () => {
    return {
      compare: (actual, x, y) => {
        const result = {
          pass: actual >= x && actual <= y,
          message: ''
        }
        if(result.pass){
          result.message = `Expected ${actual} not to be between ${x} and ${y}`;
        }else {
          result.message = `Expected ${actual} to be between ${x} and ${y}`;
        }
        return result;
      }
    }
  }
}