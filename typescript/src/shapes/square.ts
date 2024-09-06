class square implements Shape {
    #sideLen: number;
    
    constructor(sideLen: number) {
        this.#sideLen = sideLen;
    }

    public computeArea(): number {
        return this.#sideLen * this.#sideLen;
    }
}

export { square }