import React from 'react';

function Select({label, picture, changeCallback, styles}) {
    return (
        <a href='src/components/Select/Select#' onClick={(e) => changeCallback(e, label, picture)} className='z-[1200]'>
            <div className={`${styles} z-40`}>
                <img src={process.env.PUBLIC_URL + picture} className='my-2  max-h-[30px] mr-5'/><p className='text-3xl text-white max-lg:text-sm'>{label}</p>
            </div>
        </a>
    );
}

export default Select;