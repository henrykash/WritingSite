import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = { //configuring the relative provider options
    providers : [
        Providers.GitHub({
            clientID : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET
        }),
        /*Providers.Google({                                    //If time allows, I implement the relative Google Provider
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
        Providers.Email({
            server : {
                host : "",
                port : "",
                auth : {
                    user : "",
                    pass : "",
                },
            },
            from : "",
        })*/
    ]
}

export default (req, res) => NextAuth(req, res, options); //makes it possible to export the relative NextAuth functionalities