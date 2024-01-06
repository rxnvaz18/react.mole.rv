import {useEffect} from 'react'
import moleImg from '../Images/molehill.png'

function EmptySlot(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div className='emptySlot'>
            <img 
            src={moleImg}
            alt="mole"
            onClick={props.handleClick}/>
        </div>
    )
}

export default EmptySlot
