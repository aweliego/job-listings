import React from 'react'

type SearchBarProps = {
    filters: string[]
}

const SearchBar: React.FC<SearchBarProps> = ({ filters }) => {

    return (
        <div className='-translate-y-7 relative w-11/12 sm:w-4/5 mx-auto block'>
            <div className='w-full h-14 rounded drop-shadow-lg outline-none p-4 bg-white'>
                {filters}
            </div>
            <button type='button' className='absolute top-5 right-5 text-cyan-dark hover:text-cyan-primary hover:underline'>Clear</button>
        </div >
    )
}

export default SearchBar
