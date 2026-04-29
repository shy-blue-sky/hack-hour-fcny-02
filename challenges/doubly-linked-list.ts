/*

  * Below, you are provided the constructor function for a doubly linked list as well as a constructor function for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the tail of the doubly linked list
    It shouldn't return anything
  * The 'remove' method should remove and return the first instance of a node containing a specific value from the doubly linked list
    If there is no node that contains that value, the method should return undefined
  
  Example doubly linked list
  null <- 4 <-> 9 <-> 2 <-> 1 -> null

  Example after using 'add' method to add 6
  null <- 4 <-> 9 <-> 2 <-> 1 <-> 6 -> null

  Example after using 'remove' method to remove 2
  null <- 4 <-> 9 <-> 1 <-> 6 -> null

*/

class ListNode<T> {
  val: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // This method should add an additional node to the end of the doubly linked list
  add(val: T): void {}

  // This method should remove and return the first instance of a node with the inputted value from the doubly linked list;
  // If there is no node that contains that value, the method should return undefined
  remove(val: T): ListNode<T> | undefined {
    return undefined;
  }
}

export { DoublyLinkedList, ListNode };
