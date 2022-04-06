const backendApi = 'http://localhost:9090'

function createElements(...elements) {
    return elements.map(el => document.createElement(el))
}

async function request(route, method, headers) {
    try {
        let response = await fetch(backendApi + route, {
            method,
            headers
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