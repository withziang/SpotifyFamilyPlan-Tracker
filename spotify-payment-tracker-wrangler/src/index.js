import { Hono } from 'hono';

const app = new Hono();

// Write endpoint
app.put('/kv/values/:cacheKey', async (c) => {
  const cacheKey = c.req.param('cacheKey');
  const { value, expirationTtl = 3600 } = await c.req.json();

  // If value is a JSON, stringify it
  // KV put() accepts only strings, ArrayBuffers, ArrayBufferViews, and ReadableStreams as values.
  let cacheValue = value;
  try {
    cacheValue = JSON.stringify(value);
  } catch (e) {}

  // Write the value to the KV namespace
  await c.env.KV.put(cacheKey, cacheValue, { expirationTtl });

  return c.json({ success: true });
});

// Read endpoint
app.get('/kv/values/:cacheKey', async (c) => {
  const cacheKey = c.req.param('cacheKey');

  // Read the value from the KV namespace
  const result = await c.env.KV.get(cacheKey);

  try {
    // Try to parse the result as JSON
    const parsedResult = JSON.parse(result);
    return c.json({ result: parsedResult });
  } catch (e) {
    // If parsing fails, return the result as is
    return c.json({ result });
  }
});

export default app;
