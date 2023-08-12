import React from 'react'

type FilterButtonProps = {
    filter: string
    addFilters: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const FilterButton: React.FC<FilterButtonProps> = ({ filter, addFilters }) => {


    return (
        <button onClick={(e) => addFilters(e)}
            className='filter hover:text-white hover:bg-cyan-primary transition ease-out delay-75 hover:scale-110'
        >
            {filter}
        </button>
    )
}

export default FilterButton