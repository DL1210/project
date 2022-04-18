// Cypher - доделать до момента пока не зачтется задача
class Cypher {
    constructor(keyword) {
        this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        this.cyphAlphabet = [];
        this.keyword = keyword;
    }

    initCypher() {
        let alphabet = [...this.alphabet];
        for (let char of this.keyword) {
            alphabet.splice(alphabet.indexOf(char), 1)
        }
        this.cyphAlphabet = alphabet;
        const res = this.keyword.split('').concat(this.cyphAlphabet);
        this.cyphAlphabet = res;
    }

    decode(word) {
        return this.changeWord(this.alphabet, this.cyphAlphabet, word);
    }

    encode(word) {
        return this.changeWord(this.cyphAlphabet, this.alphabet, word);
    }

    changeWord(cyphAlphabet, alphabet, word) {
        const w = [];
        for (let i = 0; i < word.length; i++) {
            const index = alphabet.indexOf(word[i]);
            const letter = cyphAlphabet[index];

            w.push(letter);

        }

        return w.join('');
    }
}

// const cypher = new Cypher('keyword');
// cypher.initCypher();

// console.log(cypher.encode('abchij'))
// console.log(cypher.decode('keyabc'))







// 9.2 task 2

class Clock {
    constructor({ template }) {
      this.template = template;
    }

    render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

      console.log(output);
    }

    stop() {
      clearInterval(this.timer);
    }

    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock {
    constructor({template, precision}) {
        super({template});

        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let lowResolutionClock = new ExtendedClock({
    template: 'h:m:s',
    precision: 5000
});

// lowResolutionClock.start();





