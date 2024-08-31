//import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Cards } from './components/Cards/Cards'

import './App.css'

function App() {

  return (
    <div className='app'>
      <Header />
      
      <main>
        <Cards />
      </main>

    </div>
  )
}

export default App
