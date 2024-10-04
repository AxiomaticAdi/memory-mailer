import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";
import { templateUrlMapping } from "@app/constants";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface FormTemplatePickerProps {
	template: string;
	setTemplate: (template: string) => void;
}

export default function FormTemplatePicker({
	template,
	setTemplate,
}: FormTemplatePickerProps) {
	const [openModal, setOpenModal] = useState<string | null>(null);

	const getTemplateMiniUrl = (template: string) => {
		const url = templateUrlMapping[template];
		return url ? url.replace("/upload/", `/upload/w_300/`) : "";
	};

	return (
		<div>
			<label className="block text-sm font-medium text-gray-700">
				Pick a template
			</label>
			<div className="mt-1 grid grid-cols-2 gap-2">
				{Object.keys(templateUrlMapping).map((t) => (
					<div
						key={t}
						className={`relative rounded-md cursor-pointer border-2 ${
							template === t
								? "border-primary ring-2 ring-primary"
								: "border-background"
						}`}
						onClick={() => setTemplate(t)}
					>
						<Image
							src={getTemplateMiniUrl(t)}
							alt={`Postcard ${t}`}
							width={300}
							height={200}
							className="rounded-md"
						/>
						<Button
							type="button"
							variant="ghost"
							size="icon"
							className="absolute top-1 right-1 bg-white bg-opacity-75 rounded-full p-1 shadow-md max-h-8 max-w-8"
							onClick={() => {
								setOpenModal(t);
							}}
						>
							<Search size={16} className="text-gray-600" />
						</Button>
					</div>
				))}
				<Dialog
					open={openModal !== null}
					onOpenChange={(open) => setOpenModal(open ? openModal : null)}
				>
					<VisuallyHidden>
						<DialogTitle title={`magnified view ${template}`} />
					</VisuallyHidden>
					<DialogContent className="sm:max-w-[800px] rounded-md">
						{openModal && (
							<Image
								src={templateUrlMapping[openModal]}
								alt={`Postcard ${openModal}`}
								width={800}
								height={533}
								className="rounded-md"
							/>
						)}
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
