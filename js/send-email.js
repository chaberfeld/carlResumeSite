 
// Send notice to me

// (1) Create a function to log the response from the Mandrill API
  function log(obj) {
    $('#response').text(JSON.stringify(obj));
  }

  // (2) Create a new instance of the Mandrill class with your API key
  var m = new mandrill.Mandrill('kse6A_PpBO-JMfco3HVodg');

  // (3) Create a variable for the API call parameters
  var params = {
    "message": {
        "from_email":"someone@somewhere.com",
        "to":[{"email":"chaberfeld@gmail.com"}],
        "subject": "carlResumeSite being viewed",
        "text": "auto notify"
    }
  };

  function sendTheMail() {
  // (4) Send the email!

    m.messages.send(params, function(res) { log(res);}, function(err) { log(err);} );
  }   
