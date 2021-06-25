const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./router/articles");
const Article = require("./models/article")
const methodOverride = require("method-override");
const app = express();
//const mongoDB = "mongodb://groovydc.com.tw/tttest0617/blogData";

//mongoose.connect(mongoDB,{ useNewUrlParser: true,useUnifiedTopology: true , useCreateIndex:true})
//const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://user-miao:024785et@cluster0.qvv6j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});


module.exports = app;


app.set("view engine","ejs")

app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"))

app.use("/articles" , articleRouter);

app.get("/", async (req,res)=>{
	/*const articles = [{
		title:"Blog Title 1",
        date:new Date(),
		content:"this is content"
		},
		{
		title:"Blog Title 2",
        date:new Date(),
		content:"this is content"
		},
	  {
		title:"Blog Title 3",
        date:new Date(),
		content:"this is content"
		}
	];*/

	const articles = await Article.find().sort({date:"desc"});
	//取得articles陣列裡面所有資料
	res.render("articles/index",	{articles:articles});
});

app.listen(3000);
console.log("success");
