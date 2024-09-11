# SvelteKit Streaming Demo

This project demonstrates the streaming capabilities of SvelteKit, showcasing how different parts of a web page can be loaded progressively.

![Screenshot 2024-09-11 at 22 05 53](https://github.com/user-attachments/assets/34af541c-d3ae-487a-af65-2324fc167e8c)

## Getting Started

1. Clone the repository and set the correct Node.js version (22) or `nvm use` to use the correct version.
2. Install the dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

# Streaming Demonstration

To see the streaming in action, you can use cURL to fetch the page content:

```bash
curl -N -H "Accept: text/html" http://localhost:5173/streaming
```

This command will show you how different parts of the page are streamed in over time.
