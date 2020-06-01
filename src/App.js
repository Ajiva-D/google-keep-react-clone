import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	const [showInput, setShowInput] = useState(false);
	const [textFocused, setTextFocused] = useState(false);
	const [titleFocused, setTitleFocused] = useState(true);
	const [textValue, setTextValue] = useState('');
	const [titleValue, setTitleValue] = useState('');
	const [notes, setNotes] = useState([]);

	const blurOut = () => {
		if (!textFocused && !titleFocused) {
			setShowInput(false)
			if(textValue !== '' || titleValue !== ''){
				let noteObj = {
					title:titleValue,
					text:textValue
				}
				setNotes([...notes, noteObj]);
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
