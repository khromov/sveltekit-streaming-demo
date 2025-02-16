<script lang="ts">
    import '@fontsource/raleway/400.css';
    import '@fontsource/raleway/700.css';

    let { data } = $props();
    let { quote, menuItems, isOpen } = $derived(data);

    interface Contact {
        id: number;
        name: string;
        email: string;
    }

    let nextId = $state(4);
    let contacts = $state<Contact[]>([
        { id: 1, name: "Alice Johnson", email: "alice@example.com" },
        { id: 2, name: "Bob Smith", email: "bob@example.com" },
        { id: 3, name: "Carol Wilson", email: "carol@example.com" }
    ]);

    function addContact() {
        const newContact = {
            id: nextId,
            name: `New Contact ${nextId}`,
            email: `contact${nextId}@example.com`
        };
        contacts = [newContact, ...contacts];
        nextId++;
    }

</script>

<svelte:head>
    <title>Keyed vs Unkeyed Demo</title>
</svelte:head>

<div class="page-wrapper">
    <header>
        <div class="content-container">
            <h1>Contact List Demo</h1>
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
                <div class="controls">
                    <button onclick={addContact}>Add New Contact</button>
                </div>

                <div class="lists-container">
                    <div class="list" id="unkeyed">
                        <h2>Unkeyed Loop</h2>
                        <div class="contacts">
                            {#each contacts as contact}
                                <div class="contact">
                                    <strong>{contact.name}</strong>
                                    <span>{contact.email}</span>
                                </div>
                            {/each}
                        </div>
                    </div>

                    <div class="list" id="keyed">
                        <h2>Keyed Loop</h2>
                        <div class="contacts">
                            {#each contacts as contact (contact.id)}
                                <div class="contact">
                                    <strong>{contact.name}</strong>
                                    <span>{contact.email}</span>
                                </div>
                            {/each}
                        </div>
                    </div>
                </div>
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

    /* Additional styles for the contact lists */
    .controls {
        margin-bottom: 2rem;
    }

    button {
        padding: 0.5rem 1rem;
        background-color: #3498db;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    button:hover {
        background-color: #2980b9;
    }

    .lists-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .list {
        background-color: #f8f9fa;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    h2 {
        color: #2c3e50;
        margin-top: 0;
        margin-bottom: 1rem;
        font-size: 1.25rem;
    }

    .contacts {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .contact {
        background-color: white;
        padding: 1rem;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        transition: background-color 0.3s ease;
    }

    .contact strong {
        display: block;
        color: #2c3e50;
        margin-bottom: 0.25rem;
    }

    .contact span {
        color: #666;
        font-size: 0.9rem;
    }
</style>