import { useEffect } from 'react';

export default function CoinQuest() {
	useEffect(() => {
		document.title = 'Coin Quest';
	}, []);

	return (
		<>
			<div className="flex flex-col items-center gap-4 px-4 py-20 border-y min-h-[calc(100dvh-197px)]">
				<h2 className="text-3xl font-bold text-center">Coin Quest</h2>
				<iframe
					src="https://mukund1606.github.io/vibe-quest/coin-quest"
					id="game-iframe"
					title="Coin Quest"
					className="h-[75vh] aspect-square"
				></iframe>
			</div>
		</>
	);
}
