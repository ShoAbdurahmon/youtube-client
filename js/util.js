const backendApi = 'http://localhost:9090'

function createElements(...elements) {
    return elements.map(el => document.createElement(el))
}

async function request(route, method, body = null) {
    try {
		let headers = {}
		if(!(body instanceof FormData) && method != 'GET') {
			headers['Content-Type'] = 'application/json'
			body = JSON.stringify(body || null)
		}
	
		let response = await fetch(backendApi + route, {
			method,
			headers,
			body
		})
        response = await response.json()
        if(response.status == 201){
            return response
        }

		

	} catch(error) {
		console.log(error)

		return setTimeout(() => {
			return window.location = '/login'
		}, 1000)
	}
}
console.log(window.location)

if (window.localStorage.getItem('token') && JSON.parse(window.localStorage.getItem('user')) && window.location.href == 'https://youtube-client1.netlify.app/index.html') {
    admin.setAttribute('href', 'https://youtube-client1.netlify.app/admin.html')
    admin_rasm.setAttribute('src', `http://localhost:9090/${user.fileName}`)
}