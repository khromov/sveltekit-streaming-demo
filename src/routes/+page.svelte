<script lang="ts">
    import '@fontsource/raleway/400.css';
    import '@fontsource/raleway/700.css';

    let { data } = $props();

    let { quote, menuItems, isOpen, mainContent } = $derived(data);
</script>

<svelte:head>
    <title>SvelteKit Demo (No Streaming)</title>
</svelte:head>

<div class="page-wrapper">
    <header>
        <div class="content-container">
            <h1>StreamCo</h1>
            <div class="quote-container">
                <p class="quote">{quote}</p>
            </div>
        </div>
    </header>

    <main>
        <div class="content-container">
            <nav>
                <ul>
                    {#each menuItems as item}
                        <li><a href={item.url}>{item.text}</a></li>
                    {/each}
                </ul>
            </nav>
            <section>
                <h2>Welcome to StreamCo</h2>
                {#each mainContent as paragraph}
                    <p>{paragraph}</p>
                {/each}
            </section>
        </div>
    </main>

    <footer>
        <div class="content-container">
            <p>&copy; 2024 StreamCo. All rights reserved.</p>
            <p class="status">We are currently {isOpen ? 'OPEN' : 'CLOSED'}</p>
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
        min-height: 100px;
    }

    h1 {
        margin: 0;
        font-size: 2.5rem;
    }

    .quote-container {
        min-height: 3em;
        display: flex;
        align-items: center;
    }

    .quote {
        font-style: italic;
        margin: 0.5rem 0 0 0;
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
</style>