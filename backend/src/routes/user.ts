import { Router } from 'express';
import { isLoggedIn } from '../middlewares/logged.js';
import { Link, User } from '../models/index.js';

const router = Router();

router.use(isLoggedIn);

router.get('/links', async (req, res) => {
	const links = await Link.find({
		where: { authorId: req.user.id },
		order: { createdAt: 'DESC' }
	});

	return res.json({ links });
});

router.delete('/delete', async (req, res) => {
  await Link.delete({ authorId: req.user.id });
	await User.delete({ id: req.user.id });

	res.clearCookie('authenticate');

  return res.json({ url: '/' });
});

export default router;
