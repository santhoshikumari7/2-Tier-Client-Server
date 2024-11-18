const express = require("express");
const cors = requre("cors");

let app = express();
app.use(cors());

app.get("/herosNames",(req,res)=>{

    let herosArr = ["Chiranjeevi","Bhalakrishna","Nagarjuna","Venkatesh","Prbahas","Ram","Nani"];

    res.json(herosArr);

})

    app.get("/heroinsNames",(req,res)=>{

     let heroinsNames = ["Samantha","Raasikhanna","Khajal","Nayanathara","Rashmika"];

     res.json(heroinsNames);


})

app.listen(4567,()=>{
    console.log(`Listening to port 4567`);

})