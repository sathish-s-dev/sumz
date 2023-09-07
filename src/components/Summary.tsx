import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useLazyGetSummaryQuery } from '../services/article.ts';

import linkIcon from '../assets/link.svg';
import enter from '../assets/corner-down-left.svg';
import { BrowseHistory } from './BrowseHistory.tsx';
import { ArticleState } from '../summary.js';
import { SummaryBox } from './SummaryBox.tsx';

const Summary = () => {
	const [article, setArticle] = useState<ArticleState>({
		url: '',
		summary: '',
	});
	const [allArticles, setAllArticles] = useState<ArticleState[]>([]);

	const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

	useEffect(() => {
		const res = localStorage.getItem('articles');
		if (res) {
			const data = JSON.parse(res);
			console.log(data);
			if (data) {
				setAllArticles(data);
			}
		}
	}, []);
	console.log(allArticles);

	// const urlRef = createRef<HTMLInputElement>();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		const { data } = await getSummary({ articleUrl: article.url });
		if (data) {
			const newArticle = { ...article, summary: data.summary };
			setArticle(newArticle);
			const Articles = [...allArticles, newArticle];
			setAllArticles(Articles);
			localStorage.setItem('articles', JSON.stringify(Articles));
		}
		console.log(data);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setArticle({
			...article,
			url: e.target.value,
		});
	};

	return (
		<section className='mt-16 w-full max-w-xl'>
			<div className='flex flex-col w-full gap-2'>
				<form
					action=''
					className='relative flex justify-center items-center'
					onSubmit={handleSubmit}>
					<img
						src={linkIcon}
						alt='linkIcon'
						className='w-5 absolute left-0 my-2 ml-3'
					/>
					<input
						type='url'
						placeholder='Enter url'
						className='url_input peer'
						// ref={urlRef}
						value={article?.url}
						onChange={handleChange}
						required
					/>
					<button
						type='submit'
						className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>
						<img
							src={enter}
							alt='enter'
							className='w-4 h-4'
						/>
					</button>
				</form>
				{/* Browse history */}
				{allArticles.length > 0 ? (
					<BrowseHistory
						allArticles={allArticles}
						setArticle={setArticle}
					/>
				) : (
					''
				)}
			</div>
			{/* display result */}
			{article.summary ? (
				<SummaryBox
					article={article}
					isLoading={isFetching}
					error={error}
				/>
			) : null}
		</section>
	);
};

export default Summary;
