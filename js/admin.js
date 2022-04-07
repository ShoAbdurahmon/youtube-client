let user = JSON.parse(window.localStorage.getItem('user'))
function change(){
    let user = JSON.parse(window.localStorage.getItem('user'));

    if(user){
        videosList.innerHTML = null
        for(let i of user.videos){
            videosList.innerHTML += `<li class="video-item">
                <video src="http://localhost:9090/${i.fileName}" controls=""></video>
                <p class="content" data-id="2" contenteditable="true">${i.title}</p>
                <img src="./img/delete.png" width="25px" alt="upload" class="delete-icon" data-id="2">
            </li>`
        }   
    }
}
change()

form.onsubmit = async e => {
    e.preventDefault()
    let title = videoInput.value
    let file = uploadInput.files[0]
    const formData = new FormData()
    formData.append('title', title);
    formData.append('file', file, file.name);
    formData.append('user', JSON.stringify(user))

    let response = await request('/upload', 'POST', formData)
    window.localStorage.setItem('user', JSON.stringify(JSON.parse(response.user) || user))
    change()
}
