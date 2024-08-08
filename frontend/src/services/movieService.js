import axios from "axios";

export class MovieService {

    apiUrl = "http://movie:8080/api/movie/movies/"

    getAllDisplayingMovies() {
        return axios.get(this.apiUrl + "displayingMovies");
    }

    getAllComingSoonMovies() {
        return axios.get(this.apiUrl + "comingSoonMovies");
    }

    getMovieById(movieId) {
        return axios.get(this.apiUrl + movieId);
    }

    addMovie(movieDto) {
        return axios.post(this.apiUrl + "add", movieDto);
    }
}
