import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = { //configuring the relative provider options
    providers : [
        Providers.Github({
            clientID : "",
            clientSecret : ""
        }),
        Providers.Twitter({
            clientID : "",
            clientSecret : ""
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
        })
    ]
}