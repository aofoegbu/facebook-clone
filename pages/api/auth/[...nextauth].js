    import NextAuth from "next-auth";
    import Providers from "next-auth/providers";

    export default NextAuth({
        // Configure one or more authentication providers
        providers:[
            Providers.Facebook({
                clientId: process.env.FACEBOOK_CLIENT_ID,
                clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            }),
            // ...add more providers here
        ],
    });

// alt //

// import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'

// const options = {
//     providers: [
//         Providers.GitHub({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET
//         }),
//     ],
// }
// export default (req, res) => NextAuth(req, res, options)
