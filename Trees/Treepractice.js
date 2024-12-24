class Node {
    constructor(value ){
        this.value = value ;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchtree {
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root === null;
    }
    makeTree(val){
        let newnode = new Node(val);
        if(this.isEmpty()){
            this.root = newnode ;
        }
        else {
            this.insert(this.root,newnode)
        }

    }
    insert(root,newnode){
        if(newnode.value < root.value ){
            if(root.left === null ){
                root.left = newnode
            }
            else {
                this.insert(root.left , newnode)
            }
        }
    }

}

let bst = new BinarySearchtree();
bst.makeTree(25);
console.log(bst.isEmpty());
