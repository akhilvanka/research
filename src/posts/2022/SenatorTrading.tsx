import { Post } from '../Post';
import { SenateTable } from '../../client/components/senate_table';
import { SenateGraph } from '../../client/components/senate_graph';

export class SenatorTrading extends Post {
	public name = 'The Senate Conundrum';
	public slug = 'sentate-trading';
	public date = new Date('31 Oct 2022');
	public hidden = false;
	public excerpt = 'How I found Senators trading and used it to build a algorithmic trading bot';
	public readerMode = true;
	public keywords = ['stocks', 'senate', 'senators', 'trading', 'algorithmic'];

	public render() {
		return (
			<>
				<h1>Senate Trading Dashboard</h1>
				<p>
						As a part of my internship at... Hah, I wish I had an internship for all this. If anybody wants
					to offer me one, I am happy to accept. It&apos;s been super difficult to get this program off the ground
					but finally, I have something that can be shown. BTW, if you dont want to see me rant and talk, then 
					go ahead and press the Δ button on the top left. It will hide all the text and show you the dashboard.
				</p>
				<h2>Table of Transactions</h2>
				<SenateTable />
				<p>
						Nice, if you&apos;re reading this then you want to hear me complain. So, as you can see, above is a table
					off all the recent stock transactions that have been filed with the Committee of Ethics. So the table
					is divided by the actual transaction date, when it was filed and by whom, and some other stuff like
					what the transaction was, the ticker, and the reported price range. 
				</p>
				<p>
						What happens is I made a mistake trying to make this website in Next.js. That means all this data processing 
					has to be done somewhere else, and then fetched. So, as the genius I am, thats what I did. I made a python 
					API that does two things. First, it fetches the data from the Senate website, and then it processes it. Currently
					I am lazy, so CSV is all it is. The second part is it runs through the most recent transactions, and then lists 
					responds with a JSON of all the data. Then it&apos;s really, really easy to handle it client side.
				</p>
				<h2>Portolfio Values</h2>
				<SenateGraph />
				<p>
					Okay, my favorite not-favorite part. This is a plotly graph of the value of the senator&apos;s portfolios. I took the all-time data from <a className='text-neutral-700 no-underline hover:text-[#D1C9BC]' href='yahoo.finance.com'>yahoo.finance</a> and 
					then I used the data from the Senate website to calculate the value of the portfolios. Now, you might be asking. Is this accurate? Well, good question. No. It&apos;s not. Don't even think about it.
					Not only is it making soooo many assumptions, it&apos;s also could just be plain wrong. But, it&apos;s a good way to see how the senators are doing. I mean, I guess. I don&apos;t know. I&apos;m not a financial advisor.
					I mentioned assumptions, so here they are. 
				</p>
				<p className='text-[#D1C9BC]'>
					That all the data is reported accurately. <br />
					That they are only buying and selling. <br />
					Exchange and shorts are not considered. <br />
					That the ticker is publicly traded stock on the NASDAQ. <br />
					With the broad price range given, it&apos;s the lower value <br />
				</p>
				<p>
					There&apos;s a lot more, but those are the main ones. But hey, at least it's something. It was fun while I was making it, and it&apos;s only the starting.
					If you want to see the code for anything on this website, go swing by my github at <a className='text-neutral-700 no-underline hover:text-[#D1C9BC]' href='https://github.com/akhilvanka'>@akhilvanka</a>.
					That&apos;s it for now. I&apos;ll be back with more soon.
				</p>
			</>
		);
	}
}
