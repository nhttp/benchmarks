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
Created At : Sun Sep 15 2024, 12:53:07 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[hono](https://github.com/honojs/hono)|48209|51613|48786|44228|
|[nhttp](https://github.com/nhttp/nhttp)|48177|52187|47220|45123|
|[fast](https://github.com/danteissaias/fast)|47259|50718|44157|46901|
|[oak](https://github.com/oakserver/oak)|27088|27933|26609|26723|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|25120|31889|22895|20577|
|[fastify](https://github.com/fastify/fastify)|16634|17081|16551|16270|
|[express](https://github.com/expressjs/express)|6302|6466|5941|6498|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[elysia](https://github.com/elysiajs/elysia)|66121|79379|70587|48397|
|[hono](https://github.com/honojs/hono)|56283|73231|53401|42217|
|[nhttp](https://github.com/nhttp/nhttp)|56094|76493|49799|41991|
|[baojs](https://github.com/mattreid1/baojs)|35289|40707|35536|29624|
  



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

