export abstract class HTMLFetcher{
    fetch: (url: string) => Promise<HTMLDocument>
}

export enum HTMLFetcherError {
    HTML_PARSING_ERROR = "HTMLFetcherError.HTML_PARSING_ERROR",
    HTTP_ERROR = "HTMLFetcherError.HTTP_ERROR"
}