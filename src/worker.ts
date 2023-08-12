import { Context as HonoContext, Env as HonoEnv, Hono } from 'hono'

type Bindings = {
	R2: R2Bucket,
	PUBLIC_BUCKET_URL: string
}

// html.d.ts tells typescript that this is a normal thing to do
import indexHtml from './index.html'
import uploadHtml from './upload.html'

const app = new Hono<{ Bindings: Bindings }>()

app.get('*', async (c) => {
	return c.html(indexHtml)
})

app.post('/upload', async (c) => {
	const formdata = await c.req.formData()
	const file = formdata.get('file');

	let fileName = (Math.random() + 1).toString(36).substring(5);

	if (file instanceof File) {
		const extension = file.name.split('.').pop();
		fileName = fileName + (extension ? '.' + extension : '')

		await c.env.R2.put(fileName, file.stream(), {httpMetadata: {contentType: file.type}})

		const html = uploadHtml.replaceAll('__URLGOESHERE__', c.env.PUBLIC_BUCKET_URL + '/' + fileName)
		return c.html(html)
	}
})

app.post('/url', async (c) => {
	const formdata = await c.req.formData()
	const urlString = formdata.get('url');

	let fileName = (Math.random() + 1).toString(36).substring(5);

	if (urlString !== null) {
		const url = new URL(urlString.toString())

		const resp = await fetch(url)

		if (!resp.ok){
			return c.text("your url returned non-ok status code: " + resp.status)
		}

		const extension = url.pathname.split('.').pop();
		fileName = fileName + (extension ? '.' + extension : '')

		await c.env.R2.put(fileName, resp.body, {httpMetadata: {contentType: resp.headers.get('content-type')?.toString()}})

		const html = uploadHtml.replaceAll('__URLGOESHERE__', c.env.PUBLIC_BUCKET_URL + '/' + fileName)
		return c.html(html)
	}

	return c.text("something went wrong in your input")
})

export default app