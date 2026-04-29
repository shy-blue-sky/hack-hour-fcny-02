import { describe, it, expect, beforeEach } from 'vitest';
import { DoublyLinkedList, ListNode } from '../challenges/doubly-linked-list';

describe('DoublyLinkedList', () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList();
  });

  describe('.add()', () => {
    it('should add a node to an empty list', () => {
      list.add(1);
      expect(list).toHaveProperty('head');
      if (list.head) {
        expect(list.head.val).toBe(1);
        expect(list.head.next).toBe(null);
        expect(list.head.prev).toBe(null);
      }
      expect(list).toHaveProperty('tail');
      if (list.tail) {
        expect(list.tail.val).toBe(1);
        expect(list.tail.next).toBe(null);
        expect(list.tail.prev).toBe(null);
      }
    });

    it('should link each additional node to the next', () => {
      list.add(1);
      list.add(2);
      list.add(3);

      // nested type guards in order to safely test deeply nested values
      expect(list).toHaveProperty('head');
      if (list.head) {
        expect(list.head.val).toBe(1);
        expect(list.head).toHaveProperty('next');
        if (list.head.next) {
          expect(list.head.next.val).toBe(2);
          expect(list.head.next).toHaveProperty('next');
          if (list.head.next.next) {
            expect(list.head.next.next.val).toBe(3);
            expect(list.head.next.next.next).toBe(null);
          }
        }
      }
    });

    it('should link each additional node to the previous', () => {
      list.add(1);
      list.add(2);
      list.add(3);

      expect(list).toHaveProperty('tail');
      if (list.tail) {
        expect(list.tail.val).toBe(3);
        expect(list.tail).toHaveProperty('prev');
        if (list.tail.prev) {
          expect(list.tail.prev.val).toBe(2);
          expect(list.tail.prev).toHaveProperty('prev');
          if (list.tail.prev.prev) {
            expect(list.tail.prev.prev.val).toBe(1);
            expect(list.tail.prev.prev.prev).toBe(null);
          }
        }
      }
    });
  });

  describe('.remove()', () => {
    // Construct the list nodes manually in order to bypass .add() method, resetting them before each test
    let firstNode: ListNode<number>,
      secondNode: ListNode<number>,
      thirdNode: ListNode<number>,
      thirdNodeDupe: ListNode<number>,
      fourthNode: ListNode<number>,
      fifthNode: ListNode<number>;
    beforeEach(() => {
      firstNode = { val: 1, next: null, prev: null };
      secondNode = { val: 2, next: null, prev: null };
      thirdNode = { val: 3, next: null, prev: null };
      thirdNodeDupe = { val: 3, next: null, prev: null };
      fourthNode = { val: 4, next: null, prev: null };
      fifthNode = { val: 5, next: null, prev: null };
    });

    it('should remove head node for a list with a single node', () => {
      list.head = firstNode;
      list.tail = firstNode;

      list.remove(1);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });

    it('should remove head node for a list with multiple nodes', () => {
      list.head = firstNode;
      firstNode.next = secondNode;
      secondNode.next = thirdNode;
      list.tail = thirdNode;
      thirdNode.prev = secondNode;
      secondNode.prev = firstNode;

      list.remove(1);

      expect(list).toHaveProperty('head');
      if (list.head) {
        expect(list.head.val).toBe(2);
        expect(list.head).toHaveProperty('next');
        if (list.head.next) {
          expect(list.head.next.val).toBe(3);
          expect(list.head.next.next).toBe(null);
        }
      }

      expect(list).toHaveProperty('tail');
      if (list.tail) {
        expect(list.tail.val).toBe(3);
        expect(list.tail).toHaveProperty('prev');
        if (list.tail.prev) {
          expect(list.tail.prev.val).toBe(2);
          expect(list.tail.prev.prev).toBe(null);
        }
      }
    });

    it('should remove node from middle of the list', () => {
      list.head = firstNode;
      firstNode.next = secondNode;
      secondNode.next = thirdNode;
      thirdNode.next = fourthNode;
      fourthNode.next = fifthNode;
      list.tail = fifthNode;
      fifthNode.prev = fourthNode;
      fourthNode.prev = thirdNode;
      thirdNode.prev = secondNode;
      secondNode.prev = firstNode;

      list.remove(4);

      expect(list).toHaveProperty('head');
      if (list.head) {
        expect(list.head.val).toBe(1);
        expect(list.head).toHaveProperty('next');
        if (list.head.next) {
          expect(list.head.next.val).toBe(2);
          expect(list.head.next).toHaveProperty('next');
          if (list.head.next.next) {
            expect(list.head.next.next.val).toBe(3);
            expect(list.head.next.next).toHaveProperty('next');
            if (list.head.next.next.next) {
              expect(list.head.next.next.next.val).toBe(5);
              expect(list.head.next.next.next.next).toBe(null);
            }
          }
        }
      }

      expect(list).toHaveProperty('tail');
      if (list.tail) {
        expect(list.tail.val).toBe(5);
        expect(list.tail).toHaveProperty('prev');
        if (list.tail.prev) {
          expect(list.tail.prev.val).toBe(3);
          expect(list.tail.prev).toHaveProperty('prev');
          if (list.tail.prev.prev) {
            expect(list.tail.prev.prev.val).toBe(2);
            expect(list.tail.prev.prev).toHaveProperty('prev');
            if (list.tail.prev.prev.prev) {
              expect(list.tail.prev.prev.prev.val).toBe(1);
              expect(list.tail.prev.prev.prev.prev).toBe(null);
            }
          }
        }
      }
    });

    it('should remove node from end of the list', () => {
      list.head = firstNode;
      firstNode.next = secondNode;
      secondNode.next = thirdNode;
      list.tail = thirdNode;
      thirdNode.prev = secondNode;
      secondNode.prev = firstNode;

      list.remove(3);

      expect(list).toHaveProperty('head');
      if (list.head) {
        expect(list.head.val).toBe(1);
        expect(list.head).toHaveProperty('next');
        if (list.head.next) {
          expect(list.head.next.val).toBe(2);
          expect(list.head.next.next).toBe(null);
        }
      }

      expect(list).toHaveProperty('tail');
      if (list.tail) {
        expect(list.tail.val).toBe(2);
        expect(list.tail).toHaveProperty('prev');
        if (list.tail.prev) {
          expect(list.tail.prev.val).toBe(1);
          expect(list.tail.prev.prev).toBe(null);
        }
      }
    });

    it('should remove only the first node with a matching value, leaving subsequent nodes unchanged', () => {
      list.head = firstNode;
      firstNode.next = secondNode;
      secondNode.next = thirdNode;
      thirdNode.next = fourthNode;
      fourthNode.next = thirdNodeDupe;
      list.tail = thirdNodeDupe;
      thirdNodeDupe.prev = fourthNode;
      fourthNode.prev = thirdNode;
      thirdNode.prev = secondNode;
      secondNode.prev = firstNode;

      list.remove(3);

      expect(list).toHaveProperty('head');
      if (list.head) {
        expect(list.head.val).toBe(1);
        expect(list.head).toHaveProperty('next');
        if (list.head.next) {
          expect(list.head.next.val).toBe(2);
          expect(list.head.next).toHaveProperty('next');
          if (list.head.next.next) {
            expect(list.head.next.next.val).toBe(4);
            expect(list.head.next.next).toHaveProperty('next');
            if (list.head.next.next.next) {
              expect(list.head.next.next.next.val).toBe(3);
              expect(list.head.next.next.next.next).toBe(null);
            }
          }
        }
      }

      expect(list).toHaveProperty('tail');
      if (list.tail) {
        expect(list.tail.val).toBe(3);
        expect(list.tail).toHaveProperty('prev');
        if (list.tail.prev) {
          expect(list.tail.prev.val).toBe(4);
          expect(list.tail.prev).toHaveProperty('prev');
          if (list.tail.prev.prev) {
            expect(list.tail.prev.prev.val).toBe(2);
            expect(list.tail.prev.prev).toHaveProperty('prev');
            if (list.tail.prev.prev.prev) {
              expect(list.tail.prev.prev.prev.val).toBe(1);
              expect(list.tail.prev.prev.prev.prev).toBe(null);
            }
          }
        }
      }
    });

    it('should return the removed node', () => {
      list.head = firstNode;
      firstNode.next = secondNode;
      secondNode.next = thirdNode;
      list.tail = thirdNode;
      thirdNode.prev = secondNode;
      secondNode.prev = firstNode;

      const node = list.remove(2);
      expect(node).toBe(secondNode);
    });

    it('should return undefined when attempting to remove a nonexistent node', () => {
      list.head = firstNode;
      firstNode.next = secondNode;
      secondNode.next = thirdNode;
      list.tail = thirdNode;
      thirdNode.prev = secondNode;
      secondNode.prev = firstNode;

      expect(list.remove(6)).toBeUndefined();
    });

    it('should leave the list unchanged when attempting to remove a nonexistent node', () => {
      list.head = firstNode;
      firstNode.next = secondNode;
      secondNode.next = thirdNode;
      list.tail = thirdNode;
      thirdNode.prev = secondNode;
      secondNode.prev = firstNode;

      list.remove(6);

      expect(list).toHaveProperty('head');
      if (list.head) {
        expect(list.head.val).toBe(1);
        expect(list.head).toHaveProperty('next');
        if (list.head.next) {
          expect(list.head.next.val).toBe(2);
          expect(list.head.next).toHaveProperty('next');
          if (list.head.next.next) {
            expect(list.head.next.next.val).toBe(3);
            expect(list.head.next.next.next).toBe(null);
          }
        }
      }

      expect(list).toHaveProperty('tail');
      if (list.tail) {
        expect(list.tail.val).toBe(3);
        expect(list.tail).toHaveProperty('prev');
        if (list.tail.prev) {
          expect(list.tail.prev.val).toBe(2);
          expect(list.tail.prev).toHaveProperty('prev');
          if (list.tail.prev.prev) {
            expect(list.tail.prev.prev.val).toBe(1);
            expect(list.tail.prev.prev.prev).toBe(null);
          }
        }
      }
    });
  });
});
