export default{

    AudioController(playlist){
        this._nextSongs = playlist;
        this._actualSong = this._nextSongs.pop();
    },
    _lastSongs: [],
    _nextSongs: [],
    _actualSong: null, //como no se tiene nada diseñado aun, se pone el null
    //<---- null ----->
    //empty        9
    _controller: document.getElementById("media"),

    nextSong(){
        if(this._nextSongs.length !== 0){
            this._lastSongs.push(this._actualSong); //se usa this pq se ba a  agregar un objeto, esto es como una clase
            this._actualSong = this._nextSongs.pop();
        }
    },
    prevSong:function(){
        if(this._lastSongs.length !==0){
            this._nextSongs.push(this._actualSong);
            this._actualSong = this._lastSongs.pop();
        }
    },
    loadSong(){
        this._controller.src = this._actualSong.song.url; //le estamos diciendo que conseguira el medio de audio a traves de este parametro
    },
    playPause(){
        if(action == 'play'){
            this._controller.play();
        }else{
            this._controller.pause();
        }
    }
}