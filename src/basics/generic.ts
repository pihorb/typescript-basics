const arrayOfNumbers: Array<number> = [1, 2, 3, 4]
const arrayOfStrings: Array<String> = ['TS', 'JS']

function reverse<T> (arr: T[]): T[] {
  return arr.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)