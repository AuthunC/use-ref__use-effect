import React from 'react'

const UseEffectEG4 = ({text,setText,debouncedText}) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Debounced Text: {debouncedText}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default UseEffectEG4