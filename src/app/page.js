import Image from 'next/image'
import ProflieImg from '../../public/images/profile.jpg'
import Flag from '../../public/images/czechia-czech-republic-flag.svg'

// Projects
import getProjectMetadata from '@/components/getProjectMetadata';
import ProjectPreview from '@/components/projects/preview';
import ProjectsGrid from '@/components/ui/projects';

export const metadata = {
	title: 'Hristo Koev - Web Developer & Motion Graphics Artist',
	description: 'A Web Developer based in Prague',
}

export default function Home() {

	const projectMetadata = getProjectMetadata();
	const projectPreviews = projectMetadata.map((project) => (
		<ProjectPreview key={project.slug} {...project} />
	));

	return (
		<div className="flex md:flex flex-col space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

			{ /* Middle area */}
			<div className="grow space-y-8">

				{ /* Page title */}
				<div className="flex flex-col-reverse md:flex-row items-center justify-between md:mb-12 gap-y-4">
					<div className="space-y-8">
							<h1
								className="h1 font-trueno font-extrabold text-transparent text-7xl mb-4 bg-clip-text bg-slate-800 dark:bg-gradient-to-r from-rose-500 to-sky-400"
							>
								Hi,<br />I am <span className="block uppercase dark:italic tracking-[6px]">Hristo Koev</span>
							</h1>
							<h2 className="h2 font-aspekta md:whitespace-nowrap">
								A Web Developer based in Prague <Image className="inline-block" src={Flag} width={40} height={40} alt="Flag" /></h2>

					</div>
					<div className="p-5 rounded-full overflow-hidden border-2 border-dashed border-slate-300/75 dark:border-slate-700/75">
						<Image className="rounded-full opacity-90 w-48 lg:w-auto lg:max-w-[256px]" src={ProflieImg} width={256} height={256} alt="About" />
					</div>
				</div>

				{ /* Page content */}
				<div className="text-slate-600 dark:text-slate-300">
					<div className="space-y-4">
						<p>
							I&apos;m a front-end developer with a passion for motion graphics. I specialize in React for web development and constantly strive to expand my skills.
						</p>
						<p>
							If you have a project you&apos;d like to discuss, feel free to write me an email at <a className="text-rose-400 hover:text-rose-300" href="mailto:hristo@koev.me">hristo@koev.me</a>.
						</p>

					</div>

					<ProjectsGrid />

				</div>

			</div>

		</div>
	)
}
