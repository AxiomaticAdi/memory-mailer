"use client";

import { useState } from "react";
import { FormData } from "../types";
import { entryIdMapping, googleFormId } from "../constants";
import { UploadButton } from "@utils/uploadthing";
import Image from "next/image";

export default function Component() {
	const [senderName, setSenderName] = useState("");
	const [recipientName, setRecipientName] = useState("");
	const [recipientAddress, setRecipientAddress] = useState("");
	const [message, setMessage] = useState("");
	const [template, setTemplate] = useState("template_1");

	const [imageOneUrl, setImageOneUrl] = useState("");
	const [imageTwoUrl, setImageTwoUrl] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
				Value: "template_1",
			},
		];

		if (!senderName || !recipientName || !recipientAddress || !message) {
			alert("Please fill in all the fields");
			return;
		}

		const submitEndpoint = `${process.env.NEXT_PUBLIC_BACKEND_URL}/google-forms`;

		fetch(submitEndpoint, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ formData, formId }),
		})
			.then((response) => response.json())
			.then((data) => console.log(data));

		alert("Your postcard will be mailed shortly!");

		console.log(JSON.stringify({ formData, formId }));

		return resetForm();
	};

	const resetForm = () => {
		setSenderName("");
		setRecipientName("");
		setRecipientAddress("");
		setMessage("");
		setTemplate("template_1");
	};

	const allowUpload = !imageOneUrl || !imageTwoUrl;

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
								className="appearance-none block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:bg-white sm:text-sm"
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
								className="appearance-none block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:bg-white sm:text-sm"
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
								className="appearance-none block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:bg-white sm:text-sm"
							/>
							<p className="mt-2 text-sm text-gray-500">
								{message.length}/200 characters
							</p>
						</div>
					</div>
					<div>
						<label
							htmlFor="Images"
							className="block text-sm font-medium text-gray-700"
						>
							Photos
						</label>
						<p className="mt-2 text-sm text-gray-500">Optional - max 2</p>
						<div className="mt-1">
							<div className="flex flex-wrap gap-2">
								{imageOneUrl && (
									<Image
										src={imageOneUrl}
										alt="Image One"
										width={200}
										height={200}
										className="rounded-md"
									/>
								)}
								{imageTwoUrl && (
									<Image
										src={imageTwoUrl}
										alt="Image Two"
										width={200}
										height={200}
										className="rounded-md"
									/>
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
											// Do something with the error.
											alert(`ERROR! ${error.message}`);
										}}
									/>
								</div>
							)}
						</div>
					</div>

					{/* <div>
						<label className="block text-sm font-medium text-gray-700">
							Postcard Template
						</label>
						<div className="mt-1 grid grid-cols-3 gap-3">
							{[1, 2, 3].map((t) => (
								<div
									key={t}
									className={`border-2 rounded-md cursor-pointer ${
										template === t
											? "border-primary-500 ring-2 ring-primary-500"
											: "border-gray-300"
									}`}
									onClick={() => setTemplate(t)}
								>
									<img
										src="/placeholder.svg"
										alt={`Postcard Template ${t}`}
										className="w-full h-24 object-cover rounded-md"
									/>
								</div>
							))}
						</div>
					</div> */}
					<div className="flex items-center justify-end">
						<button
							type="submit"
							className="bg-primary text-white font-bold py-2 px-4 rounded"
						>
							Send Postcard
						</button>
					</div>
				</form>
				<div className="flex flex-col py-12">
					<p className="text-center">
						Feedback? Questions? Email us at support@vacationpostcards.com
					</p>
				</div>
			</div>
		</div>
	);
}
