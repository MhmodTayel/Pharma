const express = require("express");
const router = express.Router();
const Medicine = require("../../models/medicine");
//------------------- redis---------------//
const { Client, Entity, Schema, Repository } = require("redis-om");
const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(
      "redis://default:I6L3AVSg4BtWC0r5kCjQW9N96hNIbYu7@redis-15173.c241.us-east-1-4.ec2.cloud.redislabs.com:15173"
    );
  }
}

class Med extends Entity {}

let schema = new Schema(
  Med,
  {
    id: { type: "number" },
    name: { type: "string", textSearch: true },
  },
  {
    dataStructure: "JSON",
  }
);

async function createMed(data) {
  await connect();
  const repo = new Repository(schema, client);

  const med = repo.createEntity(data);

  const id = await repo.save(med);

  return id;
}

async function createIndex() {
  await connect();
  const repo = new Repository(schema, client);
  await repo.createIndex();
}

router.get("/create-index", async (req, res, next) => {
  await createIndex()
  res.status(200).send( "ok")
});

async function searchMeds(q) {
  await connect()

  const repo = new Repository(schema,client)
  console.log('from function',q);
  const meds = await repo.search()
  .where('name').matches(q)
  .return.all()

  return meds
}

router.get('/search-redis/:q',(req,res,next)=> {
  console.log(req.params.q);
  searchMeds(req.params.q)
  .then((doc) => res.json(doc))
  .catch((e) => next(e));
})
//------------------- redis---------------//

const {
  create,
  update,
  updateQuantity,
  deleteOne,
  getById,
} = require("../../controllers/store controllers/storeMedController");

const uploadS3 = require("../../middlewares/imageMiddleware");

router.post(
  "/medicine/add",
  uploadS3.single("image"),
  async (req, res, next) => {
    const body = req.body;
    body.image = req.file?.location;
    // body.categories = body.categories.split(" ");
    const medArr = await Medicine.find({});
    body.id = medArr.length + 1;
    console.log(body);
    create(body)
      .then((doc) => {
        createMed({ id: body.id, name: body.name });
        res.json(doc);
      })
      .catch((e) => next(e));
  }
);

router.patch("/medicine/:id", uploadS3.single("image"), (req, res, next) => {
  const medId = req.params.id;
  const medicine = req.body;
  medicine.image = req.file?.location;
  update(medId, medicine)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.delete("/medicine/delete/:id", (req, res, next) => {
  const medId = req.params.id;
  deleteOne(medId)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.patch("/medicine/quantity/:id", (req, res, next) => {
  const medId = req.params.id;
  const medicineQuantity = req.body.quantity;
  updateQuantity(medId, medicineQuantity)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.get("/medicine/details/:id", (req, res, next) => {
  const medId = req.params.id;
  console.log(medId);
  getById(medId)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

module.exports = router;
