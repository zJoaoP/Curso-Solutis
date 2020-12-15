import bodyparser from "body-parser";
import express from "express";
import MongoDB from "mongodb";
import database from "./database.js";

const { ObjectId, MongoClient } = MongoDB;

const app = express();

database.then((db) => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });

  app.use(express.json());
  app.use(bodyparser.urlencoded({ extended: true }));

  app.set("view engine", "ejs");

  app.get("/", function (req, res) {
    res.render("index.ejs");
  });

  app.post("/show", (req, res) => {
    //criar a coleção “data”, que irá armazenar nossos dados
    db.collection("data").save(req.body, (err, result) => {
      if (err) return console.log(err);

      console.log("Salvo no Banco de Dados");
      res.redirect("/show");
    });
  });

  app.get("/", (req, res) => {
    var cursor = db.collection("data").find();
  });

  app.get("/show", (req, res) => {
    db.collection("data")
      .find()
      .toArray((err, results) => {
        if (err) return console.log(err);
        res.render("show.ejs", { data: results });
      });
  });

  app
    .route("/edit/:id")
    .get((req, res) => {
      var id = req.params.id;

      db.collection("data")
        .find(ObjectId(id))
        .toArray((err, result) => {
          if (err) return res.send(err);
          res.render("edit.ejs", { data: result });
        });
    })
    .post((req, res) => {
      var id = req.params.id;
      var name = req.body.name;
      var surname = req.body.surname;

      db.collection("data").updateOne(
        { _id: ObjectId(id) },
        {
          $set: {
            name: name,
            surname: surname,
          },
        },
        (err, result) => {
          if (err) return res.send(err);
          res.redirect("/show");
          console.log("Atualizado no Banco de Dados");
        }
      );
    });

  app.route("/delete/:id").get((req, res) => {
    var id = req.params.id;

    db.collection("data").deleteOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) return res.send(500, err);
      console.log("Deletado do Banco de Dados!");
      res.redirect("/show");
    });
  });
});
