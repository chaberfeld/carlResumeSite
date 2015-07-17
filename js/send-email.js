 
// Send notice to me

// (0) get hostip 

function myIP() {
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
    xmlhttp.send();

    hostipInfo = xmlhttp.responseText.split("\n");

    for (i=0; i<hostipInfo.length; i++) {
        ipAddress = hostipInfo[i].split(":");
        if ( ipAddress[0] == "IP" ) return ipAddress[1];
    }

    return false;
}

// (1) Create a function to log the response from the Mandrill API
  function log(obj) {
    $('#response').text(JSON.stringify(obj));
  }

  // (2) Create a new instance of the Mandrill class with your API key
  var m = new mandrill.Mandrill('kse6A_PpBO-JMfco3HVodg');

  // (3) Send the email!
  function sendTheMail(mip) {
  
    // Create a variable for the API call parameters
    var params = {
      "message": {
          "from_email":"someone@somewhere.com",
          "to":[{"email":"chaberfeld@gmail.com"}],
          "subject": "carlResumeSite being viewed",
          "text": "auto notify from " + mip
      }
    };

    m.messages.send(params, function(res) { log(res);}, function(err) { log(err);} );
  }   
