import React, { useContext } from 'react'
import { wholeContext } from '../../App'
import './Textarea.css'
export default function Textarea() {
    const {setTextAreaValue,setTemplate,template} = useContext(wholeContext);
    const lightTheme = {

    }
  return (
    <div className='Textarea'>
      <h2>MARKDOWN</h2>
      <textarea onChange={(e) => {setTextAreaValue(e.target.value)
        setTemplate({...template,textareaValue:e.target.value})}} defaultValue={template.textareaValue}></textarea>
    </div>
  )
}
