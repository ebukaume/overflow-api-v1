'use strict';

var _dbConfig = require('./dbConfig');

var _dbConfig2 = _interopRequireDefault(_dbConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dbConfig2.default.query('CREATE TABLE IF NOT EXISTS Users(id SERIAL PRIMARY KEY, name VARCHAR(100) not null,  email VARCHAR(100) UNIQUE not null, password VARCHAR(100) not null, joined TIMESTAMP DEFAULT CURRENT_TIMESTAMP)');
_dbConfig2.default.query('CREATE TABLE IF NOT EXISTS Questions(id SERIAL PRIMARY KEY, title VARCHAR(100) not null, question TEXT not null, user_id INTEGER not null, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, answers INTEGER not null DEFAULT 0)');
_dbConfig2.default.query('CREATE TABLE IF NOT EXISTS Answers(id SERIAL PRIMARY KEY, answer TEXT not null, question_id INTEGER not null, user_id INTEGER not null, user_name VARCHAR(100) not null, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, accepted INTEGER not null DEFAULT 0, comments INTEGER not null DEFAULT 0)');
_dbConfig2.default.query('CREATE TABLE IF NOT EXISTS Comments(id SERIAL PRIMARY KEY, comment TEXT not null, answer_id INTEGER not null, user_id INTEGER not null, user_name VARCHAR(100) not null, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)');
_dbConfig2.default.query('CREATE TABLE IF NOT EXIST Likes(id SERIAL PRIMARY KEY, answer_id INTEGER not null, user_id INTEGER not null, like_or_dislike INTEGER not null DEFAULT 0)');