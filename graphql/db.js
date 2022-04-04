export const people = [
    {
        id: '0',
        name: 'bopboy',
        age: 18,
        gender: "male"
    },
    {
        id: '1',
        name: 'james',
        age: 20,
        gender: "male"
    },
    {
        id: '2',
        name: 'julie',
        age: 25,
        gender: "female"
    }

]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id + "")
    return filteredPeople[0]
}