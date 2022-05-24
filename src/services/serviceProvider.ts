import AuthenticationService from './authenticationService'
import RadioService from './radioService'

class ServiceProvider {
  private authentication: AuthenticationService
  get Authentication(): AuthenticationService {
    if (!this.authentication) {
      this.authentication = new AuthenticationService()
    }
    return this.authentication
  }

  private radio: RadioService
  get Radio(): RadioService {
    if (!this.radio) {
      this.radio = new RadioService()
    }
    return this.radio
  }
}

export default new ServiceProvider()
