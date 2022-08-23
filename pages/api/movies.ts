import type { NextApiRequest, NextApiResponse } from 'next'

export type IMovie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: 'en'
  original_title: boolean
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: boolean
  video: boolean
  vote_average: number
  vote_count: number
}

type Data = {
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

const url =
  'https://api.themoviedb.org/3/movie/popular?api_key=1af8f5a0dac921ed793eaf9b1a89b23e&language=en-US&page='

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const response = await fetch(url + (req.query.page || 1))
  const movies: Data = await response.json()

  res.status(200).json(movies)
}

export default handler
