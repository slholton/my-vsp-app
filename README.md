# Sample server for Video & Playlist APIs

Use "create-react-app" on the command line to install this app.
* npx create-react-app my-app
* cd my-app
* npm start

## USER
This model and controller was developed to route to the following endpoints:
* POST user/register - to register new user by first name (fname), email, and password
* POST user/login - to login a registered user by email and password ONLY

## VIDEO
This model and controller was developed to route to the following endpoints:
* GET videos/mine - allows user to read their video feed 
* POST videos/insert - allows user to create a new video ('insert' used to mimic video platform's endpoint)
* PUT videos/update/:entryId - allows user to update a video on their feed
* DEL videos/delete/:id - allows user to delete a single video

## PLAYLIST
This model and controller was developed to route to the following endpoints:
* GET playlists/mine - allows user to read their playlist collection 
* POST playlists/insert - allows user to create a new playlist ('insert' used to mimic video platform's endpoint)
* PUT playlists/update/:entryId - allows user to update a playlist on their feed
* DEL playlists/delete/:id - allows user to delete a single playlist