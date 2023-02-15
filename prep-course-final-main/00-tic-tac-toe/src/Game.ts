export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
  turn: XO = 'X'

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.turn;
  }

  getWinner(): XO {
    if (this.getCells()[0] === this.getCells()[1] && this.getCells()[0] === this.getCells()[2]){
      return this.getCells()[0]
    }

    if (this.getCells()[3] === this.getCells()[4] && this.getCells()[5] === this.getCells()[3]){
      return this.getCells()[3]
    }

    if (this.getCells()[6] === this.getCells()[7] && this.getCells()[8] === this.getCells()[7]){
      return this.getCells()[6]
    }

    if (this.getCells()[0] === this.getCells()[3] && this.getCells()[6] === this.getCells()[0]){
      return this.getCells()[0]
    }

    if (this.getCells()[1] === this.getCells()[4] && this.getCells()[7] === this.getCells()[1]){
      return this.getCells()[1]
    }

    if (this.getCells()[2] === this.getCells()[5] && this.getCells()[8] === this.getCells()[2]){
      return this.getCells()[2]
    }

    if (this.getCells()[0] === this.getCells()[8] && this.getCells()[4] === this.getCells()[0]){
      return this.getCells()[0]
    }

    if (this.getCells()[2] === this.getCells()[4] && this.getCells()[6] === this.getCells()[2]){
      return this.getCells()[2]
    }
    return "-";
  }

  isTie(): boolean {
    return false;
  }

  onClick(i: number): void {
    this.cells[i] = this.getTurn() 
    this.turn = this.getTurn() === 'X'? 'O' : 'X'
  }

  restart(): void {
    console.log("restart called");
  }
}
