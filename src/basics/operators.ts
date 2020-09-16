interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name | 'age'

let key: PersonKeys = 'name'
key = 'age'
// can assign only name and age
key = 'job'

type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let u1: UserKeysNoMeta = 'name'
u1 = 'email'
// can assign only name and email
u1 = '_id'
