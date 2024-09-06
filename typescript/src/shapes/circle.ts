class circle implements Shape {
    #radius: number;
    
    constructor(radius: number) {
        this.#radius = radius;
    }

    public computeArea(): number {
        return Math.PI * this.#radius * this.#radius;
    }
}

export { circle }
