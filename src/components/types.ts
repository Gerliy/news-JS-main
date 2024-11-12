export type NewsData = [{
    urlToImage: string,
    author: string,
    source: {
        name: string,
    }
    publishedAt: string,
    title: string,
    description: string,
    url: string,
    articles?: any[],
}]

export type SourcesData = [{
    name: string,
    id: string,
    sources?: any[],
}]

export type ResObject =  {
    endpoint: string, options?: Options
}

export type Res = {
    ok:boolean, 
    status: number, 
    statusText: string,
    json: () => void
 }

 export type Options = {
    apiKey?: string;
    sources?: string,
}