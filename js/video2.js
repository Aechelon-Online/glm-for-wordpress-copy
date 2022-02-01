const videoConsole = document.querySelector('.video-wrapper')
const video = videoConsole.querySelectorAll('.video')
const playButton = videoConsole.querySelectorAll('.play-button')
const volume = videoConsole.querySelectorAll('.volume')
const currentTimeElement = videoConsole.querySelectorAll('.current')
const durationTimeElement = videoConsole.querySelectorAll('.duration')
const progress = videoConsole.querySelectorAll('.video-progress')
const progressBar = videoConsole.querySelectorAll('.video-progress-filled')



const videos = ['greg-luce-music-promo.mov','rocket-man-demo-clip.ov', 'hob-wedding-fancy-like-moves.mov','private-party-doobie-brothers-clip.mov','wedding-groove-cupid-shuffle.mov']

let videoPlayer = ""
for (const vid of videos) {

videoPlayer += `
    <div class="video-player">
        <video src="../img/${vid}" class="video"></video>
            
        <div class="player-controls">
            <div class="video-progress">
                <div class="video-progress-filled"></div>
            </div>

            <button class="play-button" title="play">▶</button>

            <input type="range" class="volume" min="0" max="1" step="0.01" value="1" />
    
            <div class="time">
                <span class="current">0:00</span> / <span class="duration">0:00</span>
            </div>
        </div>
    </div>
    `
}

document.querySelector('.video-wrapper').innerHTML = videoPlayer

if ( playButton.length !== 0 ) {
    // Play and Pause Button
    playButton.addEventListener('click', (e) => {
        console.log(e)
        if (video.paused) {
            video.play()
            e.target.textContent = '❚❚'
        } else {
            video.pause()
            e.target.textContent = '▶'
        }
        
    })



    // Volume
    volume.addEventListener('mousemove', (e) => {
        video.volume = e.target.value
    })



    // Current Time and Duration
    const currentTime = () => {
        let currentMinutes = Math.floor(video.currentTime / 60)
        let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
        let durationMinutes = Math.floor(video.duration / 60)
        let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

        currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
        durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds < 10 ? '0'+durationSeconds : durationSeconds}`
    }


    video.addEventListener('timeupdate', currentTime)

    // Progress Bar
    video.addEventListener('timeupdate', () => {
        const percentage = (video.currentTime / video.duration) * 100
        progressBar.style.width = `${percentage}%`
    })

    // Change progress bar on click
    progress.addEventListener('click', (e) => {
        const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
        video.currentTime = progressTime
    })
}