<script lang="ts">
    let { children } = $props();
    import { RenderScan } from 'svelte-render-scan';
</script>

<RenderScan />

{@render children()}