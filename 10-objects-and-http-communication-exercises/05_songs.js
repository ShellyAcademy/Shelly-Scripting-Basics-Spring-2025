function parseData(input) {
    let type = input[0];
    let name = input[1];
    let duration = input[2];

    let songObj = {
        type: type,
        name: name,
        duration: duration
    }

    return songObj;
}

function processData(input) {
    let songs = [];
    let criteriaType = "NO_VALUE_PROVIDED";

    for (let i = 0; i < input.length; i++) {
        let currentElement = input[i];

        if (i == input.length - 1) {
            criteriaType = currentElement;
            continue;
        }

        let song = parseData(currentElement);
        songs.push(song);
    }

    let filteredData = songs.filter(function (element) {
        return element.type === criteriaType
    });

    return filteredData;
}

let input = [['favourite', 'DownTown', '3:14'], ['favourite', 'Kiss', '4:16'], ['favourite', 'Smooth Criminal', '4:01'], 'favourite'];
//let input = [['favourite', 'DownTown', '3:14'], ['listenLater', 'Andalouse', '3:24'], ['favourite', 'Live It Up', '3:48'], 'listenLater'];
let result = processData(input);

for (let i = 0; i < result.length; i++) {
    let element = result[i];
    console.log(element.name);
}