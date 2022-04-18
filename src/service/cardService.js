
import cardDataDum from "../asset/dummy/cardDataDum";

export class CardService {

    static randomPicURL = "https://random.imagecdn.app/500/550";
    static numberOfPosts = 500;

    static  getCard = /*async*/ () => {

        const img = this.randomPicURL;
        
        // let randomID = Math.floor(Math.random() * (this.numberOfPosts + 1));

        // let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        //     .then((response) =>response.json())

        // console.log('res : ' + response)

        return {
            img,
            title : cardDataDum.title,
            text : cardDataDum.text,
        }; 
    };

}
