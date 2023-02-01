import { Router } from 'express';
import { getLinkId } from '../libs/get-id.js';
import { isLoggedIn } from '../middlewares/logged.js';
import { validate } from '../middlewares/validation.js';
import { Link } from '../models/index.js';
import { arrayLink, arrayEditLink } from '../validations/arrayValidations.js';

const router = Router();

router.use(isLoggedIn);

router.post(
	'/add',
	validate(arrayLink),
	async (req, res) => {
		if (req.user !== undefined) {
			const authorId = req.user.id;
			const { title, url, description } = req.body;
			console.log(req.body);
			console.log(req.user);

			const link: Link = Link.create({
				id: await getLinkId(),
				authorId,
				title,
				url,
				description
			});

			await link.save();

			return res.json({ link });
		}

		return res.json({ redirect: true, url: '/' });
	}
);

router.post(
	'/edit/:id',
	validate(arrayEditLink),
	async (req, res) => {
		if (req.user !== undefined) {
			const { id } = req.params;
			const { title, url, description } = req.body;

			await Link.update({ id }, {
				title,
				url,
				description
			});

			return res.json({});
		}

		return res.json({ redirect: true, url: '/' });
	}
);

router.delete(
	'/delete/:id',
	async (req, res) => {
		const { id } = req.params;
		if (req.user !== undefined) {
			const link = await Link.findOne({
				where: [
					{ id },
					{ authorId: req.user.id }
				]
			});

			if (link !== null) await link.remove();

			return res.json({ delete: true });
		}

		return res.json({ redirect: true, url: '/' });
	}
);

export default router;
