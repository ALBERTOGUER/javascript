class Tweet {
    content = "";

    constructor() {

    }

    addTweet(contentTwett) {

        if (contentTwett != '') {
            this.content = contentTwett;
            console.log(this.content);

            this.createTweet(this.content);
            this.addTweetlocalstorage(this.content);
        } else {

            Swal.fire({

                type: 'warning',
                title: 'Falta información',
                showConfirmButton: false,
                timer: 1000
            })
        }

    }

    createTweet(twet) {
        const li = document.createElement('li');
        li.classList = 'list-group-item rounded-pill text-break';

        const btnClose = document.createElement('button');
        btnClose.classList = 'close';

        const spanclose = document.createElement('span');
        spanclose.classList = 'badge badge-pill badge-light text-danger';

        spanclose.setAttribute = ('area-hidden', 'true');
        spanclose.textContent = 'x';

        btnClose.appendChild(spanclose);
        li.innerText = twet;
        listaTweets.appendChild(li);
        li.appendChild(btnClose);


    }

    addTweetlocalstorage(tweetls) {
        let tweets;
        tweets = this.getLocalStorage();

        tweets.push(tweetls)
        localStorage.setItem('tweets',JSON.stringify(tweets));
    }

    getLocalStorage() {
        let tweets;

        if(localStorage.getItem('tweets') === null){
            tweets=[];
        }else{
            tweets = JSON.parse(localStorage.getItem('tweets'));
        }
        return tweets;

    }

    removetweetLS(tweetD){
        let tweets = this.getLocalStorage();
        tweets.forEach(function(tweet,index){
            if(tweetD===tweet){
                tweets.splice(index,1);
                console.log(tweets);
            }
        })

        localStorage.setItem('tweets',JSON.stringify(tweets))
    }

}