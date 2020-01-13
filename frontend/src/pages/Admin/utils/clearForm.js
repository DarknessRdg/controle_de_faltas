export default () => {
    document.querySelector('form').reset()

    document.querySelectorAll('select').forEach(ele => {
        ele.selectedIndex = 0
    })
}