import { Cell } from "./Cell";
import { Direction } from "./Direction";


export class Snake {
  head: Cell = new Cell(2, 0);
  tail: Cell[] = [new Cell(0, 0), new Cell(1, 0)];
  direction: Direction = "Right";
    
  setDirection(newDirection: Direction) {
    
    if (this.direction === "Right" && newDirection !== "Left"
        || this.direction === "Left" && newDirection !== "Right"
        || this.direction === "Up" && newDirection !== "Down"
        || this.direction === "Down" && newDirection !== "Up")
    {
    this.direction = newDirection;
    }
  }

  move() {
    const oldHead = this.getHead();    
    
    if (this.direction === "Right") {
      this.head = new Cell(oldHead.x + 1, oldHead.y);
    }

    if (this.direction === "Down") {
      this.head = new Cell(oldHead.x, oldHead.y + 1);
    }

    if (this.direction === "Up") {
      this.head = new Cell(oldHead.x, oldHead.y - 1);
    }

    if (this.direction === "Left") {
      this.head = new Cell(oldHead.x - 1, oldHead.y);
    }

    this.tail.shift();
    this.tail.push(new Cell(oldHead.x, oldHead.y));

    return;
  }

  grow() {
    const tailEnd = this.tail[this.tail.length - 1];
    const newTailEnd = new Cell(tailEnd.x, tailEnd.y);
    this.tail.push(newTailEnd, newTailEnd, newTailEnd);
    return;
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return this.direction
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    if(this.tail.some(part => part.y === this.head.y && part.x === this.head.x)){
      return true
    }
    return false
  }
}
