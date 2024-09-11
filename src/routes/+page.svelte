<script>
    import { onMount } from 'svelte';
    import '@fontsource/raleway';

    export let data;

    let isOpen;

    $: ({ quote, menuItems, isOpen } = data);
</script>

<svelte:head>
    <title>SvelteKit Streaming Demo</title>
</svelte:head>

<header>
    <h1>StreamCo</h1>
    {#await quote}
        <p>Loading quote...</p>
    {:then quote}
        <p class="quote">{quote}</p>
    {:catch error}
        <p class="error">Failed to load quote: {error.message}</p>
    {/await}
</header>

<main>
    <nav>
        <ul>
            {#await menuItems}
                <li>Loading menu items...</li>
            {:then items}
                {#each items as item}
                    <li><a href={item.url}>{item.text}</a></li>
                {/each}
            {:catch error}
                <li class="error">Failed to load menu items: {error.message}</li>
            {/await}
        </ul>
    </nav>
    <section>
        <h2>Welcome to StreamCo</h2>
        <p>We are a fictional company demonstrating SvelteKit's streaming capabilities.</p>
        <p>Our innovative solutions are transforming industries across the globe.</p>
    </section>
</main>

<footer>
    <p>&copy; 2024 StreamCo. All rights reserved.</p>
    {#await isOpen}
        <p>Checking if we're open...</p>
    {:then open}
        <p class="status">We are currently {open ? 'OPEN' : 'CLOSED'}</p>
    {:catch error}
        <p class="error">Failed to check open status: {error.message}</p>
    {/await}
</footer>

<style>
    :global(body) {
        font-family: 'Raleway', sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    header {
        background-color: #3498db;
        color: white;
        padding: 1rem;
        text-align: center;
    }

    h1 {
        margin: 0;
        font-size: 2.5rem;
    }

    .quote {
        font-style: italic;
        margin-top: 0.5rem;
    }

    main {
        display: flex;
        flex: 1;
    }

    nav {
        width: 200px;
        background-color: #f1f1f1;
        padding: 1rem;
    }

    nav ul {
        list-style-type: none;
        padding: 0;
    }

    nav li {
        margin-bottom: 0.5rem;
    }

    nav a {
        text-decoration: none;
        color: #333;
    }

    nav a:hover {
        color: #3498db;
    }

    section {
        flex: 1;
        padding: 1rem;
    }

    footer {
        background-color: #34495e;
        color: white;
        text-align: center;
        padding: 1rem;
    }

    .status {
        font-weight: bold;
    }

    .error {
        color: red;
    }
</style>