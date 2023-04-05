import { r as redirect } from './index-1dce6fb5.js';
import { p as private_env } from './index-573e148f.js';
import jwt from 'jsonwebtoken';
import './index2-f58250d6.js';

const handle = async ({ event, resolve }) => {
  const token = event.cookies.get("authenticate");
  if (token) {
    try {
      const decoded = jwt.verify(token, private_env.SECRET);
      event.locals.user = decoded.user;
    } catch {
      event.cookies.delete("authenticate");
      throw redirect(307, "/login");
    }
  }
  const res = await resolve(event);
  return res;
};

export { handle };
//# sourceMappingURL=hooks.server-c87e138e.js.map
