import { Injectable, Inject, Model } from '@kever/ioc'
import { UserModel } from '../model'
import { TestService } from './test'

@Injectable('index')
export class IndexService {
  public testSeervice: TestService
  async getData() {
    const userModel = Model.use<UserModel>('model')
    // userModel.setAge(20)
    userModel.init({
      age: 10,
    })
    console.log('json', userModel.toJson())
    console.log('xxx', userModel.getAge())
    return {
      data: 'hello world',
      age: userModel.getAge()
    }
  }
  async getData2() {
    const userModel = Model.use<UserModel>('model')
    userModel.setAge(18)
    return {
      aage: userModel.getAge()
    }
  }
}
