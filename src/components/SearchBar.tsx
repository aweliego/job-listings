import React from 'react'

const SearchBar = () => {

    const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = e.target as HTMLTextAreaElement
        textarea.style.height = '56px'
        const scrollHeight = textarea.scrollHeight
        textarea.style.height = scrollHeight + 'px'
    }

    return (
        <form className='-translate-y-7 relative w-11/12 sm:w-4/5 mx-auto block'>
            <textarea onChange={(e) => autoResize(e)} rows={1} className='w-full rounded drop-shadow-lg outline-none p-4 resize-none overflow-hidden'></textarea>
            <button className='absolute top-5 right-5 text-cyan-dark hover:text-cyan-primary hover:underline'>Clear</button>
        </form >
    )
}

export default SearchBar
