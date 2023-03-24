import React, { useContext } from 'react'
import { wholeContext } from '../../App'
import  './Header.css'
export default function Header() {
    const {sideBar,setSideBar,setTemplate,template,temp,setTemp} = useContext(wholeContext);

    const saveTemplate = () => {
        let Templates = JSON.parse(localStorage.getItem('templates'));
        let nameCheck = true;
        let nullCheck = true;
        if((template.name).trim()===''){
            nameCheck = !nameCheck;
        }
        if(nameCheck){
            Templates.forEach(element => {
            if(element.name === template.name){
                element.textareaValue = template.textareaValue;
                nullCheck = !nullCheck;
            }
        });
        }
        console.log(nullCheck , nameCheck);
        if(nullCheck && nameCheck){
            Templates.push(template);
        }
        else{
            alert('Please Fill The Template Name');
        }
        localStorage.setItem('templates', JSON.stringify(Templates));
        setTemp(!temp);
    }

  return (
    <div className='Header'>
        <button id='sideBarButton' onClick={() => setSideBar(!sideBar)}>{sideBar ?<img alt='' src='assets/icon-menu.svg' style={{height:'2.5vh'}} />:<img alt='' src='assets/icon-close.svg' style={{height:'2.5vh'}} /> }</button>
        <img alt='' src='assets/logo.svg' id='logo' />
        <img alt='' src='assets/icon-document.svg' style={{marginLeft:'3vh'}} />
        <div id='documentName'>
            <p>Document Name</p>
            <input type='text' onChange={(e) => {setTemplate({...template,name:e.target.value})}} defaultValue={template.name} placeholder='Template Name' />
        </div>
        <button id='saveTemplateButton' onClick={saveTemplate}> <img src='assets/icon-save.svg' style={{height:'1.5vh'}} alt='' /> &nbsp; Save Changes </button>
    </div>
  )
}
