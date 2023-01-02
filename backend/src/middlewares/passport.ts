import passport from 'passport';
import { Strategy } from 'passport-local';
import { encryptPassword } from '../libs/bcrypt.js';
import { getUserId } from '../libs/getId.js';
import { User } from '../models/index.js';

passport.use(
	'signup', 
	new Strategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, 
	async (req, email, password, done) => {
		const { firstname, lastname } = req.body;

		const user = User.create({
			id: await getUserId(),
			firstname,
			lastname,
			email,
			password: await encryptPassword(password)
		});

		return done(null, user);
	}
	)
);

passport.use(
	'login',
	new Strategy({
		usernameField: 'email'
	},
	async (email, _password, done) => {
		const user = await User.findOne({
			where: { email },
			relations: { links: true }
		});

		return done(null, user);
	})
);

passport.serializeUser((user, done) => {
	return done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
	const user = await User.findOneBy({ id });
	return done(null, user);
});
