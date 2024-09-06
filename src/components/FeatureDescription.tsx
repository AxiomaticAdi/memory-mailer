import React from "react";

interface FeatureDescriptionProps {
	title: string;
	description: string;
}

const FeatureDescription: React.FC<FeatureDescriptionProps> = ({
	title,
	description,
}) => {
	return (
		<div>
			<h3 className="text-xl font-semibold">{title}</h3>
			<p className="text-muted-foreground font-mono">{description}</p>
		</div>
	);
};

export default FeatureDescription;
