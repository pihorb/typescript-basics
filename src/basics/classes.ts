class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`
  }
}

// two classes below are the same

class Car {
  readonly model: string
  readonly numberOfwheels: number = 4
  constructor(theModel: string) {
    this.model = theModel
  }
}

class Car2 {
  readonly numberOfwheels: number = 4
  constructor(readonly model: string) {}
}

//============

class Animal {
  protected voice: string = ''
  public color: string = 'black'
  private go() {
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat =  new Cat()

//========
