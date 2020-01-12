import M from 'materialize-css'


export default (message, success) => {
    const color = success ? 'green' : 'red'
    M.toast({html: message, classes: 'rounded ' + color } )
}