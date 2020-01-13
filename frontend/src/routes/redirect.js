function redirect(to, e=undefined) {
    if (e)
        e.preventDefault()
    
    
    let {href} = window.location

    const indexProtocol = href.indexOf('://') + '://'.length
    const protocol = href.slice(0, indexProtocol)

    href = href.slice(indexProtocol)

    const host = href.slice(0, href.indexOf('/'))

    window.location.href = protocol + host + to
}

export default redirect