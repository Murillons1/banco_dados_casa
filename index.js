const express = require("express")
const conn = require("./db/conn")
const exphbs = require("express-handlebars")
const app = express()
const Casa = require("./models/Casa")


 const hostname = "Localhost"
 const PORT = 3000


 //-----------express-----------------
 app.set("view engine", "handlebars")
app.engine("handlebars", exphbs.engine())

//----------------------------------------
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.end("Mensagem para usuário")
})


    
    conn.sync().then(()=>{
        app.listen(PORT,hostname,()=>{
        console.log(`Servidor rodando ${hostname}:${PORT}`)
    })
    }).catch((error)=>{
        console.log("Não foi possivel conectar ao banco de dados!"+ error)
    
    
    
    })
    

