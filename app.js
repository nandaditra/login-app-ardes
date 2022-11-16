const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname + '/views')));
app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res)=> {
    res.render('index', {
        title: "Login"
    })
})

app.get('/signup',async (req, res)=> {
    res.render('signup', {
        title: "Sign In"
    })
})

app.post('/signup', async (req, res)=> {
    const firstName = req.body.firstName 
    const lastName = req.body.lastName
    const domisili = req.body.domisili
    const gender = req.body.inputGender 
    const password = req.body.password 
    const person = req.body.person 
    
    console.log("firstname " + firstName)
    console.log("lastname " + lastName)
    console.log("domisili " + domisili)
    console.log("gender "  + gender)
    console.log("password" + password)
    console.log("person " + person)

    res.render("mainpage")
})

app.post('/', async (req, res) => {
    const email = await req.body.email
    const password =  await req.body.password

    if(email == null) {
        res.status(200).render('index', {
            title : "Log In"
        })
        console.log(window.alert("Insert Email Sir/Mrs"))
    } 

    if(password == null) {
        res.render('index', {
            title : "Log in"
        })
        console.log(window.alert("Insert Password Sir/Mrs"))
    }

    if(email == null || password == null) {
        res.render('index', {
            title: "Log In"
        })
        console.log(window.alert("Insert email and Password with true"))
    }

    if(email == "nandaditra56@gmail.com" && password=="nandaganteng") {
        console.log("Email anda :"+ email)
        console.log("Password Anda :"+ password)
        res.status(200).render('mainpage', {
            title : "Dashboard",
        })
    } else {
        res.status(200).render('index', {
            title : "Login",
        })
    }
})

app.get('/mainpage', async(req, res)=> {
    res.render('mainpage', {
        title: "Dashboard"
    })
})

const port = process.env.PORT || 3000

app.listen(port, (req, res)=> {
    console.log(`server is running on port ${port}`)
})
