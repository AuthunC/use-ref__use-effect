import React from 'react'

const UseEffectEG2 = ({count1,setCount1}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count1}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>
    </div>
  )
}

export default UseEffectEG2