<script>
    import { Button } from '$components/ui/button';
    import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from '$components/ui/card';
    import { onAppend } from '$lib/observer';
    import { createRNG } from '$lib/rand';
    import { onMount } from 'svelte';

    let countKuru = 0;

    // 50:50 chance of triggering kurukuru or kururin,
    // with a bit of chance of triggering one of them 4 times in a row at most
    const soundRNG = createRNG([0, 0, 1, 1]);
    const gifRNG = createRNG([0, 0, 1, 1]);

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

    /**
     * @type {HTMLImageElement[]}
     */
    let gifArray;

    const soundArray = ['kururin', 'kurukuru'];

    onMount(() => {
        gifArray = [chloe_gif, eci_gif];

        onAppend(gif_container, (nodes) => {
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

        const kuru_sound = new Audio(`/audio/${soundArray[soundRNG()]}.mp3`);
        kuru_sound.volume = 0.3;
        kuru_sound.play();
        kuru_sound.addEventListener('ended', function () {
            this.remove();
        });

        const kuru_gif = gifArray[gifRNG()].cloneNode();
        gif_container.appendChild(kuru_gif);
    }
</script>

<div class="top-0 bottom-0 left-0 right-0 absolute m-auto max-w-[640px] max-h-[480px]">
    <Card class="items-center bg-purple-500 bg-opacity-60">
        <CardHeader class="items-center">
            <CardTitle
                tag="h1"
                class="text-background text-4xl font-bold font-comfortaa tracking-wide"
                >Kuru:Memories</CardTitle
            >
            <CardDescription class="text-background font-open-sans"
                >Just some vtuber doin the kurukuru</CardDescription
            >
        </CardHeader>
        <CardContent class="flex flex-col items-center space-y-7">
            <h1 class="text-7xl font-extrabold text-purple-600 text-stroke font-nunito">
                {countKuru}
            </h1>
            <Button on:click={clickKuru} class="text-purple-100">KURUKURU</Button>
        </CardContent>
		<CardFooter class="text-background mt-10 p-1 px-4">
			<span>v0.1.0-beta.1</span>
			<a class="ml-3 link" href="/about">About</a>
		</CardFooter>
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

<style>
    @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Nunito:wght@700&family=Open+Sans&display=swap');
</style>
