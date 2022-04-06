
console.log("hello")

form.onsubmit = async function (event) {
    event.preventDefault()
    let username = usernameInput.value
    let password = passwordInput.value
    let file = uploadInput.files[0]

    console.log(response)
    let response = await request('/users', 'POST', { username, password, file })
}