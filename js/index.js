async function renderUsers(){
    let response = await request('/info', 'GET')
    users = response.users

    usersList.innerHTML = null
    usersList.innerHTML =  `<h1>YouTube Members</h1>
                        <li class="channel active" data_id="main">
                            <a href="#">
                                <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 30px; height: 30px;"><g><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" class="style-scope yt-icon"></path></g></svg>
                                <span>Home</span>
                            </a>
                        </li>`
                    
    for(let i of users){
        usersList.innerHTML += `<li class="channel" data-id="1">
                                <a href="#">
                                    <img src="http://localhost:9090/${i.fileName}" alt="channel-icon" width="30px" height="30px">
                                    <span>${i.username}</span>
                                </a>
                            </li>`
    }
    if(window.localStorage.getItem('token')){

}
}
renderUsers()
setUser()

