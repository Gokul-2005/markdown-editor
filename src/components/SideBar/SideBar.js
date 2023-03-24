import React, { useContext } from 'react'
import { wholeContext } from '../../App'
import './SideBar.css'
export default function SideBar(props) {
    const {Templates,setTemplate,temp,setTemp} = useContext(wholeContext);

    const DeleteTemplate = (tempName) => {
        let tempIndex ;
        let templateArr = JSON.parse(localStorage.getItem('templates'));
        templateArr.forEach((element,i) => {
            if(element.name === tempName) {
                tempIndex = i;
            }
        });
        templateArr.splice(tempIndex,1);
        localStorage.setItem('templates', JSON.stringify(templateArr));
        setTemp(!temp);
    }
    const openTemplate = (tempName) => {
        let templateArr = JSON.parse(localStorage.getItem('templates'));
        templateArr.forEach((element) => {
            if(element.name === tempName) {
                setTemplate(element);
            }
        });
    }
  return (
    <div className='SideBarBody' style={props.style}>
      <h1 id='sidebarTitle'>my documents</h1>
      <div id='documentsDiv'>
        
        { JSON.parse(Templates) !=null ? JSON.parse(Templates).map((element,i) => {
          return <div key={i}><button onClick={() => {openTemplate(element.name)}} >{element.name}</button><img src='assets/icon-delete.svg' onClick={ () => {DeleteTemplate(element.name)}} alt="" /></div> 
        }):null}
      </div>
      {/* <div id='themeDiv'>
        <img alt='' src='assets/icon-dark-mode.svg' className='themeImg' />
        <label className="switch">
            <input type="checkbox" defaultChecked />
            <span className="slider round"></span>
        </label>
        <img alt='' src='assets/icon-light-mode.svg' className='themeImg' />
        </div> */}
    </div>
  )
}
