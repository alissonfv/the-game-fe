import Node from './node';

class Queue {

    constructor() {
        this.begin = null;
        this.end = null;
        this.quantity = 0
    }

    inserting(element) {
        let new_node = new Node(element);
        if(this.begin === null) {
            this.begin = new_node;
        } else {
            new_node.setNext(this.end);
        }
        this.end = new_node;
        this.quantity++;
    }

    removing() {
        this.begin = this.begin.getNext();
        this.quantity--;
    }

    next() {
        return this.begin.getData();
    }

    getQuantity() {
        return this.quantity;
    }
};

export default Queue;