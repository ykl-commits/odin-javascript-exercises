const findTheOldest = function(people) {

    let oldestPerson = people[0];
    let oldestPersonAge = 0;
    const today = new Date();
    const currentYear = today.getFullYear();
    for (let i = 0; i < people.length; i++) {
        let currentPersonAge;
        if (!people[i].yearOfDeath) {
            currentPersonAge = currentYear - people[i].yearOfBirth;
        } else {
            currentPersonAge = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        if (currentPersonAge > oldestPersonAge) {
            oldestPersonAge = currentPersonAge;
            oldestPerson = people[i];
        }
    }

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
