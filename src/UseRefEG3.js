import React from 'react'

const UseRefEG3 = ({inputRef1,inputRef2,toggleFocus}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <input ref={inputRef1} type="text" placeholder="Input 1" />
      <input ref={inputRef2} type="text" placeholder="Input 2" />
      <button onClick={toggleFocus}>Toggle Focus</button>
    </div>
  )
}

export default UseRefEG3