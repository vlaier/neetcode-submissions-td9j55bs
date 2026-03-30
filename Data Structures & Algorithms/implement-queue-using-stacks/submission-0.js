class MyQueue {
    constructor() {
        this.firstStack = []
        this.secondStack = []
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.firstStack.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        while(this.firstStack.length > 1){
            const lastValue = this.firstStack.pop()
            this.secondStack.push(lastValue)
        }
        const returnValue = this.firstStack.pop()
        while(this.secondStack.length > 0){
            const lastValue = this.secondStack.pop()
            this.firstStack.push(lastValue)
        }
        return returnValue
    }

    /**
     * @return {number}
     */
    peek() {
        while(this.firstStack.length > 1){
            const lastValue = this.firstStack.pop()
            this.secondStack.push(lastValue)
        }
        const returnValue = this.firstStack.pop()
        this.firstStack.push(returnValue)
        while(this.secondStack.length > 0){
            const lastValue = this.secondStack.pop()
            this.firstStack.push(lastValue)
        }
        return returnValue
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.firstStack.length === 0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
