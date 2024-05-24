const express = require("express")
const router = express.Router()
const Product = require("../models/productmodels")

module.exports = router


router.get("/products", async (req, res) => {
	const products = await Product.find()
	res.send(products)
})
router.post("/products", async (req, res) => {
	const products = new Product({
		name: req.body.name,
		tittle: req.body.tittle,
        price:req.body.price,
        image:req.body.image,
	})
	await products.save()
	res.send(products)
})


router.delete("/products/:id", async (req, res) => {
	try {
		await Post.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})