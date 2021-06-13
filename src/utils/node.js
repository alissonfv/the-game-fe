class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    getNext() {
        return this.next;
    }

    setNext(nodeNext) {
        this.next = nodeNext;
    }

    getData() {
        return this.data;
    }
} // fim da classe Node

export default Node;