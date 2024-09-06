/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yTkoPMraqAM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Component() {
	const [senderName, setSenderName] = useState("");
	const [recipientName, setRecipientName] = useState("");
	const [recipientAddress, setRecipientAddress] = useState("");
	const [recipientCountry, setRecipientCountry] = useState("");
	const [message, setMessage] = useState("");
	const [template, setTemplate] = useState(1);
	const [showPreview, setShowPreview] = useState(false);
	const countries = [
		{ value: "us", label: "United States" },
		{ value: "ca", label: "Canada" },
		{ value: "gb", label: "United Kingdom" },
		{ value: "au", label: "Australia" },
		{ value: "nz", label: "New Zealand" },
	];
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		alert("Your postcard will be mailed in 3 months");
	};
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="text-center text-3xl font-extrabold text-gray-900">
						Send a Digital Postcard
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Fill out the form below to create and send a digital postcard.
					</p>
				</div>
				<form onSubmit={handleSubmit} className="space-y-6">
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
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
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
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
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
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="recipient-country"
							className="block text-sm font-medium text-gray-700"
						>
							Recipient&apos;s Country
						</label>
						<div className="mt-1">
							<select
								id="recipient-country"
								name="recipient-country"
								required
								value={recipientCountry}
								onChange={(e) => setRecipientCountry(e.target.value)}
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
							>
								<option value="">Select a country</option>
								{countries.map((country) => (
									<option key={country.value} value={country.value}>
										{country.label}
									</option>
								))}
							</select>
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
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
							/>
							<p className="mt-2 text-sm text-gray-500">
								{message.length}/200 characters
							</p>
						</div>
					</div>
					<div>
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
					</div>
					<div className="flex items-center justify-between">
						<button
							type="button"
							onClick={() => setShowPreview(true)}
							className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
						>
							Preview
						</button>
						<button
							type="submit"
							className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
						>
							Send Postcard
						</button>
					</div>
				</form>
			</div>
			{showPreview && (
				<Dialog open={showPreview} onOpenChange={setShowPreview}>
					<DialogContent className="sm:max-w-lg">
						<DialogHeader>
							<DialogTitle>Postcard Preview</DialogTitle>
						</DialogHeader>
						<div className="mt-4">
							<img
								src="/placeholder.svg"
								alt={`Postcard Template ${template}`}
								className="w-full h-auto rounded-md"
							/>
							<div className="mt-4">
								<p className="font-medium">From: {senderName}</p>
								<p className="font-medium">To: {recipientName}</p>
								<p className="mt-2">{message}</p>
							</div>
						</div>
						<DialogFooter>
							<Button
								variant="outline"
								onClick={() => setShowPreview(false)}
								className="mr-4"
							>
								Close
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			)}
		</div>
	);
}
