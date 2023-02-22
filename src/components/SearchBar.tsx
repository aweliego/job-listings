const SearchBar = () => {

    return (
        <form className='-translate-y-7 relative w-11/12 sm:w-4/5 mx-auto block'>
            <input type='text' className='w-full h-14 rounded drop-shadow-lg outline-none px-4' />
            <button className='absolute top-5 right-5 text-cyan-dark hover:text-cyan-primary hover:underline'>Clear</button>
        </form >
    )
}

export default SearchBar
