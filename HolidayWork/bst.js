class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

function bst(num) {
    function helper(left, right) {
        if (left > right) return null;
        const mid = Math.floor((left + right) / 2);

        const newNode = new Node(num[mid]);

        newNode.left = helper(left, mid - 1);
        newNode.right = helper(mid + 1, right);
        return newNode;
    }
    return helper(0, num.length - 1);
}

function printInOrder(root) {
    if (!root) return;
    printInOrder(root.left);
    console.log(root.value);
    printInOrder(root.right);
}

const arr = [1, 2, 3, 4, 5, 6];
const result = bst(arr);


printInOrder(result);