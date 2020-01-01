/*
- notes would be scanned for new messages until last saved message is found. If no messages saved present the option to scrape all past notes.
- Parse note into: title, sender, id, time.
- format data into something useful (will be converted to json)
*/
var inbox = {
    "FlyingFox123" : { //username
        "Did you know?" : {} //array of replies under the same title indexed by id... wait index won't work in json. I guess a dictionary is in order.
    }
}
inbox["FlyingFox123"]["Did You know?"][9001337] = { 
    id : 9001337,
    title : "Did you know?", //may ignore RE: unless I find it useful for creating more accurate threading.
    message : "Foxes can fly", //may be blank if message was never opened for the script, will then be retrieved and stored.
    time : "Apr 28th, 2018, 12:40 AM"

}
/*
There would also be an outbox containing the responses in the same format. Response data would be saved when submitted.
Conversations would be threaded together by combining the inbox and outbox sets naturually sorting them in order by id.
- performance could be an issue with json conversion on large message database.
Having the js object persist for the entire session would be helpful (likely needs to be an extension) and storing data in chunks by date or something could also help.
- data security? I'm not personally too concerned, but I would be storing personal messages in plain text, though only acessible by the script/extension. 
*/

