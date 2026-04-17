import React from 'react'

function Student({name,age,course}) {
  return (
    
    <div className="student-card">
        <h2>Name: {name}</h2> 
        <p>Age: {age}</p>
        <p>Course: {course}</p>
    </div>
  )
}

export default Student
