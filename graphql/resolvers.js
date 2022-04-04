const bopboy = {
    name: 'bopboy',
    age: 18,
    gender: "male"
}
const resolvers = {
    Query: {
        person: () => bopboy
    }
}

export default resolvers