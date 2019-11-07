import React from "react";

const Home = ({history}) => {
	return (
		<div>
			<h2>홈</h2>
			<button onClick={() => {
				history.push('/about/js')
			}}>자바스크립트 사용하여 이동</button>
		</div>
	);
};

export default Home;
