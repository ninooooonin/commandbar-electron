import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: 'Inter-Regular', sans-serif;
		font-size: 16px;
		color: #fafafa;
	}
`;
