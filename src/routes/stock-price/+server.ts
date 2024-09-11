import { error } from '@sveltejs/kit';

export function GET() {
    const stream = new ReadableStream({
        start(controller) {
            function pushPrice() {
                if (controller.desiredSize === 0) {
                    return;
                }
                const price = (Math.random() * (17.0 - 15.0) + 15.0).toFixed(2);
                controller.enqueue(`data: ${price}\n\n`);
                setTimeout(pushPrice, 1000); // Send a new price every second
            }
            pushPrice();
        },
        cancel() {
        }
    });

    return new Response(stream, {
        headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        }
    });
}