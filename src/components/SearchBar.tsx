import React from 'react'
import FilterTag from './FilterTag'

type SearchBarProps = {
    filters: string[]
    setFilters: React.Dispatch<React.SetStateAction<string[]>>
}

const SearchBar: React.FC<SearchBarProps> = ({ filters, setFilters }) => {

    return (
        <div className='-translate-y-7 relative w-11/12 sm:w-4/5 mx-auto block'>
            <div className='flex flex-wrap gap-y-3 rounded drop-shadow-lg outline-none p-4 bg-white'>
                {filters.map(filter => <FilterTag title={filter} />)}
            </div>
            <button type='button' onClick={() => setFilters([])} className='absolute top-5 right-5 text-cyan-dark hover:text-cyan-primary hover:underline'>Clear</button>
        </div >
    )
}

export default SearchBar
