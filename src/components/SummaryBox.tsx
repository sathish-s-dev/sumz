// import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery.js';
import loader from '../assets/loader.svg';
// import { SerializedError } from '@reduxjs/toolkit';
import { ArticleState } from '../summary.js';

interface SummaryProps {
	article: ArticleState;
	isLoading?: boolean;
	error?: any | undefined;
}

export const SummaryBox = ({ article, isLoading, error }: SummaryProps) => {
	console.log(article);
	return (
		<div className='mt-10 flex flex-col gap-3 summ'>
			{isLoading ? (
				<img
					src={loader}
					alt={'Loading...'}
					className='w-20 h-20 object-contain'
				/>
			) : error ? (
				<p className='font-inter font-medium text-red-400'>
					Well that wasn't supposed to happen...
					<br /> {error?.data?.error}
				</p>
			) : (
				<>
					<h2 className='text-xl'>
						Article <span className='blue_gradient'>Summary</span>
					</h2>
					<div className='summary_box'>{article?.summary}</div>
				</>
			)}
		</div>
	);
};
