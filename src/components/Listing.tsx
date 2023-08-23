import FilterButton from './FilterButton'

type ListingProps = {
    id: number
    company: string
    logo: string
    newListing: boolean
    featured: boolean
    position: string
    role: string
    level: string
    postedAt: string
    contract: string
    location: string
    languages: string[]
    tools: string[]
    addFilters: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Listing: React.FC<ListingProps> = ({
    company,
    logo,
    newListing,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    addFilters
}) => {
    return (
        <article className='flex flex-wrap sm:flex-row sm:justify-between sm:items-center w-11/12 
        sm:w-4/5 lg:h-36 mx-auto mt-4 mb-9 md:mb-2 p-4 bg-white rounded drop-shadow-lg border-l-4 border-l-cyan-primary 
        cursor-pointer'>
            <div className='md:flex md:flex-row md:items-center relative'>
                {/* Company image */}
                <img src={logo} alt='company logo'
                    className='md:mr-6 md:ml-4 w-16 md:w-[5.5rem] absolute -translate-y-12 md:static md:-translate-y-0'
                />

                <div className='flex flex-col gap-1'>
                    {/* Company name */}
                    <div className='flex gap-x-3 items-center leading-none mt-7 md:mt-0 text-lg'>
                        <p className='text-cyan-primary font-medium'>{company}</p>
                        {/* Badges */}
                        {newListing && <span className='badge bg-cyan-primary'>NEW!</span>}
                        {featured && <span className='badge bg-cyan-very-dark'>FEATURED</span>}
                    </div>
                    {/* Role */}
                    <h4 className='text-xl font-bold text-cyan-very-dark hover:text-cyan-primary'>
                        {position}
                    </h4>
                    {/* Details */}
                    <div className='flex gap-x-3 text-cyan-dark font-normal text-lg'>
                        <p>{postedAt}</p><span className='font-extrabold opacity-60'>·</span>
                        <p>{contract}</p><span className='font-extrabold opacity-60'>·</span>
                        <p>{location}</p>

                    </div>
                </div>
            </div>

            {/* Divider on mobile */}
            <div className='lg:hidden w-full h-px bg-cyan-dark opacity-50 my-4'></div>

            {/* Filters */}
            <div className='flex flex-wrap gap-2 '>
                {[role, level, ...languages, ...tools].map((filter, idx) =>
                    <FilterButton key={idx} filter={filter} addFilters={addFilters}
                    />)}
            </div>
        </article >)
}


export default Listing