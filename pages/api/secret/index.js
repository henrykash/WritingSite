import {getSession} from 'next-auth/client';

export default async (req, res) => {
    const session = await getSession({req});

    if(session){
        res.send({
            content: "Welcome again to the Software Development World! I hope this time you get to stay longer till death does its thing!"
        });
    }else{
        res.send({
            error: "You need to be seriously signed in!"
        })
    }
}