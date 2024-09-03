import React from 'react'

const UseRefEG2 = ({count, setCount, renderCount}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2>Render Count: {renderCount.current}</h2>
    </div>
  )
}

export default UseRefEG2