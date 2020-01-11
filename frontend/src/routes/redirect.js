function redirect(to, e=undefined) {
    if (e)
        e.preventDefault()
    
    window.location.href = 'http://localhost:3000' + to
}

export default redirect