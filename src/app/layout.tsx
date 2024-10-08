import type { Metadata } from "next";
import Link from "next/link";
import StampIcon from "@/icons/StampIcon";
import "./globals.css";

export const metadata: Metadata = {
	title: "Vacation Postcards",
	description: "Share your vacation adventure memories via a themed postcard.",
	icons: [
		{
			rel: "icon",
			type: "image/svg+xml",
			url: "/favicon.svg",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen">
				<header className="px-4 lg:px-6 h-14 flex justify-center sm:justify-start">
					<Link href="/" className="flex items-center gap-2">
						<StampIcon className="h-6 w-6" />
						<span className="text-lg font-semibold">Vacation Postcards</span>
					</Link>
				</header>
				<main className="flex-grow pt-4 sm:pt-0">{children}</main>
				<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
					<p className="text-xs text-muted-foreground">
						&copy; 2024{" "}
						<Link href="https://ocadventurehomes.com">OC Adventure Homes</Link>.
						All rights reserved.
					</p>
					<nav className="sm:ml-auto flex gap-4 sm:gap-6">
						<Link
							href="https://ocadventurehomes.com"
							className="text-xs hover:underline underline-offset-4"
							prefetch={false}
						>
							OC Adventure Homes
						</Link>
					</nav>
				</footer>
			</body>
		</html>
	);
}
