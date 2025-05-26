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
Created At : Mon May 26 2025, 1:02:48 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|59742|70706|54756|53764|
|[hono](https://github.com/honojs/hono)|55833|57660|61679|48160|
|[fast](https://github.com/danteissaias/fast)|53954|62321|48337|51205|
|[oak](https://github.com/oakserver/oak)|27853|28680|27690|27188|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|40195|48490|36566|35529|
|[fastify](https://github.com/fastify/fastify)|24628|24202|25896|23787|
|[koa](https://github.com/koajs/koa)|17527|18027|17365|17188|
|[express](https://github.com/expressjs/express)|6379|6489|6155|6493|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|83031|99426|74961|74707|
|[nhttp](https://github.com/nhttp/nhttp)|70305|93816|59611|57489|
|[hono](https://github.com/honojs/hono)|66129|73948|64771|59669|
|[baojs](https://github.com/mattreid1/baojs)|48919|52819|47312|46626|
  



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

