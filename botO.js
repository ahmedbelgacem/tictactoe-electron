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
function _init_O() {
  //map for O
  var treeForO = new Tree();
  treeForO._root.children.push(new Node(4, 0));
  treeForO._root.children[0].parent = treeForO;
  treeForO._root.children.push(new Node(4, 1));
  treeForO._root.children[1].parent = treeForO;
  treeForO._root.children.push(new Node(4, 2));
  treeForO._root.children[2].parent = treeForO;
  treeForO._root.children.push(new Node(4, 3));
  treeForO._root.children[3].parent = treeForO;
  treeForO._root.children.push(new Node(0, 4));
  treeForO._root.children[4].parent = treeForO;
  treeForO._root.children.push(new Node(4, 5));
  treeForO._root.children[5].parent = treeForO;
  treeForO._root.children.push(new Node(4, 6));
  treeForO._root.children[6].parent = treeForO;
  treeForO._root.children.push(new Node(4, 8));
  treeForO._root.children[7].parent = treeForO;
  treeForO._root.children.push(new Node(4, 8));
  treeForO._root.children[8].parent = treeForO;
  //if he played 0
  treeForO._root.children[0].children.push(new Node(2, 1));
  treeForO._root.children[0].children[0].parent = treeForO._root.children[0];
  treeForO._root.children[0].children.push(new Node(1, 2));
  treeForO._root.children[0].children[1].parent = treeForO._root.children[0];
  treeForO._root.children[0].children.push(new Node(6, 3));
  treeForO._root.children[0].children[2].parent = treeForO._root.children[0];
  treeForO._root.children[0].children.push(new Node(8, 5));
  treeForO._root.children[0].children[3].parent = treeForO._root.children[0];
  treeForO._root.children[0].children.push(new Node(3, 6));
  treeForO._root.children[0].children[4].parent = treeForO._root.children[0];
  treeForO._root.children[0].children.push(new Node(8, 7));
  treeForO._root.children[0].children[5].parent = treeForO._root.children[0];
  treeForO._root.children[0].children.push(new Node(7, 8));
  treeForO._root.children[0].children[6].parent = treeForO._root.children[0];
  // if he played 0_1
  treeForO._root.children[0].children[0].children.push(new Node(6, 3));
  treeForO._root.children[0].children[0].children[0].parent =
    treeForO._root.children[0].children[0];
  treeForO._root.children[0].children[0].children.push(new Node(6, 5));
  treeForO._root.children[0].children[0].children[1].parent =
    treeForO._root.children[0].children[0];
  treeForO._root.children[0].children[0].children.push(new Node(3, 6));
  treeForO._root.children[0].children[0].children[2].parent =
    treeForO._root.children[0].children[0];
  treeForO._root.children[0].children[0].children.push(new Node(6, 7));
  treeForO._root.children[0].children[0].children[3].parent =
    treeForO._root.children[0].children[0];
  treeForO._root.children[0].children[0].children.push(new Node(6, 8));
  treeForO._root.children[0].children[0].children[4].parent =
    treeForO._root.children[0].children[0];
  // if he played 0_1_6
  treeForO._root.children[0].children[0].children[2].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[0].children[0].children[2].children[0].parent =
    treeForO._root.children[0].children[0].children[2];
  treeForO._root.children[0].children[0].children[2].children.push(
    new Node(5, 7)
  );
  treeForO._root.children[0].children[0].children[2].children[1].parent =
    treeForO._root.children[0].children[0].children[2];
  treeForO._root.children[0].children[0].children[2].children.push(
    new Node(5, 8)
  );
  treeForO._root.children[0].children[0].children[2].children[2].parent =
    treeForO._root.children[0].children[0].children[2];
  // if he played 0_2
  treeForO._root.children[0].children[1].children.push(new Node(7, 3));
  treeForO._root.children[0].children[1].children[0].parent =
    treeForO._root.children[0].children[1];
  treeForO._root.children[0].children[1].children.push(new Node(7, 5));
  treeForO._root.children[0].children[1].children[1].parent =
    treeForO._root.children[0].children[1];
  treeForO._root.children[0].children[1].children.push(new Node(7, 6));
  treeForO._root.children[0].children[1].children[2].parent =
    treeForO._root.children[0].children[1];
  treeForO._root.children[0].children[1].children.push(new Node(3, 7));
  treeForO._root.children[0].children[1].children[3].parent =
    treeForO._root.children[0].children[1];
  treeForO._root.children[0].children[1].children.push(new Node(7, 8));
  treeForO._root.children[0].children[1].children[4].parent =
    treeForO._root.children[0].children[1];
  // if he played 0_2_7
  treeForO._root.children[0].children[1].children[3].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[0].children[1].children[3].children[0].parent =
    treeForO._root.children[0].children[1].children[3];
  treeForO._root.children[0].children[1].children[3].children.push(
    new Node(5, 6)
  );
  treeForO._root.children[0].children[1].children[3].children[1].parent =
    treeForO._root.children[0].children[1].children[3];
  treeForO._root.children[0].children[1].children[3].children.push(
    new Node(5, 8)
  );
  treeForO._root.children[0].children[1].children[3].children[2].parent =
    treeForO._root.children[0].children[1].children[3];
  // if he played 0_3
  treeForO._root.children[0].children[2].children.push(new Node(2, 1));
  treeForO._root.children[0].children[2].children[0].parent =
    treeForO._root.children[0].children[2];
  treeForO._root.children[0].children[2].children.push(new Node(1, 2));
  treeForO._root.children[0].children[2].children[1].parent =
    treeForO._root.children[0].children[2];
  treeForO._root.children[0].children[2].children.push(new Node(2, 5));
  treeForO._root.children[0].children[2].children[2].parent =
    treeForO._root.children[0].children[2];
  treeForO._root.children[0].children[2].children.push(new Node(2, 7));
  treeForO._root.children[0].children[2].children[3].parent =
    treeForO._root.children[0].children[2];
  treeForO._root.children[0].children[2].children.push(new Node(2, 8));
  treeForO._root.children[0].children[2].children[4].parent =
    treeForO._root.children[0].children[2];
  // if he played 0_3_2
  treeForO._root.children[0].children[2].children[1].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[0].children[2].children[1].children[0].parent =
    treeForO._root.children[0].children[2].children[1];
  treeForO._root.children[0].children[2].children[1].children.push(
    new Node(8, 7)
  );
  treeForO._root.children[0].children[2].children[1].children[1].parent =
    treeForO._root.children[0].children[2].children[1];
  treeForO._root.children[0].children[2].children[1].children.push(
    new Node(5, 8)
  );
  treeForO._root.children[0].children[2].children[1].children[2].parent =
    treeForO._root.children[0].children[2].children[1];
  // if he played 0_5
  treeForO._root.children[0].children[3].children.push(new Node(2, 1));
  treeForO._root.children[0].children[3].children[0].parent =
    treeForO._root.children[0].children[3];
  treeForO._root.children[0].children[3].children.push(new Node(1, 2));
  treeForO._root.children[0].children[3].children[1].parent =
    treeForO._root.children[0].children[3];
  treeForO._root.children[0].children[3].children.push(new Node(6, 3));
  treeForO._root.children[0].children[3].children[2].parent =
    treeForO._root.children[0].children[3];
  treeForO._root.children[0].children[3].children.push(new Node(3, 6));
  treeForO._root.children[0].children[3].children[3].parent =
    treeForO._root.children[0].children[3];
  treeForO._root.children[0].children[3].children.push(new Node(6, 7));
  treeForO._root.children[0].children[3].children[4].parent =
    treeForO._root.children[0].children[3];
  // if he played 0_5_1
  treeForO._root.children[0].children[3].children[0].children.push(
    new Node(6, 3)
  );
  treeForO._root.children[0].children[3].children[0].children[0].parent =
    treeForO._root.children[0].children[3].children[0];
  treeForO._root.children[0].children[3].children[0].children.push(
    new Node(3, 6)
  );
  treeForO._root.children[0].children[3].children[0].children[1].parent =
    treeForO._root.children[0].children[3].children[0];
  treeForO._root.children[0].children[3].children[0].children.push(
    new Node(6, 7)
  );
  treeForO._root.children[0].children[3].children[0].children[2].parent =
    treeForO._root.children[0].children[3].children[0];
  // if he played 0-5_2
  treeForO._root.children[0].children[3].children[1].children.push(
    new Node(7, 3)
  );
  treeForO._root.children[0].children[3].children[1].children[0].parent =
    treeForO._root.children[0].children[3].children[1];
  treeForO._root.children[0].children[3].children[1].children.push(
    new Node(7, 6)
  );
  treeForO._root.children[0].children[3].children[1].children[1].parent =
    treeForO._root.children[0].children[3].children[1];
  treeForO._root.children[0].children[3].children[1].children.push(
    new Node(3, 7)
  );
  treeForO._root.children[0].children[3].children[1].children[2].parent =
    treeForO._root.children[0].children[3].children[1];
  // if he played 0-5_3
  treeForO._root.children[0].children[3].children[2].children.push(
    new Node(2, 1)
  );
  treeForO._root.children[0].children[3].children[2].children[0].parent =
    treeForO._root.children[0].children[3].children[2];
  treeForO._root.children[0].children[3].children[2].children.push(
    new Node(1, 2)
  );
  treeForO._root.children[0].children[3].children[2].children[1].parent =
    treeForO._root.children[0].children[3].children[2];
  treeForO._root.children[0].children[3].children[2].children.push(
    new Node(2, 7)
  );
  treeForO._root.children[0].children[3].children[2].children[2].parent =
    treeForO._root.children[0].children[3].children[2];
  // if he played 0-5_6
  treeForO._root.children[0].children[3].children[3].children.push(
    new Node(2, 1)
  );
  treeForO._root.children[0].children[3].children[3].children[0].parent =
    treeForO._root.children[0].children[3].children[3];
  treeForO._root.children[0].children[3].children[3].children.push(
    new Node(1, 2)
  );
  treeForO._root.children[0].children[3].children[3].children[1].parent =
    treeForO._root.children[0].children[3].children[3];
  treeForO._root.children[0].children[3].children[3].children.push(
    new Node(2, 7)
  );
  treeForO._root.children[0].children[3].children[3].children[2].parent =
    treeForO._root.children[0].children[3].children[3];
  // if he played 0-5_7
  treeForO._root.children[0].children[3].children[4].children.push(
    new Node(2, 1)
  );
  treeForO._root.children[0].children[3].children[4].children[0].parent =
    treeForO._root.children[0].children[3].children[4];
  treeForO._root.children[0].children[3].children[4].children.push(
    new Node(1, 2)
  );
  treeForO._root.children[0].children[3].children[4].children[1].parent =
    treeForO._root.children[0].children[3].children[4];
  treeForO._root.children[0].children[3].children[4].children.push(
    new Node(2, 3)
  );
  treeForO._root.children[0].children[3].children[4].children[2].parent =
    treeForO._root.children[0].children[3].children[4];
  // if he played 0_6
  treeForO._root.children[0].children[4].children.push(new Node(5, 1));
  treeForO._root.children[0].children[4].children[0].parent =
    treeForO._root.children[0].children[4];
  treeForO._root.children[0].children[4].children.push(new Node(5, 2));
  treeForO._root.children[0].children[4].children[1].parent =
    treeForO._root.children[0].children[4];
  treeForO._root.children[0].children[4].children.push(new Node(1, 5));
  treeForO._root.children[0].children[4].children[2].parent =
    treeForO._root.children[0].children[4];
  treeForO._root.children[0].children[4].children.push(new Node(5, 7));
  treeForO._root.children[0].children[4].children[3].parent =
    treeForO._root.children[0].children[4];
  treeForO._root.children[0].children[4].children.push(new Node(5, 8));
  treeForO._root.children[0].children[4].children[4].parent =
    treeForO._root.children[0].children[4];
  // if he played 0_6_5
  treeForO._root.children[0].children[4].children[3].children.push(
    new Node(7, 2)
  );
  treeForO._root.children[0].children[4].children[3].children[0].parent =
    treeForO._root.children[0].children[4].children[3];
  treeForO._root.children[0].children[4].children[3].children.push(
    new Node(8, 7)
  );
  treeForO._root.children[0].children[4].children[3].children[1].parent =
    treeForO._root.children[0].children[4].children[3];
  treeForO._root.children[0].children[4].children[3].children.push(
    new Node(7, 8)
  );
  treeForO._root.children[0].children[4].children[3].children[2].parent =
    treeForO._root.children[0].children[4].children[3];
  //if he played 0_7
  treeForO._root.children[0].children[5].children.push(new Node(2, 1));
  treeForO._root.children[0].children[5].children[0].parent =
    treeForO._root.children[0].children[5];
  treeForO._root.children[0].children[5].children.push(new Node(1, 2));
  treeForO._root.children[0].children[5].children[1].parent =
    treeForO._root.children[0].children[5];
  treeForO._root.children[0].children[5].children.push(new Node(6, 3));
  treeForO._root.children[0].children[5].children[2].parent =
    treeForO._root.children[0].children[5];
  treeForO._root.children[0].children[5].children.push(new Node(2, 5));
  treeForO._root.children[0].children[5].children[3].parent =
    treeForO._root.children[0].children[5];
  treeForO._root.children[0].children[5].children.push(new Node(3, 6));
  treeForO._root.children[0].children[5].children[4].parent =
    treeForO._root.children[0].children[5];
  //if he played 0_7_1
  treeForO._root.children[0].children[5].children[0].children.push(
    new Node(6, 3)
  );
  treeForO._root.children[0].children[5].children[0].children[0].parent =
    treeForO._root.children[0].children[5].children[0];
  treeForO._root.children[0].children[5].children[0].children.push(
    new Node(6, 5)
  );
  treeForO._root.children[0].children[5].children[0].children[1].parent =
    treeForO._root.children[0].children[5].children[0];
  treeForO._root.children[0].children[5].children[0].children.push(
    new Node(3, 6)
  );
  treeForO._root.children[0].children[5].children[0].children[2].parent =
    treeForO._root.children[0].children[5].children[0];
  //if he played 0_7_2
  treeForO._root.children[0].children[5].children[1].children.push(
    new Node(6, 3)
  );
  treeForO._root.children[0].children[5].children[1].children[0].parent =
    treeForO._root.children[0].children[5].children[1];
  treeForO._root.children[0].children[5].children[1].children.push(
    new Node(6, 5)
  );
  treeForO._root.children[0].children[5].children[1].children[1].parent =
    treeForO._root.children[0].children[5].children[1];
  treeForO._root.children[0].children[5].children[1].children.push(
    new Node(3, 6)
  );
  treeForO._root.children[0].children[5].children[1].children[2].parent =
    treeForO._root.children[0].children[5].children[1];
  //if he played 0_7_3
  treeForO._root.children[0].children[5].children[2].children.push(
    new Node(2, 1)
  );
  treeForO._root.children[0].children[5].children[2].children[0].parent =
    treeForO._root.children[0].children[5].children[2];
  treeForO._root.children[0].children[5].children[2].children.push(
    new Node(1, 2)
  );
  treeForO._root.children[0].children[5].children[2].children[1].parent =
    treeForO._root.children[0].children[5].children[2];
  treeForO._root.children[0].children[5].children[2].children.push(
    new Node(2, 2)
  );
  treeForO._root.children[0].children[5].children[2].children[2].parent =
    treeForO._root.children[0].children[5].children[2];
  //if he played 0_7_5
  treeForO._root.children[0].children[5].children[3].children.push(
    new Node(6, 1)
  );
  treeForO._root.children[0].children[5].children[3].children[0].parent =
    treeForO._root.children[0].children[5].children[3];
  treeForO._root.children[0].children[5].children[3].children.push(
    new Node(6, 3)
  );
  treeForO._root.children[0].children[5].children[3].children[1].parent =
    treeForO._root.children[0].children[5].children[3];
  treeForO._root.children[0].children[5].children[3].children.push(
    new Node(3, 6)
  );
  treeForO._root.children[0].children[5].children[3].children[2].parent =
    treeForO._root.children[0].children[5].children[3];
  //if he played 0_7_6
  treeForO._root.children[0].children[5].children[4].children.push(
    new Node(5, 1)
  );
  treeForO._root.children[0].children[5].children[4].children[0].parent =
    treeForO._root.children[0].children[5].children[4];
  treeForO._root.children[0].children[5].children[4].children.push(
    new Node(5, 2)
  );
  treeForO._root.children[0].children[5].children[4].children[1].parent =
    treeForO._root.children[0].children[5].children[4];
  treeForO._root.children[0].children[5].children[4].children.push(
    new Node(1, 5)
  );
  treeForO._root.children[0].children[5].children[4].children[2].parent =
    treeForO._root.children[0].children[5].children[4];
  // if he played 0_8
  treeForO._root.children[0].children[6].children.push(new Node(2, 1));
  treeForO._root.children[0].children[6].children[0].parent =
    treeForO._root.children[0].children[6];
  treeForO._root.children[0].children[6].children.push(new Node(1, 2));
  treeForO._root.children[0].children[6].children[1].parent =
    treeForO._root.children[0].children[6];
  treeForO._root.children[0].children[6].children.push(new Node(1, 3));
  treeForO._root.children[0].children[6].children[2].parent =
    treeForO._root.children[0].children[6];
  treeForO._root.children[0].children[6].children.push(new Node(1, 5));
  treeForO._root.children[0].children[6].children[3].parent =
    treeForO._root.children[0].children[6];
  treeForO._root.children[0].children[6].children.push(new Node(1, 7));
  treeForO._root.children[0].children[6].children[4].parent =
    treeForO._root.children[0].children[6];
  //if he played 0_7_6
  treeForO._root.children[0].children[6].children[0].children.push(
    new Node(6, 4)
  );
  treeForO._root.children[0].children[6].children[0].children[0].parent =
    treeForO._root.children[0].children[6].children[0];
  treeForO._root.children[0].children[6].children[0].children.push(
    new Node(6, 6)
  );
  treeForO._root.children[0].children[6].children[0].children[1].parent =
    treeForO._root.children[0].children[6].children[0];
  treeForO._root.children[0].children[6].children[0].children.push(
    new Node(4, 6)
  );
  treeForO._root.children[0].children[6].children[0].children[2].parent =
    treeForO._root.children[0].children[6].children[0];
  //if he played 1
  treeForO._root.children[1].children.push(new Node(2, 0));
  treeForO._root.children[1].children[0].parent = treeForO._root.children[0];
  treeForO._root.children[1].children.push(new Node(0, 2));
  treeForO._root.children[1].children[1].parent = treeForO._root.children[0];
  treeForO._root.children[1].children.push(new Node(0, 3));
  treeForO._root.children[1].children[2].parent = treeForO._root.children[0];
  treeForO._root.children[1].children.push(new Node(2, 5));
  treeForO._root.children[1].children[3].parent = treeForO._root.children[0];
  treeForO._root.children[1].children.push(new Node(0, 6));
  treeForO._root.children[1].children[4].parent = treeForO._root.children[0];
  treeForO._root.children[1].children.push(new Node(5, 7));
  treeForO._root.children[1].children[5].parent = treeForO._root.children[0];
  treeForO._root.children[1].children.push(new Node(0, 8));
  treeForO._root.children[1].children[6].parent = treeForO._root.children[0];
  // if he played 1_0
  treeForO._root.children[1].children[0].children.push(new Node(6, 3));
  treeForO._root.children[1].children[0].children[0].parent =
    treeForO._root.children[1].children[0];
  treeForO._root.children[1].children[0].children.push(new Node(6, 5));
  treeForO._root.children[1].children[0].children[1].parent =
    treeForO._root.children[1].children[0];
  treeForO._root.children[1].children[0].children.push(new Node(3, 6));
  treeForO._root.children[1].children[0].children[2].parent =
    treeForO._root.children[1].children[0];
  treeForO._root.children[1].children[0].children.push(new Node(6, 7));
  treeForO._root.children[1].children[0].children[3].parent =
    treeForO._root.children[1].children[0];
  treeForO._root.children[1].children[0].children.push(new Node(6, 8));
  treeForO._root.children[1].children[0].children[4].parent =
    treeForO._root.children[1].children[0];
  // if he played 1_0_6
  treeForO._root.children[1].children[0].children[2].children.push(
    new Node(7, 5)
  );
  treeForO._root.children[1].children[0].children[2].children[0].parent =
    treeForO._root.children[1].children[0].children[2];
  treeForO._root.children[1].children[0].children[2].children.push(
    new Node(5, 7)
  );
  treeForO._root.children[1].children[0].children[2].children[1].parent =
    treeForO._root.children[1].children[0].children[2];
  treeForO._root.children[1].children[0].children[2].children.push(
    new Node(5, 8)
  );
  treeForO._root.children[1].children[0].children[2].children[2].parent =
    treeForO._root.children[1].children[0].children[2];
  // if he played 1_2
  treeForO._root.children[1].children[1].children.push(new Node(8, 3));
  treeForO._root.children[1].children[1].children[0].parent =
    treeForO._root.children[1].children[1];
  treeForO._root.children[1].children[1].children.push(new Node(8, 5));
  treeForO._root.children[1].children[1].children[1].parent =
    treeForO._root.children[1].children[1];
  treeForO._root.children[1].children[1].children.push(new Node(8, 6));
  treeForO._root.children[1].children[1].children[2].parent =
    treeForO._root.children[1].children[1];
  treeForO._root.children[1].children[1].children.push(new Node(8, 7));
  treeForO._root.children[1].children[1].children[3].parent =
    treeForO._root.children[1].children[1];
  treeForO._root.children[1].children[1].children.push(new Node(5, 8));
  treeForO._root.children[1].children[1].children[4].parent =
    treeForO._root.children[1].children[1];
  // if he played 1_2_8
  treeForO._root.children[1].children[1].children[4].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[1].children[1].children[4].children[0].parent =
    treeForO._root.children[1].children[1].children[4];
  treeForO._root.children[1].children[1].children[4].children.push(
    new Node(5, 6)
  );
  treeForO._root.children[1].children[1].children[4].children[1].parent =
    treeForO._root.children[1].children[1].children[4];
  treeForO._root.children[1].children[1].children[4].children.push(
    new Node(5, 7)
  );
  treeForO._root.children[1].children[1].children[4].children[2].parent =
    treeForO._root.children[1].children[1].children[4];
  // if he played 1_3
  treeForO._root.children[1].children[2].children.push(new Node(8, 2));
  treeForO._root.children[1].children[2].children[0].parent =
    treeForO._root.children[1].children[2];
  treeForO._root.children[1].children[2].children.push(new Node(8, 5));
  treeForO._root.children[1].children[2].children[1].parent =
    treeForO._root.children[1].children[2];
  treeForO._root.children[1].children[2].children.push(new Node(8, 6));
  treeForO._root.children[1].children[2].children[2].parent =
    treeForO._root.children[1].children[2];
  treeForO._root.children[1].children[2].children.push(new Node(8, 7));
  treeForO._root.children[1].children[2].children[3].parent =
    treeForO._root.children[1].children[2];
  treeForO._root.children[1].children[2].children.push(new Node(2, 8));
  treeForO._root.children[1].children[2].children[4].parent =
    treeForO._root.children[1].children[2];
  // if he played 1_3_8
  treeForO._root.children[1].children[2].children[4].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[1].children[2].children[4].children[0].parent =
    treeForO._root.children[1].children[2].children[4];
  treeForO._root.children[1].children[2].children[4].children.push(
    new Node(8, 7)
  );
  treeForO._root.children[1].children[2].children[4].children[1].parent =
    treeForO._root.children[1].children[2].children[4];
  treeForO._root.children[1].children[2].children[4].children.push(
    new Node(5, 8)
  );
  treeForO._root.children[1].children[2].children[4].children[2].parent =
    treeForO._root.children[1].children[2].children[4];
  // if he played 1_5
  treeForO._root.children[1].children[3].children.push(new Node(6, 0));
  treeForO._root.children[1].children[3].children[0].parent =
    treeForO._root.children[1].children[3];
  treeForO._root.children[1].children[3].children.push(new Node(6, 3));
  treeForO._root.children[1].children[3].children[1].parent =
    treeForO._root.children[1].children[3];
  treeForO._root.children[1].children[3].children.push(new Node(0, 6));
  treeForO._root.children[1].children[3].children[2].parent =
    treeForO._root.children[1].children[3];
  treeForO._root.children[1].children[3].children.push(new Node(6, 7));
  treeForO._root.children[1].children[3].children[3].parent =
    treeForO._root.children[1].children[3];
  treeForO._root.children[1].children[3].children.push(new Node(6, 8));
  treeForO._root.children[1].children[3].children[4].parent =
    treeForO._root.children[1].children[3];
  // if he played 1_5_6
  treeForO._root.children[1].children[3].children[2].children.push(
    new Node(8, 3)
  );
  treeForO._root.children[1].children[3].children[2].children[0].parent =
    treeForO._root.children[1].children[3].children[2];
  treeForO._root.children[1].children[3].children[2].children.push(
    new Node(8, 7)
  );
  treeForO._root.children[1].children[3].children[2].children[1].parent =
    treeForO._root.children[1].children[3].children[2];
  treeForO._root.children[1].children[3].children[2].children.push(
    new Node(7, 8)
  );
  treeForO._root.children[1].children[3].children[2].children[2].parent =
    treeForO._root.children[1].children[3].children[2];
  // if he played 1_6
  treeForO._root.children[1].children[4].children.push(new Node(3, 0));
  treeForO._root.children[1].children[4].children[0].parent =
    treeForO._root.children[1].children[4];
  treeForO._root.children[1].children[4].children.push(new Node(0, 3));
  treeForO._root.children[1].children[4].children[1].parent =
    treeForO._root.children[1].children[4];
  treeForO._root.children[1].children[4].children.push(new Node(8, 5));
  treeForO._root.children[1].children[4].children[2].parent =
    treeForO._root.children[1].children[4];
  treeForO._root.children[1].children[4].children.push(new Node(8, 7));
  treeForO._root.children[1].children[4].children[3].parent =
    treeForO._root.children[1].children[4];
  treeForO._root.children[1].children[4].children.push(new Node(7, 8));
  treeForO._root.children[1].children[4].children[4].parent =
    treeForO._root.children[1].children[4];
  // if he played 1_6_0
  treeForO._root.children[1].children[4].children[0].children.push(
    new Node(7, 5)
  );
  treeForO._root.children[1].children[4].children[0].children[0].parent =
    treeForO._root.children[1].children[4].children[0];
  treeForO._root.children[1].children[4].children[0].children.push(
    new Node(5, 7)
  );
  treeForO._root.children[1].children[4].children[0].children[1].parent =
    treeForO._root.children[1].children[4].children[0];
  treeForO._root.children[1].children[4].children[0].children.push(
    new Node(5, 8)
  );
  treeForO._root.children[1].children[4].children[0].children[2].parent =
    treeForO._root.children[1].children[4].children[0];
  // if he played 1_6_3
  treeForO._root.children[1].children[4].children[1].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[1].children[4].children[1].children[0].parent =
    treeForO._root.children[1].children[4].children[1];
  treeForO._root.children[1].children[4].children[1].children.push(
    new Node(8, 7)
  );
  treeForO._root.children[1].children[4].children[1].children[1].parent =
    treeForO._root.children[1].children[4].children[1];
  treeForO._root.children[1].children[4].children[1].children.push(
    new Node(7, 8)
  );
  treeForO._root.children[1].children[4].children[1].children[2].parent =
    treeForO._root.children[1].children[4].children[1];
  // if he played 1_6_5
  treeForO._root.children[1].children[4].children[2].children.push(
    new Node(3, 0)
  );
  treeForO._root.children[1].children[4].children[2].children[0].parent =
    treeForO._root.children[1].children[4].children[2];
  treeForO._root.children[1].children[4].children[2].children.push(
    new Node(0, 3)
  );
  treeForO._root.children[1].children[4].children[2].children[1].parent =
    treeForO._root.children[1].children[4].children[2];
  treeForO._root.children[1].children[4].children[2].children.push(
    new Node(0, 7)
  );
  treeForO._root.children[1].children[4].children[2].children[2].parent =
    treeForO._root.children[1].children[4].children[2];
  // if he played 1_6_7
  treeForO._root.children[1].children[4].children[3].children.push(
    new Node(5, 0)
  );
  treeForO._root.children[1].children[4].children[3].children[0].parent =
    treeForO._root.children[1].children[4].children[3];
  treeForO._root.children[1].children[4].children[3].children.push(
    new Node(5, 3)
  );
  treeForO._root.children[1].children[4].children[3].children[1].parent =
    treeForO._root.children[1].children[4].children[3];
  treeForO._root.children[1].children[4].children[3].children.push(
    new Node(0, 5)
  );
  treeForO._root.children[1].children[4].children[3].children[2].parent =
    treeForO._root.children[1].children[4].children[3];
  // if he played 1_6_8
  treeForO._root.children[1].children[4].children[4].children.push(
    new Node(3, 0)
  );
  treeForO._root.children[1].children[4].children[4].children[0].parent =
    treeForO._root.children[1].children[4].children[4];
  treeForO._root.children[1].children[4].children[4].children.push(
    new Node(0, 3)
  );
  treeForO._root.children[1].children[4].children[4].children[1].parent =
    treeForO._root.children[1].children[4].children[4];
  treeForO._root.children[1].children[4].children[4].children.push(
    new Node(3, 5)
  );
  treeForO._root.children[1].children[4].children[4].children[2].parent =
    treeForO._root.children[1].children[4].children[4];
  // if he played 1_7
  treeForO._root.children[1].children[5].children.push(new Node(3, 0));
  treeForO._root.children[1].children[5].children[0].parent =
    treeForO._root.children[1].children[5];
  treeForO._root.children[1].children[5].children.push(new Node(3, 2));
  treeForO._root.children[1].children[5].children[1].parent =
    treeForO._root.children[1].children[5];
  treeForO._root.children[1].children[5].children.push(new Node(8, 3));
  treeForO._root.children[1].children[5].children[2].parent =
    treeForO._root.children[1].children[5];
  treeForO._root.children[1].children[5].children.push(new Node(3, 6));
  treeForO._root.children[1].children[5].children[3].parent =
    treeForO._root.children[1].children[5];
  treeForO._root.children[1].children[5].children.push(new Node(3, 8));
  treeForO._root.children[1].children[5].children[4].parent =
    treeForO._root.children[1].children[5];
  // if he played 1_7_3
  treeForO._root.children[1].children[5].children[2].children.push(
    new Node(2, 0)
  );
  treeForO._root.children[1].children[5].children[2].children[0].parent =
    treeForO._root.children[1].children[5].children[2];
  treeForO._root.children[1].children[5].children[2].children.push(
    new Node(0, 2)
  );
  treeForO._root.children[1].children[5].children[2].children[1].parent =
    treeForO._root.children[1].children[5].children[2];
  treeForO._root.children[1].children[0].children[2].children.push(
    new Node(2, 6)
  );
  // if he played 1_8
  treeForO._root.children[1].children[6].children.push(new Node(5, 2));
  treeForO._root.children[1].children[6].children[0].parent =
    treeForO._root.children[1].children[6];
  treeForO._root.children[1].children[6].children.push(new Node(6, 3));
  treeForO._root.children[1].children[6].children[1].parent =
    treeForO._root.children[1].children[6];
  treeForO._root.children[1].children[6].children.push(new Node(2, 5));
  treeForO._root.children[1].children[6].children[2].parent =
    treeForO._root.children[1].children[6];
  treeForO._root.children[1].children[6].children.push(new Node(7, 6));
  treeForO._root.children[1].children[6].children[3].parent =
    treeForO._root.children[1].children[6];
  treeForO._root.children[1].children[6].children.push(new Node(6, 7));
  treeForO._root.children[1].children[6].children[4].parent =
    treeForO._root.children[1].children[6];
  // if he played 1_8_2
  treeForO._root.children[1].children[6].children[0].children.push(
    new Node(7, 3)
  );
  treeForO._root.children[1].children[6].children[0].children[0].parent =
    treeForO._root.children[1].children[6].children[0];
  treeForO._root.children[1].children[6].children[0].children.push(
    new Node(3, 6)
  );
  treeForO._root.children[1].children[6].children[0].children[1].parent =
    treeForO._root.children[1].children[6].children[0];
  treeForO._root.children[1].children[6].children[0].children.push(
    new Node(3, 7)
  );
  treeForO._root.children[1].children[6].children[0].children[2].parent =
    treeForO._root.children[1].children[6].children[0];
  // if he played 1_8_3
  treeForO._root.children[1].children[6].children[1].children.push(
    new Node(5, 2)
  );
  treeForO._root.children[1].children[6].children[1].children[0].parent =
    treeForO._root.children[1].children[6].children[1];
  treeForO._root.children[1].children[6].children[1].children.push(
    new Node(2, 5)
  );
  treeForO._root.children[1].children[6].children[1].children[1].parent =
    treeForO._root.children[1].children[6].children[1];
  treeForO._root.children[1].children[6].children[1].children.push(
    new Node(2, 7)
  );
  treeForO._root.children[1].children[6].children[1].children[2].parent =
    treeForO._root.children[1].children[6].children[1];
  // if he played 1_8_5
  treeForO._root.children[1].children[6].children[2].children.push(
    new Node(6, 3)
  );
  treeForO._root.children[1].children[6].children[2].children[0].parent =
    treeForO._root.children[1].children[6].children[2];
  treeForO._root.children[1].children[6].children[2].children.push(
    new Node(7, 6)
  );
  treeForO._root.children[1].children[6].children[2].children[1].parent =
    treeForO._root.children[1].children[6].children[2];
  treeForO._root.children[1].children[6].children[2].children.push(
    new Node(6, 7)
  );
  treeForO._root.children[1].children[6].children[2].children[2].parent =
    treeForO._root.children[1].children[6].children[2];
  // if he played 1_8_6
  treeForO._root.children[1].children[6].children[3].children.push(
    new Node(5, 2)
  );
  treeForO._root.children[1].children[6].children[3].children[0].parent =
    treeForO._root.children[1].children[6].children[3];
  treeForO._root.children[1].children[6].children[3].children.push(
    new Node(5, 3)
  );
  treeForO._root.children[1].children[6].children[3].children[1].parent =
    treeForO._root.children[1].children[6].children[3];
  treeForO._root.children[1].children[6].children[3].children.push(
    new Node(2, 5)
  );
  treeForO._root.children[1].children[6].children[3].children[2].parent =
    treeForO._root.children[1].children[6].children[3];
  // if he played 1_8_7
  treeForO._root.children[1].children[6].children[4].children.push(
    new Node(3, 2)
  );
  treeForO._root.children[1].children[6].children[4].children[0].parent =
    treeForO._root.children[1].children[6].children[4];
  treeForO._root.children[1].children[6].children[4].children.push(
    new Node(2, 3)
  );
  treeForO._root.children[1].children[6].children[4].children[1].parent =
    treeForO._root.children[1].children[6].children[4];
  treeForO._root.children[1].children[6].children[4].children.push(
    new Node(3, 5)
  );
  treeForO._root.children[1].children[6].children[4].children[2].parent =
    treeForO._root.children[1].children[6].children[4];
  //if he played 2
  treeForO._root.children[2].children.push(new Node(1, 0));
  treeForO._root.children[2].children[0].parent = treeForO._root.children[2];
  treeForO._root.children[2].children.push(new Node(0, 1));
  treeForO._root.children[2].children[1].parent = treeForO._root.children[2];
  treeForO._root.children[2].children.push(new Node(6, 3));
  treeForO._root.children[2].children[2].parent = treeForO._root.children[2];
  treeForO._root.children[2].children.push(new Node(8, 5));
  treeForO._root.children[2].children[3].parent = treeForO._root.children[2];
  treeForO._root.children[2].children.push(new Node(3, 6));
  treeForO._root.children[2].children[4].parent = treeForO._root.children[2];
  treeForO._root.children[2].children.push(new Node(6, 7));
  treeForO._root.children[2].children[5].parent = treeForO._root.children[2];
  treeForO._root.children[2].children.push(new Node(5, 8));
  treeForO._root.children[2].children[6].parent = treeForO._root.children[2];
  //if he played 2_0
  treeForO._root.children[2].children[0].children.push(new Node(7, 3));
  treeForO._root.children[2].children[0].children[0].parent =
    treeForO._root.children[2].children[0];
  treeForO._root.children[2].children[0].children.push(new Node(7, 5));
  treeForO._root.children[2].children[0].children[1].parent =
    treeForO._root.children[2].children[0];
  treeForO._root.children[2].children[0].children.push(new Node(7, 6));
  treeForO._root.children[2].children[0].children[2].parent =
    treeForO._root.children[2].children[0];
  treeForO._root.children[2].children[0].children.push(new Node(5, 7));
  treeForO._root.children[2].children[0].children[3].parent =
    treeForO._root.children[2].children[0];
  treeForO._root.children[2].children[0].children.push(new Node(7, 8));
  treeForO._root.children[2].children[0].children[4].parent =
    treeForO._root.children[2].children[0];
  // if he played 2_0_7
  treeForO._root.children[2].children[0].children[3].children.push(
    new Node(6, 3)
  );
  treeForO._root.children[2].children[0].children[3].children[0].parent =
    treeForO._root.children[2].children[0].children[3];
  treeForO._root.children[2].children[0].children[3].children.push(
    new Node(3, 6)
  );
  treeForO._root.children[2].children[0].children[3].children[1].parent =
    treeForO._root.children[2].children[0].children[3];
  treeForO._root.children[2].children[0].children[3].children.push(
    new Node(3, 8)
  );
  treeForO._root.children[2].children[0].children[3].children[2].parent =
    treeForO._root.children[2].children[0].children[3];
  //if he played 2_1
  treeForO._root.children[2].children[1].children.push(new Node(8, 3));
  treeForO._root.children[2].children[1].children[0].parent =
    treeForO._root.children[2].children[1];
  treeForO._root.children[2].children[1].children.push(new Node(8, 5));
  treeForO._root.children[2].children[1].children[1].parent =
    treeForO._root.children[2].children[1];
  treeForO._root.children[2].children[1].children.push(new Node(8, 6));
  treeForO._root.children[2].children[1].children[2].parent =
    treeForO._root.children[2].children[1];
  treeForO._root.children[2].children[1].children.push(new Node(8, 7));
  treeForO._root.children[2].children[1].children[3].parent =
    treeForO._root.children[2].children[1];
  treeForO._root.children[2].children[1].children.push(new Node(5, 8));
  treeForO._root.children[2].children[1].children[4].parent =
    treeForO._root.children[2].children[1];
  // if he played 2_1_8
  treeForO._root.children[2].children[1].children[4].children.push(
    new Node(6, 3)
  );
  treeForO._root.children[2].children[1].children[4].children[0].parent =
    treeForO._root.children[2].children[1].children[4];
  treeForO._root.children[2].children[1].children[4].children.push(
    new Node(3, 6)
  );
  treeForO._root.children[2].children[1].children[4].children[1].parent =
    treeForO._root.children[2].children[1].children[4];
  treeForO._root.children[2].children[1].children[4].children.push(
    new Node(3, 8)
  );
  //if he played 2_1
  treeForO._root.children[2].children[1].children.push(new Node(8, 3));
  treeForO._root.children[2].children[1].children[0].parent =
    treeForO._root.children[2].children[1];
  treeForO._root.children[2].children[1].children.push(new Node(8, 5));
  treeForO._root.children[2].children[1].children[1].parent =
    treeForO._root.children[2].children[1];
  treeForO._root.children[2].children[1].children.push(new Node(8, 6));
  treeForO._root.children[2].children[1].children[2].parent =
    treeForO._root.children[2].children[1];
  treeForO._root.children[2].children[1].children.push(new Node(8, 7));
  treeForO._root.children[2].children[1].children[3].parent =
    treeForO._root.children[2].children[1];
  treeForO._root.children[2].children[1].children.push(new Node(5, 8));
  treeForO._root.children[2].children[1].children[4].parent =
    treeForO._root.children[2].children[1];
  // if he played 2_1_8
  treeForO._root.children[2].children[1].children[4].children.push(
    new Node(6, 3)
  );
  treeForO._root.children[2].children[1].children[4].children[0].parent =
    treeForO._root.children[2].children[1].children[4];
  treeForO._root.children[2].children[1].children[4].children.push(
    new Node(3, 6)
  );
  treeForO._root.children[2].children[1].children[4].children[1].parent =
    treeForO._root.children[2].children[1].children[4];
  treeForO._root.children[2].children[1].children[4].children.push(
    new Node(3, 8)
  );
  //ih he played 2_3
  treeForO._root.children[2].children[2].children.push(new Node(1, 0));
  treeForO._root.children[2].children[2].children[0].parent =
    treeForO._root.children[2].children[2];
  treeForO._root.children[2].children[2].children.push(new Node(0, 1));
  treeForO._root.children[2].children[2].children[1].parent =
    treeForO._root.children[2].children[2];
  treeForO._root.children[2].children[2].children.push(new Node(8, 5));
  treeForO._root.children[2].children[2].children[2].parent =
    treeForO._root.children[2].children[2];
  treeForO._root.children[2].children[2].children.push(new Node(8, 7));
  treeForO._root.children[2].children[2].children[3].parent =
    treeForO._root.children[2].children[2];
  treeForO._root.children[2].children[2].children.push(new Node(5, 8));
  treeForO._root.children[2].children[2].children[4].parent =
    treeForO._root.children[2].children[2];
  // if he played 2_3_0
  treeForO._root.children[2].children[2].children[0].children.push(
    new Node(7, 5)
  );
  treeForO._root.children[2].children[2].children[0].children[0].parent =
    treeForO._root.children[2].children[2].children[0];
  treeForO._root.children[2].children[2].children[0].children.push(
    new Node(5, 7)
  );
  treeForO._root.children[2].children[2].children[0].children[1].parent =
    treeForO._root.children[2].children[2].children[0];
  treeForO._root.children[2].children[2].children[0].children.push(
    new Node(7, 8)
  );
  treeForO._root.children[2].children[2].children[0].children[2].parent =
    treeForO._root.children[2].children[2].children[0];
  // if he played 2_3_1
  treeForO._root.children[2].children[2].children[1].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[2].children[2].children[1].children[0].parent =
    treeForO._root.children[2].children[2].children[1];
  treeForO._root.children[2].children[2].children[1].children.push(
    new Node(8, 7)
  );
  treeForO._root.children[2].children[2].children[1].children[1].parent =
    treeForO._root.children[2].children[2].children[1];
  treeForO._root.children[2].children[2].children[1].children.push(
    new Node(5, 8)
  );
  treeForO._root.children[2].children[2].children[1].children[2].parent =
    treeForO._root.children[2].children[2].children[1];
  // if he played 2_3_5
  treeForO._root.children[2].children[2].children[2].children.push(
    new Node(1, 0)
  );
  treeForO._root.children[2].children[2].children[2].children[0].parent =
    treeForO._root.children[2].children[2].children[2];
  treeForO._root.children[2].children[2].children[2].children.push(
    new Node(0, 1)
  );
  treeForO._root.children[2].children[2].children[2].children[1].parent =
    treeForO._root.children[2].children[2].children[2];
  treeForO._root.children[2].children[2].children[2].children.push(
    new Node(0, 7)
  );
  treeForO._root.children[2].children[2].children[2].children[2].parent =
    treeForO._root.children[2].children[2].children[2];
  // if he played 2_3_7
  treeForO._root.children[2].children[2].children[3].children.push(
    new Node(1, 0)
  );
  treeForO._root.children[2].children[2].children[3].children[0].parent =
    treeForO._root.children[2].children[2].children[3];
  treeForO._root.children[2].children[2].children[3].children.push(
    new Node(0, 1)
  );
  treeForO._root.children[2].children[2].children[3].children[1].parent =
    treeForO._root.children[2].children[2].children[3];
  treeForO._root.children[2].children[2].children[3].children.push(
    new Node(0, 5)
  );
  treeForO._root.children[2].children[2].children[3].children[2].parent =
    treeForO._root.children[2].children[2].children[3];
  // if he played 2_3_8
  treeForO._root.children[2].children[2].children[4].children.push(
    new Node(1, 0)
  );
  treeForO._root.children[2].children[2].children[4].children[0].parent =
    treeForO._root.children[2].children[2].children[4];
  treeForO._root.children[2].children[2].children[4].children.push(
    new Node(0, 1)
  );
  treeForO._root.children[2].children[2].children[4].children[1].parent =
    treeForO._root.children[2].children[2].children[4];
  treeForO._root.children[2].children[2].children[4].children.push(
    new Node(0, 7)
  );
  treeForO._root.children[2].children[2].children[4].children[2].parent =
    treeForO._root.children[2].children[2].children[4];
  //if he played 2_5
  treeForO._root.children[2].children[3].children.push(new Node(1, 0));
  treeForO._root.children[2].children[3].children[0].parent =
    treeForO._root.children[2].children[3];
  treeForO._root.children[2].children[3].children.push(new Node(0, 1));
  treeForO._root.children[2].children[3].children[1].parent =
    treeForO._root.children[2].children[3];
  treeForO._root.children[2].children[3].children.push(new Node(0, 3));
  treeForO._root.children[2].children[3].children[2].parent =
    treeForO._root.children[2].children[3];
  treeForO._root.children[2].children[3].children.push(new Node(0, 6));
  treeForO._root.children[2].children[3].children[3].parent =
    treeForO._root.children[2].children[3];
  treeForO._root.children[2].children[3].children.push(new Node(0, 7));
  treeForO._root.children[2].children[3].children[4].parent =
    treeForO._root.children[2].children[3];
  // if he played 2_5_0
  treeForO._root.children[2].children[3].children[0].children.push(
    new Node(6, 3)
  );
  treeForO._root.children[2].children[3].children[0].children[0].parent =
    treeForO._root.children[2].children[3].children[0];
  treeForO._root.children[2].children[3].children[0].children.push(
    new Node(3, 6)
  );
  treeForO._root.children[2].children[3].children[0].children[1].parent =
    treeForO._root.children[2].children[3].children[0];
  treeForO._root.children[2].children[3].children[0].children.push(
    new Node(6, 7)
  );
  //if he played 2_6
  treeForO._root.children[2].children[4].children.push(new Node(5, 0));
  treeForO._root.children[2].children[4].children[0].parent =
    treeForO._root.children[2].children[4];
  treeForO._root.children[2].children[4].children.push(new Node(5, 1));
  treeForO._root.children[2].children[4].children[1].parent =
    treeForO._root.children[2].children[4];
  treeForO._root.children[2].children[4].children.push(new Node(8, 5));
  treeForO._root.children[2].children[4].children[2].parent =
    treeForO._root.children[2].children[4];
  treeForO._root.children[2].children[4].children.push(new Node(5, 7));
  treeForO._root.children[2].children[4].children[3].parent =
    treeForO._root.children[2].children[4];
  treeForO._root.children[2].children[4].children.push(new Node(5, 8));
  treeForO._root.children[2].children[4].children[4].parent =
    treeForO._root.children[2].children[4];
  // if he played 2_6_5
  treeForO._root.children[2].children[4].children[2].children.push(
    new Node(1, 0)
  );
  treeForO._root.children[2].children[4].children[2].children[0].parent =
    treeForO._root.children[2].children[4].children[2];
  treeForO._root.children[2].children[4].children[2].children.push(
    new Node(0, 1)
  );
  treeForO._root.children[2].children[4].children[2].children[1].parent =
    treeForO._root.children[2].children[4].children[2];
  treeForO._root.children[2].children[4].children[2].children.push(
    new Node(0, 7)
  );
  //ih he played 2_7
  treeForO._root.children[2].children[5].children.push(new Node(1, 0));
  treeForO._root.children[2].children[5].children[0].parent =
    treeForO._root.children[2].children[5];
  treeForO._root.children[2].children[5].children.push(new Node(0, 1));
  treeForO._root.children[2].children[5].children[1].parent =
    treeForO._root.children[2].children[5];
  treeForO._root.children[2].children[5].children.push(new Node(0, 3));
  treeForO._root.children[2].children[5].children[2].parent =
    treeForO._root.children[2].children[5];
  treeForO._root.children[2].children[5].children.push(new Node(8, 5));
  treeForO._root.children[2].children[5].children[3].parent =
    treeForO._root.children[2].children[5];
  treeForO._root.children[2].children[5].children.push(new Node(5, 8));
  treeForO._root.children[2].children[5].children[4].parent =
    treeForO._root.children[2].children[5];
  // if he played 2_7_0
  treeForO._root.children[2].children[5].children[0].children.push(
    new Node(8, 3)
  );
  treeForO._root.children[2].children[5].children[0].children[0].parent =
    treeForO._root.children[2].children[5].children[0];
  treeForO._root.children[2].children[5].children[0].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[2].children[5].children[0].children[1].parent =
    treeForO._root.children[2].children[5].children[0];
  treeForO._root.children[2].children[5].children[0].children.push(
    new Node(5, 8)
  );
  treeForO._root.children[2].children[5].children[0].children[2].parent =
    treeForO._root.children[2].children[5].children[0];
  // if he played 2_7_1
  treeForO._root.children[2].children[5].children[1].children.push(
    new Node(8, 3)
  );
  treeForO._root.children[2].children[5].children[1].children[0].parent =
    treeForO._root.children[2].children[5].children[1];
  treeForO._root.children[2].children[5].children[1].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[2].children[5].children[1].children[1].parent =
    treeForO._root.children[2].children[5].children[1];
  treeForO._root.children[2].children[5].children[1].children.push(
    new Node(5, 8)
  );
  treeForO._root.children[2].children[5].children[1].children[2].parent =
    treeForO._root.children[2].children[5].children[1];
  // if he played 2_7_3
  treeForO._root.children[2].children[5].children[2].children.push(
    new Node(8, 1)
  );
  treeForO._root.children[2].children[5].children[2].children[0].parent =
    treeForO._root.children[2].children[5].children[2];
  treeForO._root.children[2].children[5].children[2].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[2].children[5].children[2].children[1].parent =
    treeForO._root.children[2].children[5].children[2];
  treeForO._root.children[2].children[5].children[2].children.push(
    new Node(5, 8)
  );
  treeForO._root.children[2].children[5].children[2].children[2].parent =
    treeForO._root.children[2].children[5].children[2];
  // if he played 2_7_5
  treeForO._root.children[2].children[5].children[3].children.push(
    new Node(1, 0)
  );
  treeForO._root.children[2].children[5].children[3].children[0].parent =
    treeForO._root.children[2].children[5].children[3];
  treeForO._root.children[2].children[5].children[3].children.push(
    new Node(0, 1)
  );
  treeForO._root.children[2].children[5].children[3].children[1].parent =
    treeForO._root.children[2].children[5].children[3];
  treeForO._root.children[2].children[5].children[3].children.push(
    new Node(0, 3)
  );
  treeForO._root.children[2].children[5].children[3].children[2].parent =
    treeForO._root.children[2].children[5].children[3];
  // if he played 2_7_8
  treeForO._root.children[2].children[5].children[4].children.push(
    new Node(3, 0)
  );
  treeForO._root.children[2].children[5].children[4].children[0].parent =
    treeForO._root.children[2].children[5].children[4];
  treeForO._root.children[2].children[5].children[4].children.push(
    new Node(3, 1)
  );
  treeForO._root.children[2].children[5].children[4].children[1].parent =
    treeForO._root.children[2].children[5].children[4];
  treeForO._root.children[2].children[5].children[4].children.push(
    new Node(1, 3)
  );
  treeForO._root.children[2].children[5].children[4].children[2].parent =
    treeForO._root.children[2].children[5].children[4];
  //if he played 2_8
  treeForO._root.children[2].children[6].children.push(new Node(3, 0));
  treeForO._root.children[2].children[6].children[0].parent =
    treeForO._root.children[2].children[6];
  treeForO._root.children[2].children[6].children.push(new Node(3, 1));
  treeForO._root.children[2].children[6].children[1].parent =
    treeForO._root.children[2].children[6];
  treeForO._root.children[2].children[6].children.push(new Node(1, 3));
  treeForO._root.children[2].children[6].children[2].parent =
    treeForO._root.children[2].children[6];
  treeForO._root.children[2].children[6].children.push(new Node(3, 6));
  treeForO._root.children[2].children[6].children[3].parent =
    treeForO._root.children[2].children[6];
  treeForO._root.children[2].children[6].children.push(new Node(3, 7));
  treeForO._root.children[2].children[6].children[4].parent =
    treeForO._root.children[2].children[6];
  // if he played 2_8_3
  treeForO._root.children[2].children[6].children[2].children.push(
    new Node(7, 0)
  );
  treeForO._root.children[2].children[6].children[2].children[0].parent =
    treeForO._root.children[2].children[6].children[2];
  treeForO._root.children[2].children[6].children[2].children.push(
    new Node(7, 6)
  );
  treeForO._root.children[2].children[6].children[2].children[1].parent =
    treeForO._root.children[2].children[6].children[2];
  treeForO._root.children[2].children[6].children[2].children.push(
    new Node(6, 7)
  );
  //if he played 3
  treeForO._root.children[3].children.push(new Node(6, 0));
  treeForO._root.children[3].children[0].parent = treeForO._root.children[3];
  treeForO._root.children[3].children.push(new Node(0, 1));
  treeForO._root.children[3].children[1].parent = treeForO._root.children[3];
  treeForO._root.children[3].children.push(new Node(6, 2));
  treeForO._root.children[3].children[2].parent = treeForO._root.children[3];
  treeForO._root.children[3].children.push(new Node(1, 5));
  treeForO._root.children[3].children[3].parent = treeForO._root.children[3];
  treeForO._root.children[3].children.push(new Node(0, 6));
  treeForO._root.children[3].children[4].parent = treeForO._root.children[3];
  treeForO._root.children[3].children.push(new Node(6, 7));
  treeForO._root.children[3].children[5].parent = treeForO._root.children[3];
  treeForO._root.children[3].children.push(new Node(0, 8));
  treeForO._root.children[3].children[6].parent = treeForO._root.children[3];
  //if he played 3_0
  treeForO._root.children[3].children[0].children.push(new Node(2, 1));
  treeForO._root.children[3].children[0].children[0].parent =
    treeForO._root.children[3].children[0];
  treeForO._root.children[3].children[0].children.push(new Node(1, 2));
  treeForO._root.children[3].children[0].children[1].parent =
    treeForO._root.children[3].children[0];
  treeForO._root.children[3].children[0].children.push(new Node(2, 5));
  treeForO._root.children[3].children[0].children[2].parent =
    treeForO._root.children[3].children[0];
  treeForO._root.children[3].children[0].children.push(new Node(2, 7));
  treeForO._root.children[3].children[0].children[3].parent =
    treeForO._root.children[3].children[0];
  treeForO._root.children[3].children[0].children.push(new Node(2, 8));
  treeForO._root.children[3].children[0].children[4].parent =
    treeForO._root.children[3].children[0];
  // if he played 3_0_2
  treeForO._root.children[2].children[0].children[3].children.push(
    new Node(7, 5)
  );
  treeForO._root.children[2].children[0].children[3].children[0].parent =
    treeForO._root.children[2].children[0].children[3];
  treeForO._root.children[2].children[0].children[3].children.push(
    new Node(5, 7)
  );
  treeForO._root.children[2].children[0].children[3].children[1].parent =
    treeForO._root.children[2].children[0].children[3];
  treeForO._root.children[2].children[0].children[3].children.push(
    new Node(7, 8)
  );
  //if he played 3_1
  treeForO._root.children[3].children[1].children.push(new Node(8, 2));
  treeForO._root.children[3].children[1].children[0].parent =
    treeForO._root.children[3].children[1];
  treeForO._root.children[3].children[1].children.push(new Node(8, 5));
  treeForO._root.children[3].children[1].children[1].parent =
    treeForO._root.children[3].children[1];
  treeForO._root.children[3].children[1].children.push(new Node(8, 6));
  treeForO._root.children[3].children[1].children[2].parent =
    treeForO._root.children[3].children[1];
  treeForO._root.children[3].children[1].children.push(new Node(8, 7));
  treeForO._root.children[3].children[1].children[3].parent =
    treeForO._root.children[3].children[1];
  treeForO._root.children[3].children[1].children.push(new Node(6, 8));
  treeForO._root.children[3].children[1].children[4].parent =
    treeForO._root.children[3].children[1];
  // if he played 3_1_8
  treeForO._root.children[3].children[1].children[4].children.push(
    new Node(5, 2)
  );
  treeForO._root.children[3].children[1].children[4].children[0].parent =
    treeForO._root.children[3].children[1].children[4];
  treeForO._root.children[3].children[1].children[4].children.push(
    new Node(2, 5)
  );
  treeForO._root.children[3].children[1].children[4].children[1].parent =
    treeForO._root.children[3].children[1].children[4];
  treeForO._root.children[3].children[1].children[4].children.push(
    new Node(2, 7)
  );
  //ih he played 3_2
  treeForO._root.children[3].children[2].children.push(new Node(1, 0));
  treeForO._root.children[3].children[2].children[0].parent =
    treeForO._root.children[3].children[2];
  treeForO._root.children[3].children[2].children.push(new Node(0, 1));
  treeForO._root.children[3].children[2].children[1].parent =
    treeForO._root.children[3].children[2];
  treeForO._root.children[3].children[2].children.push(new Node(8, 5));
  treeForO._root.children[3].children[2].children[2].parent =
    treeForO._root.children[3].children[2];
  treeForO._root.children[3].children[2].children.push(new Node(8, 7));
  treeForO._root.children[3].children[2].children[3].parent =
    treeForO._root.children[3].children[2];
  treeForO._root.children[3].children[2].children.push(new Node(5, 8));
  treeForO._root.children[3].children[2].children[4].parent =
    treeForO._root.children[3].children[2];
  // if he played 3_2_0
  treeForO._root.children[3].children[2].children[0].children.push(
    new Node(7, 5)
  );
  treeForO._root.children[3].children[2].children[0].children[0].parent =
    treeForO._root.children[3].children[2].children[0];
  treeForO._root.children[3].children[2].children[0].children.push(
    new Node(5, 7)
  );
  treeForO._root.children[3].children[2].children[0].children[1].parent =
    treeForO._root.children[3].children[2].children[0];
  treeForO._root.children[3].children[2].children[0].children.push(
    new Node(7, 8)
  );
  treeForO._root.children[3].children[2].children[0].children[2].parent =
    treeForO._root.children[3].children[2].children[0];
  // if he played 3_2_1
  treeForO._root.children[3].children[2].children[1].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[3].children[2].children[1].children[0].parent =
    treeForO._root.children[3].children[2].children[1];
  treeForO._root.children[3].children[2].children[1].children.push(
    new Node(8, 7)
  );
  treeForO._root.children[3].children[2].children[1].children[1].parent =
    treeForO._root.children[3].children[2].children[1];
  treeForO._root.children[3].children[2].children[1].children.push(
    new Node(5, 8)
  );
  treeForO._root.children[3].children[2].children[1].children[2].parent =
    treeForO._root.children[3].children[2].children[1];
  // if he played 3_2_5
  treeForO._root.children[3].children[2].children[2].children.push(
    new Node(7, 0)
  );
  treeForO._root.children[3].children[2].children[2].children[0].parent =
    treeForO._root.children[3].children[2].children[2];
  treeForO._root.children[3].children[2].children[2].children.push(
    new Node(7, 1)
  );
  treeForO._root.children[3].children[2].children[2].children[1].parent =
    treeForO._root.children[3].children[2].children[2];
  treeForO._root.children[3].children[2].children[2].children.push(
    new Node(0, 7)
  );
  treeForO._root.children[3].children[2].children[2].children[2].parent =
    treeForO._root.children[3].children[2].children[2];
  // if he played 3_2_7
  treeForO._root.children[3].children[2].children[3].children.push(
    new Node(1, 0)
  );
  treeForO._root.children[3].children[2].children[3].children[0].parent =
    treeForO._root.children[3].children[2].children[3];
  treeForO._root.children[3].children[2].children[3].children.push(
    new Node(0, 1)
  );
  treeForO._root.children[3].children[2].children[3].children[1].parent =
    treeForO._root.children[3].children[2].children[3];
  treeForO._root.children[3].children[2].children[3].children.push(
    new Node(0, 5)
  );
  treeForO._root.children[3].children[2].children[3].children[2].parent =
    treeForO._root.children[3].children[2].children[3];
  // if he played 3_2_8
  treeForO._root.children[3].children[2].children[4].children.push(
    new Node(11, 0)
  );
  treeForO._root.children[3].children[2].children[4].children[0].parent =
    treeForO._root.children[3].children[2].children[4];
  treeForO._root.children[3].children[2].children[4].children.push(
    new Node(0, 1)
  );
  treeForO._root.children[3].children[2].children[4].children[1].parent =
    treeForO._root.children[3].children[2].children[4];
  treeForO._root.children[3].children[2].children[4].children.push(
    new Node(1, 7)
  );
  treeForO._root.children[3].children[2].children[4].children[2].parent =
    treeForO._root.children[3].children[2].children[4];
  //if he played 3_5
  treeForO._root.children[3].children[3].children.push(new Node(7, 0));
  treeForO._root.children[3].children[3].children[0].parent =
    treeForO._root.children[3].children[3];
  treeForO._root.children[3].children[3].children.push(new Node(7, 2));
  treeForO._root.children[3].children[3].children[1].parent =
    treeForO._root.children[3].children[3];
  treeForO._root.children[3].children[3].children.push(new Node(7, 6));
  treeForO._root.children[3].children[3].children[2].parent =
    treeForO._root.children[3].children[3];
  treeForO._root.children[3].children[3].children.push(new Node(2, 7));
  treeForO._root.children[3].children[3].children[3].parent =
    treeForO._root.children[3].children[3];
  treeForO._root.children[3].children[3].children.push(new Node(7, 8));
  treeForO._root.children[3].children[3].children[4].parent =
    treeForO._root.children[3].children[3];
  // if he played 3_5_7
  treeForO._root.children[3].children[3].children[3].children.push(
    new Node(6, 0)
  );
  treeForO._root.children[3].children[3].children[3].children[0].parent =
    treeForO._root.children[3].children[3].children[3];
  treeForO._root.children[3].children[3].children[3].children.push(
    new Node(0, 6)
  );
  treeForO._root.children[3].children[3].children[3].children[1].parent =
    treeForO._root.children[3].children[3].children[3];
  treeForO._root.children[3].children[3].children[3].children.push(
    new Node(0, 8)
  );
  //if he played 3_6
  treeForO._root.children[3].children[4].children.push(new Node(8, 1));
  treeForO._root.children[3].children[4].children[0].parent =
    treeForO._root.children[3].children[4];
  treeForO._root.children[3].children[4].children.push(new Node(8, 2));
  treeForO._root.children[3].children[4].children[1].parent =
    treeForO._root.children[3].children[4];
  treeForO._root.children[3].children[4].children.push(new Node(8, 5));
  treeForO._root.children[3].children[4].children[2].parent =
    treeForO._root.children[3].children[4];
  treeForO._root.children[3].children[4].children.push(new Node(8, 7));
  treeForO._root.children[3].children[4].children[3].parent =
    treeForO._root.children[3].children[4];
  treeForO._root.children[3].children[4].children.push(new Node(7, 8));
  treeForO._root.children[3].children[4].children[4].parent =
    treeForO._root.children[3].children[4];
  // if he played 3_6_8
  treeForO._root.children[3].children[4].children[4].children.push(
    new Node(5, 1)
  );
  treeForO._root.children[3].children[4].children[4].children[0].parent =
    treeForO._root.children[3].children[4].children[4];
  treeForO._root.children[3].children[4].children[4].children.push(
    new Node(1, 2)
  );
  treeForO._root.children[3].children[4].children[4].children[1].parent =
    treeForO._root.children[3].children[4].children[4];
  treeForO._root.children[3].children[4].children[3].children.push(
    new Node(1, 5)
  );
  //if he played 3_7
  treeForO._root.children[3].children[5].children.push(new Node(2, 0));
  treeForO._root.children[3].children[5].children[0].parent =
    treeForO._root.children[3].children[5];
  treeForO._root.children[3].children[5].children.push(new Node(2, 1));
  treeForO._root.children[3].children[5].children[1].parent =
    treeForO._root.children[3].children[5];
  treeForO._root.children[3].children[5].children.push(new Node(0, 2));
  treeForO._root.children[3].children[5].children[2].parent =
    treeForO._root.children[3].children[5];
  treeForO._root.children[3].children[5].children.push(new Node(2, 5));
  treeForO._root.children[3].children[5].children[3].parent =
    treeForO._root.children[3].children[5];
  treeForO._root.children[3].children[5].children.push(new Node(2, 8));
  treeForO._root.children[3].children[5].children[4].parent =
    treeForO._root.children[3].children[5];
  // if he played 3_7_2
  treeForO._root.children[3].children[5].children[2].children.push(
    new Node(8, 1)
  );
  treeForO._root.children[3].children[5].children[2].children[0].parent =
    treeForO._root.children[3].children[5].children[2];
  treeForO._root.children[3].children[5].children[2].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[3].children[5].children[2].children[1].parent =
    treeForO._root.children[3].children[5].children[2];
  treeForO._root.children[3].children[5].children[2].children.push(
    new Node(5, 8)
  );
  //ih he played 3_8
  treeForO._root.children[3].children[6].children.push(new Node(2, 1));
  treeForO._root.children[3].children[6].children[0].parent =
    treeForO._root.children[3].children[6];
  treeForO._root.children[3].children[6].children.push(new Node(5, 2));
  treeForO._root.children[3].children[6].children[1].parent =
    treeForO._root.children[3].children[6];
  treeForO._root.children[3].children[6].children.push(new Node(2, 5));
  treeForO._root.children[3].children[6].children[2].parent =
    treeForO._root.children[3].children[6];
  treeForO._root.children[3].children[6].children.push(new Node(7, 6));
  treeForO._root.children[3].children[6].children[3].parent =
    treeForO._root.children[3].children[6];
  treeForO._root.children[3].children[6].children.push(new Node(6, 7));
  treeForO._root.children[3].children[6].children[4].parent =
    treeForO._root.children[3].children[6];
  // if he played 3_8_1
  treeForO._root.children[3].children[6].children[0].children.push(
    new Node(6, 5)
  );
  treeForO._root.children[3].children[6].children[0].children[0].parent =
    treeForO._root.children[3].children[6].children[0];
  treeForO._root.children[3].children[6].children[0].children.push(
    new Node(7, 6)
  );
  treeForO._root.children[3].children[6].children[0].children[1].parent =
    treeForO._root.children[3].children[6].children[0];
  treeForO._root.children[3].children[6].children[0].children.push(
    new Node(6, 7)
  );
  treeForO._root.children[3].children[6].children[0].children[2].parent =
    treeForO._root.children[3].children[6].children[0];
  // if he played 3_8_2
  treeForO._root.children[3].children[6].children[1].children.push(
    new Node(7, 1)
  );
  treeForO._root.children[3].children[6].children[1].children[0].parent =
    treeForO._root.children[3].children[6].children[1];
  treeForO._root.children[3].children[6].children[1].children.push(
    new Node(7, 6)
  );
  treeForO._root.children[3].children[6].children[1].children[1].parent =
    treeForO._root.children[3].children[6].children[1];
  treeForO._root.children[3].children[6].children[1].children.push(
    new Node(6, 7)
  );
  treeForO._root.children[3].children[6].children[1].children[2].parent =
    treeForO._root.children[3].children[6].children[1];
  // if he played 3_8_5
  treeForO._root.children[3].children[6].children[2].children.push(
    new Node(6, 1)
  );
  treeForO._root.children[3].children[6].children[2].children[0].parent =
    treeForO._root.children[3].children[6].children[2];
  treeForO._root.children[3].children[6].children[2].children.push(
    new Node(7, 6)
  );
  treeForO._root.children[3].children[6].children[2].children[1].parent =
    treeForO._root.children[3].children[6].children[2];
  treeForO._root.children[3].children[6].children[2].children.push(
    new Node(6, 7)
  );
  treeForO._root.children[3].children[6].children[2].children[2].parent =
    treeForO._root.children[3].children[6].children[2];
  // if he played 3_8_6
  treeForO._root.children[3].children[6].children[3].children.push(
    new Node(5, 1)
  );
  treeForO._root.children[3].children[6].children[3].children[0].parent =
    treeForO._root.children[3].children[6].children[3];
  treeForO._root.children[3].children[6].children[3].children.push(
    new Node(1, 2)
  );
  treeForO._root.children[3].children[6].children[3].children[1].parent =
    treeForO._root.children[3].children[6].children[3];
  treeForO._root.children[3].children[6].children[3].children.push(
    new Node(1, 5)
  );
  treeForO._root.children[3].children[6].children[3].children[2].parent =
    treeForO._root.children[3].children[6].children[3];
  // if he played 3_8_7
  treeForO._root.children[3].children[6].children[4].children.push(
    new Node(2, 1)
  );
  treeForO._root.children[3].children[6].children[4].children[0].parent =
    treeForO._root.children[3].children[6].children[4];
  treeForO._root.children[3].children[6].children[4].children.push(
    new Node(5, 2)
  );
  treeForO._root.children[3].children[6].children[4].children[1].parent =
    treeForO._root.children[3].children[6].children[4];
  treeForO._root.children[3].children[6].children[4].children.push(
    new Node(2, 5)
  );
  //if he played 4
  treeForO._root.children[4].children.push(new Node(7, 1));
  treeForO._root.children[4].children[0].parent = treeForO._root.children[4];
  treeForO._root.children[4].children.push(new Node(6, 2));
  treeForO._root.children[4].children[1].parent = treeForO._root.children[4];
  treeForO._root.children[4].children.push(new Node(5, 3));
  treeForO._root.children[4].children[2].parent = treeForO._root.children[4];
  treeForO._root.children[4].children.push(new Node(3, 5));
  treeForO._root.children[4].children[3].parent = treeForO._root.children[4];
  treeForO._root.children[4].children.push(new Node(2, 6));
  treeForO._root.children[4].children[4].parent = treeForO._root.children[4];
  treeForO._root.children[4].children.push(new Node(1, 7));
  treeForO._root.children[4].children[5].parent = treeForO._root.children[4];
  treeForO._root.children[4].children.push(new Node(6, 8));
  treeForO._root.children[4].children[6].parent = treeForO._root.children[4];
  //if he played 4_1
  treeForO._root.children[4].children[0].children.push(new Node(6, 2));
  treeForO._root.children[4].children[0].children[0].parent =
    treeForO._root.children[4].children[0];
  treeForO._root.children[4].children[0].children.push(new Node(5, 3));
  treeForO._root.children[4].children[0].children[1].parent =
    treeForO._root.children[4].children[0];
  treeForO._root.children[4].children[0].children.push(new Node(3, 5));
  treeForO._root.children[4].children[0].children[2].parent =
    treeForO._root.children[4].children[0];
  treeForO._root.children[4].children[0].children.push(new Node(2, 6));
  treeForO._root.children[4].children[0].children[3].parent =
    treeForO._root.children[4].children[0];
  treeForO._root.children[4].children[0].children.push(new Node(6, 8));
  treeForO._root.children[4].children[0].children[4].parent =
    treeForO._root.children[4].children[0];
  // if he played 4_1_2
  treeForO._root.children[4].children[0].children[0].children.push(
    new Node(8, 3)
  );
  treeForO._root.children[4].children[0].children[0].children[0].parent =
    treeForO._root.children[4].children[0].children[0];
  treeForO._root.children[4].children[0].children[0].children.push(
    new Node(8, 5)
  );
  treeForO._root.children[4].children[0].children[0].children[1].parent =
    treeForO._root.children[4].children[0].children[0];
  treeForO._root.children[4].children[0].children[0].children.push(
    new Node(3, 8)
  );
  // if he played 4_1_3
  treeForO._root.children[4].children[0].children[1].children.push(
    new Node(6, 2)
  );
  treeForO._root.children[4].children[0].children[1].children[0].parent =
    treeForO._root.children[4].children[0].children[1];
  treeForO._root.children[4].children[0].children[1].children.push(
    new Node(2, 6)
  );
  treeForO._root.children[4].children[0].children[1].children[1].parent =
    treeForO._root.children[4].children[0].children[1];
  treeForO._root.children[4].children[0].children[1].children.push(
    new Node(6, 8)
  );
  // if he played 4_1_5
  treeForO._root.children[4].children[0].children[2].children.push(
    new Node(6, 2)
  );
  treeForO._root.children[4].children[0].children[2].children[0].parent =
    treeForO._root.children[4].children[0].children[2];
  treeForO._root.children[4].children[0].children[2].children.push(
    new Node(2, 6)
  );
  treeForO._root.children[4].children[0].children[2].children[1].parent =
    treeForO._root.children[4].children[0].children[2];
  treeForO._root.children[4].children[0].children[2].children.push(
    new Node(6, 8)
  );
  // if he played 4_1_6
  treeForO._root.children[4].children[0].children[3].children.push(
    new Node(5, 3)
  );
  treeForO._root.children[4].children[0].children[3].children[0].parent =
    treeForO._root.children[4].children[0].children[3];
  treeForO._root.children[4].children[0].children[3].children.push(
    new Node(3, 5)
  );
  treeForO._root.children[4].children[0].children[3].children[1].parent =
    treeForO._root.children[4].children[0].children[3];
  treeForO._root.children[4].children[0].children[3].children.push(
    new Node(5, 8)
  );
  // if he played 4_1_8
  treeForO._root.children[4].children[0].children[4].children.push(
    new Node(3, 2)
  );
  treeForO._root.children[4].children[0].children[4].children[0].parent =
    treeForO._root.children[4].children[0].children[4];
  treeForO._root.children[4].children[0].children[4].children.push(
    new Node(5, 3)
  );
  treeForO._root.children[4].children[0].children[4].children[1].parent =
    treeForO._root.children[4].children[0].children[4];
  treeForO._root.children[4].children[0].children[4].children.push(
    new Node(3, 5)
  );
  //if he played 4_2
  treeForO._root.children[4].children[1].children.push(new Node(3, 1));
  treeForO._root.children[4].children[1].children[0].parent =
    treeForO._root.children[4].children[1];
  treeForO._root.children[4].children[1].children.push(new Node(5, 3));
  treeForO._root.children[4].children[1].children[1].parent =
    treeForO._root.children[4].children[1];
  treeForO._root.children[4].children[1].children.push(new Node(3, 5));
  treeForO._root.children[4].children[1].children[2].parent =
    treeForO._root.children[4].children[1];
  treeForO._root.children[4].children[1].children.push(new Node(3, 7));
  treeForO._root.children[4].children[1].children[3].parent =
    treeForO._root.children[4].children[1];
  treeForO._root.children[4].children[1].children.push(new Node(3, 8));
  treeForO._root.children[4].children[1].children[4].parent =
    treeForO._root.children[4].children[1];
  // if he played 4_2_3
  treeForO._root.children[4].children[1].children[2].children.push(
    new Node(7, 2)
  );
  treeForO._root.children[4].children[1].children[2].children[0].parent =
    treeForO._root.children[4].children[1].children[2];
  treeForO._root.children[4].children[1].children[2].children.push(
    new Node(2, 7)
  );
  treeForO._root.children[4].children[1].children[2].children[1].parent =
    treeForO._root.children[4].children[1].children[2];
  treeForO._root.children[4].children[1].children[2].children.push(
    new Node(7, 8)
  );
  //if he played 4_3
  treeForO._root.children[4].children[2].children.push(new Node(7, 1));
  treeForO._root.children[4].children[2].children[0].parent =
    treeForO._root.children[4].children[2];
  treeForO._root.children[4].children[2].children.push(new Node(6, 2));
  treeForO._root.children[4].children[2].children[1].parent =
    treeForO._root.children[4].children[2];
  treeForO._root.children[4].children[2].children.push(new Node(2, 6));
  treeForO._root.children[4].children[2].children[2].parent =
    treeForO._root.children[4].children[2];
  treeForO._root.children[4].children[2].children.push(new Node(1, 7));
  treeForO._root.children[4].children[2].children[3].parent =
    treeForO._root.children[4].children[2];
  treeForO._root.children[4].children[2].children.push(new Node(2, 8));
  treeForO._root.children[4].children[2].children[4].parent =
    treeForO._root.children[4].children[2];
  // if he played 4_3_1
  treeForO._root.children[4].children[2].children[0].children.push(
    new Node(6, 2)
  );
  treeForO._root.children[4].children[2].children[0].children[0].parent =
    treeForO._root.children[4].children[2].children[0];
  treeForO._root.children[4].children[2].children[0].children.push(
    new Node(2, 6)
  );
  treeForO._root.children[4].children[2].children[0].children[1].parent =
    treeForO._root.children[4].children[2].children[0];
  treeForO._root.children[4].children[2].children[0].children.push(
    new Node(2, 8)
  );
  // if he played 4_3_2
  treeForO._root.children[4].children[2].children[1].children.push(
    new Node(7, 1)
  );
  treeForO._root.children[4].children[2].children[1].children[0].parent =
    treeForO._root.children[4].children[2].children[1];
  treeForO._root.children[4].children[2].children[1].children.push(
    new Node(1, 7)
  );
  treeForO._root.children[4].children[2].children[1].children[1].parent =
    treeForO._root.children[4].children[2].children[1];
  treeForO._root.children[4].children[2].children[1].children.push(
    new Node(7, 8)
  );
  // if he played 4_3_6
  treeForO._root.children[4].children[2].children[2].children.push(
    new Node(8, 1)
  );
  treeForO._root.children[4].children[2].children[2].children[0].parent =
    treeForO._root.children[4].children[2].children[2];
  treeForO._root.children[4].children[2].children[2].children.push(
    new Node(8, 7)
  );
  treeForO._root.children[4].children[2].children[2].children[1].parent =
    treeForO._root.children[4].children[2].children[2];
  treeForO._root.children[4].children[2].children[2].children.push(
    new Node(1, 8)
  );
  // if he played 4_3_7
  treeForO._root.children[4].children[2].children[3].children.push(
    new Node(6, 2)
  );
  treeForO._root.children[4].children[2].children[3].children[0].parent =
    treeForO._root.children[4].children[2].children[3];
  treeForO._root.children[4].children[2].children[3].children.push(
    new Node(2, 6)
  );
  treeForO._root.children[4].children[2].children[3].children[1].parent =
    treeForO._root.children[4].children[2].children[3];
  treeForO._root.children[4].children[2].children[3].children.push(
    new Node(2, 8)
  );
  // if he played 4_3_8
  treeForO._root.children[4].children[2].children[4].children.push(
    new Node(7, 1)
  );
  treeForO._root.children[4].children[2].children[4].children[0].parent =
    treeForO._root.children[4].children[2].children[4];
  treeForO._root.children[4].children[2].children[4].children.push(
    new Node(1, 6)
  );
  treeForO._root.children[4].children[2].children[4].children[1].parent =
    treeForO._root.children[4].children[2].children[4];
  treeForO._root.children[4].children[2].children[4].children.push(
    new Node(1, 7)
  );
  //if he played 4_5
  treeForO._root.children[4].children[3].children.push(new Node(6, 1));
  treeForO._root.children[4].children[3].children[0].parent =
    treeForO._root.children[4].children[3];
  treeForO._root.children[4].children[3].children.push(new Node(6, 2));
  treeForO._root.children[4].children[3].children[1].parent =
    treeForO._root.children[4].children[3];
  treeForO._root.children[4].children[3].children.push(new Node(2, 6));
  treeForO._root.children[4].children[3].children[2].parent =
    treeForO._root.children[4].children[3];
  treeForO._root.children[4].children[3].children.push(new Node(6, 7));
  treeForO._root.children[4].children[3].children[3].parent =
    treeForO._root.children[4].children[3];
  treeForO._root.children[4].children[3].children.push(new Node(6, 8));
  treeForO._root.children[4].children[3].children[4].parent =
    treeForO._root.children[4].children[3];
  // if he played 4_5_6
  treeForO._root.children[4].children[3].children[2].children.push(
    new Node(7, 1)
  );
  treeForO._root.children[4].children[3].children[2].children[0].parent =
    treeForO._root.children[4].children[3].children[2];
  treeForO._root.children[4].children[3].children[2].children.push(
    new Node(1, 7)
  );
  treeForO._root.children[4].children[3].children[2].children[1].parent =
    treeForO._root.children[4].children[3].children[2];
  treeForO._root.children[4].children[3].children[2].children.push(
    new Node(1, 8)
  );
  //if he played 4_6
  treeForO._root.children[4].children[4].children.push(new Node(7, 1));
  treeForO._root.children[4].children[4].children[0].parent =
    treeForO._root.children[4].children[4];
  treeForO._root.children[4].children[4].children.push(new Node(1, 3));
  treeForO._root.children[4].children[4].children[1].parent =
    treeForO._root.children[4].children[4];
  treeForO._root.children[4].children[4].children.push(new Node(1, 5));
  treeForO._root.children[4].children[4].children[2].parent =
    treeForO._root.children[4].children[4];
  treeForO._root.children[4].children[4].children.push(new Node(1, 7));
  treeForO._root.children[4].children[4].children[3].parent =
    treeForO._root.children[4].children[4];
  treeForO._root.children[4].children[4].children.push(new Node(1, 8));
  treeForO._root.children[4].children[4].children[4].parent =
    treeForO._root.children[4].children[4];
  // if he played 4_6_1
  treeForO._root.children[4].children[4].children[0].children.push(
    new Node(6, 2)
  );
  treeForO._root.children[4].children[4].children[0].children[0].parent =
    treeForO._root.children[4].children[4].children[0];
  treeForO._root.children[4].children[4].children[0].children.push(
    new Node(2, 6)
  );
  treeForO._root.children[4].children[4].children[0].children[1].parent =
    treeForO._root.children[4].children[4].children[0];
  treeForO._root.children[4].children[4].children[0].children.push(
    new Node(2, 8)
  );
  //if he played 4_7
  treeForO._root.children[4].children[5].children.push(new Node(6, 2));
  treeForO._root.children[4].children[5].children[0].parent =
    treeForO._root.children[4].children[5];
  treeForO._root.children[4].children[5].children.push(new Node(2, 3));
  treeForO._root.children[4].children[5].children[1].parent =
    treeForO._root.children[4].children[5];
  treeForO._root.children[4].children[5].children.push(new Node(2, 5));
  treeForO._root.children[4].children[5].children[2].parent =
    treeForO._root.children[4].children[5];
  treeForO._root.children[4].children[5].children.push(new Node(2, 7));
  treeForO._root.children[4].children[5].children[2].parent =
    treeForO._root.children[4].children[5];
  treeForO._root.children[4].children[5].children.push(new Node(2, 8));
  treeForO._root.children[4].children[5].children[4].parent =
    treeForO._root.children[4].children[5];
  // if he played 4_7_2
  treeForO._root.children[4].children[5].children[0].children.push(
    new Node(5, 3)
  );
  treeForO._root.children[4].children[5].children[0].children[0].parent =
    treeForO._root.children[4].children[5].children[0];
  treeForO._root.children[4].children[5].children[0].children.push(
    new Node(3, 5)
  );
  treeForO._root.children[4].children[5].children[0].children[1].parent =
    treeForO._root.children[4].children[5].children[0];
  treeForO._root.children[4].children[5].children[0].children.push(
    new Node(3, 8)
  );
  //if he played 4_8
  treeForO._root.children[4].children[6].children.push(new Node(3, 1));
  treeForO._root.children[4].children[6].children[0].parent =
    treeForO._root.children[4].children[6];
  treeForO._root.children[4].children[6].children.push(new Node(3, 2));
  treeForO._root.children[4].children[6].children[1].parent =
    treeForO._root.children[4].children[6];
  treeForO._root.children[4].children[6].children.push(new Node(5, 3));
  treeForO._root.children[4].children[6].children[2].parent =
    treeForO._root.children[4].children[6];
  treeForO._root.children[4].children[6].children.push(new Node(3, 5));
  treeForO._root.children[4].children[6].children[3].parent =
    treeForO._root.children[4].children[6];
  treeForO._root.children[4].children[6].children.push(new Node(3, 7));
  treeForO._root.children[4].children[6].children[4].parent =
    treeForO._root.children[4].children[6];
  // if he played 4_8_6
  treeForO._root.children[4].children[6].children[2].children.push(
    new Node(7, 1)
  );
  treeForO._root.children[4].children[6].children[2].children[0].parent =
    treeForO._root.children[4].children[6].children[2];
  treeForO._root.children[4].children[6].children[2].children.push(
    new Node(1, 2)
  );
  treeForO._root.children[4].children[6].children[2].children[1].parent =
    treeForO._root.children[4].children[6].children[2];
  treeForO._root.children[4].children[6].children[2].children.push(
    new Node(1, 7)
  );
  //if he played 5
  treeForO._root.children[5].children.push(new Node(8, 0));
  treeForO._root.children[5].children[0].parent = treeForO._root.children[5];
  treeForO._root.children[5].children.push(new Node(2, 1));
  treeForO._root.children[5].children[1].parent = treeForO._root.children[5];
  treeForO._root.children[5].children.push(new Node(8, 2));
  treeForO._root.children[5].children[2].parent = treeForO._root.children[5];
  treeForO._root.children[5].children.push(new Node(7, 3));
  treeForO._root.children[5].children[3].parent = treeForO._root.children[5];
  treeForO._root.children[5].children.push(new Node(2, 6));
  treeForO._root.children[5].children[4].parent = treeForO._root.children[5];
  treeForO._root.children[5].children.push(new Node(8, 7));
  treeForO._root.children[5].children[5].parent = treeForO._root.children[5];
  treeForO._root.children[5].children.push(new Node(2, 8));
  treeForO._root.children[5].children[6].parent = treeForO._root.children[5];
  //if he played 5_0
  treeForO._root.children[5].children[0].children.push(new Node(2, 1));
  treeForO._root.children[5].children[0].children[0].parent =
    treeForO._root.children[5].children[0];
  treeForO._root.children[5].children[0].children.push(new Node(1, 2));
  treeForO._root.children[5].children[0].children[1].parent =
    treeForO._root.children[5].children[0];
  treeForO._root.children[5].children[0].children.push(new Node(6, 3));
  treeForO._root.children[5].children[0].children[2].parent =
    treeForO._root.children[5].children[0];
  treeForO._root.children[5].children[0].children.push(new Node(3, 6));
  treeForO._root.children[5].children[0].children[3].parent =
    treeForO._root.children[5].children[0];
  treeForO._root.children[5].children[0].children.push(new Node(6, 7));
  treeForO._root.children[5].children[0].children[4].parent =
    treeForO._root.children[5].children[0];
  // if he played 5_0_1
  treeForO._root.children[5].children[0].children[0].children.push(
    new Node(6, 3)
  );
  treeForO._root.children[5].children[0].children[0].children[0].parent =
    treeForO._root.children[5].children[0].children[0];
  treeForO._root.children[5].children[0].children[0].children.push(
    new Node(3, 6)
  );
  treeForO._root.children[5].children[0].children[0].children[1].parent =
    treeForO._root.children[5].children[0].children[0];
  treeForO._root.children[5].children[0].children[0].children.push(
    new Node(6, 7)
  );
  // if he played 5_0_2
  treeForO._root.children[5].children[0].children[1].children.push(
    new Node(7, 3)
  );
  treeForO._root.children[5].children[0].children[1].children[0].parent =
    treeForO._root.children[5].children[0].children[1];
  treeForO._root.children[5].children[0].children[1].children.push(
    new Node(7, 6)
  );
  treeForO._root.children[5].children[0].children[1].children[1].parent =
    treeForO._root.children[5].children[0].children[1];
  treeForO._root.children[5].children[0].children[1].children.push(
    new Node(3, 7)
  );
  // if he played 5_0_3
  treeForO._root.children[5].children[0].children[2].children.push(
    new Node(7, 1)
  );
  treeForO._root.children[5].children[0].children[2].children[0].parent =
    treeForO._root.children[5].children[0].children[2];
  treeForO._root.children[5].children[0].children[2].children.push(
    new Node(7, 2)
  );
  treeForO._root.children[5].children[0].children[2].children[1].parent =
    treeForO._root.children[5].children[0].children[2];
  treeForO._root.children[5].children[0].children[2].children.push(
    new Node(2, 7)
  );
  // if he played 5_0_6
  treeForO._root.children[5].children[0].children[3].children.push(
    new Node(2, 1)
  );
  treeForO._root.children[5].children[0].children[3].children[0].parent =
    treeForO._root.children[5].children[0].children[3];
  treeForO._root.children[5].children[0].children[3].children.push(
    new Node(1, 2)
  );
  treeForO._root.children[5].children[0].children[3].children[1].parent =
    treeForO._root.children[5].children[0].children[3];
  treeForO._root.children[5].children[0].children[3].children.push(
    new Node(1, 7)
  );
  // if he played 5_0_7
  treeForO._root.children[5].children[0].children[4].children.push(
    new Node(2, 1)
  );
  treeForO._root.children[5].children[0].children[4].children[0].parent =
    treeForO._root.children[5].children[0].children[4];
  treeForO._root.children[5].children[0].children[4].children.push(
    new Node(1, 2)
  );
  treeForO._root.children[5].children[0].children[4].children[1].parent =
    treeForO._root.children[5].children[0].children[4];
  treeForO._root.children[5].children[0].children[4].children.push(
    new Node(2, 3)
  );
  //if he played 5_1
  treeForO._root.children[5].children[1].children.push(new Node(6, 0));
  treeForO._root.children[5].children[1].children[0].parent =
    treeForO._root.children[5].children[1];
  treeForO._root.children[5].children[1].children.push(new Node(6, 3));
  treeForO._root.children[5].children[1].children[1].parent =
    treeForO._root.children[5].children[1];
  treeForO._root.children[5].children[1].children.push(new Node(8, 6));
  treeForO._root.children[5].children[1].children[2].parent =
    treeForO._root.children[5].children[1];
  treeForO._root.children[5].children[1].children.push(new Node(6, 7));
  treeForO._root.children[5].children[1].children[3].parent =
    treeForO._root.children[5].children[1];
  treeForO._root.children[5].children[1].children.push(new Node(6, 8));
  treeForO._root.children[5].children[1].children[4].parent =
    treeForO._root.children[5].children[1];
  // if he played 5_1_6
  treeForO._root.children[5].children[1].children[2].children.push(
    new Node(3, 0)
  );
  treeForO._root.children[5].children[1].children[2].children[0].parent =
    treeForO._root.children[5].children[1].children[2];
  treeForO._root.children[5].children[1].children[2].children.push(
    new Node(0, 3)
  );
  treeForO._root.children[5].children[1].children[2].children[1].parent =
    treeForO._root.children[5].children[1].children[2];
  treeForO._root.children[5].children[1].children[2].children.push(
    new Node(0, 7)
  );
  //if he played 5_2
  treeForO._root.children[5].children[2].children.push(new Node(1, 0));
  treeForO._root.children[5].children[2].children[0].parent =
    treeForO._root.children[5].children[2];
  treeForO._root.children[5].children[2].children.push(new Node(0, 1));
  treeForO._root.children[5].children[2].children[1].parent =
    treeForO._root.children[5].children[2];
  treeForO._root.children[5].children[2].children.push(new Node(0, 3));
  treeForO._root.children[5].children[2].children[2].parent =
    treeForO._root.children[5].children[2];
  treeForO._root.children[5].children[2].children.push(new Node(0, 6));
  treeForO._root.children[5].children[2].children[3].parent =
    treeForO._root.children[5].children[2];
  treeForO._root.children[5].children[2].children.push(new Node(0, 7));
  treeForO._root.children[5].children[2].children[4].parent =
    treeForO._root.children[5].children[2];
  // if he played 5_2_0
  treeForO._root.children[5].children[2].children[0].children.push(
    new Node(7, 3)
  );
  treeForO._root.children[5].children[2].children[0].children[0].parent =
    treeForO._root.children[5].children[2].children[0];
  treeForO._root.children[5].children[2].children[0].children.push(
    new Node(7, 6)
  );
  treeForO._root.children[5].children[2].children[0].children[1].parent =
    treeForO._root.children[5].children[2].children[0];
  treeForO._root.children[5].children[2].children[0].children.push(
    new Node(3, 7)
  );
  //if he played 5_3
  treeForO._root.children[5].children[3].children.push(new Node(1, 0));
  treeForO._root.children[5].children[3].children[0].parent =
    treeForO._root.children[5].children[3];
  treeForO._root.children[5].children[3].children.push(new Node(6, 1));
  treeForO._root.children[5].children[3].children[1].parent =
    treeForO._root.children[5].children[3];
  treeForO._root.children[5].children[3].children.push(new Node(1, 3));
  treeForO._root.children[5].children[3].children[2].parent =
    treeForO._root.children[5].children[3];
  treeForO._root.children[5].children[3].children.push(new Node(1, 6));
  treeForO._root.children[5].children[3].children[3].parent =
    treeForO._root.children[5].children[3];
  treeForO._root.children[5].children[3].children.push(new Node(1, 8));
  treeForO._root.children[5].children[3].children[4].parent =
    treeForO._root.children[5].children[3];
    // if he played 5_3_1
    treeForO._root.children[5].children[3].children[1].children.push(
      new Node(8, 0)
    );
    treeForO._root.children[5].children[3].children[1].children[0].parent =
      treeForO._root.children[5].children[3].children[1];
    treeForO._root.children[5].children[3].children[1].children.push(
      new Node(8, 2)
    );
    treeForO._root.children[5].children[3].children[1].children[1].parent =
      treeForO._root.children[5].children[3].children[1];
    treeForO._root.children[5].children[3].children[1].children.push(
      new Node(2, 8)
    );
    //if he played 5_6
    treeForO._root.children[5].children[4].children.push(new Node(3, 0));
    treeForO._root.children[5].children[4].children[0].parent =
      treeForO._root.children[5].children[4];
    treeForO._root.children[5].children[4].children.push(new Node(0, 1));
    treeForO._root.children[5].children[4].children[1].parent =
      treeForO._root.children[5].children[4];
    treeForO._root.children[5].children[4].children.push(new Node(0, 3));
    treeForO._root.children[5].children[4].children[2].parent =
      treeForO._root.children[5].children[4];
    treeForO._root.children[5].children[4].children.push(new Node(8, 7));
    treeForO._root.children[5].children[4].children[3].parent =
      treeForO._root.children[5].children[4];
    treeForO._root.children[5].children[4].children.push(new Node(7, 8));
    treeForO._root.children[5].children[4].children[4].parent =
      treeForO._root.children[5].children[4];
      // if he played 5_6_0
      treeForO._root.children[5].children[4].children[0].children.push(
        new Node(7, 2)
      );
      treeForO._root.children[5].children[4].children[0].children[0].parent =
        treeForO._root.children[5].children[4].children[0];
      treeForO._root.children[5].children[4].children[0].children.push(
        new Node(8, 7)
      );
      treeForO._root.children[5].children[4].children[0].children[1].parent =
        treeForO._root.children[5].children[4].children[0];
      treeForO._root.children[5].children[4].children[0].children.push(
        new Node(7, 8)
      );
      // if he played 5_6_1
      treeForO._root.children[5].children[4].children[1].children.push(
        new Node(8, 3)
      );
      treeForO._root.children[5].children[4].children[1].children[0].parent =
        treeForO._root.children[5].children[4].children[1];
      treeForO._root.children[5].children[4].children[1].children.push(
        new Node(8, 7)
      );
      treeForO._root.children[5].children[4].children[1].children[1].parent =
        treeForO._root.children[5].children[4].children[1];
      treeForO._root.children[5].children[4].children[1].children.push(
        new Node(7, 8)
      );
      // if he played 5_6_3
      treeForO._root.children[5].children[4].children[2].children.push(
        new Node(8, 1)
      );
      treeForO._root.children[5].children[4].children[2].children[0].parent =
        treeForO._root.children[5].children[4].children[2];
      treeForO._root.children[5].children[4].children[2].children.push(
        new Node(1, 7)
      );
      treeForO._root.children[5].children[4].children[2].children[1].parent =
        treeForO._root.children[5].children[4].children[2];
      treeForO._root.children[5].children[4].children[2].children.push(
        new Node(1, 8)
      );
      // if he played 5_6_7
      treeForO._root.children[5].children[4].children[3].children.push(
        new Node(3, 0)
      );
      treeForO._root.children[5].children[4].children[3].children[0].parent =
        treeForO._root.children[5].children[4].children[3];
      treeForO._root.children[5].children[4].children[3].children.push(
        new Node(0, 1)
      );
      treeForO._root.children[5].children[4].children[3].children[1].parent =
        treeForO._root.children[5].children[4].children[3];
      treeForO._root.children[5].children[4].children[3].children.push(
        new Node(0, 3)
      );
      // if he played 5_6_8
      treeForO._root.children[5].children[4].children[4].children.push(
        new Node(1, 0)
      );
      treeForO._root.children[5].children[4].children[4].children[0].parent =
        treeForO._root.children[5].children[4].children[4];
      treeForO._root.children[5].children[4].children[4].children.push(
        new Node(3, 1)
      );
      treeForO._root.children[5].children[4].children[4].children[1].parent =
        treeForO._root.children[5].children[4].children[4];
      treeForO._root.children[5].children[4].children[4].children.push(
        new Node(1, 3)
      );
      //if he played 5_7
      treeForO._root.children[5].children[5].children.push(new Node(2, 0));
      treeForO._root.children[5].children[5].children[0].parent =
        treeForO._root.children[5].children[5];
      treeForO._root.children[5].children[5].children.push(new Node(0, 1));
      treeForO._root.children[5].children[5].children[1].parent =
        treeForO._root.children[5].children[5];
      treeForO._root.children[5].children[5].children.push(new Node(0, 2));
      treeForO._root.children[5].children[5].children[2].parent =
        treeForO._root.children[5].children[5];
      treeForO._root.children[5].children[5].children.push(new Node(0, 3));
      treeForO._root.children[5].children[5].children[3].parent =
        treeForO._root.children[5].children[5];
      treeForO._root.children[5].children[5].children.push(new Node(0, 6));
      treeForO._root.children[5].children[5].children[4].parent =
        treeForO._root.children[5].children[5];
        // if he played 5_7_0
        treeForO._root.children[5].children[5].children[0].children.push(
          new Node(6, 1)
        );
        treeForO._root.children[5].children[5].children[0].children[0].parent =
          treeForO._root.children[5].children[5].children[0];
        treeForO._root.children[5].children[5].children[0].children.push(
          new Node(6, 3)
        );
        treeForO._root.children[5].children[5].children[0].children[1].parent =
          treeForO._root.children[5].children[5].children[0];
        treeForO._root.children[5].children[5].children[0].children.push(
          new Node(3, 6)
        );
        //if he played 5_8
        treeForO._root.children[5].children[6].children.push(new Node(6, 0));
        treeForO._root.children[5].children[6].children[0].parent =
          treeForO._root.children[5].children[6];
        treeForO._root.children[5].children[6].children.push(new Node(6, 1));
        treeForO._root.children[5].children[6].children[1].parent =
          treeForO._root.children[5].children[6];
        treeForO._root.children[5].children[6].children.push(new Node(6, 3));
        treeForO._root.children[5].children[6].children[2].parent =
          treeForO._root.children[5].children[6];
        treeForO._root.children[5].children[6].children.push(new Node(7, 6));
        treeForO._root.children[5].children[6].children[3].parent =
          treeForO._root.children[5].children[6];
        treeForO._root.children[5].children[6].children.push(new Node(6, 7));
        treeForO._root.children[5].children[6].children[4].parent =
          treeForO._root.children[5].children[6];
          // if he played 5_8_0
          treeForO._root.children[5].children[6].children[3].children.push(
            new Node(6, 1)
          );
          treeForO._root.children[5].children[6].children[3].children[0].parent =
            treeForO._root.children[5].children[6].children[3];
          treeForO._root.children[5].children[6].children[3].children.push(
            new Node(6, 3)
          );
          treeForO._root.children[5].children[6].children[3].children[1].parent =
            treeForO._root.children[5].children[6].children[3];
          treeForO._root.children[5].children[6].children[3].children.push(
            new Node(3, 6)
          );
          //if he played 6
          treeForO._root.children[6].children.push(new Node(3, 0));
          treeForO._root.children[6].children[0].parent = treeForO._root.children[6];
          treeForO._root.children[6].children.push(new Node(2, 1));
          treeForO._root.children[6].children[1].parent = treeForO._root.children[6];
          treeForO._root.children[6].children.push(new Node(5, 2));
          treeForO._root.children[6].children[2].parent = treeForO._root.children[6];
          treeForO._root.children[6].children.push(new Node(0, 3));
          treeForO._root.children[6].children[3].parent = treeForO._root.children[6];
          treeForO._root.children[6].children.push(new Node(2, 5));
          treeForO._root.children[6].children[4].parent = treeForO._root.children[6];
          treeForO._root.children[6].children.push(new Node(8, 7));
          treeForO._root.children[6].children[5].parent = treeForO._root.children[6];
          treeForO._root.children[6].children.push(new Node(7, 8));
          treeForO._root.children[6].children[6].parent = treeForO._root.children[6];
          //if he played 6_0
          treeForO._root.children[6].children[0].children.push(new Node(5, 1));
          treeForO._root.children[6].children[0].children[0].parent =
            treeForO._root.children[6].children[0];
          treeForO._root.children[6].children[0].children.push(new Node(5, 2));
          treeForO._root.children[6].children[0].children[1].parent =
            treeForO._root.children[6].children[0];
          treeForO._root.children[6].children[0].children.push(new Node(7, 5));
          treeForO._root.children[6].children[0].children[2].parent =
            treeForO._root.children[6].children[0];
          treeForO._root.children[6].children[0].children.push(new Node(5, 7));
          treeForO._root.children[6].children[0].children[3].parent =
            treeForO._root.children[6].children[0];
          treeForO._root.children[6].children[0].children.push(new Node(5, 8));
          treeForO._root.children[6].children[0].children[4].parent =
            treeForO._root.children[6].children[0];
            // if he played 6_0_5
            treeForO._root.children[6].children[0].children[2].children.push(
              new Node(2, 1)
            );
            treeForO._root.children[6].children[0].children[2].children[0].parent =
              treeForO._root.children[6].children[0].children[2];
            treeForO._root.children[6].children[0].children[2].children.push(
              new Node(1, 2)
            );
            treeForO._root.children[6].children[0].children[2].children[1].parent =
              treeForO._root.children[6].children[0].children[2];
            treeForO._root.children[6].children[0].children[2].children.push(
              new Node(1, 8)
            );
            //if he played 6_1
            treeForO._root.children[6].children[1].children.push(new Node(3, 0));
            treeForO._root.children[6].children[1].children[0].parent =
              treeForO._root.children[6].children[1];
            treeForO._root.children[6].children[1].children.push(new Node(0, 3));
            treeForO._root.children[6].children[1].children[1].parent =
              treeForO._root.children[6].children[1];
            treeForO._root.children[6].children[1].children.push(new Node(8, 5));
            treeForO._root.children[6].children[1].children[2].parent =
              treeForO._root.children[6].children[1];
            treeForO._root.children[6].children[1].children.push(new Node(8, 7));
            treeForO._root.children[6].children[1].children[3].parent =
              treeForO._root.children[6].children[1];
            treeForO._root.children[6].children[1].children.push(new Node(7, 8));
            treeForO._root.children[6].children[1].children[4].parent =
              treeForO._root.children[6].children[1];
              // if he played 6_1_0
              treeForO._root.children[6].children[1].children[0].children.push(
                new Node(7, 5)
              );
              treeForO._root.children[6].children[1].children[0].children[0].parent =
                treeForO._root.children[6].children[1].children[0];
              treeForO._root.children[6].children[1].children[0].children.push(
                new Node(5, 7)
              );
              treeForO._root.children[6].children[1].children[0].children[1].parent =
                treeForO._root.children[6].children[1].children[0];
              treeForO._root.children[6].children[1].children[0].children.push(
                new Node(5, 8)
              );
              // if he played 6_1_3
              treeForO._root.children[6].children[1].children[1].children.push(
                new Node(8, 5)
              );
              treeForO._root.children[6].children[1].children[1].children[0].parent =
                treeForO._root.children[6].children[1].children[1];
              treeForO._root.children[6].children[1].children[1].children.push(
                new Node(8, 7)
              );
              treeForO._root.children[6].children[1].children[1].children[1].parent =
                treeForO._root.children[6].children[1].children[1];
              treeForO._root.children[6].children[1].children[1].children.push(
                new Node(7, 8)
              );
              // if he played 6_1_5
              treeForO._root.children[6].children[1].children[2].children.push(
                new Node(3, 0)
              );
              treeForO._root.children[6].children[1].children[2].children[0].parent =
                treeForO._root.children[6].children[1].children[2];
              treeForO._root.children[6].children[1].children[2].children.push(
                new Node(0, 3)
              );
              treeForO._root.children[6].children[1].children[2].children[1].parent =
                treeForO._root.children[6].children[1].children[2];
              treeForO._root.children[6].children[1].children[2].children.push(
                new Node(0, 7)
              );
              // if he played 6_1_7
              treeForO._root.children[6].children[1].children[3].children.push(
                new Node(3, 0)
              );
              treeForO._root.children[6].children[1].children[3].children[0].parent =
                treeForO._root.children[6].children[1].children[3];
              treeForO._root.children[6].children[1].children[3].children.push(
                new Node(0, 3)
              );
              treeForO._root.children[6].children[1].children[3].children[1].parent =
                treeForO._root.children[6].children[1].children[3];
              treeForO._root.children[6].children[1].children[3].children.push(
                new Node(0, 5)
              );
              // if he played 6_1_8
              treeForO._root.children[6].children[1].children[4].children.push(
                new Node(3, 0)
              );
              treeForO._root.children[6].children[1].children[4].children[0].parent =
                treeForO._root.children[6].children[1].children[4];
              treeForO._root.children[6].children[1].children[4].children.push(
                new Node(0, 3)
              );
              treeForO._root.children[6].children[1].children[4].children[1].parent =
                treeForO._root.children[6].children[1].children[4];
              treeForO._root.children[6].children[1].children[4].children.push(
                new Node(0, 5)
              );
              //if he played 6_2
              treeForO._root.children[6].children[2].children.push(new Node(3, 0));
              treeForO._root.children[6].children[2].children[0].parent =
                treeForO._root.children[6].children[2];
              treeForO._root.children[6].children[2].children.push(new Node(3, 1));
              treeForO._root.children[6].children[2].children[1].parent =
                treeForO._root.children[6].children[2];
              treeForO._root.children[6].children[2].children.push(new Node(0, 3));
              treeForO._root.children[6].children[2].children[2].parent =
                treeForO._root.children[6].children[2];
              treeForO._root.children[6].children[2].children.push(new Node(3, 7));
              treeForO._root.children[6].children[2].children[3].parent =
                treeForO._root.children[6].children[2];
              treeForO._root.children[6].children[2].children.push(new Node(3, 8));
              treeForO._root.children[6].children[2].children[4].parent =
                treeForO._root.children[6].children[2];
                // if he played 6_2_3
                treeForO._root.children[6].children[2].children[2].children.push(
                  new Node(8, 1)
                );
                treeForO._root.children[6].children[2].children[2].children[0].parent =
                  treeForO._root.children[6].children[2].children[2];
                treeForO._root.children[6].children[2].children[2].children.push(
                  new Node(8, 7)
                );
                treeForO._root.children[6].children[2].children[2].children[1].parent =
                  treeForO._root.children[6].children[2].children[2];
                treeForO._root.children[6].children[2].children[2].children.push(
                  new Node(7, 8)
                );
                //if he played 6_3
                treeForO._root.children[6].children[3].children.push(new Node(8, 1));
                treeForO._root.children[6].children[3].children[0].parent =
                  treeForO._root.children[6].children[3];
                treeForO._root.children[6].children[3].children.push(new Node(8, 2));
                treeForO._root.children[6].children[3].children[1].parent =
                  treeForO._root.children[6].children[3];
                treeForO._root.children[6].children[3].children.push(new Node(8, 5));
                treeForO._root.children[6].children[3].children[2].parent =
                  treeForO._root.children[6].children[3];
                treeForO._root.children[6].children[3].children.push(new Node(8, 7));
                treeForO._root.children[6].children[3].children[3].parent =
                  treeForO._root.children[6].children[3];
                treeForO._root.children[6].children[3].children.push(new Node(7, 8));
                treeForO._root.children[6].children[3].children[4].parent =
                  treeForO._root.children[6].children[3];
                  // if he played 6_3_8
                  treeForO._root.children[6].children[3].children[4].children.push(
                    new Node(8, 1)
                  );
                  treeForO._root.children[6].children[3].children[4].children[0].parent =
                    treeForO._root.children[6].children[3].children[4];
                  treeForO._root.children[6].children[3].children[4].children.push(
                    new Node(8, 7)
                  );
                  treeForO._root.children[6].children[3].children[4].children[1].parent =
                    treeForO._root.children[6].children[3].children[4];
                  treeForO._root.children[6].children[3].children[4].children.push(
                    new Node(7, 8)
                  );
                  //if he played 6_5
                  treeForO._root.children[6].children[4].children.push(new Node(3, 0));
                  treeForO._root.children[6].children[4].children[0].parent =
                    treeForO._root.children[6].children[4];
                  treeForO._root.children[6].children[4].children.push(new Node(0, 1));
                  treeForO._root.children[6].children[4].children[1].parent =
                    treeForO._root.children[6].children[4];
                  treeForO._root.children[6].children[4].children.push(new Node(0, 3));
                  treeForO._root.children[6].children[4].children[2].parent =
                    treeForO._root.children[6].children[4];
                  treeForO._root.children[6].children[4].children.push(new Node(8, 7));
                  treeForO._root.children[6].children[4].children[3].parent =
                    treeForO._root.children[6].children[4];
                  treeForO._root.children[6].children[4].children.push(new Node(7, 8));
                  treeForO._root.children[6].children[4].children[4].parent =
                    treeForO._root.children[6].children[4];
                    // if he played 6_5_0
                    treeForO._root.children[6].children[4].children[0].children.push(
                      new Node(8, 1)
                    );
                    treeForO._root.children[6].children[4].children[0].children[0].parent =
                      treeForO._root.children[6].children[4].children[0];
                    treeForO._root.children[6].children[4].children[0].children.push(
                      new Node(8, 7)
                    );
                    treeForO._root.children[6].children[4].children[0].children[1].parent =
                      treeForO._root.children[6].children[4].children[0];
                    treeForO._root.children[6].children[4].children[0].children.push(
                      new Node(7, 8)
                    );
                    // if he played 6_5_1
                    treeForO._root.children[6].children[4].children[1].children.push(
                      new Node(8, 5)
                    );
                    treeForO._root.children[6].children[4].children[1].children[0].parent =
                      treeForO._root.children[6].children[4].children[1];
                    treeForO._root.children[6].children[4].children[1].children.push(
                      new Node(8, 7)
                    );
                    treeForO._root.children[6].children[4].children[1].children[1].parent =
                      treeForO._root.children[6].children[4].children[1];
                    treeForO._root.children[6].children[4].children[1].children.push(
                      new Node(7, 8)
                    );
                    // if he played 6_5_3
                    treeForO._root.children[6].children[4].children[2].children.push(
                      new Node(8, 1)
                    );
                    treeForO._root.children[6].children[4].children[2].children[0].parent =
                      treeForO._root.children[6].children[4].children[2];
                    treeForO._root.children[6].children[4].children[2].children.push(
                      new Node(8, 7)
                    );
                    treeForO._root.children[6].children[4].children[2].children[1].parent =
                      treeForO._root.children[6].children[4].children[2];
                    treeForO._root.children[6].children[4].children[2].children.push(
                      new Node(7, 8)
                    );
                    // if he played 6_5_7
                    treeForO._root.children[6].children[4].children[3].children.push(
                      new Node(3, 0)
                    );
                    treeForO._root.children[6].children[4].children[3].children[0].parent =
                      treeForO._root.children[6].children[4].children[3];
                    treeForO._root.children[6].children[4].children[3].children.push(
                      new Node(0, 1)
                    );
                    treeForO._root.children[6].children[4].children[3].children[1].parent =
                      treeForO._root.children[6].children[4].children[3];
                    treeForO._root.children[6].children[4].children[3].children.push(
                      new Node(0, 3)
                    );
                    // if he played 6_5_8
                    treeForO._root.children[6].children[4].children[4].children.push(
                      new Node(1, 0)
                    );
                    treeForO._root.children[6].children[4].children[4].children[0].parent =
                      treeForO._root.children[6].children[4].children[4];
                    treeForO._root.children[6].children[4].children[4].children.push(
                      new Node(3, 1)
                    );
                    treeForO._root.children[6].children[4].children[4].children[1].parent =
                      treeForO._root.children[6].children[4].children[4];
                    treeForO._root.children[6].children[4].children[4].children.push(
                      new Node(1, 3)
                    );
                    //if he played 6_7
                    treeForO._root.children[6].children[5].children.push(new Node(3, 0));
                    treeForO._root.children[6].children[5].children[0].parent =
                      treeForO._root.children[6].children[5];
                    treeForO._root.children[6].children[5].children.push(new Node(0, 1));
                    treeForO._root.children[6].children[5].children[1].parent =
                      treeForO._root.children[6].children[5];
                    treeForO._root.children[6].children[5].children.push(new Node(0, 2));
                    treeForO._root.children[6].children[5].children[2].parent =
                      treeForO._root.children[6].children[5];
                    treeForO._root.children[6].children[5].children.push(new Node(0, 3));
                    treeForO._root.children[6].children[5].children[3].parent =
                      treeForO._root.children[6].children[5];
                    treeForO._root.children[6].children[5].children.push(new Node(0, 5));
                    treeForO._root.children[6].children[5].children[4].parent =
                      treeForO._root.children[6].children[5];
                      // if he played 6_7_0
                      treeForO._root.children[6].children[5].children[0].children.push(
                        new Node(2, 1)
                      );
                      treeForO._root.children[6].children[5].children[0].children[0].parent =
                        treeForO._root.children[6].children[5].children[0];
                      treeForO._root.children[6].children[5].children[0].children.push(
                        new Node(1, 2)
                      );
                      treeForO._root.children[6].children[5].children[0].children[1].parent =
                        treeForO._root.children[6].children[5].children[0];
                      treeForO._root.children[6].children[5].children[0].children.push(
                        new Node(2, 5)
                      );
                      //if he played 6_8
                      treeForO._root.children[6].children[6].children.push(new Node(1, 0));
                      treeForO._root.children[6].children[6].children[0].parent =
                        treeForO._root.children[6].children[6];
                      treeForO._root.children[6].children[6].children.push(new Node(3, 1));
                      treeForO._root.children[6].children[6].children[1].parent =
                        treeForO._root.children[6].children[6];
                      treeForO._root.children[6].children[6].children.push(new Node(1, 2));
                      treeForO._root.children[6].children[6].children[2].parent =
                        treeForO._root.children[6].children[6];
                      treeForO._root.children[6].children[6].children.push(new Node(1, 3));
                      treeForO._root.children[6].children[6].children[3].parent =
                        treeForO._root.children[6].children[6];
                      treeForO._root.children[6].children[6].children.push(new Node(1, 5));
                      treeForO._root.children[6].children[6].children[4].parent =
                        treeForO._root.children[6].children[6];
                        // if he played 6_8_1
                        treeForO._root.children[6].children[6].children[0].children.push(
                          new Node(5, 0)
                        );
                        treeForO._root.children[6].children[6].children[0].children[0].parent =
                          treeForO._root.children[6].children[6].children[0];
                        treeForO._root.children[6].children[6].children[0].children.push(
                          new Node(5, 2)
                        );
                        treeForO._root.children[6].children[6].children[0].children[1].parent =
                          treeForO._root.children[6].children[6].children[0];
                        treeForO._root.children[6].children[6].children[0].children.push(
                          new Node(2, 5)
                        );
                        //if he played 7
                        treeForO._root.children[7].children.push(new Node(8, 0));
                        treeForO._root.children[7].children[0].parent = treeForO._root.children[7];
                        treeForO._root.children[7].children.push(new Node(3, 1));
                        treeForO._root.children[7].children[1].parent = treeForO._root.children[7];
                        treeForO._root.children[7].children.push(new Node(6, 2));
                        treeForO._root.children[7].children[2].parent = treeForO._root.children[7];
                        treeForO._root.children[7].children.push(new Node(6, 3));
                        treeForO._root.children[7].children[3].parent = treeForO._root.children[7];
                        treeForO._root.children[7].children.push(new Node(8, 5));
                        treeForO._root.children[7].children[4].parent = treeForO._root.children[7];
                        treeForO._root.children[7].children.push(new Node(8, 6));
                        treeForO._root.children[7].children[5].parent = treeForO._root.children[7];
                        treeForO._root.children[7].children.push(new Node(6, 8));
                        treeForO._root.children[7].children[6].parent = treeForO._root.children[7];
                        //if he played 7_0
                        treeForO._root.children[7].children[0].children.push(new Node(2, 1));
                        treeForO._root.children[7].children[0].children[0].parent =
                          treeForO._root.children[7].children[0];
                        treeForO._root.children[7].children[0].children.push(new Node(1, 2));
                        treeForO._root.children[7].children[0].children[1].parent =
                          treeForO._root.children[7].children[0];
                        treeForO._root.children[7].children[0].children.push(new Node(6, 3));
                        treeForO._root.children[7].children[0].children[2].parent =
                          treeForO._root.children[7].children[0];
                        treeForO._root.children[7].children[0].children.push(new Node(2, 5));
                        treeForO._root.children[7].children[0].children[3].parent =
                          treeForO._root.children[7].children[0];
                        treeForO._root.children[7].children[0].children.push(new Node(3, 6));
                        treeForO._root.children[7].children[0].children[4].parent =
                          treeForO._root.children[7].children[0];
                          // if he played 7_0_1
                          treeForO._root.children[7].children[0].children[0].children.push(
                            new Node(5, 3)
                          );
                          treeForO._root.children[7].children[0].children[0].children[0].parent =
                            treeForO._root.children[7].children[0].children[0];
                          treeForO._root.children[7].children[0].children[0].children.push(
                            new Node(6, 5)
                          );
                          treeForO._root.children[7].children[0].children[0].children[1].parent =
                            treeForO._root.children[7].children[0].children[0];
                          treeForO._root.children[7].children[0].children[0].children.push(
                            new Node(5, 6)
                          );
                          // if he played 7_0_2
                          treeForO._root.children[7].children[0].children[1].children.push(
                            new Node(6, 3)
                          );
                          treeForO._root.children[7].children[0].children[1].children[0].parent =
                            treeForO._root.children[7].children[0].children[1];
                          treeForO._root.children[7].children[0].children[1].children.push(
                            new Node(3, 5)
                          );
                          treeForO._root.children[7].children[0].children[1].children[1].parent =
                            treeForO._root.children[7].children[0].children[1];
                          treeForO._root.children[7].children[0].children[1].children.push(
                            new Node(3, 6)
                          );
                          // if he played 7_0_3
                          treeForO._root.children[7].children[0].children[2].children.push(
                            new Node(2, 1)
                          );
                          treeForO._root.children[7].children[0].children[2].children[0].parent =
                            treeForO._root.children[7].children[0].children[2];
                          treeForO._root.children[7].children[0].children[2].children.push(
                            new Node(1, 2)
                          );
                          treeForO._root.children[7].children[0].children[2].children[1].parent =
                            treeForO._root.children[7].children[0].children[2];
                          treeForO._root.children[7].children[0].children[2].children.push(
                            new Node(2, 5)
                          );
                          // if he played 7_0_5
                          treeForO._root.children[7].children[0].children[3].children.push(
                            new Node(6, 1)
                          );
                          treeForO._root.children[7].children[0].children[3].children[0].parent =
                            treeForO._root.children[7].children[0].children[3];
                          treeForO._root.children[7].children[0].children[3].children.push(
                            new Node(6, 3)
                          );
                          treeForO._root.children[7].children[0].children[3].children[1].parent =
                            treeForO._root.children[7].children[0].children[3];
                          treeForO._root.children[7].children[0].children[3].children.push(
                            new Node(3, 6)
                          );
                          // if he played 7_0_6
                          treeForO._root.children[7].children[0].children[4].children.push(
                            new Node(5, 1)
                          );
                          treeForO._root.children[7].children[0].children[4].children[0].parent =
                            treeForO._root.children[7].children[0].children[4];
                          treeForO._root.children[7].children[0].children[4].children.push(
                            new Node(5, 2)
                          );
                          treeForO._root.children[7].children[0].children[4].children[1].parent =
                            treeForO._root.children[7].children[0].children[4];
                          treeForO._root.children[7].children[0].children[4].children.push(
                            new Node(1, 5)
                          );
                          //if he played 7_1
                          treeForO._root.children[7].children[1].children.push(new Node(5, 0));
                          treeForO._root.children[7].children[1].children[0].parent =
                            treeForO._root.children[7].children[1];
                          treeForO._root.children[7].children[1].children.push(new Node(5, 2));
                          treeForO._root.children[7].children[1].children[1].parent =
                            treeForO._root.children[7].children[1];
                          treeForO._root.children[7].children[1].children.push(new Node(0, 5));
                          treeForO._root.children[7].children[1].children[2].parent =
                            treeForO._root.children[7].children[1];
                          treeForO._root.children[7].children[1].children.push(new Node(5, 6));
                          treeForO._root.children[7].children[1].children[3].parent =
                            treeForO._root.children[7].children[1];
                          treeForO._root.children[7].children[1].children.push(new Node(5, 8));
                          treeForO._root.children[7].children[1].children[4].parent =
                            treeForO._root.children[7].children[1];
                            // if he played 7_1_5
                            treeForO._root.children[7].children[1].children[2].children.push(
                              new Node(6, 2)
                            );
                            treeForO._root.children[7].children[1].children[2].children[0].parent =
                              treeForO._root.children[7].children[1].children[2];
                            treeForO._root.children[7].children[1].children[2].children.push(
                              new Node(8, 6)
                            );
                            treeForO._root.children[7].children[1].children[2].children[1].parent =
                              treeForO._root.children[7].children[1].children[2];
                            treeForO._root.children[7].children[1].children[2].children.push(
                              new Node(6, 8)
                            );
                            //if he played 7_2
                            treeForO._root.children[7].children[2].children.push(new Node(1, 0));
                            treeForO._root.children[7].children[2].children[0].parent =
                              treeForO._root.children[7].children[2];
                            treeForO._root.children[7].children[2].children.push(new Node(0, 1));
                            treeForO._root.children[7].children[2].children[1].parent =
                              treeForO._root.children[7].children[2];
                            treeForO._root.children[7].children[2].children.push(new Node(0, 3));
                            treeForO._root.children[7].children[2].children[2].parent =
                              treeForO._root.children[7].children[2];
                            treeForO._root.children[7].children[2].children.push(new Node(8, 5));
                            treeForO._root.children[7].children[2].children[3].parent =
                              treeForO._root.children[7].children[2];
                            treeForO._root.children[7].children[2].children.push(new Node(5, 8));
                            treeForO._root.children[7].children[2].children[4].parent =
                              treeForO._root.children[7].children[2];
                              // if he played 7_2_0
                              treeForO._root.children[7].children[2].children[0].children.push(
                                new Node(5, 3)
                              );
                              treeForO._root.children[7].children[2].children[0].children[0].parent =
                                treeForO._root.children[7].children[2].children[0];
                              treeForO._root.children[7].children[2].children[0].children.push(
                                new Node(8, 5)
                              );
                              treeForO._root.children[7].children[2].children[0].children[1].parent =
                                treeForO._root.children[7].children[2].children[0];
                              treeForO._root.children[7].children[2].children[0].children.push(
                                new Node(5, 8)
                              );
                              // if he played 7_2_1
                              treeForO._root.children[7].children[2].children[1].children.push(
                                new Node(8, 3)
                              );
                              treeForO._root.children[7].children[2].children[1].children[0].parent =
                                treeForO._root.children[7].children[2].children[1];
                              treeForO._root.children[7].children[2].children[1].children.push(
                                new Node(3, 5)
                              );
                              treeForO._root.children[7].children[2].children[1].children[1].parent =
                                treeForO._root.children[7].children[2].children[1];
                              treeForO._root.children[7].children[2].children[1].children.push(
                                new Node(3, 8)
                              );
                              // if he played 7_2_3
                              treeForO._root.children[7].children[2].children[2].children.push(
                                new Node(8, 1)
                              );
                              treeForO._root.children[7].children[2].children[2].children[0].parent =
                                treeForO._root.children[7].children[2].children[2];
                              treeForO._root.children[7].children[2].children[2].children.push(
                                new Node(8, 5)
                              );
                              treeForO._root.children[7].children[2].children[2].children[1].parent =
                                treeForO._root.children[7].children[2].children[2];
                              treeForO._root.children[7].children[2].children[2].children.push(
                                new Node(5, 8)
                              );
                              // if he played 7_2_5
                              treeForO._root.children[7].children[2].children[3].children.push(
                                new Node(1, 0)
                              );
                              treeForO._root.children[7].children[2].children[3].children[0].parent =
                                treeForO._root.children[7].children[2].children[3];
                              treeForO._root.children[7].children[2].children[3].children.push(
                                new Node(0, 1)
                              );
                              treeForO._root.children[7].children[2].children[3].children[1].parent =
                                treeForO._root.children[7].children[2].children[3];
                              treeForO._root.children[7].children[2].children[3].children.push(
                                new Node(0, 3)
                              );
                              // if he played 7_2_8
                              treeForO._root.children[7].children[2].children[4].children.push(
                                new Node(3, 0)
                              );
                              treeForO._root.children[7].children[2].children[4].children[0].parent =
                                treeForO._root.children[7].children[2].children[4];
                              treeForO._root.children[7].children[2].children[4].children.push(
                                new Node(3, 1)
                              );
                              treeForO._root.children[7].children[2].children[4].children[1].parent =
                                treeForO._root.children[7].children[2].children[4];
                              treeForO._root.children[7].children[2].children[4].children.push(
                                new Node(1, 3)
                              );
                              //if he played 7_3
                              treeForO._root.children[7].children[3].children.push(new Node(2, 0));
                              treeForO._root.children[7].children[3].children[0].parent =
                                treeForO._root.children[7].children[3];
                              treeForO._root.children[7].children[3].children.push(new Node(2, 1));
                              treeForO._root.children[7].children[3].children[1].parent =
                                treeForO._root.children[7].children[3];
                              treeForO._root.children[7].children[3].children.push(new Node(8, 2));
                              treeForO._root.children[7].children[3].children[2].parent =
                                treeForO._root.children[7].children[3];
                              treeForO._root.children[7].children[3].children.push(new Node(2, 5));
                              treeForO._root.children[7].children[3].children[3].parent =
                                treeForO._root.children[7].children[3];
                              treeForO._root.children[7].children[3].children.push(new Node(2, 8));
                              treeForO._root.children[7].children[3].children[4].parent =
                                treeForO._root.children[7].children[3];
                                // if he played 7_3_2
                                treeForO._root.children[7].children[3].children[2].children.push(
                                  new Node(1, 0)
                                );
                                treeForO._root.children[7].children[3].children[2].children[0].parent =
                                  treeForO._root.children[7].children[3].children[2];
                                treeForO._root.children[7].children[3].children[2].children.push(
                                  new Node(0, 1)
                                );
                                treeForO._root.children[7].children[3].children[2].children[1].parent =
                                  treeForO._root.children[7].children[3].children[2];
                                treeForO._root.children[7].children[3].children[2].children.push(
                                  new Node(0, 5)
                                );
                                //if he played 7_5
                                treeForO._root.children[7].children[4].children.push(new Node(6, 0));
                                treeForO._root.children[7].children[4].children[0].parent =
                                  treeForO._root.children[7].children[4];
                                treeForO._root.children[7].children[4].children.push(new Node(0, 1));
                                treeForO._root.children[7].children[4].children[1].parent =
                                  treeForO._root.children[7].children[4];
                                treeForO._root.children[7].children[4].children.push(new Node(0, 2));
                                treeForO._root.children[7].children[4].children[2].parent =
                                  treeForO._root.children[7].children[4];
                                treeForO._root.children[7].children[4].children.push(new Node(0, 3));
                                treeForO._root.children[7].children[4].children[3].parent =
                                  treeForO._root.children[7].children[4];
                                treeForO._root.children[7].children[4].children.push(new Node(0, 6));
                                treeForO._root.children[7].children[4].children[4].parent =
                                  treeForO._root.children[7].children[4];
                                  // if he played 7_5_0
                                  treeForO._root.children[7].children[4].children[0].children.push(
                                    new Node(2, 1)
                                  );
                                  treeForO._root.children[7].children[4].children[0].children[0].parent =
                                    treeForO._root.children[7].children[4].children[0];
                                  treeForO._root.children[7].children[4].children[0].children.push(
                                    new Node(1, 2)
                                  );
                                  treeForO._root.children[7].children[4].children[0].children[1].parent =
                                    treeForO._root.children[7].children[4].children[0];
                                  treeForO._root.children[7].children[4].children[0].children.push(
                                    new Node(2, 3)
                                  );
                                  //if he played 7_6
                                  treeForO._root.children[7].children[5].children.push(new Node(3, 0));
                                  treeForO._root.children[7].children[5].children[0].parent =
                                    treeForO._root.children[7].children[5];
                                  treeForO._root.children[7].children[5].children.push(new Node(0, 1));
                                  treeForO._root.children[7].children[5].children[1].parent =
                                    treeForO._root.children[7].children[5];
                                  treeForO._root.children[7].children[5].children.push(new Node(0, 2));
                                  treeForO._root.children[7].children[5].children[2].parent =
                                    treeForO._root.children[7].children[5];
                                  treeForO._root.children[7].children[5].children.push(new Node(0, 3));
                                  treeForO._root.children[7].children[5].children[3].parent =
                                    treeForO._root.children[7].children[5];
                                  treeForO._root.children[7].children[5].children.push(new Node(0, 5));
                                  treeForO._root.children[7].children[5].children[4].parent =
                                    treeForO._root.children[7].children[5];
                                    // if he played 7_6_0
                                    treeForO._root.children[7].children[5].children[0].children.push(
                                      new Node(3, 1)
                                    );
                                    treeForO._root.children[7].children[5].children[0].children[0].parent =
                                      treeForO._root.children[7].children[5].children[0];
                                    treeForO._root.children[7].children[5].children[0].children.push(
                                      new Node(3, 2)
                                    );
                                    treeForO._root.children[7].children[5].children[0].children[1].parent =
                                      treeForO._root.children[7].children[5].children[0];
                                    treeForO._root.children[7].children[5].children[0].children.push(
                                      new Node(1, 3)
                                    );
                                    //if he played 7_8
                                    treeForO._root.children[7].children[6].children.push(new Node(2, 0));
                                    treeForO._root.children[7].children[6].children[0].parent =
                                      treeForO._root.children[7].children[6];
                                    treeForO._root.children[7].children[6].children.push(new Node(2, 1));
                                    treeForO._root.children[7].children[6].children[1].parent =
                                      treeForO._root.children[7].children[6];
                                    treeForO._root.children[7].children[6].children.push(new Node(5, 2));
                                    treeForO._root.children[7].children[6].children[2].parent =
                                      treeForO._root.children[7].children[6];
                                    treeForO._root.children[7].children[6].children.push(new Node(2, 3));
                                    treeForO._root.children[7].children[6].children[3].parent =
                                      treeForO._root.children[7].children[6];
                                    treeForO._root.children[7].children[6].children.push(new Node(2, 5));
                                    treeForO._root.children[7].children[6].children[4].parent =
                                      treeForO._root.children[7].children[6];
                                      // if he played 7_8_2
                                      treeForO._root.children[7].children[6].children[2].children.push(
                                        new Node(3, 0)
                                      );
                                      treeForO._root.children[7].children[6].children[2].children[0].parent =
                                        treeForO._root.children[7].children[6].children[2];
                                      treeForO._root.children[7].children[6].children[2].children.push(
                                        new Node(3, 1)
                                      );
                                      treeForO._root.children[7].children[6].children[2].children[1].parent =
                                        treeForO._root.children[7].children[6].children[2];
                                      treeForO._root.children[7].children[6].children[2].children.push(
                                        new Node(1, 3)
                                      );
                                      //if he played 8
                                      treeForO._root.children[8].children.push(new Node(1, 0));
                                      treeForO._root.children[8].children[0].parent = treeForO._root.children[8];
                                      treeForO._root.children[8].children.push(new Node(0, 1));
                                      treeForO._root.children[8].children[1].parent = treeForO._root.children[8];
                                      treeForO._root.children[8].children.push(new Node(5, 2));
                                      treeForO._root.children[8].children[2].parent = treeForO._root.children[8];
                                      treeForO._root.children[8].children.push(new Node(0, 3));
                                      treeForO._root.children[8].children[3].parent = treeForO._root.children[8];
                                      treeForO._root.children[8].children.push(new Node(2, 5));
                                      treeForO._root.children[8].children[4].parent = treeForO._root.children[8];
                                      treeForO._root.children[8].children.push(new Node(7, 6));
                                      treeForO._root.children[8].children[5].parent = treeForO._root.children[8];
                                      treeForO._root.children[8].children.push(new Node(6, 7));
                                      treeForO._root.children[8].children[6].parent = treeForO._root.children[8];
                                      //if he played 8_0
                                      treeForO._root.children[8].children[0].children.push(new Node(7, 2));
                                      treeForO._root.children[8].children[0].children[0].parent =
                                        treeForO._root.children[8].children[0];
                                      treeForO._root.children[8].children[0].children.push(new Node(7, 3));
                                      treeForO._root.children[8].children[0].children[1].parent =
                                        treeForO._root.children[8].children[0];
                                      treeForO._root.children[8].children[0].children.push(new Node(7, 5));
                                      treeForO._root.children[8].children[0].children[2].parent =
                                        treeForO._root.children[8].children[0];
                                      treeForO._root.children[8].children[0].children.push(new Node(7, 6));
                                      treeForO._root.children[8].children[0].children[3].parent =
                                        treeForO._root.children[8].children[0];
                                      treeForO._root.children[8].children[0].children.push(new Node(6, 7));
                                      treeForO._root.children[8].children[0].children[4].parent =
                                        treeForO._root.children[8].children[0];
                                        // if he played 8_0_7
                                        treeForO._root.children[8].children[0].children[4].children.push(
                                          new Node(5, 2)
                                        );
                                        treeForO._root.children[8].children[0].children[4].children[0].parent =
                                          treeForO._root.children[8].children[0].children[4];
                                        treeForO._root.children[8].children[0].children[4].children.push(
                                          new Node(2, 3)
                                        );
                                        treeForO._root.children[8].children[0].children[4].children[1].parent =
                                          treeForO._root.children[8].children[0].children[4];
                                        treeForO._root.children[8].children[0].children[4].children.push(
                                          new Node(2, 5)
                                        );
                                        //if he played 8_1
                                        treeForO._root.children[8].children[1].children.push(new Node(5, 2));
                                        treeForO._root.children[8].children[1].children[0].parent =
                                          treeForO._root.children[8].children[1];
                                        treeForO._root.children[8].children[1].children.push(new Node(6, 3));
                                        treeForO._root.children[8].children[1].children[1].parent =
                                          treeForO._root.children[8].children[1];
                                        treeForO._root.children[8].children[1].children.push(new Node(2, 5));
                                        treeForO._root.children[8].children[1].children[2].parent =
                                          treeForO._root.children[8].children[1];
                                        treeForO._root.children[8].children[1].children.push(new Node(7, 6));
                                        treeForO._root.children[8].children[1].children[3].parent =
                                          treeForO._root.children[8].children[1];
                                        treeForO._root.children[8].children[1].children.push(new Node(6, 7));
                                        treeForO._root.children[8].children[1].children[4].parent =
                                          treeForO._root.children[8].children[1];
                                          // if he played 8_1_2
                                          treeForO._root.children[8].children[1].children[0].children.push(
                                            new Node(7, 3)
                                          );
                                          treeForO._root.children[8].children[1].children[0].children[0].parent =
                                            treeForO._root.children[8].children[1].children[0];
                                          treeForO._root.children[8].children[1].children[0].children.push(
                                            new Node(3, 6)
                                          );
                                          treeForO._root.children[8].children[1].children[0].children[1].parent =
                                            treeForO._root.children[8].children[1].children[0];
                                          treeForO._root.children[8].children[1].children[0].children.push(
                                            new Node(3, 7)
                                          );
                                          // if he played 8_1_3
                                          treeForO._root.children[8].children[1].children[1].children.push(
                                            new Node(5, 2)
                                          );
                                          treeForO._root.children[8].children[1].children[1].children[0].parent =
                                            treeForO._root.children[8].children[1].children[1];
                                          treeForO._root.children[8].children[1].children[1].children.push(
                                            new Node(2, 5)
                                          );
                                          treeForO._root.children[8].children[1].children[1].children[1].parent =
                                            treeForO._root.children[8].children[1].children[1];
                                          treeForO._root.children[8].children[1].children[1].children.push(
                                            new Node(2, 7)
                                          );
                                          // if he played 8_1_5
                                          treeForO._root.children[8].children[1].children[2].children.push(
                                            new Node(6, 3)
                                          );
                                          treeForO._root.children[8].children[1].children[2].children[0].parent =
                                            treeForO._root.children[8].children[1].children[2];
                                          treeForO._root.children[8].children[1].children[2].children.push(
                                            new Node(7, 6)
                                          );
                                          treeForO._root.children[8].children[1].children[2].children[1].parent =
                                            treeForO._root.children[8].children[1].children[2];
                                          treeForO._root.children[8].children[1].children[2].children.push(
                                            new Node(6, 7)
                                          );
                                          // if he played 8_1_6
                                          treeForO._root.children[8].children[1].children[3].children.push(
                                            new Node(5, 2)
                                          );
                                          treeForO._root.children[8].children[1].children[3].children[0].parent =
                                            treeForO._root.children[8].children[1].children[3];
                                          treeForO._root.children[8].children[1].children[3].children.push(
                                            new Node(2, 3)
                                          );
                                          treeForO._root.children[8].children[1].children[3].children[3].parent =
                                            treeForO._root.children[8].children[1].children[3];
                                          treeForO._root.children[8].children[1].children[3].children.push(
                                            new Node(2, 5)
                                          );
                                          // if he played 8_1_7
                                          treeForO._root.children[8].children[1].children[4].children.push(
                                            new Node(5, 2)
                                          );
                                          treeForO._root.children[8].children[1].children[4].children[0].parent =
                                            treeForO._root.children[8].children[1].children[4];
                                          treeForO._root.children[8].children[1].children[4].children.push(
                                            new Node(2, 3)
                                          );
                                          treeForO._root.children[8].children[1].children[4].children[1].parent =
                                            treeForO._root.children[8].children[1].children[4];
                                          treeForO._root.children[8].children[1].children[4].children.push(
                                            new Node(2, 5)
                                          );
                                          //if he played 8_2
                                          treeForO._root.children[8].children[2].children.push(new Node(3, 0));
                                          treeForO._root.children[8].children[2].children[0].parent =
                                            treeForO._root.children[8].children[2];
                                          treeForO._root.children[8].children[2].children.push(new Node(3, 1));
                                          treeForO._root.children[8].children[2].children[1].parent =
                                            treeForO._root.children[8].children[2];
                                          treeForO._root.children[8].children[2].children.push(new Node(7, 3));
                                          treeForO._root.children[8].children[2].children[2].parent =
                                            treeForO._root.children[8].children[2];
                                          treeForO._root.children[8].children[2].children.push(new Node(3, 6));
                                          treeForO._root.children[8].children[2].children[3].parent =
                                            treeForO._root.children[8].children[2];
                                          treeForO._root.children[8].children[2].children.push(new Node(3, 7));
                                          treeForO._root.children[8].children[2].children[4].parent =
                                            treeForO._root.children[8].children[2];
                                            // if he played 8_2_3
                                            treeForO._root.children[8].children[2].children[2].children.push(
                                              new Node(1, 0)
                                            );
                                            treeForO._root.children[8].children[2].children[2].children[0].parent =
                                              treeForO._root.children[8].children[2].children[2];
                                            treeForO._root.children[8].children[2].children[2].children.push(
                                              new Node(0, 1)
                                            );
                                            treeForO._root.children[8].children[2].children[2].children[1].parent =
                                              treeForO._root.children[8].children[2].children[2];
                                            treeForO._root.children[8].children[2].children[2].children.push(
                                              new Node(1, 6)
                                            );
                                            //if he played 8_3
                                            treeForO._root.children[8].children[3].children.push(new Node(2, 1));
                                            treeForO._root.children[8].children[3].children[0].parent =
                                              treeForO._root.children[8].children[3];
                                            treeForO._root.children[8].children[3].children.push(new Node(5, 2));
                                            treeForO._root.children[8].children[3].children[1].parent =
                                              treeForO._root.children[8].children[3];
                                            treeForO._root.children[8].children[3].children.push(new Node(2, 5));
                                            treeForO._root.children[8].children[3].children[2].parent =
                                              treeForO._root.children[8].children[3];
                                            treeForO._root.children[8].children[3].children.push(new Node(7, 6));
                                            treeForO._root.children[8].children[3].children[3].parent =
                                              treeForO._root.children[8].children[3];
                                            treeForO._root.children[8].children[3].children.push(new Node(6, 7));
                                            treeForO._root.children[8].children[3].children[4].parent =
                                              treeForO._root.children[8].children[3];
                                              // if he played 8_3_1
                                              treeForO._root.children[8].children[3].children[0].children.push(
                                                new Node(6, 5)
                                              );
                                              treeForO._root.children[8].children[3].children[0].children[0].parent =
                                                treeForO._root.children[8].children[3].children[0];
                                              treeForO._root.children[8].children[3].children[0].children.push(
                                                new Node(7, 6)
                                              );
                                              treeForO._root.children[8].children[3].children[0].children[1].parent =
                                                treeForO._root.children[8].children[3].children[0];
                                              treeForO._root.children[8].children[3].children[0].children.push(
                                                new Node(6, 7)
                                              );
                                              // if he played 8_3_2
                                              treeForO._root.children[8].children[3].children[1].children.push(
                                                new Node(6, 1)
                                              );
                                              treeForO._root.children[8].children[3].children[1].children[0].parent =
                                                treeForO._root.children[8].children[3].children[1];
                                              treeForO._root.children[8].children[3].children[1].children.push(
                                                new Node(7, 6)
                                              );
                                              treeForO._root.children[8].children[3].children[1].children[1].parent =
                                                treeForO._root.children[8].children[3].children[1];
                                              treeForO._root.children[8].children[3].children[1].children.push(
                                                new Node(6, 7)
                                              );
                                              // if he played 8_3_5
                                              treeForO._root.children[8].children[3].children[2].children.push(
                                                new Node(6, 1)
                                              );
                                              treeForO._root.children[8].children[3].children[2].children[0].parent =
                                                treeForO._root.children[8].children[3].children[2];
                                              treeForO._root.children[8].children[3].children[2].children.push(
                                                new Node(7, 6)
                                              );
                                              treeForO._root.children[8].children[3].children[2].children[1].parent =
                                                treeForO._root.children[8].children[3].children[2];
                                              treeForO._root.children[8].children[3].children[2].children.push(
                                                new Node(6, 7)
                                              );
                                              // if he played 8_3_6
                                              treeForO._root.children[8].children[3].children[3].children.push(
                                                new Node(5, 1)
                                              );
                                              treeForO._root.children[8].children[3].children[3].children[0].parent =
                                                treeForO._root.children[8].children[3].children[3];
                                              treeForO._root.children[8].children[3].children[3].children.push(
                                                new Node(1, 2)
                                              );
                                              treeForO._root.children[8].children[3].children[3].children[1].parent =
                                                treeForO._root.children[8].children[3].children[3];
                                              treeForO._root.children[8].children[3].children[3].children.push(
                                                new Node(1, 5)
                                              );
                                              // if he played 8_3_7
                                              treeForO._root.children[8].children[3].children[4].children.push(
                                                new Node(2, 1)
                                              );
                                              treeForO._root.children[8].children[3].children[4].children[0].parent =
                                                treeForO._root.children[8].children[3].children[4];
                                              treeForO._root.children[8].children[3].children[4].children.push(
                                                new Node(5, 2)
                                              );
                                              treeForO._root.children[8].children[3].children[4].children[1].parent =
                                                treeForO._root.children[8].children[3].children[4];
                                              treeForO._root.children[8].children[3].children[4].children.push(
                                                new Node(2, 5)
                                              );
                                              //if he played 8_5
                                              treeForO._root.children[8].children[4].children.push(new Node(6, 0));
                                              treeForO._root.children[8].children[4].children[0].parent =
                                                treeForO._root.children[8].children[4];
                                              treeForO._root.children[8].children[4].children.push(new Node(6, 1));
                                              treeForO._root.children[8].children[4].children[1].parent =
                                                treeForO._root.children[8].children[4];
                                              treeForO._root.children[8].children[4].children.push(new Node(6, 3));
                                              treeForO._root.children[8].children[4].children[2].parent =
                                                treeForO._root.children[8].children[4];
                                              treeForO._root.children[8].children[4].children.push(new Node(7, 6));
                                              treeForO._root.children[8].children[4].children[3].parent =
                                                treeForO._root.children[8].children[4];
                                              treeForO._root.children[8].children[4].children.push(new Node(6, 7));
                                              treeForO._root.children[8].children[4].children[4].parent =
                                                treeForO._root.children[8].children[4];
                                                // if he played 8_5_6
                                                treeForO._root.children[8].children[4].children[3].children.push(
                                                  new Node(3, 0)
                                                );
                                                treeForO._root.children[8].children[4].children[3].children[0].parent =
                                                  treeForO._root.children[8].children[4].children[3];
                                                treeForO._root.children[8].children[4].children[3].children.push(
                                                  new Node(0, 1)
                                                );
                                                treeForO._root.children[8].children[4].children[3].children[1].parent =
                                                  treeForO._root.children[8].children[4].children[3];
                                                treeForO._root.children[8].children[4].children[3].children.push(
                                                  new Node(0, 3)
                                                );
                                                //if he played 8_6
                                                treeForO._root.children[8].children[5].children.push(new Node(1, 0));
                                                treeForO._root.children[8].children[5].children[0].parent =
                                                  treeForO._root.children[8].children[5];
                                                treeForO._root.children[8].children[5].children.push(new Node(5, 1));
                                                treeForO._root.children[8].children[5].children[1].parent =
                                                  treeForO._root.children[8].children[5];
                                                treeForO._root.children[8].children[5].children.push(new Node(1, 2));
                                                treeForO._root.children[8].children[5].children[2].parent =
                                                  treeForO._root.children[8].children[5];
                                                treeForO._root.children[8].children[5].children.push(new Node(1, 3));
                                                treeForO._root.children[8].children[5].children[3].parent =
                                                  treeForO._root.children[8].children[5];
                                                treeForO._root.children[8].children[5].children.push(new Node(1, 5));
                                                treeForO._root.children[8].children[5].children[4].parent =
                                                  treeForO._root.children[8].children[5];
                                                  // if he played 8_6_1
                                                  treeForO._root.children[8].children[5].children[1].children.push(
                                                    new Node(3, 0)
                                                  );
                                                  treeForO._root.children[8].children[5].children[1].children[0].parent =
                                                    treeForO._root.children[8].children[5].children[1];
                                                  treeForO._root.children[8].children[5].children[1].children.push(
                                                    new Node(3, 1)
                                                  );
                                                  treeForO._root.children[8].children[5].children[1].children[1].parent =
                                                    treeForO._root.children[8].children[5].children[1];
                                                  treeForO._root.children[8].children[5].children[1].children.push(
                                                    new Node(0, 3)
                                                  );
                                                  //if he played 8_7
                                                  treeForO._root.children[8].children[6].children.push(new Node(2, 0));
                                                  treeForO._root.children[8].children[6].children[0].parent =
                                                    treeForO._root.children[8].children[6];
                                                  treeForO._root.children[8].children[6].children.push(new Node(6, 1));
                                                  treeForO._root.children[8].children[6].children[1].parent =
                                                    treeForO._root.children[8].children[6];
                                                  treeForO._root.children[8].children[6].children.push(new Node(5, 2));
                                                  treeForO._root.children[8].children[6].children[2].parent =
                                                    treeForO._root.children[8].children[6];
                                                  treeForO._root.children[8].children[6].children.push(new Node(2, 3));
                                                  treeForO._root.children[8].children[6].children[3].parent =
                                                    treeForO._root.children[8].children[6];
                                                  treeForO._root.children[8].children[6].children.push(new Node(2, 5));
                                                  treeForO._root.children[8].children[6].children[4].parent =
                                                    treeForO._root.children[8].children[6];
                                                    // if he played 8_7_2
                                                    treeForO._root.children[8].children[6].children[2].children.push(
                                                      new Node(1, 0)
                                                    );
                                                    treeForO._root.children[8].children[6].children[2].children[0].parent =
                                                      treeForO._root.children[8].children[6].children[2];
                                                    treeForO._root.children[8].children[6].children[2].children.push(
                                                      new Node(0, 1)
                                                    );
                                                    treeForO._root.children[8].children[6].children[2].children[1].parent =
                                                      treeForO._root.children[8].children[6].children[2];
                                                    treeForO._root.children[8].children[6].children[2].children.push(
                                                      new Node(0, 3)
                                                    );
  return treeForO;
}
