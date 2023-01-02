import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import { TypeormStore } from 'connect-typeorm';
import passport from 'passport';
import { SECRET } from './config.js';
import { dbConn } from './database.js';
import { Session } from './models/index.js';
import * as route from './routes/index.js';

// Initializions
const app = express();
const sessionRepository = dbConn.getRepository(Session);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
	secret: SECRET,
	resave: false,
	saveUninitialized: false,
	store: new TypeormStore({
		cleanupLimit: 2,
		limitSubquery: false,
		ttl: 86400
	}).connect(sessionRepository),
	cookie: {
		sameSite: 'lax',
		secure: false
	}
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth/', route.Auth);
app.use('/api/link/', route.Link);

export default app;
