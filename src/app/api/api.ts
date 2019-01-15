export class ArticleCollection {
    articles: Array<Article>; 
}

export class Article {
    content: string;
    created: Date;
    htmlContent:  string;
    id: number;
    imageId: number;
    subtitle: string;
    title: string;
}