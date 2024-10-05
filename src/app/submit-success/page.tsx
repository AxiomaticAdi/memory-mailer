import dynamic from "next/dynamic";

const LottieBB8 = dynamic(() => import("@/components/LottieBB8"), {
	ssr: false,
});

export default function SubmitSuccessPage() {
	return (
		<section className="container mx-auto flex flex-col items-center justify-center gap-6 px-4 py-12 md:py-24 lg:py-32">
			<div className="space-y-4 text-center">
				<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
					Sending your postcard...
				</h1>
				<p className="text-lg">May the memories be with you!</p>
			</div>
			<LottieBB8 />
		</section>
	);
}
