import React from "react";
import { render } from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

let GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: unset;
    height: 100%;
  }
`;

let Wrapper = styled.div`
	background: black;
	color: white;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function App() {
	return (
		<>
			<Wrapper>
				<h1>Coming Soon</h1>
			</Wrapper>
			<GlobalStyle />
		</>
	);
}

render(<App />, document.getElementById("root"));
