import { URL_PROXY } from './bib_config'

export function random_id(): string {
    return Math.random().toString().substring(2, 12)
}

export function encodeQueryData(data: {[key: string]: (string | string[] | number)}) {
    const ret: string[] = []    
    for (const key of Object.getOwnPropertyNames(data)) {
        const val = data[key]
        const valv = !Array.isArray(val) ? [val] : val

        for (const vvv of valv) {
            ret.push(encodeURIComponent(key) + '=' + encodeURIComponent('' + vvv))
        }
    }
    return ret.join('&')
}

export function urlproxy(url: string) {
    if (URL_PROXY) {
        return URL_PROXY + '?url=' + encodeURIComponent(url)
    }
    return url
}

export function normalize_whitespace(data: string): string {
    return data.replace(/\s+/g, ' ')
}

export function remove_puctuation(data: string): string {
    //return data.replace(/[.,\/#!$%\^&\*;:{}=\-_~()"'\\\[\]]/gmi, '')
    return data.replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/gmi, '')
}
