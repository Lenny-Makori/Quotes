export class Quote {
    showAuthor: boolean;
    constructor(public username: string, public userquote: string, public author: string){
        this.showAuthor=false;
    }
}
