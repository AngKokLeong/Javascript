const _getHeight = (tree) => (isEmpty(tree) ? 0 : tree.height);

const newNode = (key) => ({

    key, 
    left: null,
    right: null, 
    height: 1
});

const print = (tree, s = "") => {
    if (tree != null) {
        console.log(s, tree.key);
        print(tree.left, `${s} L:`);
        print(tree.right, `${s} R:`);
    }
};

