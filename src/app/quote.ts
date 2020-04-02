export class Quote {
    showAuthor: boolean;
    constructor(public username: string, public userquote: string, public author: string, public quotedate?: Date){
        this.showAuthor=false;
    }
}
