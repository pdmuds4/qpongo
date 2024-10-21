export default class AuthManager {
    static setToken(auth_info: string) {
        localStorage.setItem('auth_info', auth_info)
    }

    static getToken() {
        const auth_info = localStorage.getItem('auth_info')
        if (auth_info) {
            return auth_info
        } else {
            navigateTo('/login');
        }
    }
}