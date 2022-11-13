import React from 'react';
function ImgElem({img, height, width}) {
    return (
        <div className={`flex justify-center max-lg:m-auto basis-1/2 w-full `}>
            <img src={process.env.PUBLIC_URL + img}
                 className={'rounded-xl border-solid border-2 border-fuchsia-500 shadow-line shadow-fuchsia-500 object-contain min-h-[30px] min-w-[30px]  max-h-[600px] max-w-[600px]'}
            />
        </div>
    );
}

export default ImgElem;