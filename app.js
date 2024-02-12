import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = process.env.PORT || 8001;
// Express settings.
const __filename = fileURLToPath(
	import.meta.url); // Get the directory URL

app.set('view engine', 'ejs'); // Set webpages to run from EJS
app.use(express.static(path.dirname(__filename) + '/public')); // Set the public view folder to /public (to get images, css, etc.)

app.get('/', (req, res) => {
    var projects = [
        {img: "LightPawn.webp", tags: ["HTML5", "CSS3", "JS", "Express", "SQLite", "Passport Sessions"], title: "Chess Openings", desc: "This site was designed to practice Chess Opening theory, the site has pre-inserted openings, or features to create your own studies.", repo: "https://github.com/jordiedh/ChessOpenings", link: "https://chess.jordanharrisondev.com/"},
        {img: "1200px-Zendesk_logo.svg.png", tags: ["HTML5", "CSS3", "JS", "Express", "SQLite", "Zendesk API"], title: "Zendesk Dashboard", desc: "For my last job at WorldSmart, I designed a dashboard that hooked up with the Zendesk API to display stats on tickets open in states, tickets closed by individual support agents, etc. This not a live version to avoid displaying this information publicly, but you can see via the source code it hooks up with the API.", repo: "https://github.com/jordiedh/WorldsmartDashboard", link: "https://wsdashboard.jordanharrisondev.com/disclaimer"}
    ]
    res.render('home', {
        projects: projects
    });
});

app.listen(port, () => console.log(`Server started on port ${port}.`));