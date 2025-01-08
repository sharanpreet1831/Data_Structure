class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Add a new node to the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Create a loop in the linked list
    createLoop(position) {
        if (!this.head) return;
        let loopNode = null;
        let current = this.head;
        let index = 0;

        while (current.next) {
            if (index === position) {
                loopNode = current;
            }
            current = current.next;
            index++;
        }
        current.next = loopNode; // Create the loop
    }

    // Detect and remove loop
    detectAndRemoveLoop() {
        if (!this.head) return;

        let slow = this.head;
        let fast = this.head;

        // Detect loop using Floyd's Cycle Detection Algorithm
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            // If slow and fast meet, there's a loop
            if (slow === fast) {
                this.removeLoop(slow);
                return true; // Loop was detected and removed
            }
        }
        return false; // No loop found
    }

    // Remove the loop
    removeLoop(loopNode) {
        let ptr1 = this.head;
        let ptr2 = loopNode;

        // Find the starting node of the loop
        while (ptr1.next !== ptr2.next) {
            ptr1 = ptr1.next;
            ptr2 = ptr2.next;
        }

        // Break the loop
        ptr2.next = null;
    }

    // Print the linked list
    printList() {
        let current = this.head;
        while (current) {
            process.stdout.write(current.value + " -> ");
            current = current.next;
        }
        console.log("NULL");
    }
}

// Example Usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

// Create a loop: Node 5 points back to Node 3
list.createLoop(2);

if (list.detectAndRemoveLoop()) {
    console.log("Loop detected and removed.");
} else {
    console.log("No loop found.");
}

console.log("Modified Linked List:");
list.printList();