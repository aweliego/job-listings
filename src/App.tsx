import Listing from './components/Listing'
import SearchBar from './components/SearchBar'

const App = () => {

  return (
    <>
      <div className='bg-header-mobile sm:bg-header-desktop bg-no-repeat bg-cyan-primary h-36 w-full'></div>
      <section className='flex flex-col justify-center items-center'>
        <SearchBar />
        <Listing />
      </section>
    </>
  )
}

export default App
