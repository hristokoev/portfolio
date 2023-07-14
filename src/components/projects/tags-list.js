'use client';

import { useState } from 'react';

export default function TagsList({ metadata }) {

	const tags = [...new Set(metadata.map(project => project.tags).flat())];

	tags.unshift('All Projects');

	const [selectedTag, setSelectedTag] = useState('All Projects');

	return (
		<div className="mb-4 sm:mb-0">
			<ul className="flex flex-wrap -m-1">
				{tags.map(tag => (
					<li className="m-1">
						<button
							className={`inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border ${tag === selectedTag ? 'border-transparent shadow-sm bg-slate-500 text-white duration-150 ease-in-out' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out'}`}
							onClick={() => setSelectedTag(tag)}
						>
							{tag}
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}