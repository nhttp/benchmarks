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
Created At : Tue Jul 04 2023, 12:53:56 AM

Created By : [bot_ci](https://github.com/herudi/deno_benchmarks/commits?author=github-actions%5Bbot%5D)


### Deno
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|35823|37400|35585|34484|
|[hono](https://github.com/honojs/hono)|34926|36481|35385|32913|
|[fastro](https://github.com/fastrodev/fastro)|27361|35641|23244|23197|
|[oak](https://github.com/oakserver/oak)|10236|10814|10267|9626|
  


### Node
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[fastify](https://github.com/fastify/fastify)|13591|13899|13552|13321|
|[nhttp](https://github.com/nhttp/nhttp)|10207|10267|10053|10301|
|[koa](https://github.com/koajs/koa)|8417|8591|8021|8638|
|[express](https://github.com/expressjs/express)|3551|3609|3373|3672|
  


### Bun
|Name|AVG|GET /|GET /blog/:id|GET /api/user|
|----|----|----|----|----|
|[nhttp](https://github.com/nhttp/nhttp)|41954|40450|42105|43306|
|[elysia](https://github.com/elysiajs/elysia)|41783|44648|43347|37354|
|[hono](https://github.com/honojs/hono)|38781|42300|37918|36126|
|[baojs](https://github.com/mattreid1/baojs)|33800|38034|27441|35924|
  



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

