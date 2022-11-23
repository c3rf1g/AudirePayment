import React from 'react';
function ImgElem({img, height, width}) {
    return (
			<div
				className={`flex justify-center max-lg:m-auto basis-1/2 max-width:${height} max-height:${width} `}
			>
				<img
					src={process.env.PUBLIC_URL + img}
					className={`rounded-xl border-solid border-2 border-fuchsia-500 shadow-line shadow-fuchsia-500 object-contain min-h-30px min-w-30px  max-h-${height} max-w-${width}`}
				/>
			</div>
		)
}

export default ImgElem;