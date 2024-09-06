import Link from "next/link";
import MailboxIcon from "@/icons/MailboxIcon";
import PaletteIcon from "@/icons/PaletteIcon";
import PencilIcon from "@/icons/PencilIcon";
import StampIcon from "@/icons/StampIcon";
import React from "react";

export default function home() {
	return (
		<div className="flex flex-col min-h-[100dvh]">
			<header className="px-4 lg:px-6 h-14 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<StampIcon className="h-6 w-6" />
					<span className="text-lg font-semibold">Vacation Postcards</span>
				</div>
				<p className="text-muted-foreground hidden sm:block">
					Create and send a postcard to capture your vacation memories.
				</p>
				<Link
					href="#"
					className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
					prefetch={false}
				>
					Start Designing
				</Link>
			</header>
			<main className="flex flex-1 w-full justify-center items-center">
				<section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
						<div className="space-y-4">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Capture Your Vacation Memories
							</h1>
							<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
								Create and send a postcard to your loved ones to share your
								vacation experiences.
							</p>
						</div>
						<div className="grid gap-6">
							<div className="flex items-start gap-4">
								<PaletteIcon className="w-8 h-8 text-primary" />
								<div>
									<h3 className="text-xl font-semibold">
										Choose from beautiful postcard templates
									</h3>
									<p className="text-muted-foreground">
										Select from our curated collection of postcard designs to
										capture your vacation memories.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<PencilIcon className="w-8 h-8 text-primary" />
								<div>
									<h3 className="text-xl font-semibold">
										Add a personal message and recipient address
									</h3>
									<p className="text-muted-foreground">
										Customize your postcard with a heartfelt message and the
										address of your loved ones.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<MailboxIcon className="w-8 h-8 text-primary" />
								<div>
									<h3 className="text-xl font-semibold">
										We&apos;ll mail the postcard in a few months
									</h3>
									<p className="text-muted-foreground">
										Sit back and relax, we&apos;ll handle the printing and
										mailing of your postcard to your recipient.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-muted-foreground">
					&copy; 2024 Vacation Postcards. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4"
						prefetch={false}
					>
						Terms of Service
					</Link>
					<Link
						href="#"
						className="text-xs hover:underline underline-offset-4"
						prefetch={false}
					>
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	);
}
