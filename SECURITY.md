# Security Operations

## Donation QR

The donation page renders the repository asset `public/images/QRCode.jpeg` from
`src/components/sections/Donate.tsx`. It is a static public image; this project
has no QR editing endpoint, admin panel, or payment-processing backend. The
separate `public/images/qr-code.png` file is not referenced by the donation
component. Do not replace either image without an authorized, reviewed change.

Before approving a QR change, independently confirm the intended payee and
payment destination with an authorized trustee using a trusted source. Review
the source image diff and scan the proposed image with a trusted payment app
without authorizing or sending a payment. A code review alone does not prove
that a QR destination is genuine.

### Suspected unauthorized QR change

1. Pause production promotion using the hosting account, if available, and
   preserve the current deployment and repository evidence.
2. Compare the QR file and its change history with the last deployment whose QR
   destination was independently verified by an authorized trustee.
3. Restore only the affected change from that approved revision through a
   reviewed source-control change. Avoid overwriting unrelated working-tree
   changes.
4. Have an authorized reviewer verify the restored QR destination before
   approving and redeploying it.
5. Confirm the production asset matches the approved revision. If account
   compromise is suspected, secure the affected accounts and review deployment
   history before resuming releases.

## Repository and deployment controls

These controls require access to the relevant accounts and are not configured
by this repository file:

- Require MFA or passkeys for GitHub, Vercel, and the domain registrar.
- Protect the production branch; require reviewed pull requests and passing
  checks before merge.
- Restrict production deployment and environment-variable access to the
  smallest necessary set of accounts.
- Enable dependency and secret scanning, and review deployment history and
  alerts regularly.
- Keep local environment files out of source control. Use the hosting provider's
  encrypted environment-variable settings for any future server credentials.
