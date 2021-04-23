function favoriteSongs(songsInfo) {
    let count = songsInfo.shift();
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let songs = [];

    for (let i = 0; i < count; i++) {
        let [type, name, time] = songsInfo[i].split('_');
        songs.push(new Song(type, name, time));
    }

    let sorting = songsInfo.pop();

    let sortedSongs = songs.filter((v, i) => v.type === sorting);
    if (sorting === 'all') {
        sortedSongs = songs.slice();
    }

    for (let song of sortedSongs) {
        console.log(song.name);
    }
}

favoriteSongs([3,

    'favourite_DownTown_3:14',

    'favourite_Kiss_4:16',

    'banan_Smooth Criminal_4:01',

    'all']);