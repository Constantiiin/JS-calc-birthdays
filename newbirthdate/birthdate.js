function calculateBirthday() {
  // Obține data curentă
  let today = new Date();

  // Creează data zilei de naștere (anul nu contează aici)
  let birthDate = new Date("1993-01-01");

  // Pune anul curent peste ziua de naștere
  birthDate.setFullYear(today.getFullYear());

  // Dacă ziua de naștere din anul curent a trecut deja, mută-o în anul următor
  if (birthDate < today) {
    birthDate.setFullYear(today.getFullYear() + 1);
  }

  // Calculează diferența în milisecunde
  let timeDifferenceInMilliseconds = birthDate - today;

  // Milisecunde într-o zi
  let millisecondsInADay = 1000 * 60 * 60 * 24;

  // Transformă în zile și rotunjește în sus
  let daysUntilBirthday = Math.ceil(
    timeDifferenceInMilliseconds / millisecondsInADay
  );

  // Returnează numărul de zile rămase
  return daysUntilBirthday;
}

// Apelează funcția și afișează rezultatul
let daysUntilBirthday = calculateBirthday();
console.log(`There are ${daysUntilBirthday} days until your birthday.`);
