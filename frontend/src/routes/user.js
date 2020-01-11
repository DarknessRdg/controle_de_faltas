import redirect from './redirect'


const userToken = '@user/token'
const userId = '@user/id'


function isAuthenticated() {
    const token = localStorage.getItem(userToken) ? true : false
    const id = localStorage.getItem(userId) ? true : false

    return token && id
}


function logout() {
    localStorage.removeItem(userToken)
    localStorage.removeItem(userId)
    
    redirect('/')
}


function getToken() {
    return localStorage.getItem(userToken)
}


function getId() {
    return localStorage.getItem(userId)
}


function getAtuhorizationHeader() {
    return  {'Authorization': `Bearer ${getToken()}`}
}


export default {isAuthenticated, logout, getToken, getId, getAtuhorizationHeader}
