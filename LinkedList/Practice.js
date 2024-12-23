class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}
class SingleLinkedlist{
    constructor(){
        this.head = null ;
    }
    Addfirst(data){
        const newnode = new Node(data);
        newnode.next = this.head;
        this.head = newnode;
    }
    Addlast(data){
        const newnode = new Node(data);
        let current = this.head;
        while(current.next){
            current= current.next;
        }
        current.next = newnode;

    }
    AddAtindex(index, data){
        const newnode = new Node (data);
        if (index < 0 || index >this.size()){
            console.log("invalid index ");
            return ;
        }

        let current = this.head;
        for (let i =0 ; i<index-1 ; i++){
            current = current.next;
        }
        newnode.next = current.next ;
        current.next = newnode;
    }
    removefirst(){
        if(!this.head){
            return;
        }
        this.head = this.head.next ;

    }
    removeLast(){
        if(!this.head){
            return;
        }
        let current = this.head ;
        while (current.next.next){
            current = current.next ;

        }
        current.next = null ;
    }
    size(){
        let count =0;
        let current = this.head;
        while (current){
            count++
            current = current.next ;
        }
        return count ;
    }
    print(){
        let current = this.head ;
        while (current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const singleLL = new SingleLinkedlist();
singleLL.Addfirst(20);
singleLL.Addfirst(10);
singleLL.Addlast(30);





singleLL.AddAtindex(2,25);

 singleLL.removefirst();
 singleLL.removeLast();
singleLL.print();

var size = singleLL.size();
console.log(size);
