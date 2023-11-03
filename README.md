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
Created At : Fri Nov 03 2023, 12:36:38 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|43556|44274|43449|42945|
|[hono](https://github.com/honojs/hono)|39736|42280|39640|37288|
|[fast](https://github.com/danteissaias/fast)|35474|42022|37854|26546|
|[fastro](https://github.com/fastrodev/fastro)|16275|40064|4219|4543|
|[oak](https://github.com/oakserver/oak)|12730|13477|12648|12065|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|23618|28166|22173|20515|
|[fastify](https://github.com/fastify/fastify)|15483|16515|15325|14608|
|[koa](https://github.com/koajs/koa)|11383|12161|10696|11293|
|[express](https://github.com/expressjs/express)|4390|4571|4055|4543|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|42217|47163|40308|39181|
|[elysia](https://github.com/elysiajs/elysia)|40789|40133|41439|40794|
|[nhttp](https://github.com/nhttp/nhttp)|38575|43496|36360|35869|
|[baojs](https://github.com/mattreid1/baojs)|26853|32543|26811|21205|
  



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

