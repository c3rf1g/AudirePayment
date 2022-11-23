import React, {useEffect, useState} from 'react';
import Countdown from "../Countdown/Countdown";

function Navigation({endDate}) {
    return (
			<nav className='width-screen items-center'>
				<div className='w-3/4 flex mx-auto items-center'>
					<h1 className='text-left flex-1 py-11  text-5xl font-bold font-monserat text-white max-lg:pl-0 max-lg:text-4xl'>
						Audire
					</h1>
					<Countdown endDate={endDate} />
				</div>
				<hr className='color-fuchsia-500 i border-solid border-fuchsia-500 shadow-line shadow-fuchsia-500 bg-fuchsia-500' />
			</nav>
		)
}

export default Navigation;