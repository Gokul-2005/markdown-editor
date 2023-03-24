import React, { useContext } from 'react'
import { wholeContext } from '../../App'
import Preview from '../Preview/Preview'
import SideBar from '../SideBar/SideBar'
import Textarea from '../Textarea/Textarea'
import './Body.css'
export default function Body() {
    const {sideBar} = useContext(wholeContext);
  return (
    <div className='Body'>
      {sideBar ? <SideBar style={{marginLeft:"-210vh"}} /> :<SideBar style={{marginLeft:"-140vh"}} /> }  
      <Textarea />
      <Preview />
    </div>
  )
}
