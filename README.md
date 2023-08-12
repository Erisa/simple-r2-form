# Simple R2 Uploader

It's a Worker serving a form that uploads to Cloudflare R2. That is all.

![](https://up.erisa.uk/firefox_2u3fyO8EEA.png)

Please use CAUTION and protect the form to prevent open uploads. No files are served within this Worker, it just takes an R2 bucket and a URL and serves it. Use R2 Public Buckets or [render](https://github.com/kotx/render)

This is not a serious project, just a small thing I needed once so I threw together. There is very little error handling or polish.

Setup:

1. Clone the repository (duh)
2. Edit `wrangler.toml` to specify a `bucket_name` and `PUBLIC_BUCKET_URL`
3. `npx wrangler deploy`
4. RECOMMENDED: Implement [Cloudflare Access](https://developers.cloudflare.com/cloudflare-on

That's all.

```
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>
```