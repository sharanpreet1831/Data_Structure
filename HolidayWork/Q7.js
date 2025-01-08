class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function lowestCommonAncestor(root, p, q) {
    if (root === null || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    // If both left and right are non-null, current node is the LCA
    if (left !== null && right !== null) return root;

    // Return non-null subtree
    return left !== null ? left : right;
}

// Example Usage
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

const p = root.left.left; 
const q = root.left.right.left; 

const lca = lowestCommonAncestor(root, p, q);
console.log("LCA:", lca.value);