const instructors = [
    {
        name: 'John',
        availability: 'all',
        specialities: ['Javascript', 'Python', 'C++']
    },
    {
        name: 'Mary',
        availability: 'weekend',
        specialities: ['Javascript', 'Ruby', 'C++']
    },
    {
        name: 'Chris',
        availability: 'evenings',
        specialities: ['Javascript']
    },
    {
        name: 'Anthony',
        availability: 'all',
        specialities: ['Python', 'Ruby']
    },
    {
        name: 'Pauline',
        availability: 'only Mondays',
        specialities: ['Javascript', 'Html', 'CSS']
    },
    {
        name: 'Mark',
        availability: 'all',
        specialities: ['C#', 'C++', 'Javascript']
    },
    {
        name: 'Helen',
        availability: 'evenings',
        specialities: ['Python', 'C++']
    },
    {
        name: 'Charles',
        availability: 'none',
        specialities: ['Python']
    }
];

/**
 * @param {{ name: string, availability: string, specialities: string[]}[]} instructors
 * @param {string[]} searchSpecialities
 * @param {string[]} searchAvailability
 * 
 * @returns {array}
 */
function filterInstructors(instructors, filterSpecialities, acceptAvailability) {
    const filteredInstructors = [];

    for (let i = 0; i < instructors.length; i++) {
        const instructor = instructors[i];

        const instructorSpecialities = new Set(instructor.specialities.map(spe => spe.toLowerCase()));
        let isSpecialitiesMatch = filterSpecialities.every(specialitie => 
            instructorSpecialities.has(specialitie.toLowerCase())
        );

        if (!isSpecialitiesMatch) continue;

        isAvailabilityMatch = acceptAvailability.some(availability =>
            instructor.availability.toLowerCase() === availability.toLowerCase()
        )

        if (!isAvailabilityMatch) continue;

        filteredInstructors.push(instructor);
    }

    return (filteredInstructors);
}

const weekendAvailableJsInstructors = filterInstructors(instructors, ["javascript"], ["all", "weekend"])

for (const instructor of weekendAvailableJsInstructors) {
    console.log(`Hi ${instructor.name}, we inform you that this weekend you will be doing the support class`);
}

const weekendAvailableJsPyInstructors = filterInstructors(instructors, ["javascript", "python"], ["all", "weekend"])
for (const instructor of weekendAvailableJsPyInstructors) {
    console.log(`Hi ${instructor.name}, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop`);
}