const Song = (props) => {
  return (
    <li style={{ margin: '5rem 0' }}>
      <img
        src={props.img_url}
        style={{ maxWidth: '300px', maxHeight: '300px' }}
        alt={props.name}
      />
      <h3>{props.name}</h3>
      <h2>{props.artist}</h2>
      <audio controls>
        <source src={props.song_url} type="audio/mp3" />
      </audio>
    </li>
  )
}

export default Song
