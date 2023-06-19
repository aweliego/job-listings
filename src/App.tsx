import React from 'react'
import Listing from './components/Listing'
import SearchBar from './components/SearchBar'
import listings from './data'

export type FilterTagType = {
  id: number
  title: string
}

const filtersList = {
  frontend: {
    id: 1,
    title: 'Frontend',
  },
  backend: {
    id: 2,
    title: 'Backend',
  },
  fullstack: {
    id: 3,
    title: 'Fullstack',
  },
  junior: {
    id: 4,
    title: 'Junior',
  },
  midweight: {
    id: 5,
    title: 'Midweight',
  },
  senior: {
    id: 6,
    title: 'Senior',
  },
  html: {
    id: 7,
    title: 'HTML',
  },
  css: {
    id: 8,
    title: 'CSS',
  },
  javascript: {
    id: 9,
    title: 'JavaScript',
  },
  react: {
    id: 10,
    title: 'React',
  },
  vue: {
    id: 11,
    title: 'Vue',
  },
  sass: {
    id: 12,
    title: 'Sass',
  },
  python: {
    id: 13,
    title: 'Python',
  },
  django: {
    id: 14,
    title: 'Django',
  },
  ruby: {
    id: 15,
    title: 'Ruby',
  },
  ror: {
    id: 16,
    title: 'RoR',
  },
}

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

  const getFilteredResults = (): any[] => {
    const results = listings.filter(listing => {
      // check if filter.title is found in listing.role, level, languages or tools -- testing with role for now
      const filtersTitles = filters.map((filter: any) => filter.title)
      return filtersTitles.includes(listing.role)
    })
    return filters.length === 0 ? listings : results
  }

  const filteredResults = getFilteredResults()

  return (
    <>
      <div className='bg-header-mobile sm:bg-header-desktop bg-no-repeat bg-cyan-primary h-36 w-full'></div>
      <section className='flex flex-col justify-center items-center'>
        {filters.length > 0 && <SearchBar filters={filters} setFilters={setFilters} />}
        {filteredResults.map((listing: any) => (<Listing
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
        )}
      </section>
    </>
  )
}

export default App
