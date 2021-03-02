// function add(first: number, second: number): number {
//   return first + second;
// }

// function sayHello(): void {
//   console.log('hello');
// }

// function errorEmitter(): never {
//   while(true) {}
// }

function add({ first, second }: { first: number; second: number }): number {
  return first + second;
}

function getNumber({ first }: { first: number }) {
    console.log(first,"first")
  return first;
}

const total1 = add({ first: 1, second: 2 });
const count1 = getNumber({first:2});
