const cars: string[] = ['ford', 'audi']
const cars2: Array<string> = ['ford', 'audi']

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => resolve('promise resolved'), 2000)
})

promise.then((data) => console.log(data))

function mergeObkects<T extends object, R extends object>(a: T, b: R) {
  return Object.assign({}, a, b)
}

const merged = mergeObkects({ name: 'ihor' }, { age: 29 })
const merged2 = mergeObkects({ model: 'ihor' }, { year: 2010 })
// will not work because it's expecting obj
// const merged3 = mergeObkects('aaaa', 'bbbb')
// console.log(merged3)

interface Ilength {
  length: number
}

function withCount<T extends Ilength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `Here ${value.length} !`,
  }
}

console.log(withCount('Hello TS'))
console.log(withCount(['I am array']))
//will not work
// console.log(withCount(20))

//=====
// <T extends object, R extends keyof T>
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: 'Ihor',
  age: 29,
}

console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
// will not work beacuse key `job` is not exists
// console.log(getObjectValue(person, 'job'))

//=============

class Collection<T extends number | boolean | string> {
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter((i) => i !== item)
  }

  get items(): T[] {
    return this._items
  }
}

const strings = new Collection<string>(['I', 'Am', 'Strings'])
strings.add('!')
strings.remove('Am')
console.log(strings.items)

// const objs = new Collection([{a: 1}, {b:2}])
// objs.remove({b:2})
// console.log(objs.items)

interface Car {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
   const car: Partial<Car> = {}

   if(model.length > 3) {
     car.model = model
   }

   if(year > 2000) {
     car.year = year
   }

   return car as Car
}

//=================

const models: Readonly<Array<string>> = ['Ford', 'Audi']
// models.shift()

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
}

// ford.model = 'Ferrari'