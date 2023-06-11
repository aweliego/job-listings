import React from 'react'
import Listing from './components/Listing'
import SearchBar from './components/SearchBar'
import { data } from './data'

export type FilterTagType = {
  id: number
  title: string
}

const App = () => {
  const [filters, setFilters] = React.useState<FilterTagType[]>([])

  return (
    <>
      <div className='bg-header-mobile sm:bg-header-desktop bg-no-repeat bg-cyan-primary h-36 w-full'></div>
      <section className='flex flex-col justify-center items-center'>
        {filters.length > 0 && <SearchBar filters={filters} setFilters={setFilters} />}
        {data.map((listing) => (<Listing
          id={listing.id}
          company={listing.company}
          logo={listing.logo}
          newListing={listing.new}
          featured={listing.featured}
          position={listing.position}
          role={listing.role}
          level={listing.level}
          postedAt={listing.postedAt}
          contract={listing.contract}
          location={listing.location}
          languages={listing.languages}
          tools={listing.tools}
          filters={filters}
          setFilters={setFilters}
        />)
        )}
      </section>
    </>
  )
}

export default App
