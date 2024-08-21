import React from 'react'

const Nextbtn = ({ text }) => {

    return (
        <button type='button' value={text} className='Nextbtn' >
            {text}
        </button>
    )
}

export default Nextbtn