export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col py-8 md:py-10 justify-center gap-4">
			<div className="inline-block justify-center">
				{children}
			</div>
		</section>
	);
}
