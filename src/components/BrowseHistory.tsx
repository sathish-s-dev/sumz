import { useState } from 'react';

import copy from '../assets/copy.svg';
import tick from '../assets/tick.svg';

import { ArticleState } from '../summary.js';

interface BrowseProps {
	allArticles: ArticleState[];
	setArticle: React.Dispatch<React.SetStateAction<ArticleState>>;
}

export function BrowseHistory({ allArticles, setArticle }: BrowseProps) {
	const [copied, setCopied] = useState({
		value: '',
		status: false,
	});
	const handleCopy = (url: string | undefined, e: any) => {
		e.stopPropagation();
		if (url) {
			setCopied({
				value: url,
				status: false,
			});
			navigator.clipboard.writeText(url);
			setTimeout(() => {
				setCopied({
					...copied,
					status: false,
				});
			}, 2000);
		}
	};
	return (
		<div className='flex flex-col gap-1 overflow-y-auto max-h-60'>
			{allArticles.map((item, i) => (
				<div
					className='link_card'
					onClick={() => setArticle(item)}
					key={i}>
					<button
						type={'button'}
						onClick={(e) => handleCopy(item?.url, e)}>
						<img
							src={copied.value === item.url ? tick : copy}
							alt='copy'
						/>
					</button>
					<p className=' truncate flex-1 font-satoshi text-sm text-blue-500'>
						{item.url}
					</p>
				</div>
			))}
		</div>
	);
}
