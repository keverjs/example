import { Model } from "@kever/ioc"

// type Getter<T extends object> = {
//   [K in keyof T & string as `get${Capitalize<K>}`]: () => T[K]
// }

// type Setter<T extends object> = {
//   [K in keyof T & string as `set${Capitalize<K>}`]: (value: T[K]) => void
// }


// type GS<T extends object> = Getter<T> & Setter<T>


// const map = new Map<string, Function>()

// type Instance = new (args?: any) => any

// function Model (tag: string): ClassDecorator  {
//   return (constructor) => {
//     map.set(tag, constructor)
//     return constructor
//   }
// }

// Model.use = <T extends object>(tag: string): GS<T> => {
//   const model = map.get(tag)
//   const instance = new (model as unknown as Instance)()
//   const proxy = new Proxy(instance, {
//     get(target, property: string, receiver) {
//       const prefix = property.slice(0, 3)
//       const key = property.slice(3).replace(/([A-Z])/, (match) => match.toLowerCase())
//       return (value: unknown) => {
//         console.log('taget', target)
//         if (prefix === 'get') {
//           return Reflect.get(target, key, receiver)
//         }
//         if (prefix === 'set') {
//           Reflect.set(target, key, value, receiver)
//         }
//       }
//     }
//   })
  
//   return proxy as unknown as GS<T>
// }


@Model('model')
export class UserModel  {
  public name: string
  public age: number
  public helloWorld: string
}



// const model = Model.use<UserModel>('model')
// const model1 = Model.use<UserModel>('model')
// model.setName('df')
// console.log('123', model.getName())
// console.log('222', model1.getName())