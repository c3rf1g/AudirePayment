import React, {useEffect, useState} from 'react';

function Countdown({endDate}) {
    const [date, setDate] = useState(new Date(endDate - Date.now()));
    const updateDate = () => {
        let dateCopy = new Date(date);
        dateCopy.setSeconds(date.getSeconds() - 1);
        setDate(dateCopy);
        console.log(date);
    }
    useEffect(() => {
        const dateTimer = setTimeout(() => {
            updateDate();
        }, 1000);
        return () => {
            clearTimeout(dateTimer);
        }
    },[date])
    return (
			<p className='flex-1 text-3xl my-14 font-monserat font-extralight text-white text-right max-lg:text-center max-lg:text-sm'>{`Time to end presale: ${date.getDay()}d ${date.getHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`}</p>
		)
}

export default Countdown;