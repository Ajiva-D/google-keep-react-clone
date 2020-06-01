import React, {useState, useRef} from 'react'
import styled from "styled-components";

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
min-height: 30px;
&::placeholder{
	color:#3c4043;
	opacity:1;
}

`  
const Main = () =>{
	const [showInput, setShowInput] = useState(false);
	const [textFocused, setTextFocused] = useState(false);
	const [titleFocused, setTitleFocused] = useState(false);

	const textAreaRef = useRef(null);
	// const titleRef = useRef(null);


	// const style = {
	// 	display: "flex",
	// 	justifyContent:"center"
	// }
	 const autoGrow = (elem) =>{
		elem.current.style.height = "5px";
    elem.current.style.height = (30 + elem.current.scrollHeight)+"px";
	 }
	 const blurOut = () => {
		console.log("text",textFocused)
		// console.log("title", titleFocused)
		if(!textFocused && !titleFocused){
			setShowInput(false)
		}
	 }
	  
	return(
		<main>
			<NoteInput action="">
				{showInput ? <Title type="text" name="" id="" placeholder="Title"
				onFocus={()=>setTitleFocused(true)}
				onBlur={()=>{
					setTitleFocused(false);
					blurOut()}}/> : ''}
				<TextArea name="" id="" cols="30" rows="1" placeholder="Take a note..." onFocus={()=> {
					setShowInput(true);
					setTextFocused(true);
					textAreaRef.current.focus();
					}} onInput={()=>autoGrow(textAreaRef)} ref={textAreaRef} onBlur={()=>{
						setTextFocused(false)
						blurOut()}}/>
			</NoteInput>
		</main>
	)
}

export default Main