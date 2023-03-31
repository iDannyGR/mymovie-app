import { ReactElement } from 'react'

import { Search } from '@/components/Search'
import { getMovies } from '@/api/getMovie';


const Home = ():ReactElement => {

return (
        <Search />
        {
          movies.map(movie => {

          })
        }
  )
}

export default Home