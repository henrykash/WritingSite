import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = { //configuring the relative provider options
    providers : [
        Providers.GitHub({
            clientID : process.env.GITHUB_ID,
            clientSecret : process.env.GITHUB_SECRET
        }),
        Providers.Credentials({
            name: 'Custom Provider',
            credentials: {
                username: {label: "Email", type: "text", placeholder: "janedoe@gmail.com"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials){
                const user = {name: "Jane Doe", email: "jane@doe.com"}; //await axios.post(url, credentials)
                return user;
            }
        })
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
    ],
    session : {
        jwt: true,
    }
}

export default (req, res) => NextAuth(req, res, options); //makes it possible to export the relative NextAuth functionalities