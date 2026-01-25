Local Functions emulator — quick setup and test

1. Start the Functions emulator

- From the repo root (where `firebase.json` lives), run:

```bash
# start only Functions emulator
npx firebase emulators:start --only functions
```

- By default the Functions emulator listens on port `5001`.

2. Tell your frontend to use the emulator

- In your Next.js app create `.env.local` with:

```
NEXT_PUBLIC_USE_FIREBASE_EMULATOR=true
NEXT_PUBLIC_FIREBASE_EMULATOR_PORT=5001
```

- Restart your dev server after adding env vars.

3. Start the frontend

```bash
npm run dev
# or
yarn dev
```

4. Test the flow

- Open the app at `http://localhost:3000`, fill the registration form and trigger the payment flow.
- The client will connect the Functions emulator when running on `localhost` or when `NEXT_PUBLIC_USE_FIREBASE_EMULATOR=true`.
- Watch emulator logs in the terminal where `firebase emulators:start` is running.
- Check browser console for the debug message logged in `RegistrationForm.tsx`:

  "DEBUG Firebase cloud function response"

Notes

- If your callable function is in a region (e.g., `us-central1`) ensure the emulator logs indicate the deployed region. The emulator maps callable names under the same region.
- If you changed the emulator port, update `NEXT_PUBLIC_FIREBASE_EMULATOR_PORT` accordingly.
- Keep real service keys (Razorpay secret) on your server and do not expose them in client code.
