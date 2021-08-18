# Z-Wolf

1. Use GitHub Desktop to make new Git repo in new folder
2. Make this Journal file in new repo
3. Terminal: `yarn create vite`,  `zwolf`, select react from menu
4. Terminal: `cd zwolf`, `yarn`, `yarn dev`
5. Save dodecahedron image into favicon slot, change link line in index.html to point to new favicon, change title line
6. Delete boiler-plate files; write new App.jsx in components folder with Hello World placeholder
7. New Terminal: `cd zwolf`, `yarn add history react-router-dom@next`
8. Add Header, MainEnvelope, MainRouting, Footer to App
9. Go to firebase.google.com, "Go to console", "New Project", "Z-Wolf RPG", follow prompts
10. "Add Firebase to your app" (Web) => app nickname, "Also set up Firebase Hosting for this app"
11. Copy provided script tags into body tag near bottom but before React called
12. `npm install -g firebase-tools` (should only be necessary once per computer)
13. `firebase login`, follow prompts in browser
14. Within zwolf folder, `yarn build`
15. `firebase init`, select (first) Hosting option, "Use an existing project", public directory './zwolf/dist', "yes", "no", "no"
16. Within Z-Wolf folder, `firebase deploy`
17. Any deployment involves `cd zwolf`, `yarn build`, `cd ..`, `firebase deploy` from here on out. View at https://z-wolf-rpg.web.app
18. Within zwolf folder, `yarn add styled-components`
19. Create StyleBank.js in styling folder, add first styled component CSS
20. Put Eric Meyer Reset and global styles in index.css
21. If vite stops working, delete node_modules and yarn.lock and re-install stuff with `yarn`
22. Style main blocks of screen
23. `yarn add simplebar-react`
24. Add SimpleBarReact component within PrimaryBar envelope. Remove PrimaryBar's overflow-y style, adjust padding of both elements (unfortunately using inline styling for SimpleBarReact, both padding and height).
25. Go to Firebase Console and add Auth to project. Copy script tag for firebase/auth into scripts section of index.html (apparently this is a new way where you don't need the full firebase credentials JSON anymore?)
26. `yarn add zustand`
27. Create useSidebar hook using zustand.create under hooks folder; fill it in with information about all sidebar modes and a swap function
28. Make main navigation component that can swap to other modes
29. Alter localStorage manually to save settings for Register vs Login preference
30. `yarn add firebase`, but also comment out the firebase scripts in index.html and replace them with a fbConfig file with the JSON-style firebase credentials. Initiate an instance of a firebase object, including a property that is a new firebase.auth.GoogleAuthProvider().
31. Add a UserStore under hooks, with information about the current user.
32. Use Firebase Auth API to capture register, login, and logout buttons' functions. Build hidden UserLoader component that loads data into UserStore after login/logout.
33. Implement loading status of auth changes; protect with a use-once-limited ref hook inside UserLoader
34. Enable firestore in firebase console. Create profiles and creatures collections. Save users to profiles collection on registry; create first creatures object manually
35. `yarn add nanoid` to add uuids to aspects of creatures
36. Create CreatureStore hook (I love zustand!) and CharLoader hidden component
37. Build character sheet HTML/structure
38. `yarn add slate slate-react` for rich text editor library ... follow https://www.smashingmagazine.com/2021/05/building-wysiwyg-editor-javascript-slatejs/ to create rich text editor
    39. Build input pages for new Kits, Feats, Talents
    40. `yarn add lodash` to get a deep object comparison function to replace the one in the tutorial
    41. `yarn add babel-plugin-lodash` to minify lodash library - not sure where is the .babelrc file that is supposed to power this?
    42. `yarn add react-select` to get stylable option tags - UPDATE: unfortunately it looks like I need `yarn add react-bootstrap` (a much bigger library) to avoid the text getting deselected when a dropdown option is clicked
    43. `yarn add is-hotkey` to get hotkey library
44. Revert last few commits to get rid of Slate stuff. Start over with Quill.js. Copy changes to Journal.md, Home.jsx, MainRouting.jsx, and CharSheetShell.jsx over from discarded commits.
45. Delete node_modules and yarn.lock again and reinstall libraries to clean up react-select and is-hotkey leftovers (since node_modules is under .gitignore).
46. `yarn add react-quill`; adapt tutorial from https://www.scalablepath.com/blog/using-quill-js-build-wysiwyg-editor-website/
47. `yarn add react-hook-form` to add other pieces of New Kit/Feat/Talent forms
48. 