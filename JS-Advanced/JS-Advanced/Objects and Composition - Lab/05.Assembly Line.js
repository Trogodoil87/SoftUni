function createAssemblyLine() {
    let actions = {
        hasClima: (obj) => {
            obj['temp'] = 21;
            obj['tempSettings'] = 21;
            obj.adjustTemp = function () {
                if (obj.temp < obj.tempSettings) {
                    obj.temp += 1;
                } else if (obj.temp > obj.tempSettings) {
                    obj.temp -= 1;
                }
            }
        },
        hasAudio: (obj) => {
            obj['currentTrack'] = {};
            obj['nowPlaying'] = function() {
                obj.currentTrack === null ? '' :
                console.log(`Now playing '${obj.currentTrack.name}' by ${obj.currentTrack.artist}`);
            }
        },
        hasParktronic: (obj) => {
            obj['checkDistance'] = function (ditance) {
                if (ditance < 0.1) {
                    console.log(`Beep! Beep! Beep!`);
                } else if (ditance >= 0.1 && ditance < 0.25) {
                    console.log(`Beep! Beep!`);
                } else if (ditance >= 0.25 && ditance < 0.5) {
                    console.log(`Beep!`);
                } else {
                    console.log(``);
                }
            };
        }
    };

    return actions;
}
const assemblyLine = createAssemblyLine();


const myCar = {

    make: 'Toyota',

    model: 'Avensis'

};
assemblyLine.hasAudio(myCar); 

myCar.currentTrack = { 

    name: 'Never Gonna Give You Up', 

    artist: 'Rick Astley' 

}; 

myCar.nowPlaying(); 