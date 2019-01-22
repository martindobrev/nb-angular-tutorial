export class ArticleCollection {
    articles: Array<Article>; 
}

export class Article {
    content: string;
    created: Date;
    featured: boolean;
    htmlContent:  string;
    id: number;
    imageId: number;
    subtitle: string;
    title: string;
}