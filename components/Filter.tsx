import { useEffect } from 'react'
import { IMovie } from '../pages/api/movies'

const Filter = (props: any) => {
  const { activeGenre, setActiveGenre, setFiltered, popular } = props

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular)
      return
    }
    const filtered = popular.filter((movie: IMovie) =>
      movie.genre_ids.includes(activeGenre)
    )
    setFiltered(filtered)
  }, [activeGenre])

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? 'active' : ''}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? 'active' : ''}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? 'active' : ''}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  )
}

export default Filter
