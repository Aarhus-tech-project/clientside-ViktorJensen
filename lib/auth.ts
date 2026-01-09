import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"

const discordId = process.env.AUTH_DISCORD_ID
const discordSecret = process.env.AUTH_DISCORD_SECRET

if (!discordId || !discordSecret) {
    throw new Error("Missing AUTH_DISCORD_ID or AUTH_DISCORD_SECRET environment variables")
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Discord({
            clientId: discordId,
            clientSecret: discordSecret,
        }),
    ],
})