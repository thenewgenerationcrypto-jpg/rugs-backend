import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let users = {};

app.get("/", (req,res)=>{
 res.send("Backend online");
});

app.post("/login",(req,res)=>{
 const {username,password} = req.body;

 if(!username || !password){
  return res.json({success:false});
 }

 if(!users[username]){
  users[username]={
   password:password,
   balance:1000
  };
 }

 if(users[username].password !== password){
  return res.json({success:false});
 }

 res.json({
  success:true,
  balance:users[username].balance
 });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
 console.log("Server running on port",PORT);
});import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let users = {};

app.get("/", (req,res)=>{
 res.send("Backend online");
});

app.post("/login",(req,res)=>{
 const {username,password} = req.body;

 if(!username || !password){
  return res.json({success:false});
 }

 if(!users[username]){
  users[username]={
   password:password,
   balance:1000
  };
 }

 if(users[username].password !== password){
  return res.json({success:false});
 }

 res.json({
  success:true,
  balance:users[username].balance
 });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
 console.log("Server running on port",PORT);
});import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let users = {};

app.get("/", (req,res)=>{
 res.send("Backend online");
});

app.post("/login",(req,res)=>{
 const {username,password} = req.body;

 if(!username || !password){
  return res.json({success:false});
 }

 if(!users[username]){
  users[username]={
   password:password,
   balance:1000
  };
 }

 if(users[username].password !== password){
  return res.json({success:false});
 }

 res.json({
  success:true,
  balance:users[username].balance
 });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
 console.log("Server running on port",PORT);
});import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let users = {};

app.get("/", (req,res)=>{
 res.send("Backend online");
});

app.post("/login",(req,res)=>{
 const {username,password} = req.body;

 if(!username || !password){
  return res.json({success:false});
 }

 if(!users[username]){
  users[username]={
   password:password,
   balance:1000
  };
 }

 if(users[username].password !== password){
  return res.json({success:false});
 }

 res.json({
  success:true,
  balance:users[username].balance
 });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
 console.log("Server running on port",PORT);
});
