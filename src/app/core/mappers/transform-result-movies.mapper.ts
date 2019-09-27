import { ExtendedResultMovie, ModifiedResultMovie, Actor } from "../services/search-films-service/models/index";
import { getImagesUrl, getMovieTrailerUrl } from "../utils/index";
import { NO_ACTOR_IMAGE_URL, POSTER, ACTOR } from "../constants/index";

/**
 * Create array of objects with combined data about movies, their trailers and actors.
 */
export function transformResultMovies(movies: Array<ExtendedResultMovie>): Array<ModifiedResultMovie> {
    return movies.map((movie: ExtendedResultMovie) => {
        const result: ModifiedResultMovie = {
            id: movie.id,
            posterPath: movie.poster_path ? getImagesUrl(movie.poster_path, POSTER) : null,
            credits: movie.credits.cast.length
                ? movie.credits.cast.slice(0, 5).map((actor: Actor) => {
                      if (actor.profile_path) {
                          actor.profile_path = getImagesUrl(actor.profile_path, ACTOR);
                      } else {
                          actor.profile_path = NO_ACTOR_IMAGE_URL;
                      }

                      return actor;
                  })
                : null,
            overview: movie.overview,
            releaseDate: movie.release_date,
            title: movie.title,
            videos: movie.videos.results.length ? getMovieTrailerUrl(movie.videos.results[0].key) : null,
        };

        return result;
    });
}
