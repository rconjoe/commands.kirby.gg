import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { app } from './firebase.js'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
const fs = getFirestore(app)
import newkass from './assets/newkass.png'

function App() {
  const [commands, setCommands] = useState([])

  useEffect(() => {
    setCommands([])
    getDocs(collection(fs, 'commands'))
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setCommands((commands) => [...commands, doc.data()])
        })
      })
  }, [])

  useEffect(() => {
    document.getElementById('newkass').src = newkass.url
  })


  return (
    <div className="App">
      <header className="App-header">
        <img id="newkass" className="App-logo" alt="kassandra-logo" />
        <strong><h1 className={"mt-12 mb-8 text-4xl"}>Kassandra Commands for <a className={"text-blue-400 hover:text-blue-900"} href="https://twitch.tv/kcckirby">KCCKirby</a>!</h1></strong>
        <div className={"flex flex-col gap-2 mb-12"}>
          {commands.map(command => <div className={"text-pink-700"} key={command.name}> !{command.name} </div>)}
        </div>
      </header>
      <footer className={"bg-pink-200 pb-4 text-2xl"}>
        <a className={"text-blue-900 hover:text-blue-600"} href="kassandra.kirby.gg">about</a> -
        <a className={"text-blue-900 hover:text-blue-600"} href="https://github.com/rconjoe/kirby.gg"> source</a>
      </footer >
    </div >
  )
}

export default App
