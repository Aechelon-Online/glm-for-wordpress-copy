const videos = {
    'https://www.youtube.com/embed/a4hIagju_sk': 'Greg Luce Music - Promo Video',
    'https://www.youtube.com/embed/b7fEKZ8TE1E': 'Private Party - Listen To The Music',
    'https://www.youtube.com/embed/n60Pm7AsEB0': 'Rocket Man - Prestonwood CC'
    }

let videoPlayer = ""
for (let [url, title] of Object.entries(videos)) {

videoPlayer += `
    <div class="video-player">
        <iframe src="${url}" frameborder="0" allowfullscreen class="video"></iframe>
        <h4 class="video-text">${title}</h4>
    </div>
    `
}


document.querySelector('.video-wrapper').innerHTML = videoPlayer
