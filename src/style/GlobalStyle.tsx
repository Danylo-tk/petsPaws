import { createGlobalStyle } from "styled-components";
import palette from "./palette";

const GlobalStyle = createGlobalStyle`
	:root {
		color: ${palette.almostBlack};
		font-family: 'Jost', sans-serif;
		font-size: calc(10 / 16 * 100%);
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		text-decoration: none;
	}
`;

export default GlobalStyle;
