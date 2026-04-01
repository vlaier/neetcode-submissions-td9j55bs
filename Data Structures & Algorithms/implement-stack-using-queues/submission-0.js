class MyStack {
    constructor() {
        this.firstQueue = []
        this.secondQueue = []
        
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.firstQueue.push(x)

    }

    /**
     * @return {number}
     */
    pop() {
        while(this.firstQueue.length > 1){
            const queueValue = this.firstQueue.shift()
            this.secondQueue.push(queueValue)
        }
        const returnValue = this.firstQueue.shift()
        while(this.secondQueue.length > 0){
            const queueValue = this.secondQueue.shift()
            this.firstQueue.push(queueValue)
            
        }
        return returnValue
    }

    /**
     * @return {number}
     */
    top() {
        while(this.firstQueue.length > 1){
            this.secondQueue.push(this.firstQueue.shift())
        }
        const returnValue = this.firstQueue.shift()
        while(this.secondQueue.length > 0){
            this.firstQueue.push(this.secondQueue.shift()) 
        }
        this.firstQueue.push(returnValue)
        return returnValue

    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.firstQueue.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
