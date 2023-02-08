export {};

function tidyUpString(str: string) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string){
  const firstLetter = str[0].toUpperCase()
  return firstLetter + str.substring(1)
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
/*let mentorsTidy = mentors.map(mentor => {
  const tidyStr = tidyUpString(mentor)
  const capitalMentor = capitalise(tidyStr)
  return capitalMentor
})*/

let mentorsTidy = mentors.map((mentor) => capitalise(tidyUpString(mentor)));

; // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
