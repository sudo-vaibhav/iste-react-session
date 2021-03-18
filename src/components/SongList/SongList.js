import Song from './Song'

const SongList = (props) => {
  console.log(props.songs)
  return (
    <div>
      <h4>Hello from Songlist Component</h4>
      <ul style={{ listStyle: 'none' }}>
        {props.songs.length === 0
          ? 'no songs'
          : props.songs.map((item) => {
              return <Song {...item} key={item._id} />
            })}
      </ul>
    </div>
  )
}

export default SongList
