const Medicine = require("../../models/medicine");

const create = (medicine) => Medicine.create(medicine);
const update = (id, medicine) => Medicine.updateOne({ id }, medicine);
const deleteOne = (id, medicine) => Medicine.deleteOne({ id }, medicine);
const getById = (id) => Medicine.findOne({ id: id })
const updateQuantity = (id, quantity) =>
  Medicine.updateOne({ id }, { $inc: { quantity } });
  const es = (q, res) => {
    console.log("here");

    console.log(q);
    Medicine.esSearch({
      "_source": ["name"],
      "query": {
        "multi_match": {
          "query": `${q}`,
          "type": "bool_prefix",
          "fields": [
            "name",
            "name._2gram",
            "name._3gram"
          ]
          
        }
      }
      
    },function (err, results){
      console.log(results, "comes from res");
      res.json(results.hits.hits)

    }
  );
  };
module.exports = { create, update, updateQuantity , getById , deleteOne, es };

