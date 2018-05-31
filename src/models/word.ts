export class Word {

    constructor(public title: string, public subTitle: string, public descriptionText: string, public highFrequency: boolean){
        this.title = title;
        this.subTitle = subTitle;
        this.descriptionText = descriptionText;
        this.highFrequency = highFrequency;
    }
       
}