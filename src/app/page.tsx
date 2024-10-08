import Link from "next/link";
import MailboxIcon from "@/icons/MailboxIcon";
import PaletteIcon from "@/icons/PaletteIcon";
import PencilIcon from "@/icons/PencilIcon";

import FeatureDescription from "@/components/FeatureDescription";

export default function Home() {
	return (
		<main className="flex flex-1 w-full justify-center items-center min-h-[100dvh]">
			<section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
					<div className="space-y-4">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Share Your Vacation Memories
						</h1>
						<p className="font-mono max-w-[600px] text-muted-foreground md:text-xl/relaxed">
							Create and send a postcard to loved ones to share your vacation
							adventures.
						</p>
						<Link href="/new-postcard" className="inline-block">
							<button className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors">
								Create a postcard
							</button>
						</Link>
					</div>
					<div className="grid gap-6">
						<div className="flex items-start gap-4">
							<PaletteIcon className="w-8 h-8 text-primary" />
							<FeatureDescription
								title="Choose a template"
								description="Select from our collection of themed postcard designs to capture your vacation memories."
							/>
						</div>
						<div className="flex items-start gap-4">
							<PencilIcon className="w-8 h-8 text-primary" />
							<FeatureDescription
								title="Add your personal touch"
								description="Customize your postcard with photos or a message."
							/>
						</div>
						<div className="flex items-start gap-4">
							<MailboxIcon className="w-8 h-8 text-primary" />
							<FeatureDescription
								title="We'll handle the logistics"
								description="Sit back and relax, we'll handle printing and mailing your postcard to your recipient."
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
