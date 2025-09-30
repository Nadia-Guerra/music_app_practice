import getRandom from "./utils.js"

// const playlist = [];

export default function createPlaylist(songs, actual_playlist){

    let playlist = [];

    if(actual_playlist !==null){
        playlist = actual_playlist;
    }

    if(songs.length !== 0){

        let index_song = getRandom(songs.length);

        playlist.push(song[index_song]);
        playlist.splice(index_song, 1);
        return createPlaylist(songs, playlist)
    }

    return playlist;
}