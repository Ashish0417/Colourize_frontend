import React from 'react'
import './Datatypes.css'
import flower_data from '../../assets/flower_data.png'
import landscape_data from '../../assets/landscape.png'
import mixed_data from '../../assets/mixed.png'
import dataset_icon from '../../assets/load.png'

const Datatypes = () => {
  return (
    <div className='Types'>
        <div className='Type'>
            <img src={flower_data} alt='Flower data'/>
            <div className='caption'>
                <img src={dataset_icon} alt=''/>
                <p>Flower dataset</p>
            </div>
        </div>
        <div className='Type'>
            <img src={landscape_data} alt='Landscape_data'/>
            <div className='caption'>
                <img src={dataset_icon}  alt=''/>
                <p>Landscape dataset</p>
            </div>
        </div>
        <div className='Type'>
            <img src={mixed_data} alt='mixed data'/>
            <div className='caption'>
                <img src={dataset_icon}  alt=''/>
                <p>Mixed dataset</p>
            </div>
        </div>
    </div>
  )
}

export default Datatypes