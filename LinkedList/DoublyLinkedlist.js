class Node {
    constructor(data){
        this.prev = null
        this.data= data
        this.next = null
    }
}
class DoublyLL{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        const newnode = new Node(data);
        newnode.next = this.head;
        if (this.head){
            this.head.prev = newnode
        }
        this.head = newnode
    }
    addlast(data){
        const newnode = new Node(data);

        if (!this.head){
            this.head = newnode;
            return;
        }
        let current = this.head;
        while (current.next){
            current=current.next;
        }
        
        newnode.prev = current;
        current.next = newnode;
        
        
        
        
    }
    addAt(index , data){
       
        if (index <0 || index > this.size()){
            console.log("invalid iindex ")
            return 
        }
        const newnode = new Node(data);
        if (index === 0 ){
            newnode.next = this.head;
            if (this.head){
                this.head.prev = newnode
            }
        this.head = newnode;
        return;
        }
        let current = this.head;
        for (let i =0 ; i< index-1 ; i++){
            current = current.next ;
        }
        newnode.prev = current;
        newnode.next = current.next;

        if (current.next){
            current.next.prev = newnode
            current.next = newnode;
        }
        current.next = newnode;
       
        
    }
    removefirst(){
        if(!this.head){
            rerturn ;
        }
        this.head = this.head.next ;
        if (this.head){
            this.head.prev=  null;
        }
        
    }
    removeLast(){
        if(!this.head){
            rerturn ;
        }
        if (!this.head.next){
            this.head = null;
            return
        }
        let current = this.head ;
        while (current.next.next ){
            current = current.next;
        }
        current.next = null;

    }
    removeAtindex(index ){
        if(index < 0 || index > this.size()){
            console.log("invalid index ");
            return;
        }

        if (index === 0){
            if(!this.head){
                rerturn ;
            }
            this.head = this.head.next ;
            if (this.head){
                this.head.prev=  null;
            }
        }

        let current = this.head;
        for (let i =0 ; i< index-1 ; i++){
            current= current.next;
        }
        if(current.next){
            current.next = current.next.next;
            current.next.prev = current.next;
            if(current.next){
                current.next.prev = current;
            }

        }
    }
    size(){
        let current = this.head ;
        let count = 0
        while (current){
            count ++;
            current= current.next;
        }
        return count;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next;
        }
    }
}

let doublylinklist = new DoublyLL();

function testDoublyLinkedList() {
    // Test addFirst
    console.log("Adding elements at the beginning:");
    doublylinklist.addFirst(10);
    doublylinklist.addFirst(20);
    doublylinklist.addFirst(30);
    doublylinklist.print(); // Expected: 30, 20, 10

    // Test addLast
    console.log("\nAdding elements at the end:");
    doublylinklist.addlast(5);
    doublylinklist.addlast(1);
    doublylinklist.print(); // Expected: 30, 20, 10, 5, 1

    // Test addAt
    console.log("\nAdding element 25 at index 2:");
    doublylinklist.addAt(2, 25);
    doublylinklist.print(); // Expected: 30, 20, 25, 10, 5, 1

    console.log("\nAdding element 40 at index 0:");
    doublylinklist.addAt(0, 40);
    doublylinklist.print(); // Expected: 40, 30, 20, 25, 10, 5, 1

    console.log("\nAdding element 0 at the last index:");
    doublylinklist.addAt(7, 0);
    doublylinklist.print(); // Expected: 40, 30, 20, 25, 10, 5, 1, 0

    // Test removeFirst
    console.log("\nRemoving the first element:");
    doublylinklist.removefirst();
    doublylinklist.print(); // Expected: 30, 20, 25, 10, 5, 1, 0

    // Test removeLast
    console.log("\nRemoving the last element:");
    doublylinklist.removeLast();
    doublylinklist.print(); // Expected: 30, 20, 25, 10, 5, 1

    // Test size
    console.log("\nChecking the size of the list:");
    console.log("Size:", doublylinklist.size()); // Expected: 6
}

// Call the test function
testDoublyLinkedList();