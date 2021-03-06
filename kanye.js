class Kanye {
    constructor(quote){
        this.KanyeWis = quote;
    }
    speakDestiny(){
        return this.KanyeWis;
    }
    shoutDestiny(){
        return this.KanyeWis.toUpperCase() + "!!!!!!";
    }
    refuseDestiny(){
        return this.KanyeWis + "...I recant my foolishness! SAVE ME OH LAWD!";
    }
}

var button = $('#kanyeREST');

button.on(
    {
        "click": function(){
            $.ajax(
                {
                    "url": "https://api.kanye.rest",
                    "type": "GET",
                    "data": {},
                    "dateType": "JSON"
                }
            ).done(
                function(resultJSON){
                    console.log(resultJSON);

                    let profoundWis = new Kanye(resultJSON.quote);

                    document.body.innerHTML += "<p>" + profoundWis.speakDestiny() + "</p> <br>";
                    document.body.innerHTML += "<p>" + profoundWis.shoutDestiny() + "</p> <br>";
                    document.body.innerHTML += "<p>" + profoundWis.refuseDestiny() + "</p> <br>";

                }
            ).fail(
                function(xhr, status, error){
                    console.log('there was a problem ' + error);
                }
            ).always(
                function(xhr, status){
                    console.log('request complete with status: '+ status);
                }
            )
        }
    }
)