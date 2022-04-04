let movies = [
    {
        id: 0,
        name: 'Alien',
        score: 9.5
    },
    {
        id: 1,
        name: 'Matrix',
        score: 9.2
    },
    {
        id: 2,
        name: 'Star Wars',
        score: 8.2,
    },
    {
        id: 3,
        name: 'The Lord of the Rings',
        score: 7.5
    }
]
export const getMovies = () => movies
export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id)
    return filteredMovies[0]
}
export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id)
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies
        return true
    } else {
        return false
    }
}
export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name, score
    }
    movies.push(newMovie)
    return newMovie
}