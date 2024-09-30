import { useState } from 'react';
import './style/style.css'
import SideBar from './components/SideBar';
import Note from './components/Note';

function App() {

  const [selectedColor, setSelectedColor] = useState('gold')
  const [selectedWidthRange, setSelectedWidthRange] = useState(100)
  const [selectedHeightRange, setSelectedHeightRange] = useState(100)
  const [selectedTitle, setSelectedTitle] = useState('')
  const [selectedSubject, setSelectedSubject] = useState('')
  const [notes, setNotes] = useState([])
  const [subjectAlert, setSubjectAlert] = useState('none')
  const [titleAlert, setTitleAlert] = useState('none')

  const createNote = () => {
    if (selectedSubject !== '' && selectedTitle !== '') {
      notes.push({
        title: selectedTitle,
        subject: selectedSubject,
        width: parseInt(selectedWidthRange),
        height: parseInt(selectedHeightRange),
        color: selectedColor
      })
      setSelectedTitle('')
      setSelectedSubject('')
    } else {
      if(selectedTitle === '' && selectedSubject === ''){
        setTitleAlert('flex')
        setSubjectAlert('flex')
        setTimeout(() => {
          setTitleAlert('none')
          setSubjectAlert('none')
        }, 3000);
      }else if(selectedTitle === ''){
        setTitleAlert('flex')
        setTimeout(() => {
          setTitleAlert('none')
        }, 3000);
      }else if(selectedSubject === ''){
        setSubjectAlert('flex')
        setTimeout(() => {
          setSubjectAlert('none')
        }, 3000);
      }
    }
  }

  const deleteNote = (key) => {
    const newNotes = notes.filter((item, index) => index !== key);
    setNotes(newNotes);
  }

  return (
    <div className="mainWrapper">
      <SideBar subjectAlert={subjectAlert} titleAlert={titleAlert} createNote={createNote} selectedTitle={selectedTitle} selectedSubject={selectedSubject} setSelectedColor={setSelectedColor} setSelectedTitle={setSelectedTitle} setSelectedSubject={setSelectedSubject} selectedWidthRange={selectedWidthRange} selectedHeightRange={selectedHeightRange} setSelectedHeightRange={setSelectedHeightRange} setSelectedWidthRange={setSelectedWidthRange} />
      <div className='noteSide'>
        {notes && notes.map((note, key) => (
          <Note deleteNote={() => deleteNote(key)} key={key} title={note.title} subject={note.subject} width={note.width} height={note.height} color={note.color} />
        ))}
      </div>
    </div>
  );
}

export default App;
