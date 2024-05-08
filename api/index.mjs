import express from 'express'
import cors from 'cors'
import morgan from "morgan";
import {getUser, login, register, getUsersByRole, getUserIDFromTelephone, connectUsers} from "../firebase/config.js";

const app = express()
app.use(morgan('dev'))
app.use(cors({
	origin: 'http://localhost:4200'
}));
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/login', async (req, res) => {
	var email = req.query.email
	var password = req.query.password

	var user = await login(email, password)

	if(user != null) {
		res.status(200).json({"userFirebase": user})
	} else {
		res.status(500).json({"error": user})
	}
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

app.put('/register', async (req, res) => {
	const uuid = await register({
		email: req.query.email,
		password: req.query.password,
		mainLanguage: req.query.language,
		role: req.query.role,
		name: req.query.name,
		surname: req.query.surname,
		telephoneNumber: req.query.telephoneNumber,
		caregiver: req.query.caregiver
	})

	if (uuid != null) {
		res.status(200).json({uuid})
	} else {
		res.status(500)
	}

})

app.get('/user', async (req, res) => {
	const user = await getUser(req.query.uuid)

	if (user != null) {
		res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
		res.status(200).json({
			user
		})
	} else {
		res.status(500)
	}
})

app.get('/probando', async (req,res) => {
	const response = await connectUsers(req.query.telephone,req.query.idactual)

	if(response != null) {
		res.header('Access-Control-Allow-Origin', 'http://localhost:4200')
		res.status(200).json({
			response
		})
	}else{
		res.status(500)
	}
})