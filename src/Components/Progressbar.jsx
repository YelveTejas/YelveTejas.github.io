import { Box } from "@chakra-ui/react";
import { useEffect } from "react";

const ProgressBar = () => {
	useEffect(() => {
		const myFunction = () => {
			const winScroll =
				document.body.scrollTop || document.documentElement.scrollTop;
			const height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const scrolled = ((winScroll / height) * 100).toString();
			const myBar = document.getElementById("myBar");
			if (myBar) {
				myBar.style.width = scrolled + "%";
			}
		};

		window.onscroll = () => {
			myFunction();
		};

		// Cleanup the event listener on component unmount
		return () => {
			window.onscroll = null;
		};
	}, []);
	return (
		<>
			<Box className="header" z-index={1} w="100%" mt='-41px' >
				<Box
					className="progress-container"
					w="100%"
					height=" 3px"
					position="fixed"
					left="0"
					zIndex={1}
				>
					<Box
						className="progress-bar"
						height=" 4px"
						id="myBar"
						background="red.500"
						width="0%"
					></Box>
				</Box>
			</Box>
		</>
	);
}


export {ProgressBar}