import React from 'react'
import Para1 from './Para1'

export default function Mediaobject(props) {
  return (
    <>
    <div className="flex flex-col text-center sm:text-start sm:flex-row gap-2 md:mr-12">
 <div className='text-[25px] mt-1 text-green mx-auto sm:mx-0'>{props.img}</div>
  <div className="media-body">
    <h5 className="mt-0 font-medium text-lg">{props.mediaheading}</h5>
     <Para1 para1={props.para}/>
     </div>
</div>
  
    </>
  )
}
