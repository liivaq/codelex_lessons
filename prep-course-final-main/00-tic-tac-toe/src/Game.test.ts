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

  it("should be able to swap turn between X and O", () => {
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

  it("sould win if a row is filled by 'X' or 'O'", () => {
    const game = new Game();

    game.onClick(1)
    game.onClick(0)
    game.onClick(2)
    game.onClick(3)
    game.onClick(4)
    game.onClick(6)

    expect(game.getCells()).toEqual([
      "O", "X", "X",
      "O", "X", "-",
      "O", "-", "-"
    ]);
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  });
});
