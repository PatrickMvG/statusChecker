import {readFile} from 'node:fs/promises'
import { lookup } from 'node:dns/promises';

const webseiten = JSON.parse(await readFile("./webseiten.json", "utf-8"))

webseiten.forEach(async (element) => {
    console.log(element.url)
    const urlObj = new URL(element.url)
    const startTime = new Date().getTime()
    const [resp, dnsResult] = await Promise.all([
        fetch(element.url),
        lookup(urlObj.hostname)
    ])
    const endTime = new Date().getTime()
    const status = resp.status
    const url = resp.url
    const heute = new Date().toLocaleDateString()
    const ip = dnsResult.address


    console.log(status, url, heute, endTime - startTime + "ms", ip);
    
});