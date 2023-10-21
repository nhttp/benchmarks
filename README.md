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
Created At : Sat Oct 21 2023, 12:34:50 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41570|45359|41142|38208|
|[hono](https://github.com/honojs/hono)|39890|41980|41545|36145|
|[fast](https://github.com/danteissaias/fast)|35481|39940|37437|29065|
|[fastro](https://github.com/fastrodev/fastro)|17373|42397|4998|4725|
|[oak](https://github.com/oakserver/oak)|11512|12121|11338|11078|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|22395|25314|21535|20336|
|[fastify](https://github.com/fastify/fastify)|13936|14950|13695|13164|
|[koa](https://github.com/koajs/koa)|9983|10821|9208|9919|
|[express](https://github.com/expressjs/express)|4038|4175|3643|4297|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|44139|45428|46736|40254|
|[hono](https://github.com/honojs/hono)|42333|46559|40142|40297|
|[nhttp](https://github.com/nhttp/nhttp)|39436|45231|37087|35990|
|[baojs](https://github.com/mattreid1/baojs)|30587|36829|32375|22557|
  



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

