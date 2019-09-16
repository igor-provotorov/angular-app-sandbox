import { ExtendedResultMovie, ModifiedResultMovie, Actor } from "../services/search-films-service/models/index";
import { getImagesUrl } from "./getImagesUrl";
import { getMovieTrailerUrl } from "./getMovieTrailerUrl";
import { NO_ACTOR_IMAGE_URL } from "../constants/index";

/**
 * create array of objects with combined data about movies, their trailers and actors.
 */
export function transformResultMovies(movies: Array<ExtendedResultMovie>): Array<ModifiedResultMovie> {
    return movies.map((movie: ExtendedResultMovie) => {
        const result: ModifiedResultMovie = {
            poster_path: movie.poster_path ? getImagesUrl(movie.poster_path) : null,
            credits: movie.credits.cast.length
                ? movie.credits.cast.slice(0, 5).map((actor: Actor) => {
                      if (actor.profile_path) {
                          actor.profile_path = getImagesUrl(actor.profile_path);
                      } else {
                          actor.profile_path = NO_ACTOR_IMAGE_URL;
                      }

                      return actor;
                  })
                : null,
            overview: movie.overview,
            release_date: movie.release_date,
            title: movie.title,
            videos: movie.videos.results.length ? getMovieTrailerUrl(movie.videos.results.shift().key) : null,
        };

        return result;
    });
}
