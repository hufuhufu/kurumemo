export function randomPickArray<T>(arr: T[]): T {
    const len = arr.length;
    const rand = Math.random();
    // TODO: Math.random are too random.
    // Need to make it less random and more alternating between the choices.

    for (let i = 1; i < len; i++) {
        if (rand < i / len) {
            return arr[i - 1];
        }
    }

    return arr[len - 1];
}
