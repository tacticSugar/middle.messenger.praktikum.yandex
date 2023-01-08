import { authApi, ISingIn, ISingUp } from '../api/auth-api'
import { MyRouter, routs } from '../index'
import { store } from '../utils/core/Store'
import { chatsController } from './chats-controller'

class AuthController {
  public async signIn(data: ISingIn) {
    return authApi
      .signIn(data)
      .then(() => {
        authApi.userInfo().then(async (data) => {
          await store.setState('user', data.response)
          await chatsController.getAllChats().then(async (data) => {
            await store.setState('chats', data.response)
          })
          MyRouter.go(routs.chatsPage)
        })
      })
      .catch(() => {
        // authApi.logOut();
        MyRouter.go(routs.errorPage)
      })
  }

  public singUp(data: ISingUp) {
    return authApi
      .singUp(data)
      .then(() => {
        authApi.userInfo().then(async (data) => {
          await store.setState('user', data.response)
          await store.setState('currentChat', false)
          await chatsController.getAllChats().then(async (data) => {
            await store.setState('chats', data.response)
          })
          MyRouter.go(routs.chatsPage)
        })
      })
      .catch(() => {
        MyRouter.go(routs.errorPage)
      })
  }

  public singOut() {
    authApi.logOut().then(() => {
      store.setState('user', undefined)
      // store.setState("chats", undefined);
      store.setState('currentChat', false)
      MyRouter.go(routs.signInPage)
    })
  }

  public checkUser() {
    return authApi
      .userInfo()
      .then((user) => {
        store.setState('currentUser', user)
      })
      .catch(() => {
        MyRouter.go(routs.errorPage)
      })
  }

  public isLogin() {
    return authApi.userInfo()
  }
}

const authController = new AuthController()
export { authController }
