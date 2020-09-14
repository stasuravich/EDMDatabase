require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const parser = require('body-parser');
const jwt = require('jsonwebtoken');


const SELECT_ALL_MUSIC_QUERY ='SELECT * FROM music';
const SELECT_ALL_TRAP_QUERY ='SELECT * FROM Trap';
const SELECT_ALL_DUBSTEP_QUERY ='SELECT * FROM Dubstep';
const SELECT_ALL_HARDSTYLE_QUERY ='SELECT * FROM Hardstyle';
const SELECT_ALL_USERS = 'SELECT * FROM Users';
const SELECT_ALL_DRUMBASS_QUERY = 'SELECT * FROM `Drum & Bass`';
const SELECT_ALL_FUTUREBASS_QUERY = 'SELECT * FROM `Future Bass`';

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'music15',
  database: 'Genres'

});


connection.connect(err=> {
  if(err){
    return err;
  }
});


app.use(cors());
app.use(parser.urlencoded({
  extended: false
}));

app.use(parser.json());
app.get('/', (req, res) => {
  res.send('whatz guud')
});

app.post('/getToken', (req, res) => {
  connection.query(`SELECT COUNT(*) as cnt FROM Users WHERE user = '${req.body.email}' and password = '${req.body.password}'`, (err, result) =>{
    if(!result[0].cnt || err){
      return res.status(401).send('Fields not sent')
    }
    const load = connection.query(`SELECT id as smt FROM Users WHERE user ='${req.body.email}'`, (err, result) =>{
      if(err) {
        return res.send(err)
      }
      else {
        return result[0].smt
      }
    })
    const token = jwt.sign(Number(load) , process.env.SECRET_OR_KEY);
    res.send(token);

  });
});

app.get('/music/Trap/add', (req, res) => {

  const{names} = req.query;
  const INSERT_TRAP_QUERY = `INSERT INTO Trap (names) VALUES('${names}')`;
  connection.query(INSERT_TRAP_QUERY, (err, results) =>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('succesfully added artist')
    }
  });
});

app.get('/music/Dubstep/add', (req, res) => {

  const{names} = req.query;
  const INSERT_DUBSTEP_QUERY = `INSERT INTO Dubstep (names) VALUES('${names}')`;
  connection.query(INSERT_DUBSTEP_QUERY, (err, results) =>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('succesfully added artist')
    }
  });
});

app.get('/music/Dubstep/delete', (req, res) => {

  const{names} = req.query;
  const DELETE_DUBSTEP_QUERY = `DELETE FROM Dubstep WHERE names = '${names}'`;
  connection.query(DELETE_DUBSTEP_QUERY, (err, results) =>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('succesfully added artist')
    }
  });
});

app.get('/music/Hardstyle/add', (req, res) => {

  const{names} = req.query;
  const INSERT_HARDSTYLE_QUERY = `INSERT INTO Hardstyle (names) VALUES('${names}')`;
  connection.query(INSERT_HARDSTYLE_QUERY, (err, results) =>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('succesfully added artist')
    }
  });
});

app.get('/music/Hardstyle/delete', (req, res) => {

  const{names} = req.query;
  const DELETE_HARDSTYLE_QUERY = `DELETE FROM Hardstyle WHERE names = '${names}'`;
  connection.query(DELETE_HARDSTYLE_QUERY, (err, results) =>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('succesfully added artist')
    }
  });
});


app.get('/music/Trap/delete', (req, res) => {

  const{names} = req.query;
  const DELETE_TRAP_QUERY = `DELETE FROM Trap WHERE names = '${names}'`;
  connection.query(DELETE_TRAP_QUERY, (err, results) =>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('succesfully deleted artist')
    }
  });
});

app.get('/music/Drum&Bass/add', (req, res) => {

  const{names} = req.query;
  const INSERT_DRUMBASS_QUERY = 'INSERT INTO `Drum & Bass` (names) VALUES ("'+names+'")';
  connection.query(INSERT_DRUMBASS_QUERY, (err, results) =>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('succesfully added artist')
    }
  });
});

app.get('/music/Drum&Bass/delete', (req, res) => {

  const{names} = req.query;
  const DELETE_DRUMBASS_QUERY = 'DELETE FROM `Drum & Bass` WHERE names = "'+names+'"';
  connection.query(DELETE_DRUMBASS_QUERY, (err, results) =>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('succesfully added artist')
    }
  });
});


app.get('/music/FutureBass/add', (req, res) => {

  const{names} = req.query;
  const INSERT_FUTUREBASS_QUERY = 'INSERT INTO `Future Bass` (names) VALUES ("'+names+'")';
  connection.query(INSERT_FUTUREBASS_QUERY, (err, results) =>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('succesfully added artist')
    }
  });
});

app.get('/music/FutureBass/delete', (req, res) => {

  const{names} = req.query;
  const DELETE_FUTUREBASS_QUERY = 'DELETE FROM `Future Bass` WHERE names = "'+names+'"';
  connection.query(DELETE_FUTUREBASS_QUERY, (err, results) =>{
    if(err) {
      return res.send(err)
    }
    else {
      return res.send('succesfully added artist')
    }
  });
});
app.get('/music', (req, res)=> {
  connection.query(SELECT_ALL_MUSIC_QUERY, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
});

app.get('/login', (req, res)=> {
  connection.query(SELECT_ALL_USERS, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
});



app.get('/music/Trap', (req, res)=> {
  connection.query(SELECT_ALL_TRAP_QUERY, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
});

app.get('/music/Dubstep', (req, res)=> {
  connection.query(SELECT_ALL_DUBSTEP_QUERY, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
});

app.get('/music/Drum&Bass', (req, res)=> {
  connection.query(SELECT_ALL_DRUMBASS_QUERY, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
});

app.get('/music/Hardstyle', (req, res)=> {
  connection.query(SELECT_ALL_HARDSTYLE_QUERY, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
});

app.get('/music/FutureBass', (req, res)=> {
  connection.query(SELECT_ALL_FUTUREBASS_QUERY, (err, results) => {
    if(err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: results
      })
    }
  });
});

app.listen(4000, () => {
  console.log('Listening on 4000')
});
