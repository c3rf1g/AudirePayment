import React from 'react';

function Header(props) {
    return (
        <div className='  h-1/5  max-lg:pl-0 max-lg:h-full'>
            <h1 className='text-white text-3xl font-bold text-left max-lg:text-center max-lg:pl-0 max-lg:pr-0 max-lg:pt-5 max-lg:text-md'>Headphone 1/333</h1>
            <h2 className='text-white text-2xl pt-2.5  pb-9 text-left max-lg:text-center max-lg:pl-0 max-lg:text-sm'>Headphone collection #1</h2>
            <hr className='h-[1px] border-1  border-slate-500 max-lg:mb-3'/>
        </div>
    );
}

export default Header;