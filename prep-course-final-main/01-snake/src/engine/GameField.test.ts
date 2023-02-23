import { GameField } from "./GameField";
import { Snake } from "./Snake";
import { Cell } from "./Cell";

describe("Game Field", () => {
  it("should have five apples present", () => {
    const field = new GameField();

    const apples = field.getApples();

    expect(apples.length).toBe(5);
  });
    
});
