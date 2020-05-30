import React from 'react'
import styled from "styled-components";

const Main = () =>{
	const NoteInput = styled.form`
	border:1px solid #3c4043;
	`
	const Title = styled.input`
	border:none;
	color:#fff;
	display:block;
	width:100%;
	`
	const TextArea = styled.textarea`
	border:none;
	color:#fff;
	display:block;
	width:100%;
	`

	return(
		<main>
			<NoteInput action="">
				<Title type="text" name="" id="" placeholder="Title"/>
				<TextArea name="" id="" cols="30" rows="10"/>
			</NoteInput>
		</main>
	)
}

export default Main