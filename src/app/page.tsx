import Link from "next/link";
import MailboxIcon from "@/icons/MailboxIcon";
import PaletteIcon from "@/icons/PaletteIcon";
import PencilIcon from "@/icons/PencilIcon";

import React from "react";
import FeatureDescription from "@/components/FeatureDescription";

export default function home() {
	return (
		<main className="flex flex-1 w-full justify-center items-center min-h-[100dvh]">
			<section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
					<div className="space-y-4">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Capture Your Vacation Memories
						</h1>
						<p className="font-mono max-w-[600px] text-muted-foreground md:text-xl/relaxed">
							Create and send a postcard to your loved ones to share your
							vacation experiences.
						</p>
						<Link href="/new-postcard" className="inline-block">
							<button className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors">
								Create a Postcard
							</button>
						</Link>
					</div>
					<div className="grid gap-6">
						<div className="flex items-start gap-4">
							<PaletteIcon className="w-8 h-8 text-primary" />
							<FeatureDescription
								title="Choose from beautiful postcard templates"
								description="Select from our curated collection of postcard designs to capture your vacation memories."
							/>
						</div>
						<div className="flex items-start gap-4">
							<PencilIcon className="w-8 h-8 text-primary" />
							<FeatureDescription
								title="Add a personal message and recipient address"
								description="Customize your postcard with a heartfelt message and the address of your loved ones."
							/>
						</div>
						<div className="flex items-start gap-4">
							<MailboxIcon className="w-8 h-8 text-primary" />
							<FeatureDescription
								title="We'll mail the postcard in a few months"
								description="Sit back and relax, we'll handle the printing and mailing of your postcard to your recipient."
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
