enum Memership {
  Simple,
  Standart,
  Premium
}

const membership = Memership.Standart
// console.log(membership) 1

const membershipReverse = Memership[2]
// console.log(membershipReverse) Premium

enum SocialMedia {
  vk = 'VK',
  facebokk = 'FACEBOOK',
  instagram = 'INSTAGRAM'
}

const social = SocialMedia.instagram
// console.log(social) INSTAGRAM
