const backendApi = 'http://localhost:9090'

function createElements(...elements) {
    return elements.map(el => document.createElement(el))
}

async function request(route, method, body) {
    try {
        let response = await fetch(backendApi + route, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body): null
        })

        if (response.status == 401) {
            window.localStorage.removeItem('token')
            window.location = './login.html'
            return
        }

        if (![200, 201].includes(response.status)) {
            response = await response.json() 
            return
        }

        return await response.json()
    } catch (error) {
        console.log(error)
    }
}