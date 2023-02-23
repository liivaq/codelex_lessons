import { Cell } from "./Cell";

export class GameField {
  apples: Cell[] = [new Cell(18, 16), new Cell(20, 16), new Cell(22, 16), new Cell(24, 16), new Cell(26, 16),
  ];

  seed(): void {
    for (let i = 0; i < 5; i++) {
        const cellX = Math.floor(Math.random() * 45);
        const cellY = Math.floor(Math.random() * 25);
        const newApple = new Cell(cellX, cellY);
        this.apples.push(newApple);
    };
  }

  getApples(): Cell[] {
    return this.apples;
  }

  isAppleInside(cell: Cell): boolean {
    if (this.apples.find((apple) => apple.x === cell.x && apple.y === cell.y)) {
      return true;
    }
    return false;
  }

  removeApple(cell: Cell): void {
    if (this.isAppleInside(cell) === true) {
      
      const index = this.apples.findIndex(
        (apple) => apple.x === cell.x && apple.y === cell.y
      );
      console.log(index)

      this.apples.splice(index, 1);
    }
  }

  isEmpty(): boolean {
    if (this.apples.length === 0) {
      return true;
    }
    return false;
  }
}
