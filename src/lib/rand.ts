export function createRNG(bag: number[]) {
    let shuffledBag = shuffle(Array.from(bag));
    function* generator(): Generator<number, never, void> {
        while (true) {
            if (shuffledBag.length === 0) {
                shuffledBag = shuffle(Array.from(bag));
            }
            yield shuffledBag.pop()!;
        }
    }
    const RNG = generator();
    return function () {
        return RNG.next().value;
    };
}

// Fisher-Yates (aka Knuth) Shuffle
// taken from https://stackoverflow.com/a/2450976
function shuffle(array: number[]) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}
