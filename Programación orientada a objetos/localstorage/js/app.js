const listaTweets = document.getElementById('lista-tweets');
let tweettodelete = '';
eventListener();

function eventListener() {
    document.querySelector('#formulario').addEventListener('submit', addtweets);
    listaTweets.addEventListener('click', removeTweet);
    document.addEventListener('DOMContentLoaded',LocalStorageReady)
}

let tweet = new Tweet();

function addtweets() {
    let contentTweet = document.getElementById('tweet').value.trim();
    tweet.addTweet(contentTweet);

    document.getElementById('tweet').value='';
}

function removeTweet(event) {
    event.preventDefault();

    if (event.target.tagName === 'SPAN') {

        tweettodelete = event.target.parentElement.parentElement.textContent.slice(0, -1);
        console.log(tweettodelete);
        Swal.fire({
            title: 'Advertencia',
            text: `Se eliminará el tweet"${tweettodelete}"`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!'
        }).then((result) => {
            if (result.value) {
                event.target.parentElement.parentElement.remove();
                tweet.removetweetLS(tweettodelete);

                Swal.fire({

                    type: 'success',
                    title: 'Tweet eliminado',
                    showConfirmButton: false,
                    timer: 1000
                })


            }
        })
    }
}

function LocalStorageReady(){
    let tweets = tweet.getLocalStorage();

    tweets.forEach(function(tweetl){
        tweet.createTweet(tweetl)
    });

}


