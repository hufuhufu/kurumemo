<script>
	import { Button } from '$components/ui/button';
	import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '$components/ui/card';
	import { randomPickArray } from '$lib/rand';

	let countKuru = 0;

	function clickKuru() {
		countKuru++;

		const kuru_sound = new Audio(`/audio/${randomPickArray(['kururin', 'kurukuru'])}.mp3`);
        kuru_sound.volume = 0.3;
		kuru_sound.play();
		kuru_sound.addEventListener('ended', function () {
			this.remove();
		});
	}
</script>

<div class="top-0 bottom-0 left-0 right-0 absolute m-auto max-w-[640px] max-h-[480px]">
	<Card class="items-center bg-purple-500 bg-opacity-60">
		<CardHeader class="items-center">
			<CardTitle tag="h3" class="text-3xl">Kuru:Memories</CardTitle>
			<CardDescription class="text-card-foreground"
				>It's Herta' kurukuru, but with a twist!</CardDescription
			>
		</CardHeader>
		<CardContent class="flex flex-col items-center space-y-7">
			<h1 class="text-4xl">{countKuru}</h1>
			<Button on:click={clickKuru} class="text-purple-50">KURUKURU</Button>
		</CardContent>
	</Card>
</div>
