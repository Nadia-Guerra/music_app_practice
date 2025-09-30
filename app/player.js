import audioControllers from "../domain/audioControllers";
import createPlaylist from "../utils/playlist";

const player = {
    _progess_bar: document.getElementById("progress"),
    _play_btn: document.getElementById("play"),
    _last_btn: document.getElementById("last"),
    _forwd_btn: document.getElementById("forward"),
    _audioController: audioController,

    Player(songs){
        const media_controller = document.getElementById("media");
        const playlist = createPlaylist(songs, null);
        this._audioController.AudioController(playlist, media_controller);
    },
    eventListeners(){
        this._audioController._controller.addEventListener('timeupdate', function(){
            progress_value = (player._audioController.currentTime/player.audioController.duration)*100;
            player.progress_bar.value = progress_value;
        });
        this._progres_bar.addEventListener('input', function(){
            player._audioController._controller.currentTime = (this.value/100) * player._audioController._controller.duration;
        });
        this._forwd_btn.addEventListener('click',function(){
            audioController.nextSong();
            player._interface.loadSong(
                player._audioController._actualSong
            )
        });
           this._last_btn.addEventListener('click',function(){
            audioController.prevSong();
        });
           this._play_btn.addEventListener('click',function(event){
            player._audioController.playPause(event,EventTarget,classList[0]);
        });
           this._audioController._controller.addEventListener('click',function(event){
            player.progress_bar.value = 0
        })
    }
}

export default player
progress_bar.oninput = function() {
    media.currentTime = (this.value/100) * media.duration;
}

media.ontimeupdate = function updateProgressBar() {
    const progress_value = (this.currentTime / this.duration) * 100;
    progress_bar.value = progress_value;
}
