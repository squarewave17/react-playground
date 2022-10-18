function LikeButton() {
  const [liked, setLiked] = React.useState(false)

  if (liked) {
    return "You liked this!!!!!!!"
  }

  return (
    <button className='btn' onClick={() => setLiked(true)}>
      Like it
    </button>
  )
}

function MyApp() {
  ;<div>
    <h4>Here's a button</h4>
    <LikeButton />
  </div>
}
const rootNode = document.getElementById("like-button-root")
const root = ReactDOM.createRoot(rootNode)
root.render(React.createElement(MyApp))
