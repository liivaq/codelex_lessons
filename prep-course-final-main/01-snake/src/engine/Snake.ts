import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head: Cell = new Cell(2, 0)
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)]
  direction: Direction = 'Right'


  setDirection(newDirection: Direction) {
    this.direction = newDirection
  }

  move() {
    const oldHead = this.getHead()
    
    if(this.direction === 'Right'){
    this.head = new Cell(oldHead.x +1, oldHead.y)

    this.tail.shift()
    this.tail.push(new Cell(oldHead.x, oldHead.y))
    return
    }

    if(this.direction === 'Down'){
      this.head = new Cell(oldHead.x, oldHead.y +1)
  
      this.tail.shift()
      this.tail.push(new Cell(oldHead.x, oldHead.y))
      return
    }

    if(this.direction === 'Up'){
      this.head = new Cell(oldHead.x, oldHead.y -1)
  
      this.tail.shift()
      this.tail.push(new Cell(oldHead.x, oldHead.y))
      return
    }

    if(this.direction === 'Left'){
      this.head = new Cell(oldHead.x -1, oldHead.y)
  
      this.tail.shift()
      this.tail.push(new Cell(oldHead.x, oldHead.y))
      return
    }
  

  }

  grow() {
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    return false;
  }
}
