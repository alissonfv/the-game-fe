export default class Queue {
    constructor() {
        this.elements = [];
    }

    inserting(element) {
        this.elements.push(element);
    }

    removing() {
        this.elements.shift();
    }

    next() {
        return this.elements[0];
    }
}
