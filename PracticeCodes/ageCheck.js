function Person(initialAge) {
  // Add some more code to run some checks on initialAge
  let age = initialAge;
  if (age < 0) {
    console.log("Age is not valid, setting age to 0.");
    age = 0;
  }
  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console
    if (age < 13) console.log(age + " You are young.");
    else if (age >= 13 && age < 18) console.log(age + " You are a teenager.");
    else console.log(age + " You are old.");
  };
  this.yearPasses = function () {
    // Increment the age of the person in here
    age += 1;
  };
}

function main() {
  let ageArr = [4, -1, 10, 16, 18];
  for (i = 0; i < ageArr.length; i++) {
    const age = ageArr[i];
    console.log("age:::>", age);
    const p = new Person(age);
    p.amIOld();
    for (j = 0; j < 3; j++) {
      p.yearPasses();
    }
    p.amIOld();
  }
}

main();
