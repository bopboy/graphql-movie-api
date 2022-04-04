export const people = [
    {
        name: 'bopboy',
        age: 18,
        gender: "male"
    },
    {
        name: 'james',
        age: 20,
        gender: "male"
    },
    {
        name: 'julie',
        age: 25,
        gender: "female"
    }

]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id)
    return filteredPeople[0]
}