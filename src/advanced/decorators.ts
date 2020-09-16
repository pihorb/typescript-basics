// function Log(constructor: Function) {
//   console.log(constructor)
// }

// function Log2(target: any, propName: string | Symbol) {
//   console.log(target)
//   console.log(propName)
// }

// function Log3(target: any, propName: string | Symbol, descriptor: TypedPropertyDescriptor<any>) {
//   console.log(target)
//   console.log(propName)
//   console.log(descriptor)
//   return descriptor
// }

interface ComponentDecorator {
  selector: string
  template: string
}

function Component(config: ComponentDecorator) {
  return function <T extends { new (...args: any[]): object }>(Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args)
        const el = document.querySelector(config.selector)!
        el.innerHTML = config.template
      }
    }
  }
}

function Bind(
  _: any,
  _2: any,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const original = descriptor.value

  return {
    configurable: true,
    enumerable: false,
    get() {
      return original.bind(this)
    },
  }
}

@Component({
  selector: '#card',
  template: `
    <div class="card">
      <div class="card-content">
        <span class="card-title">Card Component</span>
      </div>
    </div>
  `,
})
class CardComponent {
  constructor(public name: string) {}

  @Bind
  logName(): void {
    console.log(`Component name ${this.name}`)
  }
}

const card = new CardComponent('Card Component')

const btn = document.querySelector('#btn')!

btn.addEventListener('click', card.logName)

// =================

type ValidatorType = 'required | email'

interface ValidatorConfig {
  [prop: string]: {
    [validateProp: string]: ValidatorType
  }
}

const validators: ValidatorConfig = {}

function Required(target: any, propName: string) {
  validators[target.constructor.name] = {
    ...validators[target.constructor.name],
    [propName]: 'required | email'
  }
}

function validate(obj: any): boolean {
  const objConfig = validators[obj.constructor.name]
  let isValid = true
  if(!objConfig) return true
  Object.keys(objConfig).forEach(key => {
    if(objConfig[key] === 'required') {
      isValid = isValid && !!objConfig[key]
    }
  })
  return isValid
}

class Form {
  @Required
  public email: string | void

  constructor(email?: string) {
    this.email = email
  }
}

const form = new Form()

if(validate(form)) {
  console.log('Valid', form)
} else {
  console.log('Invalid')
}
