"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="node_modules/@types/ejs/index.d.ts"/>
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var compression = require("compression");
var logger = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
var path = require("path");
var expressValidator = require("express-validator");
var sassMiddleware = require("node-sass-middleware");
var session = require('express-session');
var passport = require("passport");
var flash = require("connect-flash");
var LocalStrategy = require('passport').Strategy;
// Core/App
var DataAccess_1 = require("./core/DataAccess");
var View_1 = require("./core/View");
var Passport_1 = require("./core/Passport");
var Auth_1 = require("./core/Auth");
var Routes_1 = require("./app/Routes");
// Process ENV
process.env.BASE = __dirname + '/';
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        // MySQL Database initialization
        DataAccess_1.default.initialize();
        // View initialization
        View_1.default.initialize(this.app, path);
        // Middleware
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(expressValidator());
        this.app.use(sassMiddleware({
            src: path.join(__dirname, 'assets'),
            dest: path.join(__dirname, 'assets'),
            indentedSyntax: false,
            sourceMap: true
        }));
        this.app.use(express.static(path.join(__dirname, 'assets')));
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(session({
            secret: 'redbeardisthebest',
            resave: true,
            saveUninitialized: true
        }));
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        this.app.use(flash());
        // Cors
        this.app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    };
    Server.prototype.routes = function () {
        // Passport Configuration
        Passport_1.default.initialize(passport);
        // All Routes
        Routes_1.default.initialize(this.app);
        // Authentication
        Auth_1.default.initialize(this.app, passport);
    };
    return Server;
}());
exports.default = new Server().app;
