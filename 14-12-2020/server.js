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
    db.collection("users").save(req.body, (err, result) => {
      if (err) return console.log(err);

      console.log("Salvo no Banco de Dados");
      res.redirect("/show");
    });
  });

  app.get("/show", (req, res) => {
    db.collection("users")
      .find()
      .toArray((err, users) => {
        if (err) return console.log(err);
        db.collection("products")
          .find()
          .toArray((err, products) => {
            if (err) return console.log(err);
            res.render("show.ejs", { users: users, products: products });
          });
      });
  });

  app
    .route("/edit/:id")
    .get((req, res) => {
      var id = req.params.id;

      db.collection("users")
        .find(ObjectId(id))
        .toArray((err, result) => {
          if (err) return res.send(err);
          res.render("edit.ejs", { user: result });
        });
    })
    .post((req, res) => {
      var id = req.params.id;
      var name = req.body.name;
      var surname = req.body.surname;

      db.collection("users").updateOne(
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

    db.collection("users").deleteOne({ _id: ObjectId(id) }, (err, result) => {
      if (err) return res.send(500, err);
      console.log("Deletado do Banco de Dados!");
      res.redirect("/show");
    });
  });

  app
    .route("/products")
    .get((req, res) => {
      res.render("products.ejs");
    })
    .post((req, res) => {
      db.collection("products").insertOne(req.body, (err, result) => {
        if (err) return console.log(err);

        res.redirect("/show");
      });
    });

  app
    .route("/edit_product/:id")
    .get((req, res) => {
      const id = req.params.id;
      const product = db
        .collection("products")
        .findOne(ObjectId(id))
        .then((product) => {
          res.render("edit_product.ejs", { product: product });
        });
    })
    .post((req, res) => {
      const id = req.params.id;

      db.collection("products").updateOne(
        { _id: ObjectId(id) },
        {
          $set: {
            name: req.body.name,
            brand: req.body.brand,
            price: req.body.price,
          },
        },
        (err, result) => {
          if (err) return res.send(err);
          res.redirect("/show");
          console.log("Atualizado no Banco de Dados");
        }
      );
    });

  app.route("/delete_product/:id").get((req, res) => {
    const id = req.params.id;
    db.collection("products").deleteOne(
      { _id: ObjectId(id) },
      (err, result) => {
        if (err) return res.send(500, err);
        res.redirect("/show");
      }
    );
  });
});
