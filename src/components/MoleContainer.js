import React, { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer({setScore,score}){
    const [displayMole, setDisplayMole] = useState(false)

    const handleBop = () => {
        setDisplayMole(false)
        setScore(prevScore => prevScore + 1)
    }
    const displayMoleComponent = displayMole ? <Mole setDisplayMole={setDisplayMole} handleBop={handleBop} /> :
    <EmptySlot setDisplayMole={setDisplayMole} />
 
    return (
        <div className='MoleContainer'>
            {/* <h2>MoleContainer</h2> */}
            {displayMoleComponent}
        </div>
    )
 }
 
export default MoleContainer