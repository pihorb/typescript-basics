enum Memership {
  Simple,
  Standart,
  Premium
}

const membership = Memership.Standart
// console.log(membership) 1
const membershipReverse = Memership[2]
// console.log(membershipReverse) Premium