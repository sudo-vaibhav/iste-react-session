import './App.css'
import { useState, useEffect } from 'react'
import './components/SongList/SongList'
import SongList from './components/SongList/SongList'

function App() {
  // Hooks - are functions which add cool features to react

  // variable     function           //default
  let [num, setNum] = useState(48) // useState
  // let [loading, setLoading] = useState(true)
  let [songs, setSongs] = useState([])

  const bgColor = num > 50 ? 'green' : 'yellow'

  useEffect(() => {
    fetch('https://iste-musicapp.azurewebsites.net/api/songs')
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data)
        setSongs(data)
        // setLoading(false)
      })

    return () => {
      // everytime the component gets removed from dom, this function is called

      // so put cleanup code here
      console.log('i am being un rendered / deleted')
    }
  }, [])

  //JSX

  return (
    <div className="App" style={{ background: bgColor }}>
      <p>hello world</p>
      <button
        onClick={() => {
          setNum(num + 1)
        }}
      >
        click this to increase
      </button>

      {num}

      {songs.length === 0 ? (
        <div>
          <h1>Loading</h1>
        </div>
      ) : (
        <div>Not loading</div>
      )}

      {/* this is called passing props, you are passing data to another component */}

      <SongList songs={songs} />
    </div>
  )
}

export default App
