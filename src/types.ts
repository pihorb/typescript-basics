const isFetching: boolean = true
const isLoading: boolean = false

let int: number = 42
//int = '' not gonna work

const float: number = 4.2
const num: number = 3e9

const message: string = 'Hello TS'

// below 2 are equivalent
const numArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['JS', 'TS']

// Tuple
const contact: [string, number] = ['Ihor', 1991]

//Any
let variable: any = 42
variable = 'New string'

function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('Haizenberg')

// Never

function throwError(msg: string): never {
  throw new Error(msg)
}

function infinite(): never {
  while(true) {}
}

// Type

type Login = string

const login: Login = 'admin'

type ID = string | number

const id1: ID = 1234
const id2: ID = '1234'