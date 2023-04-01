import React from 'react'
import RemoveIcon from '../../public/assets/images/icon-remove.svg'

type FilterTagProps = {
    title: string
}

const FilterTag: React.FC<FilterTagProps> = ({ title }) => {

    return (
        <div className='flex flex-nowrap'>
            <span className='filter mr-0 rounded-l-sm px-2 py-1 h-7'>
                {title}
            </span>
            <img src={RemoveIcon} alt="remove filter"
                className='inline-block font-semibold text-white bg-cyan-primary hover:bg-cyan-very-dark rounded-r-sm ml-0 mr-3 px-2 py-2 h-7 cursor-pointer' />
        </div>
    )
}

export default FilterTag