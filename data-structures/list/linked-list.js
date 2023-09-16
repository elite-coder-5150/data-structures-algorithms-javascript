export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add a node to the end of the list
    append(data) {
        const node = new ListNode(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    // Add a node to the beginning of the list
    prepend(data) {
        const node = new ListNode(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    // Remove the first node with the given data
    remove(data) {
        if (!this.head) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Remove the first node
    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    // Remove the last node
    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }

        current.next = null;
    }

    // reverse list.
    reverse() {
        if (!this.head) {
            return;
        }

        let current = this.head;
        let prev = null;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }
}