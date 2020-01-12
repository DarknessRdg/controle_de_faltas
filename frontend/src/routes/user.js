import redirect from './redirect'


const userToken = '@user/token'
const userId = '@user/id'

const adminToken = '@user-admin/token'
const adminId = '@user-admin/id'


function isAtuh(tokenStorage, idStorage) {
    const token = localStorage.getItem(tokenStorage) ? true : false
    const id = localStorage.getItem(idStorage) ? true : false

    return token && id
}


function isAuthenticated() {
    return isAtuh(userToken, userId)
}


function isAdminAuthenticated() {
    return isAtuh(adminToken, adminId)
}


function logout() {
    localStorage.removeItem(userToken)
    localStorage.removeItem(userId)
    
    redirect('/')
}


function loginAdmin(token, id) {
    localStorage.setItem(adminToken, token)
    localStorage.setItem(adminId, id)
}


function logoutAdmin() {
    localStorage.removeItem(adminToken)
    localStorage.removeItem(adminId)
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


export default {
    isAuthenticated,
    isAdminAuthenticated,
    logout, 
    loginAdmin,
    logoutAdmin,
    getToken, 
    getId, 
    getAtuhorizationHeader}
