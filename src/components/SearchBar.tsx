import React from 'react'
import FilterTag from './FilterTag'
import { FilterTagType } from '../types'

type SearchBarProps = {
    filters: FilterTagType[]
    setFilters: React.Dispatch<React.SetStateAction<FilterTagType[]>>
}

const SearchBar: React.FC<SearchBarProps> = ({ filters, setFilters }) => {

    const handleRemoveFilter = (id: number) => setFilters(prevFilters => prevFilters.filter(prevFilter => prevFilter.id !== id))

    return (
        <div className='grid grid-cols-8 -translate-y-7 w-11/12 sm:w-4/5 mx-auto drop-shadow-lg'>
            <div className='col-span-6 md:col-span-7 xs:col-span-6 flex flex-wrap gap-y-3 rounded-l-sm p-4 md:pl-8 bg-white'>
                {filters.map(filter => <FilterTag key={filter.id} id={filter.id} title={filter.title} removeFilter={handleRemoveFilter} />)}
            </div>
            <button type='button' onClick={() => setFilters([])}
                className='col-span-2 md:col-span-1 text-cyan-dark hover:text-cyan-primary hover:underline font-semibold rounded-r-sm bg-white '>Clear</button>
        </div>
    )
}

export default SearchBar
