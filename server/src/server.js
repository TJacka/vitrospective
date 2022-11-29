import express from 'express'
import { db, connectToDb } from './db.js';

const app = express();
app.use(express.json());

app.get('/api/beadsfloral/:title', async (req, res) => {
	const { title } = req.params

	const bead = await db.collection('beadsfloral').findOne({ title });

	if (bead) {
		res.json(bead)
	} else {
		res.sendStatus(404);
	}
});

app.put('/api/jewelry/:name/upvote', async (req, res) => {
	const { name } = req.params;
	
	await db.collection('jewelry').updateOne({ name }, {
		$inc: { upvotes: 1 },
	});

	const tree = await db.collection('jewelry').findOne({ name });

	if (tree) {
		res.send(`The ${name} piece now has ${piece.upvotes} upvotes!!!`);	
	} else {
		res.send('That tree doesn\'t exist')
	}
});

app.post('/api/jewelry/:name/comments', async (req, res) => {
	const { name } = req.params;
	const { postedBy, text } = req.body;

	await db.collection('jewelry').updateOne({ name }, {
		$push: { comments: { postedBy, text }}		
	});

	const tree = await db.collection('jewelry').findOne({ name })

	if (piece) {
		res.send(piece.comments)
	} else {
		res.send('That piece doesn\'t exist');
	}
}); 

connectToDb(() => {
	console.log('Successfully connected to database')
	app.listen(8000, () => {
		console.log('Server is listening on port 8000')
	});
})
