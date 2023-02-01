import { Router } from 'express';
import { isLoggedIn } from '../middlewares/logged.js';
import { Link, User } from '../models/index.js';

const router = Router();

router.use(isLoggedIn);

router.get(
	'/links',
	async (req, res) => {
		if (req.user !== undefined) {
			const { id } = req.user;

			const links = await Link.find({
				where: { authorId: id },
				order: { createdAt: 'DESC' }
			});

			return res.json({ url: '/' + id, links });
		}

		return res.json({ redirect: true, url: '/' });
	}
);

router.delete(
  '/delete',
  async (req, res) => {
    if (req.user !== undefined) {
      const id = req.user.id;

      await Link.delete({ authorId: id });
			await User.delete({ id });

			res.clearCookie('authenticate');

      return res.json({ url: '/' });
    }

    return res.json({ redirect: true, url: '/' });
  }
);

export default router;
