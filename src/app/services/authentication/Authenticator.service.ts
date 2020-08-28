import User from '../../models/User'

export default interface Authenticator {
    authenticate(username: string, password: string): User;
}