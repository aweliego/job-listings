import Photosnap from '../assets/images/photosnap.svg'

const Listing = () => {

    return (
        <article className='flex flex-wrap sm:flex-row sm:justify-between sm: items-center w-11/12 sm:w-4/5 mx-auto mt-4 p-4 bg-white rounded drop-shadow-lg border-l-4 border-l-cyan-primary cursor-pointer'>
            <div className='flex items-center'>
                {/* Company image */}
                <img src={Photosnap} alt="" className='mr-6 ml-4' />

                <div className='flex flex-col gap-1'>
                    {/* Company name */}
                    <div className='flex gap-x-3 items-center leading-none'>
                        <p className='text-cyan-primary font-medium'>Photosnap</p>
                        {/* Badges */}
                        <span className='badge bg-cyan-primary '>NEW!</span>
                        <span className='badge bg-cyan-very-dark'>FEATURED</span>
                    </div>
                    {/* Role */}
                    <h4 className='text-lg font-bold text-cyan-very-dark hover:text-cyan-primary'>
                        Senior Frontend Developer
                    </h4>
                    {/* Details */}
                    <div className='flex gap-x-7 text-cyan-dark font-normal'>
                        <span>1d ago</span>
                        <span>Full Time</span>
                        <span>USA only</span>
                    </div>
                </div>
            </div>
            {/* Divider on mobile */}
            <div className='sm:hidden w-full h-px bg-cyan-dark opacity-50 my-4'></div>

            {/* Filters */}
            <div className='flex flex-wrap gap-x-1 '>
                <button className='filter'>Frontend</button>
                <button className='filter'>Senior</button>
                <button className='filter'>HTML</button>
                <button className='filter'>CSS</button>
                <button className='filter'>JavaScript</button>
            </div>
        </article >)
}


export default Listing