import axios from "axios";

const keyApi = '8fa3534c18fa67522d1dc3bc1f7ff38a'
const tokenApi = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmEzNTM0YzE4ZmE2NzUyMmQxZGMzYmMxZjdmZjM4YSIsInN1YiI6IjY2MzQ5MTBiODEzY2I2MDEyMTg3OTFmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xsHDSGsrvplclBjTiJx4b8zx4gma_RLgXWgpkcmDIfo'
const trendDayURL = 'https://api.themoviedb.org/3/trending/movie/day'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${tokenApi}`
  }
};


export async function getTrendingDay() {
    const data = await axios.get(trendDayURL, options)
    return data.data.results
} 


export async function getMovieById(id) {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options)
    return movie.data
}

export async function getCastMovie(id) {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, options)
    return data.data.cast
}

export async function getReviews(id) {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews`, options)
    return data.data.results
}

export async function getSearchMovie(query) {
    const data = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
    return data.data.results
}