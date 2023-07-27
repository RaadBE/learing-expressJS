import express from 'express';
import dotenv from 'dotenv';
dotenv.config({
    path: './dishesRouter/raadkey.env'
});

const router = express.Router();
let dishes = [{
    name: "Spaghetti Carbonara",
    timeToPrepare: "30 minutes",
    ingredients: ["200g spaghetti", "100g pancetta", "2 large eggs", "50g pecorino cheese", "50g parmesan", "Freshly ground black pepper", "Salt", "Clove of garlic"],
    steps: ["Boil the spaghetti in salted water", "Fry the pancetta with garlic", "Mix eggs and cheese", "Combine pancetta, spaghetti and the egg-cheese mixture", "Serve with extra cheese and black pepper"]
}, {
    name: "Chicken Alfredo",
    timeToPrepare: "45 minutes",
    ingredients: ["2 chicken breasts", "Salt", "Pepper", "2 cups heavy cream", "1 cup grated Parmesan cheese", "2 tablespoons butter", "200g fettuccine pasta"],
    steps: ["Season and cook chicken", "Cook pasta", "Make Alfredo sauce", "Combine chicken, pasta, and sauce", "Serve with extra Parmesan"]
}, {
    name: "Vegetable",
    timeToPrepare: "25 minutes",
    ingredients: ["1 bell pepper", "1 carrot", "2 cloves garlic", "1 onion", "1 zucchini", "2 tablespoons soy sauce", "1 tablespoon sesame oil"],
    steps: ["Prep veggies", "Cook veggies in oil", "Add soy sauce", "Stir until cooked and serve"]
}, {
    name: "Fish",
    timeToPrepare: "40 minutes",
    ingredients: ["2 fillets of white fish", "1 cup flour", "1 cup beer", "1/2 cabbage", "1 cup mayo", "1 lime", "Tortillas"],
    steps: ["Make beer batter", "Batter and fry fish", "Make slaw", "Assemble tacos and serve with lime"]
}];
// 


 function checker (req, res, next){
    const raadKey = req.params.raadkey; // get the 'raadkey' from the URL parameters

    if (raadKey === process.env.RAAD_KEY) {
        next();
    } else {
        res.status(403).send({
            message: "Invalid raadkey provided."
        });
    }
};
// router.get('/',(req,res) =>{
//     res.send(dishes);
// })
router.use('/:raadkey', checker);
router.get('/:raadkey',(req,res)=> {
    res.send(dishes);
});

router.get('/:raadkey/:name', (req, res) => {
    const dishname = req.params.name;
    const found = dishes.find(element => element.name === dishname);
    if (found) {
        res.send(found);
    } else {
        res.status(505).send(`
        <p>Error not found. Check the API info page,.</p>
        <a href='http://localhost:3000/help/info'>Info Page</a>
        <p>some html</p>`);
    }

});


export default router;