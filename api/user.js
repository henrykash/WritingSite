import nextConnect from 'next-connect';
import middleware from '../../../middlewares/middleware';
import {
    extractUser
} from '../../../lib/api-helpers';

const handler = nextConnect();
handler.use(middleware);
handler.get(async (req, res) => res.json({
    user: extractUser(req)
}));

export function extractUser(req) {
    if (!req.user) return null;
    // take only needed user fields to avoid sensitive ones (such as password)
    const {
        name,
        email,
        bio,
        profilePicture,
        emailVerified,
    } = req.user;
    return {
        name,
        email,
        bio,
        profilePicture,
        emailVerified,
    };
}

export default handler;