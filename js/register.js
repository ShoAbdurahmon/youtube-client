
console.log("hello")

form.onsubmit = async function (event) {
    event.preventDefault()
    let username = usernameInput.value
    let password = passwordInput.value
    let file = uploadInput.files[0]
    console.log(file)
    const formData = new FormData()
	formData.append('username', username);
	formData.append('password', password);

	formData.append('file', file, file.name);

    console.log(formData)


    let response = await request('/register', 'POST', formData)
    console.log(response)
    window.localStorage.setItem('token', response.token)
    window.localStorage.setItem('user',response.user)
    window.location = '/index.html'
    // admin.setAttribute('href', '/admin.html')
    // admin_rasm.setAttribute('src', `http://localhost:9090/${response.user.fileName}`)

}