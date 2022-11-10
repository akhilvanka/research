import Document, {Head, Html, Main, NextScript} from 'next/document';

export default class BlogDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/icon-192x192.png" />
					<meta name="theme-color" content="#D1C9BC" />
					<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin='true'/>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
					<link
						href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;500&display=swap"
						rel="stylesheet"
						crossOrigin='true'
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
