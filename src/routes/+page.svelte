<script>
    import '@fontsource/raleway/400.css';
    import '@fontsource/raleway/700.css';

    export let data;

    let isOpen;

    $: ({ quote, menuItems, isOpen, mainContent } = data);
</script>

<svelte:head>
    <title>SvelteKit Streaming Demo</title>
</svelte:head>

<div class="page-wrapper">
    <header>
        <div class="content-container">
            <h1>StreamCo</h1>
            <div class="quote-container">
                {#await quote}
                    <p class="quote placeholder">Loading inspiring quote...</p>
                {:then quote}
                    <p class="quote">{quote}</p>
                {:catch error}
                    <p class="quote error">Failed to load quote: {error.message}</p>
                {/await}
            </div>
        </div>
    </header>

    <main>
        <div class="content-container">
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
                {#await mainContent}
                    <p>Loading content...</p>
                {:then content}
                    {#each content as paragraph}
                        <p>{paragraph}</p>
                    {/each}
                {:catch error}
                    <p class="error">Failed to load content: {error.message}</p>
                {/await}
            </section>
        </div>
    </main>

    <footer>
        <div class="content-container">
            <p>&copy; 2024 StreamCo. All rights reserved.</p>
            {#await isOpen}
                <p>Checking if we're open...</p>
            {:then open}
                <p class="status">We are currently {open ? 'OPEN' : 'CLOSED'}</p>
            {:catch error}
                <p class="error">Failed to check open status: {error.message}</p>
            {/await}
        </div>
    </footer>
</div>

<style>
    :global(body) {
        font-family: 'Raleway', sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .page-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .content-container {
        max-width: 800px;
        width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
    }

    header {
        background-color: #3498db;
        color: white;
        padding: 1rem 0;
    }

    header .content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100px; /* Adjust this value as needed */
    }

    h1 {
        margin: 0;
        font-size: 2.5rem;
    }

    .quote-container {
        min-height: 3em; /* Adjust this value based on your expected quote length */
        display: flex;
        align-items: center;
    }

    .quote {
        font-style: italic;
        margin: 0.5rem 0 0 0;
    }

    .quote.placeholder {
        color: rgba(255, 255, 255, 0.7);
    }

    main {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    main .content-container {
        display: flex;
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
        padding: 1rem 0;
    }

    .status {
        font-weight: bold;
    }

    .error {
        color: red;
    }
</style>