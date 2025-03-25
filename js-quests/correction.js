
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
  
  const weekendInstructors = instructors.filter(
    (instructors) =>
      (instructors.specialities.includes("Javascript") &&
        instructors.availability === "weekend") ||
      instructors.availability === "all"
  );
  
  weekendInstructors.forEach((instructor) => {
    let message = `Hi ${instructor.name}, we inform you that this weekend you will be doing the support class`;
  
    if (instructor.specialities.includes("Python")) {
      message += " and you need to prepare a Python workshop";
    }
  
    console.log(message);
  });