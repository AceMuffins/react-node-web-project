const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid');

app.use(bodyParser.json());


posts = [
    {
        title: "Manifesto on Treatieses",
        text: "I have noticed that, although this subreddit has 481k readers, I am not receiving 481k upvotes on my posts. I'm not sure if this is being done intentionally or if these 'friends' are forgetting to click 'upvote'. Either way, I've had enough. I have compiled a spreadsheet of individuals who have forgotten to upvote my most recent posts. After 2 consecutive strikes, your name is automatically highlighted (shown in red) and I am immediately notified. 3 consecutive strikes and you can expect an in-person consulataion. Think about your actions."
    },
    {
        title: "Lorem? I hardly know 'er!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        title: "Movie idea",
        text: " According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible. Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let's shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can't. I'll pick you up. Looking sharp. Use the stairs. Your father paid good money for those. Sorry. I'm excited. Here's the graduate. We're very proud of you, son. A perfect report card, all B's. Very proud. Ma! I got a thing going here. - You got lint on your fuzz. - Ow! That's me! - Wave to us! We'll be in row 118,000. - Bye! Barry, I told you, stop flying in the house! - Hey, Adam. - Hey, Barry. - Is that fuzz gel? - A little. Special day, graduation. Never thought I'd make it. Three days grade school, three days high school. Those were awkward. Three days college. I'm glad I took a day and hitchhiked around the hive. You did come back different. - Hi, Barry. - Artie, growing a mustache? Looks good. - Hear about Frankie? - Yeah. - You going to the funeral? - No, I'm not going. Everybody knows, sting someone, you die. Don't waste it on a squirrel. Such a hothead. I guess he could have just gotten out of the way. I love this incorporating an amusement park into our day. That's why we don't need vacations."
    }
];
// Routes
app.get('/posts', (req, res) => {
    res.json(posts);
});
app.get('/posts/:id', (req, res) => {
    const {id} = req.params;
    const post = posts.find((post) => post.id === id)
    res.json(post);
});

app.post('/posts', (req, res) => {
    const newPost = req.body;
    posts.push({id: uuid.v4(), ...newPost});
    res.json(newPost);
});

app.put('/posts/:id', (req, res) => {
    const {id} = req.params;
    const {title, text} = req.body;
    const post = posts.find((post) => post.id === id);
    if(title) post.title = title;
    if(text) post.text = text;
    
    res.send(`Post ${id} updated.`);
});

app.delete('/posts/:id', (req, res) => {
    const {id} = req.params;
    posts = posts.filter((post) => post.id !== id);
    res.send(`${id} deleted from database.`);
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

