import redirect from './redirect'


const isAuthenticated = () => {
    return localStorage.getItem('@user/token') ? true : false
}


function logout() {
    localStorage.removeItem('@user/token')
    localStorage.removeItem('@user/id')
    
    redirect('/')
}


export default {isAuthenticated, logout}
