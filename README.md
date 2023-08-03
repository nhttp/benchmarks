## Runtime JS/TS benchmarks.

> Focus on framework features.

Example code for benchmark.
```ts
// GET /
framework.get("/", (req, res) => {
  res.send("home");
});

// GET /blog/99?title=bench (params and queryParams)
framework.get("/blog/:id", (req, res) => {
  const data = `${req.params.id} ${req.query.title}`;
  res.send(data);
});

// GET /api/user (set header & send json)
framework.get("/api/user", (req, res) => {
  res.setHeader("x-powered-by", "bench");
  res.json({ user: "john" });
});
```

## Output
Created At : Thu Aug 03 2023, 12:42:58 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|36039|38930|35057|34130|
|[hono](https://github.com/honojs/hono)|34874|37808|34938|31877|
|[fastro](https://github.com/fastrodev/fastro)|13435|34036|3235|3034|
|[oak](https://github.com/oakserver/oak)|9542|10075|9550|9000|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|16889|18434|16289|15943|
|[fastify](https://github.com/fastify/fastify)|13876|14196|13720|13713|
|[koa](https://github.com/koajs/koa)|8732|9052|8202|8942|
|[express](https://github.com/expressjs/express)|3735|3788|3532|3886|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41357|40909|40974|42188|
|[elysia](https://github.com/elysiajs/elysia)|37741|39257|38190|35777|
|[hono](https://github.com/honojs/hono)|36943|39349|36628|34853|
|[baojs](https://github.com/mattreid1/baojs)|33733|38138|29193|33868|
  



## Usage

```bash
git clone https://github.com/herudi/deno_benchmark.git
cd deno_benchmark

// for_all
deno task bench

// for_single
deno task bench framework_name
```

## License

[MIT](LICENSE)

