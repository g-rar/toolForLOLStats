import User from '../../models/User'
import Authenticator from './Authenticator.service'

export default class FirebaseAuthenticator implements Authenticator{
    authenticate(username: string, password: string): User {
        throw new Error("Method not implemented.");
    }   
}