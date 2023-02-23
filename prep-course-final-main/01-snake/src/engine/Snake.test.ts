import { Snake } from "./Snake";
import { Cell } from "./Cell";

describe("Snake", () => {
  it("should take three cells at the beginning", () => {
    const snake = new Snake();

    expect(snake.getHead()).toEqual(new Cell(2, 0));
    expect(snake.getTail()).toEqual([new Cell(0, 0), new Cell(1, 0)]);
  });


  it("should be able to move RIGHT", () => {
    const snake = new Snake();

    snake.move()

    expect(snake.getHead()).toEqual(new Cell(3, 0));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });

  it("should be able to move DOWN ", () => {
    const snake = new Snake();

    snake.setDirection('Down')
    snake.move()

    expect(snake.getDirection()).toEqual('Down');
    expect(snake.getHead()).toEqual(new Cell(2, 1));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  });

  it("should be able to move UP", () => {
    const snake = new Snake();

    snake.setDirection('Up')
    snake.move()

    expect(snake.getDirection()).toEqual('Up');
    expect(snake.getHead()).toEqual(new Cell(2, -1));
    expect(snake.getTail()).toEqual([new Cell(1, 0), new Cell(2, 0)]);
  })

  it("should NOT be able to turn in the opposite direction", () => {
    const snake = new Snake();

    snake.setDirection('Up')
    snake.move()
    snake.setDirection('Down')
    snake.move()

    expect(snake.getDirection()).toEqual('Up');
    expect(snake.getHead()).toEqual(new Cell(2, -2));
    expect(snake.getTail()).toEqual([new Cell(2, 0), new Cell(2, -1)]);
  })

  it("snake should grow by three cells when apple has been eaten", () => {
    const snake = new Snake();
    snake.move()

    snake.grow();

    expect(snake.getTail().length).toEqual(5);;
  })



  
});
