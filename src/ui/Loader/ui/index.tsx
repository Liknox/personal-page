import styled from "styled-components"

const LoaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh; 
   margin: auto;
`

const LoaderSpin = styled.div`
	border-radius: 50%;
	border-top: 3px solid var(--primary-color);
	width: 80px;
	height: 80px;
	-webkit-animation: spin 0.8s infinite;
	animation: spin 0.8s infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
function Loader() {
   return (
      <LoaderWrapper>
         <LoaderSpin />
      </LoaderWrapper>
   )
}

export { Loader }
