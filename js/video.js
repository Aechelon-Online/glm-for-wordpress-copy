const videoConsole = document.querySelector('.video-wrapper')
const video = videoConsole.querySelectorAll('.video')
const playButton = document.querySelectorAll('.play-button')
const volume = videoConsole.querySelectorAll('.volume')
const currentTimeElement = videoConsole.querySelectorAll('.current')
const durationTimeElement = videoConsole.querySelectorAll('.duration')
const progress = videoConsole.querySelectorAll('.video-progress')
const progressBar = videoConsole.querySelectorAll('.video-progress-filled')





const videos = ['greg-luce-music-promo.mov','rocket-man-demo-clip.mov', 'hob-wedding-fancy-like-moves.mov','private-party-doobie-brothers-clip.mov','wedding-groove-cupid-shuffle.mov']

let videoPlayer = ""
for (const vid of videos) {

videoPlayer += `
    <div class="video-player">
        <video src="../img/${vid}" class="video" controls></video>
    </div>
    `
    


}


document.querySelector('.video-wrapper').innerHTML = videoPlayer

console.log(document.querySelectorAll('.play-button'))
console.log(playButton)

document.querySelectorAll('.play-button').addEventListener('click', function(e){
    if (video.paused) {
        video.play()
        e.target.textContent = '❚❚'
    } else {
        video.pause()
        e.target.textContent = '▶'
    }
    
})

{/* <div class="player-controls">
            <div class="video-progress">
                <div class="video-progress-filled"></div>
            </div>

            <button class="play-button" title="play">▶</button>

            <input type="range" class="volume" min="0" max="1" step="0.01" value="1" />
    
            <div class="time">
                <span class="current">0:00</span> / <span class="duration">0:00</span>
            </div>
        </div> */}