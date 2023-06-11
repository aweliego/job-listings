import React from 'react'
import { FilterTagType } from '../App'

type FilterButtonProps = {
    filter: string
    filters: FilterTagType[]
    setFilters: React.Dispatch<React.SetStateAction<FilterTagType[]>>
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

const FilterButton: React.FC<FilterButtonProps> = ({ filter, filters, setFilters }) => {

    const addFilters = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let value = e.currentTarget.innerHTML.toLowerCase() as keyof typeof filtersList
        let title = filtersList[value].title
        let id = filtersList[value].id
        const filter = { id, title }

        if (!filters.some(filter => filter.title === title)) {
            setFilters((prevFilters) => [...prevFilters, filter])
        }
        return
    }

    return (
        <button onClick={(e) => addFilters(e)} className='filter hover:text-white hover:bg-cyan-primary '>{filter}</button>
    )
}

export default FilterButton