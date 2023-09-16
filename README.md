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
Created At : Sat Sep 16 2023, 12:34:33 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|64272|68258|63617|60941|
|[hono](https://github.com/honojs/hono)|61182|66797|62067|54683|
|[fast](https://github.com/danteissaias/fast)|56406|67500|50125|51593|
|[fastro](https://github.com/fastrodev/fastro)|25893|64937|6215|6528|
|[oak](https://github.com/oakserver/oak)|18517|19520|18489|17542|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44747|47987|44103|42150|
|[fastify](https://github.com/fastify/fastify)|34596|35350|34608|33830|
|[koa](https://github.com/koajs/koa)|21466|22516|20208|21673|
|[express](https://github.com/expressjs/express)|7331|7566|6732|7694|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|63952|60453|65480|65922|
|[hono](https://github.com/honojs/hono)|62420|57933|64680|64646|
|[elysia](https://github.com/elysiajs/elysia)|59599|59591|57320|61885|
|[baojs](https://github.com/mattreid1/baojs)|49123|56231|40094|51045|
  



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

