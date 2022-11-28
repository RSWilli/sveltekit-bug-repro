export let bar: string

const sleep = (ms: number) => new Promise((fulfil) => setTimeout(fulfil, ms))

async function resolveFoo() {
    await sleep(1000)
    bar = 'bar'
}

await resolveFoo()