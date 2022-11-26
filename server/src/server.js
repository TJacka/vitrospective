import express from 'express'
import { db, connectToDb } from './db.js';

const app = express();
app.use(express.json());

app.get('/api/trees/:name', async (req, res) => {
	const { name } = req.params

	const tree = await db.collection('trees').findOne({ name });

	if (tree) {
		res.json(tree)
	} else {
		res.sendStatus(404);
	}
});

app.put('/api/trees/:name/upvote', async (req, res) => {
	const { name } = req.params;
	
	await db.collection('trees').updateOne({ name }, {
		$inc: { upvotes: 1 },
	});

	const tree = await db.collection('trees').findOne({ name });

	if (tree) {
		res.send(`The ${name} tree now has ${tree.upvotes} upvotes!!!`);	
	} else {
		res.send('That tree doesn\'t exist')
	}
});

app.post('/api/trees/:name/comments', async (req, res) => {
	const { name } = req.params;
	const { postedBy, text } = req.body;

	await db.collection('trees').updateOne({ name }, {
		$push: { comments: { postedBy, text }}		
	});

	const tree = await db.collection('trees').findOne({ name })

	if (tree) {
		res.send(tree.comments)
	} else {
		res.send('That tree doesn\'t exist');
	}
}); 

connectToDb(() => {
	console.log('Successfully connected to database')
	app.listen(8000, () => {
		console.log('Server is listening on port 8000')
	});
})
