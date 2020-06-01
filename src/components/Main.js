import React, {useState, useRef} from 'react'
import styled from "styled-components";
import Note from './Note'

const NoteInput = styled.form`
box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15);
width:600px;
border-radius:8px;
margin:20px auto;
padding:20px;
`
const Title = styled.input`
border:none;
color:#000;
display:block;
width:100%;
font-size:18px;
margin:10px 0;
// display:none;
outline:none;
&::placeholder{
	color:#3c4043;
	opacity:1;
}

`
const TextArea = styled.textarea`
border:none;
color:#000;
display:block;
width:100%;
font-family: 'Noto Sans', sans-serif;
font-size:13px;
font-weight:bold;
outline:none;
/* height:100%; */
resize: none;
overflow: hidden;
min-height: 10px;
&::placeholder{
	color:#3c4043;
	opacity:1;
}
`  
const NoteCon = styled.div`
padding:20px;
display:flex;
`
const Main = (props) =>{

	const textAreaRef = useRef(null);
	// const titleRef = useRef(null);

	 const autoGrow = (elem) =>{
		elem.current.style.height = "5px";
    elem.current.style.height = (10 + elem.current.scrollHeight)+"px";
	 }

	return(
		<main>
			<NoteInput action="">
				{props.showInput ? <Title type="text" name="" id="" placeholder="Title" 
				onFocus={()=>props.onTitleFocus(true)}
				onBlur={()=>props.onTitleFocus(false)}
				onChange={(e)=>props.onTitleChange(e.target.value)}
				/> : ''
				}
				<TextArea name="" id="" cols="30" rows="1" placeholder="Take a note..." onFocus={()=> {
		 			props.onShowInput(true);
		 			props.onTextFocus(true)
					textAreaRef.current.focus();
					}} onInput={()=>autoGrow(textAreaRef)} ref={textAreaRef} 	onBlur={()=>props.onTextFocus(false)}
					onChange={(e)=>props.onTextChange(e.target.value)}
					/>
			</NoteInput>
			<NoteCon>
				{props.notes.map((note,index)=><Note note={note} key={index}/>)}
			</NoteCon>
		</main>
	)
}

export default Main