<script>
	import { Button } from '$components/ui/button';
	import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '$components/ui/card';
	import { onAppend } from '$lib/observer';
	import { randomPickArray } from '$lib/rand';
	import { onMount } from 'svelte';

	let countKuru = 0;

	/**
	 * @type {HTMLImageElement}
	 */
	let chloe_gif;
	/**
	 * @type {HTMLImageElement}
	 */
	let eci_gif;
	/**
	 * @type {HTMLDivElement}
	 */
	let gif_container;

	onMount(() => {
		onAppend(gif_container, (nodes) => {
			console.log('🚀 ~ file: +page.svelte:25 ~ onAppend ~ nodes:', nodes);
			nodes.forEach((node) => {
				setTimeout(() => {
					if (node instanceof HTMLImageElement) {
						node.setAttribute('data-kuru', 'kuru');
						setTimeout(() => node.remove(), 3000);
					}
				}, 0);
			});
		});
	});

	function clickKuru() {
		countKuru++;

		const kuru_sound = new Audio(`/audio/${randomPickArray(['kururin', 'kurukuru'])}.mp3`);
		kuru_sound.volume = 0.3;
		kuru_sound.play();
		kuru_sound.addEventListener('ended', function () {
			this.remove();
		});

		const kuru_gif = randomPickArray([chloe_gif, eci_gif]).cloneNode();
		gif_container.appendChild(kuru_gif);
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

<div bind:this={gif_container} class="flex">
	<img
		class="absolute -z-10 right-full data-[kuru=kuru]:-right-full data-[kuru=kuru]:transition-all data-[kuru=kuru]:duration-1500 data-[kuru=kuru]:ease-linear"
		bind:this={chloe_gif}
		src="/img/chloe.gif"
		alt="chloe munyer-munyer kururiingg~"
	/>
	<img
		class="absolute -z-10 right-full data-[kuru=kuru]:-right-full data-[kuru=kuru]:transition-all data-[kuru=kuru]:duration-1500 data-[kuru=kuru]:ease-linear"
		bind:this={eci_gif}
		src="/img/eci.gif"
		alt="eci muter-muter kurukuruuu~"
	/>
</div>
