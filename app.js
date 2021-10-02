require('dotenv').config()
const Express = require("express")
const app = Express()

app.use(require('./middleware/headers'));

const cors = require('cors');
// app.use(require('./middleware/headers'));
app.use(cors());

    ; (async () => {
        app.use(Express.json())

        // const cors = require('cors');
        // // app.use(require('./middleware/headers'));
        // app.use(cors());

        // CRUD for User
        const auth = require('./controllers/Auth')
        app.use("/user", auth)

        // CRUD for Videos
        const video = require('./controllers/Video')
        app.use("/videos", video)

        // CRUD for Playlists
        const playlist = require('./controllers/Playlist')
        app.use("/playlists", playlist)

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`)
        })
    })()