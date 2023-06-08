<script>
    import { Card, CardContent, CardHeader, CardTitle } from '$components/ui/card';
</script>

<div class="top-0 bottom-0 left-0 right-0 absolute m-auto max-w-[640px] max-h-[480px]">
    <Card class="items-center bg-purple-500 bg-opacity-60 text-background">
        <CardHeader class="items-center">
            <CardTitle tag="h1" class="text-4xl font-bold font-comfortaa tracking-wide"
                >About</CardTitle
            >
        </CardHeader>
        <CardContent class="flex flex-col items-center space-y-7 font-open-sans text-center">
            <span>
                Highly inspired by
                <a class="link" href="https://kurukuru.morian.icu/">morian's kurukuru</a>
                and
                <a class="link" href="https://nyanpass.com/">nyanpass</a>.<br />

                Cute twirling Chloe and Elaine made by
                <a class="link" href="https://twitter.com/Tsuki_ri">@Tsuki_ri</a>.<br />

                Beautiful background image is a photo by
                <a
                    class="link"
                    href="https://unsplash.com/@jayphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >Justin Wolff</a
                >
                on
                <a
                    class="link"
                    href="https://unsplash.com/photos/7a4F2FW32z4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                    >Unsplash</a
                >.<br />
                And this site is created and maintained by
                <a href="https://twitter.com/hufuhufu_" class="link">@hufuhufu</a>.
            </span>

            <CardTitle tag="h1" class="text-4xl font-bold font-comfortaa tracking-wide"
                >Change Log</CardTitle
            >
            <div>
                <span class="text-2xl font-bold font-comfortaa tracking-wide">v0.1.0</span>
                <ul>
                    <li>Basic functionality of the kurukuru button (Counter, Sound, Animation).</li>
                    <li>Known issue:</li>
                    <li>Chloe's gif isn't transparent.</li>
                    <li>Futute plan:</li>
                    <li>Globally synchronized kurukuru counter. Just like nyanpass.</li>
                </ul>
            </div>

            <a href="/" class="link">Go back kururing</a>
        </CardContent>
    </Card>
</div>
