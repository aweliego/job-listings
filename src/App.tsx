import React from 'react'
// components
import Listing from './components/Listing'
import SearchBar from './components/SearchBar'
// listings and filters
import listings from './data'
import filtersList from './filters'
// types
import { FilterTagType, Listings } from './types'

const App = () => {
  const [filters, setFilters] = React.useState<FilterTagType[]>([])

  // Add input filters to state
  const addFilters = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let value = e.currentTarget.innerHTML.toLowerCase() as keyof typeof filtersList
    let title = filtersList[value].title
    let id = filtersList[value].id
    const filter = { id, title }

    if (!filters.some((filter: any) => filter.title === title)) {
      setFilters((prevFilters) => [...prevFilters, filter])
    }
  }

  // Filter listings based on selected filters
  const getFilteredResults = (): Array<Listings> => {
    const results = listings.filter((listing: any) => {
      return filters.some(filter => {
        const allFilters = [listing.role, listing.level, ...listing.languages, ...listing.tools]
        return allFilters.includes(filter.title)
      })
    })
    return filters.length === 0 ? listings : results
  }

  const filteredListings = getFilteredResults()

  return (
    <>
      <div className='bg-header-mobile sm:bg-header-desktop bg-no-repeat bg-cyan-primary h-36 w-full'></div>
      <section className='flex flex-col justify-center items-center'>
        {filters.length > 0 && <SearchBar filters={filters} setFilters={setFilters} />}
        {filteredListings.map((listing: any) => (<Listing
          key={listing.id}
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
          addFilters={addFilters}
        />)
        )
        }
      </section>
    </>
  )
}

export default App
