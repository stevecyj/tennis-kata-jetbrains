export class Tennis {
    firstPlayerScoreTimes = 0

    scoreLookup = {
        1: 'fifteen',
        2: 'thirty',
    }

    score() {
        if (this.firstPlayerScoreTimes === 2 || this.firstPlayerScoreTimes === 1) {
            return `${this.scoreLookup[this.firstPlayerScoreTimes]} love`;
        }
        return 'love all';
    }

    firstPlayerScore() {
        this.firstPlayerScoreTimes++;
    }
}
