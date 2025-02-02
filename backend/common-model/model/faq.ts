export class Faq{
    question : string
    answer : string
    language:string

    constructor(question:string , answer:string , language:string){
        this.answer = answer;
        this.language = language;
        this.question = question
    }
}