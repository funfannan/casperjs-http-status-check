// Author:
//  _____ _             
// |_   _| | ___ __ ____
//   | | | |/ / '__|_  /
//   | | |   <| |   / / 
//   |_| |_|\_\_|  /___|



var urlList = [
        'http://www.example1.com',
        'http://www.example2.com',
        'http://www.example3.com'
]

casper.test.begin("loading site!", function (test) {

    casper.start();

    for (var i=0; i<urlList.length; i++) {
      casper.thenOpen(urlList[i]);
      casper.then(function () {
        var tit = this.getTitle();
        var res = this.status(false);
        test.assert(res.currentHTTPStatus === 200, tit + " returns a 200 status code");
      });
    }

    casper.run(function() {
        this.test.done();
    });
    
});
