import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import api from './api'
import moduleName from './'

function App() {
	const [showInput, setShowInput] = useState(false);
	const [textFocused, setTextFocused] = useState(false);
	const [titleFocused, setTitleFocused] = useState(false);
	const [textValue, setTextValue] = useState('');
	const [titleValue, setTitleValue] = useState('');
	const [notes, setNotes] = useState([]);

	 useEffect(()=>{
		const getData = async ()=>{
			try{
				let {data} = await api.get('data.json');
				const db = firebase.database().ref('data');
				console.log(db);
				
				// console.log(data)
			if(data){
				setNotes([...notes, data])
			}
			 }
			 catch(error){
				 console.log(error)
			 }
		};
		getData();
	 }, [])
	const blurOut = async () => {
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
					const {data} = await api.post('data.json',noteObj);
					setNotes([...notes, data]);
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
