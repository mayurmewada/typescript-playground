let age: number = 20;

// any type

const render = (parameters: any) => {
    console.log(parameters);
};

const funtionCheckOddEven = (num: number): boolean => {
    return num % 2 === 0;
};

console.log(funtionCheckOddEven(2));
console.log(funtionCheckOddEven(3));
