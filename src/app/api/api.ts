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

export class Menu {
    menuEntries: Array<MenuEntry>;
}

export class MenuEntry {
    name:	string
    slug:	string
}

export class Page {
    authorId: string;
    content: string;
    created: Date;
    htmlContent: string;
    id:	number;
    name: string;
    order: number;
    published: boolean;
    slug: string;
}
