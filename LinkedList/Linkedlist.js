class Node {
    constructor(data){
        this.data =data ;
        this.next = null ;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    addfirst(data){
        const newnode = new Node(data);
        newnode.next = this.head;
        this.head = newnode;
    }
    addlast(data){
        const newnode = new Node(data);
        if (!this.head){
            this.head = newnode;
        }

        let current = this.head ;
        while (current){
            current = current.next;
        }
        current.next = newnode;
    }
    size(){
        let count = 0 ;
        let current = this.head;

        while (current){
            count ++
            current = current.next;
        }
        return count ;
    }
    addAt(index,data){
        if (index < 0 || index >this.size()){
            console.error("please enter valid index");
        }

        const newnode = new Node(data);
        if (index===0){
            newnode.next = this.head;
        this.head = newnode;
        return ;
        }

        let current = this.head ;
        for (let  i =0 ; i<index -1; i++){
            current = current.next;
        }
        newnode.next = current.next;
        current.next = newnode
    }
    removeTop(){
        if(!this.head){
            return
        }
        this.head = this.head.next;
    }
    removeLast(){
        if(!this.head){
            return
        }
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        current.next = null ;
    }
    removeAt(index){
        if (index < 0 || index > this.size()){
            console.error("invalid index ");
        }
        if (index === 0 ){
            this.head = this.head.next;
            return
        }

        let current = this.head ;
        for (let i =0 ; i<index-1; i++){
            current = current.next
        }
        if(current.next){
            current.next = current.next.next;
        }
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current= current.next;
        }
    }
    
    mid() {
        if (!this.head) { 
            console.log("List is empty");
            return;
        }
        let n = Math.floor(this.size() / 2); 
        let current = this.head;
        for (let i = 0; i < n; i++) { 
            current = current.next;
        }
        console.log(current.data); 
    }
    removeduplicate() {
        if (!this.head) { 
            console.log("List is empty");
            return;
        }
        let n = this.size();
        let current = this.head;
        let prev= null ;
        const seenSet= new Set();
        while(current){
            if(seenSet.has(current.data)){
                prev.next = current.next;

            }else {
                seenSet.add(current.data);
                prev = current;
            }
            current=current.next;
        }
    }
    reverse(){
        let current = this.head;
        let prev = null;
        while (!current == null){
            let nextnode = current.next ;
            current.next = prev
            prev = current;
            current = nextnode

        }
    }
}

const linkedlist = new LinkedList();

linkedlist.addfirst(30);
linkedlist.addfirst(20);
linkedlist.addfirst(10);
linkedlist.addfirst(10);
// let size = linkedlist.size();
// console.log(size);

//  linkedlist.mid();
linkedlist.removeduplicate();
linkedlist.reverse();
linkedlist.print();


