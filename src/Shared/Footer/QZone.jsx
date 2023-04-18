import React from 'react';
import QZone1 from '../../assets/qZone1.png'
import QZone2 from '../../assets/qZone2.png'
import QZone3 from '../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-light mx-auto'>
            <h3 className='mb-2'>Q-Zone </h3>
            <div className='m-2 mx-auto'>
                <img src={QZone1} alt="" />
            </div>
            <div className='m-2 mx-auto'>
                <img src={QZone2} alt="" />
            </div>
            <div className='m-2 mx-auto'>
                <img src={QZone3} alt="" />
            </div>

        </div>
    );
};

export default QZone;