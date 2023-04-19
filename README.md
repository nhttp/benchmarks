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
Created At : Wed Apr 19 2023, 12:41:09 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|42910|45426|42190|41113|
|[hono](https://github.com/honojs/hono)|40868|43956|41638|37010|
|[fast](https://github.com/danteissaias/fast)|39994|43876|37196|38910|
|[fastro](https://github.com/fastrodev/fastro)|35244|42079|36642|27012|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|44820|47587|44907|41966|
|[fastify](https://github.com/fastify/fastify)|35229|37000|35098|33590|
|[koa](https://github.com/koajs/koa)|22036|23447|20673|21989|
|[express](https://github.com/expressjs/express)|7742|8102|7031|8092|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|69906|67439|71621|70659|
|[hono](https://github.com/honojs/hono)|67951|67895|69111|66847|
|[elysia](https://github.com/elysiajs/elysia)|66317|67959|65178|65814|
|[baojs](https://github.com/mattreid1/baojs)|60577|68098|51861|61771|
  



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

