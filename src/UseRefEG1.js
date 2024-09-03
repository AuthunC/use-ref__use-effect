import React from 'react'

const UseRefEG1 = ({inputRef, focusInput}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <input ref={inputRef} type="text" placeholder="Focus me with button click" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default UseRefEG1