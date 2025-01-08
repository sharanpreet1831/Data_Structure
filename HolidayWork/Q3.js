class FreqStack {
    constructor() {
        this.freqMap = new Map(); // Tracks frequency of each element
        this.group = new Map();  // Maps frequency to a stack of elements
        this.maxFreq = 0;        // Tracks the current maximum frequency
    }

    push(val) {
        // Increment frequency
        const freq = (this.freqMap.get(val) || 0) + 1;
        this.freqMap.set(val, freq);

        // Update max frequency
        if (freq > this.maxFreq) {
            this.maxFreq = freq;
        }

        // Add to the group map
        if (!this.group.has(freq)) {
            this.group.set(freq, []);
        }
        this.group.get(freq).push(val);
    }

    pop() {
        // Get the most frequent element
        const stack = this.group.get(this.maxFreq);
        const val = stack.pop();

        // Decrement frequency in freqMap
        this.freqMap.set(val, this.freqMap.get(val) - 1);

        // If the stack for maxFreq is empty, decrease maxFreq
        if (stack.length === 0) {
            this.group.delete(this.maxFreq);
            this.maxFreq--;
        }

        return val;
    }
}

// Example Usage
const freqStack = new FreqStack();

// Input Operations
freqStack.push(5);
freqStack.push(7);
freqStack.push(5);
freqStack.push(7);
freqStack.push(4);
freqStack.push(5);

console.log(freqStack.pop()); // Output: 5
console.log(freqStack.pop()); // Output: 7
console.log(freqStack.pop()); // Output: 5
console.log(freqStack.pop()); // Output: 4