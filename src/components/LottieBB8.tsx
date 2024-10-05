"use client";

import React from "react";
import Lottie from "react-lottie-player";
import animationData from "@components/animations/LottieBB8.json";

export default function LottieAnimation() {
	return (
		<div>
			<Lottie
				loop
				animationData={animationData}
				play
				style={{ width: 300, height: 300 }}
			/>
		</div>
	);
}
