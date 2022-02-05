var crypto = require('crypto');
var express = require('express');
var jwt = require('jsonwebtoken');
var app = express();

var models = require('./models');

const PORT = 10000;
const SECRET = "SECRET" // TODO generate random secret

app.use(express.json());
app.use(require('cors')({
    origin: '*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders:"content-type",
}));

// TODO jwt auth and validation

app.post('/auth', function(req,res) {
    models.User.findOne({
        where: {
            name: req.body["name"]
        }
    }).then((user) => {
        if (!user) {
            res.sendStatus(403); // Forbidden
            return;
        }
        let hash = crypto.pbkdf2Sync(
            req.body["password"],
            user.salt,
            1000,
            64,
            'sha512'
        ).toString("hex");
        if (user.hash === hash) {
            const token = jwt.sign({
                    id: user.id,
                    username: user.name
            }, SECRET, {expiresIn: '3 hours' })
            res.json({
                access_token: token
            });
        } else {
            res.sendStatus(403); // Forbidden
        }
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    });
})

app.post('/user/', function(req,res) {
    console.log(req);
    let salt = crypto.randomBytes(16).toString("hex");
    let hash = crypto.pbkdf2Sync(
        req.body["password"],
        salt,
        1000,
        64,
        'sha512'
    ).toString("hex");
    models.User.create({
        name: req.body["name"],
        salt: salt,
        hash: hash,
        telephone: req.body["telephone"] ?? null
    }).then(() => {
        res.sendStatus(200);
    }).catch((e) => {
        console.error(e);
        res.sendStatus(500);
    });
})

app.get('/post/', (req,res) => {
    models.Post.findAll({
        order: [
            ['id', 'DESC'], // TODO add timestamps
        ]
    }).then((result) => {
        res.json(result);
    })
})
app.post('/post/', function(req,res) {
    console.log(req.body);
    models.Post.create({
        message: req.body["message"],
        media_url: req.body["media_url"] ?? null, // TODO handle media url
        user_id: req.body["user_id"], // TODO use auth instead
    }).then(() => {
        res.sendStatus(200);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    })
})

app.get('/commentary/:postId', function(req,res) {
    models.Commentary.findAll({
        where: {
            postId: req.params.postId
        }
    }).then((result) => {
        res.json(result);
    })
})

app.post('/commentary/', function(req,res) {
    // TODO send image
    models.Commentary.create({
        message: req.body["message"],
        user_id: req.body["user_id"], // TODO use auth instead
        post_id: req.body["post_id"],
    }).then(() => {
        res.sendStatus(200);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    })
})

app.listen(PORT, () => {});
