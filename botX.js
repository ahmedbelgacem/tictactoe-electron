function Node(data, traverse) {
  this.data = data;
  this.traverse = traverse;
  this.parent = null;
  this.children = [];
}
function Tree(data) {
  var node = new Node(data);
  this._root = node;
}
function _init_X() {
  //map for X
  var treeForX = new Tree(0);
  //always play 0
  treeForX._root.children.push(new Node(4, 1));
  treeForX._root.children[0].parent = treeForX;
  treeForX._root.children.push(new Node(6, 2));
  treeForX._root.children[1].parent = treeForX;
  treeForX._root.children.push(new Node(4, 3));
  treeForX._root.children[2].parent = treeForX;
  treeForX._root.children.push(new Node(8, 4));
  treeForX._root.children[3].parent = treeForX;
  treeForX._root.children.push(new Node(4, 5));
  treeForX._root.children[4].parent = treeForX;
  treeForX._root.children.push(new Node(2, 6));
  treeForX._root.children[5].parent = treeForX;
  treeForX._root.children.push(new Node(4, 7));
  treeForX._root.children[6].parent = treeForX;
  treeForX._root.children.push(new Node(2, 8));
  treeForX._root.children[7].parent = treeForX;
  //if he played 1
  treeForX._root.children[0].children.push(new Node(8, 2));
  treeForX._root.children[0].children[0].parent = treeForX._root.children[0];
  treeForX._root.children[0].children.push(new Node(8, 3));
  treeForX._root.children[0].children[1].parent = treeForX._root.children[0];
  treeForX._root.children[0].children.push(new Node(8, 5));
  treeForX._root.children[0].children[2].parent = treeForX._root.children[0];
  treeForX._root.children[0].children.push(new Node(8, 6));
  treeForX._root.children[0].children[3].parent = treeForX._root.children[0];
  treeForX._root.children[0].children.push(new Node(8, 7));
  treeForX._root.children[0].children[4].parent = treeForX._root.children[0];
  treeForX._root.children[0].children.push(new Node(6, 8));
  treeForX._root.children[0].children[5].parent = treeForX._root.children[0];
  // if he played 1_8
  treeForX._root.children[0].children[5].children.push(new Node(3, 2));
  treeForX._root.children[0].children[5].children[0].parent =
    treeForX._root.children[0].children[5];
  treeForX._root.children[0].children[5].children.push(new Node(2, 3));
  treeForX._root.children[0].children[5].children[1].parent =
    treeForX._root.children[0].children[5];
  treeForX._root.children[0].children[5].children.push(new Node(3, 5));
  treeForX._root.children[0].children[5].children[2].parent =
    treeForX._root.children[0].children[5];
  treeForX._root.children[0].children[5].children.push(new Node(3, 7));
  treeForX._root.children[0].children[5].children[3].parent =
    treeForX._root.children[0].children[5];
  //if he played 2
  treeForX._root.children[1].children.push(new Node(3, 1));
  treeForX._root.children[1].children[0].parent = treeForX._root.children[1];
  treeForX._root.children[1].children.push(new Node(8, 3));
  treeForX._root.children[1].children[1].parent = treeForX._root.children[1];
  treeForX._root.children[1].children.push(new Node(3, 4));
  treeForX._root.children[1].children[2].parent = treeForX._root.children[1];
  treeForX._root.children[1].children.push(new Node(3, 5));
  treeForX._root.children[1].children[3].parent = treeForX._root.children[1];
  treeForX._root.children[1].children.push(new Node(3, 7));
  treeForX._root.children[1].children[4].parent = treeForX._root.children[1];
  treeForX._root.children[1].children.push(new Node(3, 8));
  treeForX._root.children[1].children[5].parent = treeForX._root.children[1];
  //if he played 2_3
  treeForX._root.children[1].children[1].children.push(new Node(7, 1));
  treeForX._root.children[1].children[1].children[0].parent =
    treeForX._root.children[1].children[1];
  treeForX._root.children[1].children[1].children.push(new Node(7, 4));
  treeForX._root.children[1].children[1].children[1].parent =
    treeForX._root.children[1].children[1];
  treeForX._root.children[1].children[1].children.push(new Node(7, 5));
  treeForX._root.children[1].children[1].children[2].parent =
    treeForX._root.children[1].children[1];
  treeForX._root.children[1].children[1].children.push(new Node(4, 7));
  treeForX._root.children[1].children[1].children[3].parent =
    treeForX._root.children[1].children[1];
  //if he played 3
  treeForX._root.children[2].children.push(new Node(8, 1));
  treeForX._root.children[2].children[0].parent = treeForX._root.children[2];
  treeForX._root.children[2].children.push(new Node(8, 2));
  treeForX._root.children[2].children[1].parent = treeForX._root.children[2];
  treeForX._root.children[2].children.push(new Node(8, 5));
  treeForX._root.children[2].children[2].parent = treeForX._root.children[2];
  treeForX._root.children[2].children.push(new Node(8, 6));
  treeForX._root.children[2].children[3].parent = treeForX._root.children[2];
  treeForX._root.children[2].children.push(new Node(8, 7));
  treeForX._root.children[2].children[4].parent = treeForX._root.children[2];
  treeForX._root.children[2].children.push(new Node(2, 8));
  treeForX._root.children[2].children[5].parent = treeForX._root.children[2];
  //if he played 3_8
  treeForX._root.children[2].children[5].children.push(new Node(6, 1));
  treeForX._root.children[2].children[5].children[0].parent =
    treeForX._root.children[2].children[5];
  treeForX._root.children[2].children[5].children.push(new Node(1, 5));
  treeForX._root.children[2].children[5].children[1].parent =
    treeForX._root.children[2].children[5];
  treeForX._root.children[2].children[5].children.push(new Node(1, 6));
  treeForX._root.children[2].children[5].children[2].parent =
    treeForX._root.children[2].children[5];
  treeForX._root.children[2].children[5].children.push(new Node(1, 7));
  treeForX._root.children[2].children[5].children[3].parent =
    treeForX._root.children[2].children[5];
  //if he played 4
  treeForX._root.children[3].children.push(new Node(7, 1));
  treeForX._root.children[3].children[0].parent = treeForX._root.children[3];
  treeForX._root.children[3].children.push(new Node(6, 2));
  treeForX._root.children[3].children[1].parent = treeForX._root.children[3];
  treeForX._root.children[3].children.push(new Node(5, 3));
  treeForX._root.children[3].children[2].parent = treeForX._root.children[3];
  treeForX._root.children[3].children.push(new Node(3, 5));
  treeForX._root.children[3].children[3].parent = treeForX._root.children[3];
  treeForX._root.children[3].children.push(new Node(2, 6));
  treeForX._root.children[3].children[4].parent = treeForX._root.children[3];
  treeForX._root.children[3].children.push(new Node(1, 7));
  treeForX._root.children[3].children[5].parent = treeForX._root.children[3];
  //if he played 4_1
  treeForX._root.children[3].children[0].children.push(new Node(6, 2));
  treeForX._root.children[3].children[0].children[0].parent =
    treeForX._root.children[3].children[0];
  treeForX._root.children[3].children[0].children.push(new Node(6, 3));
  treeForX._root.children[3].children[0].children[1].parent =
    treeForX._root.children[3].children[0];
  treeForX._root.children[3].children[0].children.push(new Node(6, 5));
  treeForX._root.children[3].children[0].children[2].parent =
    treeForX._root.children[3].children[0];
  treeForX._root.children[3].children[0].children.push(new Node(2, 6));
  treeForX._root.children[3].children[0].children[3].parent =
    treeForX._root.children[3].children[0];
  //if he played 4_1_6
  treeForX._root.children[3].children[0].children[3].children.push(
    new Node(5, 3)
  );
  treeForX._root.children[3].children[0].children[3].children[0].parent =
    treeForX._root.children[3].children[0].children[3];
  treeForX._root.children[3].children[0].children[3].children.push(
    new Node(3, 5)
  );
  treeForX._root.children[3].children[0].children[3].children[1].parent =
    treeForX._root.children[3].children[0].children[3];
  //if he played 4_2
  treeForX._root.children[3].children[1].children.push(new Node(3, 1));
  treeForX._root.children[3].children[1].children[0].parent =
    treeForX._root.children[3].children[1];
  treeForX._root.children[3].children[1].children.push(new Node(7, 3));
  treeForX._root.children[3].children[1].children[1].parent =
    treeForX._root.children[3].children[1];
  treeForX._root.children[3].children[1].children.push(new Node(7, 5));
  treeForX._root.children[3].children[1].children[2].parent =
    treeForX._root.children[3].children[1];
  treeForX._root.children[3].children[1].children.push(new Node(3, 7));
  treeForX._root.children[3].children[1].children[3].parent =
    treeForX._root.children[3].children[1];
  //if he played 4_3
  treeForX._root.children[3].children[2].children.push(new Node(2, 1));
  treeForX._root.children[3].children[2].children[0].parent =
    treeForX._root.children[3].children[2];
  treeForX._root.children[3].children[2].children.push(new Node(6, 2));
  treeForX._root.children[3].children[2].children[1].parent =
    treeForX._root.children[3].children[2];
  treeForX._root.children[3].children[2].children.push(new Node(2, 6));
  treeForX._root.children[3].children[2].children[2].parent =
    treeForX._root.children[3].children[2];
  treeForX._root.children[3].children[2].children.push(new Node(2, 7));
  treeForX._root.children[3].children[2].children[3].parent =
    treeForX._root.children[3].children[2];
  //if he played 4_3_2
  treeForX._root.children[3].children[2].children[1].children.push(
    new Node(7, 1)
  );
  treeForX._root.children[3].children[2].children[1].children[0].parent =
    treeForX._root.children[3].children[2].children[1];
  treeForX._root.children[3].children[2].children[1].children.push(
    new Node(1, 7)
  );
  treeForX._root.children[3].children[2].children[1].children[1].parent =
    treeForX._root.children[3].children[2].children[1];
  //if he played 4_5
  treeForX._root.children[3].children[3].children.push(new Node(6, 1));
  treeForX._root.children[3].children[3].children[0].parent =
    treeForX._root.children[3].children[3];
  treeForX._root.children[3].children[3].children.push(new Node(6, 2));
  treeForX._root.children[3].children[3].children[1].parent =
    treeForX._root.children[3].children[3];
  treeForX._root.children[3].children[3].children.push(new Node(2, 6));
  treeForX._root.children[3].children[3].children[2].parent =
    treeForX._root.children[3].children[3];
  treeForX._root.children[3].children[3].children.push(new Node(6, 7));
  treeForX._root.children[3].children[3].children[3].parent =
    treeForX._root.children[3].children[3];
  //if he played 4_5_6
  treeForX._root.children[3].children[3].children[2].children.push(
    new Node(7, 1)
  );
  treeForX._root.children[3].children[3].children[2].children[0].parent =
    treeForX._root.children[3].children[3].children[2];
  treeForX._root.children[3].children[3].children[2].children.push(
    new Node(1, 7)
  );
  treeForX._root.children[3].children[3].children[2].children[1].parent =
    treeForX._root.children[3].children[3].children[2];
  //if he played 4_6
  treeForX._root.children[3].children[4].children.push(new Node(5, 1));
  treeForX._root.children[3].children[4].children[0].parent =
    treeForX._root.children[3].children[4];
  treeForX._root.children[3].children[4].children.push(new Node(1, 3));
  treeForX._root.children[3].children[4].children[1].parent =
    treeForX._root.children[3].children[4];
  treeForX._root.children[3].children[4].children.push(new Node(1, 5));
  treeForX._root.children[3].children[4].children[2].parent =
    treeForX._root.children[3].children[4];
  treeForX._root.children[3].children[4].children.push(new Node(5, 7));
  treeForX._root.children[3].children[4].children[3].parent =
    treeForX._root.children[3].children[4];
  //if he played 4_7
  treeForX._root.children[3].children[5].children.push(new Node(6, 2));
  treeForX._root.children[3].children[5].children[0].parent =
    treeForX._root.children[3].children[5];
  treeForX._root.children[3].children[5].children.push(new Node(2, 3));
  treeForX._root.children[3].children[5].children[1].parent =
    treeForX._root.children[3].children[5];
  treeForX._root.children[3].children[5].children.push(new Node(2, 5));
  treeForX._root.children[3].children[5].children[2].parent =
    treeForX._root.children[3].children[5];
  treeForX._root.children[3].children[5].children.push(new Node(2, 6));
  treeForX._root.children[3].children[5].children[3].parent =
    treeForX._root.children[3].children[5];
  //if he played 4_7_2
  treeForX._root.children[3].children[5].children[0].children.push(
    new Node(5, 3)
  );
  treeForX._root.children[3].children[5].children[0].children[0].parent =
    treeForX._root.children[3].children[5].children[0];
  treeForX._root.children[3].children[5].children[0].children.push(
    new Node(3, 5)
  );
  treeForX._root.children[3].children[5].children[0].children[1].parent =
    treeForX._root.children[3].children[5].children[0];

  //if he played 5
  treeForX._root.children[4].children.push(new Node(8, 1));
  treeForX._root.children[4].children[0].parent = treeForX._root.children[4];
  treeForX._root.children[4].children.push(new Node(8, 2));
  treeForX._root.children[4].children[1].parent = treeForX._root.children[4];
  treeForX._root.children[4].children.push(new Node(8, 3));
  treeForX._root.children[4].children[2].parent = treeForX._root.children[4];
  treeForX._root.children[4].children.push(new Node(8, 6));
  treeForX._root.children[4].children[3].parent = treeForX._root.children[4];
  treeForX._root.children[4].children.push(new Node(8, 7));
  treeForX._root.children[4].children[4].parent = treeForX._root.children[4];
  treeForX._root.children[4].children.push(new Node(2, 8));
  treeForX._root.children[4].children[5].parent = treeForX._root.children[4];
  //if he played 5_8
  treeForX._root.children[4].children[5].children.push(new Node(6, 1));
  treeForX._root.children[4].children[5].children[0].parent =
    treeForX._root.children[4].children[5];
  treeForX._root.children[4].children[5].children.push(new Node(1, 3));
  treeForX._root.children[4].children[5].children[1].parent =
    treeForX._root.children[4].children[5];
  treeForX._root.children[4].children[5].children.push(new Node(1, 6));
  treeForX._root.children[4].children[5].children[2].parent =
    treeForX._root.children[4].children[5];
  treeForX._root.children[4].children[5].children.push(new Node(1, 7));
  treeForX._root.children[4].children[5].children[3].parent =
    treeForX._root.children[4].children[5];
  //if he played 6
  treeForX._root.children[5].children.push(new Node(8, 1));
  treeForX._root.children[5].children[0].parent = treeForX._root.children[5];
  treeForX._root.children[5].children.push(new Node(1, 3));
  treeForX._root.children[5].children[1].parent = treeForX._root.children[5];
  treeForX._root.children[5].children.push(new Node(1, 4));
  treeForX._root.children[5].children[2].parent = treeForX._root.children[5];
  treeForX._root.children[5].children.push(new Node(8, 5));
  treeForX._root.children[5].children[3].parent = treeForX._root.children[5];
  treeForX._root.children[5].children.push(new Node(1, 7));
  treeForX._root.children[5].children[4].parent = treeForX._root.children[5];
  treeForX._root.children[5].children.push(new Node(1, 8));
  treeForX._root.children[5].children[5].parent = treeForX._root.children[5];
  //if he played 6_1
  treeForX._root.children[5].children[0].children.push(new Node(5, 3));
  treeForX._root.children[5].children[0].children[0].parent =
    treeForX._root.children[5].children[0];
  treeForX._root.children[5].children[0].children.push(new Node(5, 4));
  treeForX._root.children[5].children[0].children[1].parent =
    treeForX._root.children[5].children[0];
  treeForX._root.children[5].children[0].children.push(new Node(4, 5));
  treeForX._root.children[5].children[0].children[2].parent =
    treeForX._root.children[5].children[0];
  treeForX._root.children[5].children[0].children.push(new Node(5, 7));
  treeForX._root.children[5].children[0].children[3].parent =
    treeForX._root.children[5].children[0];
  //if he played 7
  treeForX._root.children[6].children.push(new Node(8, 1));
  treeForX._root.children[6].children[0].parent = treeForX._root.children[6];
  treeForX._root.children[6].children.push(new Node(8, 2));
  treeForX._root.children[6].children[1].parent = treeForX._root.children[6];
  treeForX._root.children[6].children.push(new Node(8, 3));
  treeForX._root.children[6].children[2].parent = treeForX._root.children[6];
  treeForX._root.children[6].children.push(new Node(8, 5));
  treeForX._root.children[6].children[3].parent = treeForX._root.children[6];
  treeForX._root.children[6].children.push(new Node(8, 6));
  treeForX._root.children[6].children[4].parent = treeForX._root.children[6];
  treeForX._root.children[6].children.push(new Node(7, 8));
  treeForX._root.children[6].children[5].parent = treeForX._root.children[6];
  //if he played 7_8
  treeForX._root.children[6].children[5].children.push(new Node(3, 1));
  treeForX._root.children[6].children[5].children[0].parent =
    treeForX._root.children[6].children[5];
  treeForX._root.children[6].children[5].children.push(new Node(3, 2));
  treeForX._root.children[6].children[5].children[1].parent =
    treeForX._root.children[6].children[5];
  treeForX._root.children[6].children[5].children.push(new Node(2, 3));
  treeForX._root.children[6].children[5].children[2].parent =
    treeForX._root.children[6].children[5];
  treeForX._root.children[6].children[5].children.push(new Node(3, 5));
  treeForX._root.children[6].children[5].children[3].parent =
    treeForX._root.children[6].children[5];
  //if he played 8
  treeForX._root.children[7].children.push(new Node(6, 1));
  treeForX._root.children[7].children[0].parent = treeForX._root.children[7];
  treeForX._root.children[7].children.push(new Node(1, 3));
  treeForX._root.children[7].children[1].parent = treeForX._root.children[7];
  treeForX._root.children[7].children.push(new Node(1, 4));
  treeForX._root.children[7].children[2].parent = treeForX._root.children[7];
  treeForX._root.children[7].children.push(new Node(1, 5));
  treeForX._root.children[7].children[3].parent = treeForX._root.children[7];
  treeForX._root.children[7].children.push(new Node(1, 6));
  treeForX._root.children[7].children[4].parent = treeForX._root.children[7];
  treeForX._root.children[7].children.push(new Node(1, 7));
  treeForX._root.children[7].children[5].parent = treeForX._root.children[7];
  //if he played 8_1
  treeForX._root.children[7].children[0].children.push(new Node(4, 3));
  treeForX._root.children[7].children[0].children[0].parent =
    treeForX._root.children[7].children[0];
  treeForX._root.children[7].children[0].children.push(new Node(3, 4));
  treeForX._root.children[7].children[0].children[1].parent =
    treeForX._root.children[7].children[0];
  treeForX._root.children[7].children[0].children.push(new Node(3, 5));
  treeForX._root.children[7].children[0].children[2].parent =
    treeForX._root.children[7].children[0];
  treeForX._root.children[7].children[0].children.push(new Node(3, 7));
  treeForX._root.children[7].children[0].children[3].parent =
    treeForX._root.children[7].children[0];
  return treeForX;
}
