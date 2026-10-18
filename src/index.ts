/**
 * Public entry for the Auth.js / NextAuth + Groundmail email provider.
 * Implementation lives in the core SDK; this package exists for discoverability
 * (npm/GitHub search: auth.js + next-auth + transactional email).
 */
export {
  GroundmailAuthjs,
  GroundmailAuthjs as default,
  type AuthjsEmailConfig,
  type AuthjsTheme,
  type GroundmailAuthjsOptions,
} from 'groundmail/authjs'
