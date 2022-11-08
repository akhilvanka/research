import type {GetStaticPaths, GetStaticProps, PageConfig} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {posts} from '../posts';
import { ReaderMode } from '../client/components/reader_mode';

// export const config: PageConfig = {
// 	unstable_runtimeJS: false,
// };

type Props = {
	slug: string;
};

export default function PostPage({slug}: Props) {
	const post = posts.find(post => post.slug === slug)!;

	return (
		<div className="space-y-4 max-w-max">
			<Head>
				<title>{post.name}</title>
				<meta name="description" content={post.excerpt} />
				<meta name="keywords" content={post.keywords.join(', ')} />
				<meta name="theme-color" content={post.hidden ? '#ebb305' : '#171717'} />
			</Head>

			{post.hidden && (
				<div className="bg-yellow-500 text-yellow-900 rounded-md py-2 px-4">
					<p>hey! this post is hidden! please don&apos;t share the link for now...</p>
				</div>
			)}

			<div>
				<Link href="/">
					<a className="text-neutral-700 hover:text-[#D1C9BC]">
						../
					</a>
				</Link>
				<ReaderMode post={post.readerMode} />
			</div>

			<p>
				<time dateTime={post.date.toISOString()}>{post.date.toDateString()}</time>
			</p>

			<main className="prose max-w-none prose-blue prose-img:rounded-md prose-img:w-full dark:prose-invert">
				{post.render()}
			</main>
		</div>
	);
}

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
	const slug = params!.slug as string;

	const post = posts.find(post => post.slug === slug);

	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			slug,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: posts.map(post => ({params: {slug: post.slug}})),
	fallback: 'blocking',
});
