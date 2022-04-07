form.onsubmit = async e => {
    e.preventDefault()

    let username = usernameInput.value
    let password = passwordInput.value

    const formData = new FormData()
	formData.append('username', username);
	formData.append('password', password);

    let response = await request('/login', 'POST', formData)
    console.log(response)
    window.localStorage.setItem('token', response.token)
    window.localStorage.setItem('user',response.user)
    window.location = 'index.html'
    setUser(response.user)

}