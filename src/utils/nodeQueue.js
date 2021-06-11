import Node from './node';

class Queue {

    constructor() {
        this.begin = null;
        this.end = null;
    }

    inserting(element) {
        let new_node = new Node(element);
        if(this.begin === null) {
            this.begin = new_node;
        } else {
            new_node.setNext(this.end);
        }
        this.end = new_node;
    }

    removing() {
        this.begin = this.begin.getNext();
    }

    next() {
        return this.begin.getData();
    }

};

export default Queue;