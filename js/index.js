async function renderUsers(){
    let response = await request('/info', 'GET')
    console.log(response.users)
}
