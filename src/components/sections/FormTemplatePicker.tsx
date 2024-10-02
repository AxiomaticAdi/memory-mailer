import Image from "next/image";
import { templateUrlMapping } from "@app/constants";

interface FormTemplatePickerProps {
	template: string;
	setTemplate: (template: string) => void;
}

export default function FormTemplatePicker({
	template,
	setTemplate,
}: FormTemplatePickerProps) {
	return (
		<div>
			<label className="block text-sm font-medium text-gray-700">
				Pick a template
			</label>
			<div className="mt-1 grid grid-cols-2 gap-2">
				{["template1", "template2"].map((t) => (
					<div
						key={t}
						className={`border-2 rounded-md cursor-pointer ${
							template === t
								? "border-primary-500 ring-2 ring-primary-500"
								: "border-gray-300"
						}`}
						onClick={() => setTemplate(t)}
					>
						<Image
							src={templateUrlMapping[t]}
							alt={`Postcard ${t}`}
							width={300}
							height={200}
							className="rounded-md"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
