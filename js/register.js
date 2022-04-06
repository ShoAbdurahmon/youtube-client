
console.log("hello")

form.onsubmit = async function (event) {
    event.preventDefault()
    let username = usernameInput.value
    let password = passwordInput.value
    let file = uploadInput.files[0]
    const formData = new FormData()
	formData.append('username', username)
	formData.append('password', password)

	formData.append('file', file)

    let response = await request('/register', 'POST', formData)
    console.log(response)
}