class Queue {
    constructor() {
        this.elements = [];
        this.quantity = 0;
    } // fim do construtor

    inserting(element) {
        this.elements[this.quantity] = element;
        this.quantity++;
    } // fim do inserting

    removing() {
        if (this.quantity > 0) {
            this.quantity--;
            for (let index = 0; index < this.length; index++) {
                this.elements[index] = this.elements[index + 1];
            }
        }
    } // fim do removing

    next() {
        return this.elements[0];
    }

    getQuantity() {
        return this.quantity;
    }
} // fim da classe Fila

export default Queue;