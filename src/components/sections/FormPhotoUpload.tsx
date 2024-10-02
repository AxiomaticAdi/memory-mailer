import { X } from "lucide-react";
import { UploadButton } from "@utils/uploadthing";
import Image from "next/image";

interface FormPhotoUploadProps {
	imageOneUrl: string;
	setImageOneUrl: (url: string) => void;
	imageTwoUrl: string;
	setImageTwoUrl: (url: string) => void;
	handleDeleteImage: (index: 1 | 2) => void;
	allowUpload: boolean;
}

export default function FormPhotoUpload({
	imageOneUrl,
	setImageOneUrl,
	imageTwoUrl,
	setImageTwoUrl,
	handleDeleteImage,
	allowUpload,
}: FormPhotoUploadProps) {
	return (
		<div>
			<label
				htmlFor="Images"
				className="block text-sm font-medium text-gray-700"
			>
				Add photos
			</label>
			<p className="mt-2 text-sm text-gray-500">Optional - max 2</p>
			<div className="mt-1">
				<div className="flex flex-wrap gap-2">
					{imageOneUrl && (
						<div className="relative">
							<Image
								src={imageOneUrl}
								alt="Image One"
								width={200}
								height={200}
							/>
							<button
								onClick={() => handleDeleteImage(1)}
								className="absolute top-1 right-1 bg-white bg-opacity-75 rounded-full p-1 shadow-md"
							>
								<X size={16} className="text-gray-600" />
							</button>
						</div>
					)}
					{imageTwoUrl && (
						<div className="relative">
							<Image
								src={imageTwoUrl}
								alt="Image Two"
								width={200}
								height={200}
							/>
							<button
								onClick={() => handleDeleteImage(2)}
								className="absolute top-1 right-1 bg-white bg-opacity-75 rounded-full p-1 shadow-md"
							>
								<X size={16} className="text-gray-600" />
							</button>
						</div>
					)}
				</div>
				{allowUpload && (
					<div className="flex justify-center mt-3">
						<UploadButton
							endpoint="imageUploader"
							onClientUploadComplete={(res) => {
								console.log("Upload successful: ", res);
								if (!imageOneUrl) {
									return setImageOneUrl(res[0].url);
								}
								if (!imageTwoUrl) {
									return setImageTwoUrl(res[0].url);
								}
							}}
							onUploadError={(error: Error) => {
								alert(`ERROR! ${error.message}`);
							}}
							appearance={{
								button: {
									background: "hsl(var(--primary))",
									borderRadius: "0.25rem",
								},
							}}
							content={{
								button({ ready }) {
									if (ready) return "Upload photo";
									return "Getting ready...";
								},
								allowedContent() {
									return "";
								},
							}}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
