import { useState } from 'react'
import QRCode from 'react-qr-code'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)
  const handleChange = e => {
    if (!show) {
      setValue(e.target.value)
    }
  }

  const handleClick = () => {
    if (!value) {
      alert('Please add a value')
      return null
    }
    if (show) {
      setValue('')
    }
    setShow(!show)
  }
  return (
    <div className='App'>
      <div className='header'>
        <p>QR-CODE</p>
      </div>
      <div className='input-container'>
        <input disabled={show} value={value} onChange={handleChange} />{' '}
        <button onClick={handleClick}>{show ? 'Remove QR' : 'Generate'}</button>
      </div>
      <div className='qr-container'>
        {show ? (
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={value}
            viewBox={`0 0 256 256`}
          />
        ) : null}
      </div>
    </div>
  )
}

export default App
