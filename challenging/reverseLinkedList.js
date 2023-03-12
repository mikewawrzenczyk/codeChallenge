/*

Given the head of a singly linked list, reverse the list, and return the reversed list.

*/

class LinkedList {
    constructor () {
      this.head = this.tail = null
    }
  
    append(value) {
  
      if (!this.tail) {
        this.head = this.tail = new Node(value)
      }
   
      else {
        let oldTail = this.tail
        this.tail = new Node(value)
        oldTail.next = this.tail
      }
    }
    reverseList(){
       let current = this.head
       let prev = null
       //ratcheting between a temp current and previous value
       while (current) {
          const temp = current.next
          current.next = prev
          prev = current
          current = temp
      }
      return prev
    }

    /*
    let reverseList = (head,prev = null) => {
      while (head) [head.next, prev, head] = [prev, head, head.next]
      return prev
    }
    */

  }
  
  class Node {
    constructor (value, prev, next) {
      this.value = value
      this.next = next || null
     }
  }
  
  const list = new LinkedList()
  
  list.append(1)
  list.append(2)
  list.append(3) 