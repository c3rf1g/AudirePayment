import React, {useEffect, useRef, useState} from 'react';
import Select from "../Select/Select";
    /*
    <Select className='px-5 outline-none appearance-none h-[50px] w-[375px] bg-button text-slate-500 grow rounded-[15px] border-2 border-solid' name="cars" id="cars">
    <option className='text-3xl bg-eth' value="volvo"><img src={process.env.PUBLIC_URL + 'eth.png'} width={300} height={300} />Etherium</option>
<option className='text-3xl' value="saab">TON</option>
<option className='text-3xl' value="mercedes">BSC</option>
<option className='text-3xl' value="audi">Solana</option>
</Select>

     */
function BuyForm(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState({label: '', picture: ''});
    const [isActive, setIsActive] = useState(false);
    const buttonRef = useRef();
    const showMenu = (e) => {
        e.preventDefault();
        setIsOpen(prev => !prev);
    }
    const changeValue = (e, label, picture) => {
        e.preventDefault();
        setValue(prevState => ({
            ...prevState,
            label: label, picture: picture
        }))
        setIsActive(true);
        showMenu(e);
    }
    useEffect(() => {
        const closeMenu = (e) => {
            e.preventDefault();
            if (isOpen && buttonRef.current && !buttonRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.body.addEventListener('click', closeMenu);
        return () => {
            document.body.removeEventListener('click', closeMenu)
        }
    }, [isOpen])
    return (
        <form className=' mt-12 flex flex-col  max-lg:pl-0 max-lg:justify-center max-lg:mt-1 relative'>
            <button ref={buttonRef} className={`${isOpen ? 'hidden' : 'block'} 
            px-5 h-[50px] bg-button   text-slate-500 rounded-[15px] border-2 border-solid text-left   max-lg:m-auto w-full`}
                    onClick={(e) => showMenu(e)}>
                {value.label === '' && value.picture === '' ? 'Choose network' :
                    <div className='flex items-center'>
                        <img src={process.env.PUBLIC_URL + value.picture} className='my-2 max-w-[30px] max-h-[30px] mr-5'/><p className='text-3xl max-lg:text-sm text-white'>{value.label}</p>
                    </div>

                }
            </button>
                <div className={`${isOpen ? 'flex' : 'hidden'} mb-[50px]`} ></div>
                <div className={`${isOpen ? 'flex' : 'hidden'} flex-col backdrop-blur-sm border-2 border-solid divide-y rounded-[10px] py-3 w-full  px-5 max-lg:mx-auto max-lg:inset-x-0 absolute z-10`}>
                    <Select
                        label='Ethereum'
                        picture='eth.png'
                        changeCallback={changeValue}
                        styles='flex items-center py-1 first:border-t'
                    />
                    <Select
                        label='BSC'
                        picture='bsc.png'
                        changeCallback={changeValue}
                        styles='flex items-center py-1'
                    />
                    <Select
                        label='TON'
                        picture='ton.png'
                        changeCallback={changeValue}
                        styles='flex items-center py-1'
                    />
                    <Select
                        label='Solana'
                        picture='sol.png'
                        changeCallback={changeValue}
                        styles='flex items-center py-1  last:border-b'
                    />
                </div>
             <p className='pt-6 text-4xl text-slate-500 max-lg:text-center'>Price</p>
            <div className='flex items-center max-lg:justify-center'>
                <p className='text-3xl text-white pr-2'>50 USDT</p>
                <p className='text-xl
                 text-white
                 relative
                 before:border-b-2
                 before:w-[100%]
                 before:h-[50%]
                 before:border-red-600
                 before:absolute
                 before:-rotate-12
                 '>80 USDT</p>
            </div>
            <button className={`rounded-[5px] max-lg:mb-8 mt-12 py-1 text-5xl bg-purple-500 opacity-50 text-white ${isActive ? 'cursor-default' :'cursor-not-allowed'}`}  disabled={!isActive} onClick={()=>{console.log('hey!')}}>BUY</button>

        </form>
    );
}

export default BuyForm;