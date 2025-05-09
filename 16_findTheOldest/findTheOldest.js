const findTheOldest = function(people) {
    for (person of people) {
        if (isNaN(person.yearOfDeath) == false) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = 2025 - person.yearOfBirth;
        };        
    };
    cleanAges = people.map(person => person.age);
    oldestAge = Math.max(...cleanAges);
    oldestPerson = people.find( person => person.age === oldestAge);
    return oldestPerson;
};



// Do not edit below this line
module.exports = findTheOldest;
