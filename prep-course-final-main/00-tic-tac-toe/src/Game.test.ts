import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-", "-", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should mark X or O when clicked in a cell", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "X", "O", "X",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("O");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should not overwrite taken cells", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)
    game.onClick(1)


    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "-", "-", "-",
      "-", "-", "-"
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should get winner when same three values in a COLUMN", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(1)
    game.onClick(3)
    game.onClick(8)
    game.onClick(6)


    expect(game.getCells()).toEqual([
      "X", "O", "-",
      "X", "-", "-",
      "X", "-", "O"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should get winner when same three values in a ROW", () => {
    const game = new Game();

    game.onClick(8)
    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(6)
    game.onClick(2)

    expect(game.getCells()).toEqual([
      "O", "O", "O",
      "X", "-", "-",
      "X", "-", "X"
    ]);
    
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);    
  });

  it("should get winner when same three values in a DIOGNAL", () => {
    const game = new Game();

    game.onClick(2)
    game.onClick(0)
    game.onClick(4)
    game.onClick(1)
    game.onClick(6)
    

    expect(game.getCells()).toEqual([
      "O", "O", "X",
      "-", "X", "-",
      "X", "-", "-"
    ]);
    
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);    
  });

  it("should declare a tie, if no three of the same values in row/column/diognal", () => {
    const game = new Game();

    game.onClick(0)
    game.onClick(3)
    game.onClick(1)
    game.onClick(2)
    game.onClick(4)
    game.onClick(7)
    game.onClick(5)
    game.onClick(8)
    game.onClick(6)
    

    expect(game.getCells()).toEqual([
      "X", "X", "O",
      "O", "X", "X",
      "X", "O", "O"
    ]);
    
    expect(game.isTie()).toBe(true);
    expect(game.getWinner()).toBe('-')    
  });
});
