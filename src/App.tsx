import React from 'react'
// components
import Listing from './components/Listing'
import SearchBar from './components/SearchBar'
// listings and filters
import listings from './data'
import filtersList from './filters'
// types
import { FilterTagType, ListingType } from './types'
// styles
import './styles.css'
// transitions
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const App = () => {
  const [filters, setFilters] = React.useState<FilterTagType[]>([])

  // Add input filters to state
  const addFilters = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let value = e.currentTarget.innerHTML.toLowerCase() as keyof typeof filtersList
    let title = filtersList[value].title
    let id = filtersList[value].id
    const filter = { id, title }

    if (!filters.some(filter => filter.title === title)) {
      setFilters((prevFilters) => [...prevFilters, filter])
    }
  }

  // Filter listings based on selected filters
  const getFilteredResults = (): Array<ListingType> => {
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
      <div className='bg-header-mobile sm:bg-header-desktop bg-no-repeat bg-cover bg-cyan-primary h-40 w-full'></div>
      {filters.length > 0 && <SearchBar filters={filters} setFilters={setFilters} />}
      <TransitionGroup className={`flex flex-col justify-center items-center mb-24 ${filters.length > 0 ? 'mt-6 md:mt-0' : 'mt-14'}`} >
        {filteredListings.map((listing: any) =>
        (
          <CSSTransition
            key={listing.id}
            timeout={700}
            classNames="item"
          >
            <Listing
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
            />
          </CSSTransition>
        )
        )
        }
      </TransitionGroup>
    </>
  )
}

export default App
