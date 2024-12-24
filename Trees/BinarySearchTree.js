class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;

    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    isTreeEmpty() {
        return this.root === null;
    }
    makeTree(val) {
        let newnode = new Node(val);
        if (this.isTreeEmpty()) {
            this.root = newnode
        }

        else {
            this.insertNode(this.root, newnode)
        }
    }
    insertNode(root, newnode) {
        if (newnode.value < root.value) {
            if (root.left === null) {
                root.left = newnode;
            } else {
                this.insertNode(root.left, newnode);
            }
        } else {
            if (root.right === null) {
                root.right = newnode;
            } else {
                this.insertNode(root.right, newnode);
            }
        }
    }
    search(root,val){
        if(root  === null){
            return false ;
        }
        else if (root.value === val ){
            return true ;

        } 
        else if (val > root.value){
            return this.search(root.right,val)
        }
        else if (root.value > val ) {
            return this.search(root.left , val)
        }
        else {
            return false; 
        }
    }
    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);

        }
    }
    inorder(root){
        if(root){
          
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);

        }
    }
    postorder(root){
        if(root){
          
            this.postorder(root.left);
           
            this.postorder(root.right);
            console.log(root.value);

        }
    }
    bfstraversing(){
        let queue = [];
        queue.push (this.root);
        while (queue.length){
            let current = queue.shift();
            if(current.left){
                queue.push(current.left);

            }
            if(current.right){
                queue.push(current.right);
            }
            console.log(current.value);
        }
    }
    minvalue(root){
        if(!root.left){
           return root.value
        }
        else {
            return this.minvalue(root.left);
        }

    }
    maxvalue(root){
        if(!root.right){
            return root.value
        }
        else {
            return this.maxvalue(root.right)
        }
    }
    removeData(value){
        this.root = this.deleteNode(this.root, value )
    }
    deleteNode(root, value){
        if (root === null){
            return null ;
        }
        if (value < root.value ){
            root.left = this.deleteNode(root.left,value)
        } else if ( value > root.value){
            root.rigth = this.deleteNode(root.right,value );
        } else {
            if (!root.left && !root.right){
                return null;

            } else if (!root.left){
                return root.right;
            } else if (!root.right){
                return root.left;
            }
            root.value = this.minvalue(root.right);
            root.right = this.deleteNode(root.right,root.value)
        }
        return root; 

    }

}

let bst = new BinaryTree();
// bst.makeTree(19);
bst.makeTree(10);
bst.makeTree(5);
bst.makeTree(11);
bst.makeTree(30);
bst.makeTree(20);
bst.makeTree(40);
 
// console.log(bst.minvalue(bst.root));
// console.log(bst.maxvalue(bst.root))
//bst.bfstraversing();
//console.log(bst.search(bst.root,5));
//console.log(bst)
bst.preorder(bst.root);
// console.log(" ");
// bst.removeData(5);
// bst.inorder(bst.root);
