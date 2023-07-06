export default function CtaContact() {
	return (
		<div className="max-w-6xl mx-auto px-4 py-12 border-t border-slate-200 dark:border-slate-800">

			{/* CTA box */}
			<div className="relative dark:bg-slate-800 bg-sky-100 py-10 px-8 md:py-12 md:px-12 rounded-md">

				<div className="relative max-w-2xl mx-auto text-center space-y-4">

					{/* CTA header */}
					<h3 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Let's Connect</h3>
					<p className="dark:text-slate-300 text-lg">Shoot me a quick message if you have any questions or would like to work together on a project.</p>

					{/* CTA button */}
					<div className="flex justify-center">
						<a className="btn text-white bg-sky-500 hover:bg-sky-400" href="#0">Send me a message</a>
					</div>

				</div>
			</div>

		</div>
	)
}