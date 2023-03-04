import Listing from './components/Listing'
import SearchBar from './components/SearchBar'
import data from './data.json'

const App = () => {

  return (
    <>
      <div className='bg-header-mobile sm:bg-header-desktop bg-no-repeat bg-cyan-primary h-36 w-full'></div>
      <section className='flex flex-col justify-center items-center'>
        <SearchBar />
        {data.map((listing) => {

          const filters = [listing.role, listing.level, ...listing.languages, ...listing.tools]

          return (<Listing
            key={listing.id}
            company={listing.company}
            logo={listing.logo}
            newListing={listing.new}
            featured={listing.featured}
            position={listing.position}
            postedAt={listing.postedAt}
            contract={listing.contract}
            location={listing.location}
            filters={filters}
          />)
        })}
      </section>
    </>
  )
}

export default App
