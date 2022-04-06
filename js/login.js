form.onsubmit = async e => {
    e.preventDefault()

    let username = usernameInput.value
    let password = passwordInput.value

    const formData = new FormData()
	formData.append('username', username);
	formData.append('password', password);

    let response = await request('/login', 'POST', formData)
    
}