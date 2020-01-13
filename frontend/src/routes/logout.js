import redirect from "./redirect"

function logout() {
    localStorage.removeItem('@user/token')
    localStorage.removeItem('@user/id')
    
    redirect('/')
}


export default logout