import { motion } from 'framer-motion'
import { IMovie } from '../pages/api/movies'

const Movie = ({ movie }: { movie: IMovie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt=""
      />
    </motion.div>
  )
}

export default Movie
