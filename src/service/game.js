/**
 * Game logic class
 */
export default class Game {

    async prepareWordList(level = 0) {
        let filename = "/" ;
        let size;
        switch (level) {
            case 0:
                filename += 'words_very_easy';
                size = 5;
                break;
            case 1:
                filename += 'words_easy';
                size = 8;
                break;
            case 2:
                filename += 'words_average';
                size = 10;
                break;
            case 3:
                filename += 'words_hard';
                size = 13;
                break;
            case 4:
                filename += 'words_very_hard';
                size = 15;
                break;
            default:
                filename += 'words_easy';
                size = 8;
        }

        const response = await fetch(filename);
        const text = await response.text();
        let list = text.split("\n");
        list = this.shuffleArray(list);
        return list.slice(0, size);
    }

    shuffleArray(array) {
        let currentIndex = array.length;
        let temporaryValue;
        let randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    getCorrectness(target, guess) {
        let correct = 0;
        for (let i = 0; i < target.length; i++) {
            if (target[i] === guess[i]) {
                correct += 1;
            }
        }
        return `${correct}/${target.length}`;
    }

    pickTarget(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}