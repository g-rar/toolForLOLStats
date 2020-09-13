export abstract class HTMLFetcher{
    fetch: (url: string) => Promise<HTMLDocument>
}

export enum HTMLFetcherError {
    HTML_PARSING_ERROR = "HTMLFetcherError.HTML_PARSING_ERROR",
    FETCH_ERROR = "HTMLFetcherError.FETCH_ERROR"
}