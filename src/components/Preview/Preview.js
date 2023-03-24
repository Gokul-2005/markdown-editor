import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { wholeContext } from '../../App'
import './Preview.css'
export default function Preview() {
    const {template,theme, setTheme} = useContext(wholeContext);
  return (
    <div className='Preview'>
      <h2 id='previewTitle'>PREVIEW</h2>
      <ReactMarkdown children={template.textareaValue} className='markdown' />
    </div>
  )
}
