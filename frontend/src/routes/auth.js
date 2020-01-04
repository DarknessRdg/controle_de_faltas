// TODO: implements authenticated method


const isAuthenticated = () => {
    return localStorage.getItem('@user/token') ? true : false
}


export default isAuthenticated;