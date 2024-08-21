import React from 'react'

const Btn = ({ text, data, setData }) => {

    const clickHandler = (event) => {
        // event.preventDefault() if type of btn was submit, you should use this line for prevent default behavior.
        const value = event.target.value
        setData(data + value)

        switch (value) {
            case 'AC':
                setData('')
                break;
            case 'DE':
                setData(data.slice(0, -1))
                break;
            case '=':
                setData(eval(data))
                break;
            // case '=':
            default:
            // code block
        }
    }

    return (
        <button type='button' value={text} className='btn' onClick={event => clickHandler(event)}>
            {text}
        </button>
    )
}

export default Btn