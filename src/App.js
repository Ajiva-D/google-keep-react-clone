import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import firebase from './firebase'

function App() {
	const [showInput, setShowInput] = useState(false);
	const [textFocused, setTextFocused] = useState(false);
	const [titleFocused, setTitleFocused] = useState(false);
	const [textValue, setTextValue] = useState('');
	const [titleValue, setTitleValue] = useState('');
	const [notes, setNotes] = useState([]);

	 useEffect(()=>{
		getData();
	 }, [])

	 const getData = ()=>{
		let notesArr = [];
		try{
			const db = firebase.database().ref('data');
			db.orderByValue().once("value", snapshot =>{
				snapshot.forEach((note)=>{
					// console.log(notes)
					// setNotes([...notes, note.val()])
					notesArr.push(note.val());
				})
			if(notesArr.length !== 0){
				setNotes(notesArr)
			}
			})
		 }
		 catch(error){
			 console.log(error)
		 }
	}; 
	const updateNote = ()=>{
		
	}
	const blurOut = () => {
		if (!textFocused && !titleFocused) {
			if(textValue !== '' || titleValue !== ''){
				setShowInput(false)
				let noteObj = {
					title:titleValue,
					text:textValue
				}
				setTextValue('');
				setTitleValue('')
				try{
					setNotes([...notes, noteObj])
					// console.log(setNotes([...notes, noteObj]))
					const db = firebase.database().ref('data');
					db.push().set(noteObj)
					// await api.post('data.json',noteObj);
				}
				catch(error){
					console.log(error);
				}
			}
		}
	};

	return (
		<div
			className="App"
			onClick={() => {
				blurOut();
			}}
		>
			<Header />
			<Main
				textValue = {textValue}
				titleValue = {titleValue}
				showInput={showInput}
				textFocused={textFocused}
				titleFocused={titleFocused}
				onTextFocus={(state) => setTextFocused(state)}
				onTitleFocus={(state)=>setTitleFocused(state)}
				onShowInput = {(state)=>setShowInput(state)}
				onTextChange = {(state)=>setTextValue(state)}
				onTitleChange = {state=>setTitleValue(state)}
				notes={notes}
			/>
		</div>
	);
}

export default App;
