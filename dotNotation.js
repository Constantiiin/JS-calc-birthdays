function calculateBirthday() {
  let today = new Date();
  let birthDate = new Date("1993-01-01");
  birthDate.setFullYear(today.getFullYear());
  let timeDifferenceInMilliseconds = birthDate - today;
  let millisecondsInADay = 1000 * 60 * 60 * 24;
  let daysUntilBirthday = Math.ceil(
    timeDifferenceInMilliseconds / millisecondsInADay
  );
  return daysUntilBirthday;
}

let daysUntilBirthday = calculateBirthday();
console.log(`There are ${daysUntilBirthday} days until your birthday.`);
