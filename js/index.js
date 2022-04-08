
async function renderUsers(){
    console.log('hello')
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
        let j = JSON.stringify(i)
        console.log(j)
        usersList.innerHTML += `<li class="channel" onclick="showUserMedia(${j})" data-id="1">
                                <a href="#">
                                    <img src="http://localhost:9090/${i.fileName}" alt="channel-icon" width="30px" height="30px">
                                    <span>${i.username}</span>
                                </a>
                            </li>`
    }
    for(let j of users){
        for(let i of j.videos){
            videolar.innerHTML += `<li class="iframe">
                                <video src="http://localhost:9090/${i.fileName}" controls=""></video>
                                    <div class="iframe-footer">
                                        <img src="http://localhost:9090/${j.fileName}" alt="channel-icon">
                                        <div class="iframe-footer-text">
                                            <h2 class="channel-name">${j.username}</h2>
                                            <h3 class="iframe-title">${i.title}</h3>
                                            <time class="uploaded-time">${i.date}</time>
                                            <a class="download" href="#">
                                                <span>${i.size / 1024 / 1024} MB</span>
                                                <img src="./img/download.png">
                                            </a>
                                        </div>                  
                                    </div>
                                </li>`
        }

    }
    
}


function showUserMedia(user){
    console.log(user)
    videolar.innerHTML = null
    for(let i of user.videos){
        videolar.innerHTML += `<li class="iframe">
                                <video src="http://localhost:9090/${i.fileName}" controls=""></video>
                                    <div class="iframe-footer">
                                        <img src="http://localhost:9090/${user.fileName}" alt="channel-icon">
                                        <div class="iframe-footer-text">
                                            <h2 class="channel-name">${user.username}</h2>
                                            <h3 class="iframe-title">${i.title}</h3>
                                            <time class="uploaded-time">${i.date}</time>
                                            <a class="download" href="#">
                                                <span>${i.size / 1024 / 1024} MB</span>
                                                <img src="./img/download.png">
                                            </a>
                                        </div>                  
                                    </div>
                                </li>`
    }
}
renderUsers()


