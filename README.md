In first terminal
Run the angular side with: ng serve

In a second terminal
Run backend with: npm run start:server

This works because in package.json we have: 
"start:server": "nodemon server.js"
