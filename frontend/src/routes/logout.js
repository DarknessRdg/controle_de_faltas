

function logout() {
    localStorage.removeItem('@user/token')
    localStorage.removeItem('@user/id')
}