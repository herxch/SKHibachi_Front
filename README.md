# SK Hibachi

Marketing and booking site for SK Hibachi, a private outdoor hibachi chef service in Houston, Dallas and Austin.
Live at https://www.skhibachi.com.

## Stack

- React 18 + React Router, built with Vite
- Plain CSS with CSS Modules; design tokens live in `src/styles/global.css`
- All business copy (prices, FAQ, policies, contact info) lives in `src/data/site.js`
- Booking form posts to an AWS Lambda Function URL, which emails the request via Amazon SES (`backend/booking/index.mjs`)

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

`VITE_BOOKING_ENDPOINT` (in `.env.development` / `.env.production`) is the Lambda Function URL the booking form posts to.

## AWS resources (account 244865320420, us-east-2 unless noted)

| What | Name |
| --- | --- |
| Amplify app (hosting) | `skhibachi` (`d3iz863h6g6bse`), branch `main`, manual deploys |
| Domain + DNS | `skhibachi.com`, Route 53 (registered 2026-10-22, auto-renew **off**) |
| Booking Lambda | `skhibachi-booking` (Node.js 22, reserved concurrency 5) |
| Lambda role | `skhibachi-booking-lambda` (basic logging + `ses:SendEmail`) |
| SES identities | domain `skhibachi.com` (DKIM), recipient `skhibachi@gmail.com` |

The SES account is in the sandbox, so it can only deliver to verified addresses. Booking emails go to
`skhibachi@gmail.com` with the customer's address as Reply-To.

## Deploy a new version of the site

```bash
npm run build
# zip the *contents* of dist/ (forward-slash paths), then:
aws amplify create-deployment --region us-east-2 --app-id d3iz863h6g6bse --branch-name main
# PUT the zip to the returned zipUploadUrl, then:
aws amplify start-deployment --region us-east-2 --app-id d3iz863h6g6bse --branch-name main --job-id <jobId>
```

## Update the booking Lambda

Zip `backend/booking/index.mjs` and run
`aws lambda update-function-code --region us-east-2 --function-name skhibachi-booking --zip-file fileb://booking.zip`.
