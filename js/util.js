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
            setTimeout(() => {
                window.location = '/index.html'
            })
            return response
        }

		

	} catch(error) {
		alert(error.message)

		return setTimeout(() => {
			return window.location = '/login'
		}, 1000)
	}
}