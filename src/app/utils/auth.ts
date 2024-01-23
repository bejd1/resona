import NextAuth, { type Session } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "@auth/core/providers/google";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/lib/getUser";
import bcrypt from "bcrypt";
import { JWT } from "@auth/core/jwt";

export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async session({ session, token }: { session: Session; token?: JWT }) {
      if (token?.role && session.user) {
        session.user.role = token.role as "ADMIN" | "USER";
      }
      console.log(session);

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },

  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
});
