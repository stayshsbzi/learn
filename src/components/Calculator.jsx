import './Calculator.css'
import { useState } from 'react'
import Btn from './Btn'

const Calculator = () => {

    const [data, setData] = useState('')

    return (
        <div className='container'>
            <div className='calculator'>
                <form action="">
                    <div className='result'>
                        {data}
                    </div>
                    <div>
                        <Btn text={'AC'} setData={setData} data={data} />
                        <Btn text={'DE'} setData={setData} data={data} />
                        <Btn text={'.'} setData={setData} data={data} />
                        <Btn text={'/ '} setData={setData} data={data} />
                    </div>
                    <div>
                        <Btn text={'7'} setData={setData} data={data} />
                        <Btn text={'8'} setData={setData} data={data} />
                        <Btn text={'9'} setData={setData} data={data} />
                        <Btn text={'*'} setData={setData} data={data} />
                    </div>
                    <div>
                        <Btn text={'4'} setData={setData} data={data} />
                        <Btn text={'5'} setData={setData} data={data} />
                        <Btn text={'6'} setData={setData} data={data} />
                        <Btn text={'+'} setData={setData} data={data} />
                    </div>
                    <div>
                        <Btn text={'1'} setData={setData} data={data} />
                        <Btn text={'2'} setData={setData} data={data} />
                        <Btn text={'3'} setData={setData} data={data} />
                        <Btn text={'-'} setData={setData} data={data} />
                    </div>
                    <div>
                        <Btn text={'00'} setData={setData} data={data} />
                        <Btn text={'0'} setData={setData} data={data} />
                        <Btn text={'='} setData={setData} data={data} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Calculator