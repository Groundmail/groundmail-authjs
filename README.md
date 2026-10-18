# groundmail-authjs

**Auth.js / NextAuth magic-link email** via [Groundmail](https://groundmail.dev).

Drop-in email provider — same shape as other Auth.js email providers. Requires a [database adapter](https://authjs.dev/getting-started/database) (Auth.js stores verification tokens).

## Install

```bash
npm install groundmail-authjs groundmail next-auth
```

```bash
# Auth.js-style env name, or our standard key name
AUTH_GROUNDMAIL_KEY=gm_your_key_here
# GROUNDMAIL_API_KEY=gm_your_key_here
```

## Usage

```ts
import NextAuth from 'next-auth'
import Groundmail from 'groundmail-authjs'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: /* your database adapter */,
  providers: [
    Groundmail({
      from: 'noreply@yourdomain.com',
      // apiKey picked up from AUTH_GROUNDMAIL_KEY or GROUNDMAIL_API_KEY
    }),
  ],
})
```

Also available as `import Groundmail from 'groundmail/authjs'`.

## Docs

https://docs.groundmail.dev/guides/authjs

## License

MIT
