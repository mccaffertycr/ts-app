interface NoteProps {
  key: string,
  _id: string,
  title: string,
  body: string,
  createdAt: Date,
  selectNote: Function
}

export default function Note(props: NoteProps) {
  const timestamp: Date = props.createdAt;

  return (
    <div onClick={() => props.selectNote(props._id)}>
      <h3>{props.title}</h3>
      <p>{timestamp.toDateString()}</p>
      <img src={props.body} alt="body_img" />
    </div>
  )
}
