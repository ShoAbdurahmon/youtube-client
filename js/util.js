const backendApi = 'http://192.168.1.88:9090'

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

		
	}
}
console.log(window.location)

if(window.location.href != 'https://youtube-client1.netlify.app/index.html' && window.location.href != 'https://youtube-client1.netlify.app/login.html'){
	if (window.localStorage.getItem('token') && JSON.parse(window.localStorage.getItem('user')) && window.location.href == 'https://youtube-client1.netlify.app/index.html') {
		let user = JSON.parse(window.localStorage.getItem('user'))
		admin.setAttribute('href', 'https://youtube-client1.netlify.app/admin.html')
		admin_rasm.setAttribute('src', `http://192.168.1.88:9090/${user.fileName}`)
	}
}