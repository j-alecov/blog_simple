const express = require ('express');
const app = express();
var mysql = require('mysql');
app.use(express.json());


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BV&GZM1zx2z1",
  database: "blog_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/api/blogposts', (req, res) => {
    console.log(req);
    con.query('select * from posts', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

app.get('/api/blogposts/:postId/comments/', (req, res) => {
    con.query('select * from responses where post_id=?', [req.params.postId], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
      });
});

app.post('/api/blogposts/:postId/comments/', (req, res)=>{
    //Don't really need the postId as params, thought it'd may be more convenient but it was not
    var sql = "INSERT INTO responses (response_content, created_at, name, post_id) VALUES ('"+req.body.response_content+"',now(),'"+req.body.name+"','"+req.body.post_id+"')";
   con.query(sql, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

app.post('/api/blogposts', (req, res)=>{
    var sql = "INSERT INTO posts (post_content, created_at, post_title, response_count) VALUES ('"+req.body.post_content+"',now(),'"+req.body.post_title+"',0)";
   con.query(sql, function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});



const port  = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));