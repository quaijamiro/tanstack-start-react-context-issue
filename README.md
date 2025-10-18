# tanstack-start-react-context-issue

Run:

```sh
npm run dev
```

Go to `http://localhost:3000`.

Open browser console.

Go to `http://localhost:3000/admin`.

Observe that logged context object contains `adminAuth` key set to `undefined` in both pathless layout route and its child routes. It shows that React Context key `adminAuth` passed in `__root.tsx` file is not being merged to Router Context.
