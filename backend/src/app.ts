import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import multer from 'multer';
import cors from 'cors';
import * as route from './routes/index.js';

// Initializions
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
	origin: 'http://localhost:3000',
	methods: 'GET, POST, PUT, DELETE, HEAD, OPTIONS',
	allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authentication',
	credentials: true
}));
app.use(multer().none());

// Global Variables
// app.use((_req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
// 	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS');
// 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authentication');
// 	res.header('Access-Control-Allow-Credentials', 'true');
// 	next();
// });

// Routes
app.use('/api/auth', route.Auth);
app.use('/api/link', route.Link);
app.use('/api/user', route.User);

export default app;
