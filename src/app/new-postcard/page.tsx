"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormData } from "@app/types";
import { entryIdMapping, googleFormId } from "@app/constants";
import FormPhotoUpload from "@components/sections/FormPhotoUpload";
import FormTemplatePicker from "@components/sections/FormTemplatePicker";
import { Separator } from "@/components/ui/separator";

export default function PostcardPage() {
	const router = useRouter();
	const [senderName, setSenderName] = useState("");
	const [recipientName, setRecipientName] = useState("");
	const [recipientAddress, setRecipientAddress] = useState("");
	const [message, setMessage] = useState("");
	const [template, setTemplate] = useState("template1");

	const [imageOneUrl, setImageOneUrl] = useState("");
	const [imageTwoUrl, setImageTwoUrl] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formId = googleFormId;
		const formData: FormData[] = [
			{
				FieldName: "senderName",
				EntryId: entryIdMapping.senderName,
				Value: senderName,
			},
			{
				FieldName: "recipientName",
				EntryId: entryIdMapping.recipientName,
				Value: recipientName,
			},
			{
				FieldName: "recipientAddress",
				EntryId: entryIdMapping.recipientAddress,
				Value: recipientAddress,
			},
			{ FieldName: "message", EntryId: entryIdMapping.message, Value: message },
			{
				FieldName: "template",
				EntryId: entryIdMapping.template,
				Value: template,
			},
			{
				FieldName: "imageOneUrl",
				EntryId: entryIdMapping.imageOneUrl,
				Value: imageOneUrl,
			},
			{
				FieldName: "imageTwoUrl",
				EntryId: entryIdMapping.imageTwoUrl,
				Value: imageTwoUrl,
			},
		];

		if (!senderName || !recipientName || !recipientAddress || !message) {
			alert("Please fill in all the fields");
			return;
		}

		const submitEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/google-forms`;

		try {
			const response = await fetch(submitEndpoint, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ formData, formId }),
			});

			if (!response.ok) {
				throw new Error("Failed to submit the form");
			}

			// const data = await response.json();
			// console.log(data);

			router.push("/submit-success");
		} catch (error) {
			console.error("Error submitting form:", error);
			alert("An error occurred while submitting the form. Please try again.");
		}
	};

	const resetForm = () => {
		setSenderName("");
		setRecipientName("");
		setRecipientAddress("");
		setMessage("");
		setTemplate("template_1");

		setImageOneUrl("");
		setImageTwoUrl("");
	};

	const allowUpload = !imageOneUrl || !imageTwoUrl;

	const handleDeleteImage = (imageNum: 1 | 2) => {
		if (imageNum === 1) {
			return setImageOneUrl("");
		}
		if (imageNum === 2) {
			return setImageTwoUrl("");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="text-center text-3xl font-extrabold text-gray-900">
						Send a Postcard
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Submit the form below to send a postcard!
					</p>
				</div>
				<form onSubmit={handleSubmit} className="space-y-6 font-mono">
					<div>
						<label
							htmlFor="sender-name"
							className="block text-sm font-medium text-gray-700"
						>
							Your Name
						</label>
						<div className="mt-1">
							<input
								id="sender-name"
								name="sender-name"
								type="text"
								autoComplete="name"
								required
								value={senderName}
								onChange={(e) => setSenderName(e.target.value)}
								className="appearance-none block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:bg-white focus:outline-none sm:text-sm"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="recipient-name"
							className="block text-sm font-medium text-gray-700"
						>
							Recipient&apos;s Name
						</label>
						<div className="mt-1">
							<input
								id="recipient-name"
								name="recipient-name"
								type="text"
								autoComplete="name"
								required
								value={recipientName}
								onChange={(e) => setRecipientName(e.target.value)}
								className="appearance-none block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:bg-white focus:outline-none sm:text-sm"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="recipient-address"
							className="block text-sm font-medium text-gray-700"
						>
							Recipient&apos;s Address
						</label>
						<div className="mt-1">
							<textarea
								id="recipient-address"
								name="recipient-address"
								rows={3}
								required
								value={recipientAddress}
								onChange={(e) => setRecipientAddress(e.target.value)}
								className="appearance-none block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:bg-white focus:outline-none sm:text-sm"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700"
						>
							Message
						</label>
						<div className="mt-1">
							<textarea
								id="message"
								name="message"
								rows={3}
								maxLength={200}
								required
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="appearance-none block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:bg-white focus:outline-none sm:text-sm"
							/>
							<p className="mt-2 text-sm text-gray-500">
								{message.length}/200 characters
							</p>
						</div>
					</div>
					<FormTemplatePicker template={template} setTemplate={setTemplate} />
					<FormPhotoUpload
						imageOneUrl={imageOneUrl}
						setImageOneUrl={setImageOneUrl}
						imageTwoUrl={imageTwoUrl}
						setImageTwoUrl={setImageTwoUrl}
						handleDeleteImage={handleDeleteImage}
						allowUpload={allowUpload}
					/>

					<Separator />

					<div className="flex flex-col items-center justify-center gap-2">
						<p className="text-center text-lg">Ready to send?</p>
						<button
							type="submit"
							className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
						>
							Ship it!
						</button>
					</div>
				</form>
				<div className="flex flex-col py-12">
					<p className="text-center">
						Feedback? Questions? Email us at ocadventurehomes@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
}
