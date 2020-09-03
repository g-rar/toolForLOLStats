export abstract class HTMLFetcher{
    fetch: (url: string) => Promise<HTMLDocument>
}

export enum HTMLFetcherError {
    INVALID_HTML = "HTMLFetcherError.INVALID_HTML",
}