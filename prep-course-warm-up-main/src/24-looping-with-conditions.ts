export {};

function onlyTheAces(array: string[]) {
  return array.filter(card => card === 'Ace')
}


console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
