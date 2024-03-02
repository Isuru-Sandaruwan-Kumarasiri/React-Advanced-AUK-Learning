import React from 'react'

function Post({name,job,university,school}) {
    return (
      <div className='container'>
          <div className="content">
              <h2>{name}</h2>
              <div><span>Job -</span>{job}</div>
              <div><span>School -</span>{university}</div>
              <div><span>University -</span>{school}</div>
          </div>
  
      </div>
    )
  }

export default Post