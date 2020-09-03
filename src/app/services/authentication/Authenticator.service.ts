import User from '../../models/User'

export default abstract class Authenticator {
    authenticate: (username: string, password: string) => User;
}