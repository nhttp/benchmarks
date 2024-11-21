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
Created At : Thu Nov 21 2024, 12:52:30 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|49081|52905|48097|46241|
|[hono](https://github.com/honojs/hono)|48583|51612|49712|44426|
|[fast](https://github.com/danteissaias/fast)|48250|53486|45647|45618|
|[oak](https://github.com/oakserver/oak)|26080|27013|25506|25722|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|24886|31620|22997|20042|
|[fastify](https://github.com/fastify/fastify)|17232|17863|17089|16745|
|[koa](https://github.com/koajs/koa)|14495|15501|13434|14550|
|[express](https://github.com/expressjs/express)|6465|6631|6083|6680|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|67512|81175|63501|57859|
|[nhttp](https://github.com/nhttp/nhttp)|60063|81933|49055|49200|
|[hono](https://github.com/honojs/hono)|58981|76047|49700|51196|
|[baojs](https://github.com/mattreid1/baojs)|35358|41600|30539|33936|
  



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

