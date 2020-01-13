export default () => {
    const form = document.querySelector('form')
    if (form)
        form.reset()

    document.querySelectorAll('select').forEach(ele => {
        ele.selectedIndex = 0
    })
}