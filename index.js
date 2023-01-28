class LinkedList {
    constructor() {
        this.list = null;
    }

    append(node) {
        if (this.list === null) {
            this.list = node;
            return node;
        }

        let currentNode = this.list;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        return node;
    }

    prepend(node) {
        if (this.list === null) {
            this.list = node;
            return node;
        }

        node.next = this.list;
        this.list = node;
        return node;
    }

    get size() {
        if (this.list === null) return 0;

        let currentNode = this.list;
        let counter = 1;

        while (currentNode.next) {
            counter++;
            currentNode = currentNode.next;
        }

        return counter;
    }

    set size(value) {
        throw new Error('Cannot assign to read only property.');
    }

    get head() {
        if (this.list === null) return null;

        return this.list;
    }

    set head(value) {
        throw new Error('Cannot assign to read only property.');
    }

    get tail() {
        if (this.list === null || this.size === 1) return null;

        let currentNode = this.list;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    set tail(value) {
        throw new Error('Cannot assign to read only property.');
    }

    at(index) {
        if (this.list === null || index > this.size || index < 1) return null;

        if (index === 1) return this.list;

        let currentNode = this.list;

        /* the counter is initialized to 1 because linked list's
            non-standard indexing system starts with 1 */
        for (let i = 1; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    get pop() {
        if (this.list === null || this.size === 1) return null;

        let currentNode = this.list;
        let secondToLastNode;

        while (currentNode.next) {
            secondToLastNode = currentNode;
            currentNode = currentNode.next;
        }

        secondToLastNode.next = null;
        return currentNode;
    }

    set pop(value) {
        throw new Error('Cannot assign to read only property.');
    }

    contains(value) {
        if (this.list === null) return false;

        let currentNode = this.list;

        while (currentNode.next) {
            if (currentNode.value === value) return true;

            currentNode = currentNode.next;
        }

        return currentNode.value === value;
    }

    find(value) {
        if (this.list === null) return null;

        let currentNode = this.list;

        for (let i = 1; i <= this.size; i++) {
            if (currentNode.value === value) return i;

            currentNode = currentNode.next;
        }

        return null;
    }

    get toString() {
        if (this.list === null) return null;

        let currentNode = this.list;
        let string = '';

        for (let i = 0; i <= this.size; i++) {
            if (currentNode.next === null) {
                string += 'null';
                return string;
            }

            string += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.next;
        }
    }

    set toString(value) {
        throw new Error('Cannot assign to read only property.');
    }
}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}