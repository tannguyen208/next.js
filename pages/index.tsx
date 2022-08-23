import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Filter from '../components/Filter'
import Movie from '../components/Movie'
import { IMovie } from './api/movies'

const Home: NextPage = () => {
  const [page, setPage] = useState<number>(1)
  const [popular, setPopular] = useState<IMovie[]>([])
  const [filtered, setFiltered] = useState<IMovie[]>([])
  const [activeGenre, setActiveGenre] = useState<number>(0)

  useEffect(() => {
    const controller = new AbortController()

    async function _fetchMovies(page: number) {
      try {
        const response = await fetch(`/api/movies?page=${page}`, {
          signal: controller.signal,
        })
        const movies = await response.json()
        setPopular(movies.results)
        setFiltered(movies.results)
      } catch (error) {
        console.error('Error:', error)
      }
    }

    _fetchMovies(page)

    return () => {
      controller.abort()
    }
  }, [page])

  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Movies application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="App">
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <AnimatePresence>
          <motion.div layout className="popular-movies">
            {filtered.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  )
}

export default Home
