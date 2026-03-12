/* Linked List is a linear data structure consisting if nodes that are connected.
Each node has a data field and one or more pointers connecting to other nodes.
The first node is the head and the last node the tail that is pointing to null.

Singly Linked List:
-----    -----
|D|P| -> |D|P|
-----    -----

Doubly Linked List:
-------     -------
|P|D|P| <-> |P|D|P|
-------     -------
*/

interface singleNode<T> {
  value: T;
  next: singleNode<T> | null;
}

type singlyLinkedList<T> = {
  head: singleNode<T> | null;
  size: number;
};

function createSingleNode<T>(value: T): singleNode<T> {
  return { value, next: null };
}

function createSinglyLinkedList<T>(): singlyLinkedList<T> {
  return { head: null, size: 0 };
}
