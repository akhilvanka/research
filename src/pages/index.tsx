import type {PageConfig} from 'next';
import Link from 'next/link';
import type {ReactNode} from 'react';
import {posts} from '../posts';

export const config: PageConfig = {
	unstable_runtimeJS: false,
};

export default function Home() {
	return (
		<main className="space-y-6 max-w-3xl"> 
			<div
				className='text-2xl'>
				research
			</div>
			<div
				className='text-neutral-500'>
				here&apos;s a collection of the stuff i&apos;m currently researching, from quantitative finance to machine learning to computer vision. 
				it&apos;s all here.
			</div>
			<ul className="space-y-1 list-inside">
				{posts
					.filter(post => !post.hidden)
					.map(post => (
						<BlogLink key={post.slug} href={`/${post.slug}`}>
							{post.name}
						</BlogLink>
					))}
			</ul>
		</main>
	);
}

function BlogLink(props: {href: string; children: ReactNode}) {
	return (
		<li>
			<Link passHref href={props.href}>
				<a className="text-neutral-400 hover:text-[#FFFFFF]/75">
					{props.children}
				</a>
			</Link>
		</li>
	);
}
