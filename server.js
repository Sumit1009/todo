/**
 * Created by sumit on 22/6/17.
 */
var express = require('express');
app = express();

app.use(express.static(__dirname));

app.get('/',function (req,res) {
    res.send('index.html');
})
app.listen(3000,function () {
    console.log("App is running: 3000");
});
