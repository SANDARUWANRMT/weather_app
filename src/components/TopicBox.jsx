import React from 'react'
import './topicBox.css'

export default function TopicBox(props) {

  
  const item = "=>"

  return (
    <div>
        <div className="topicBox">
            <span className='text'> I like trading {item} {props.entity} most {props.type} {props.children} </span>
        </div>
    </div>
  )
}
