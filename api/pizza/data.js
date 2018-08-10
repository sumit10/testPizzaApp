module.exports = {
    data : [
        {
            name:"Base",
            required:true,
            max:1,
            data:[
                {
                    type:"Normal",
                    price:300
                },
                {
                    type:"Thin crust",
                    price:350
                }
            ]
        },{
            name:"Toppings",
            required:true,
            max:3,
            data:[
                {
                    type:"Anchovies",
                    price:50
                },
                {
                    type:"Bacon",
                    price:100
                },
                {
                    type:"Canadian Bacon",
                    price:150
                },
                {
                    type:"Chicken",
                    price:100
                },
                {
                    type:"Italian Sausage",
                    price:175
                },
                {
                    type:"Sausage",
                    price:125
                },
                {
                    type:"Pepperoni",
                    price:90
                }
            ]
        },{
            name:"Veggies",
            required:true,
            max:5,
            data:[
                {
                    type:"Green Peppers",
                    price:50
                },
                {
                    type:"Mushrooms",
                    price:25
                },
                {
                    type:"Onions",
                    price:30
                },
                {
                    type:"Tomatoes",
                    price:30
                },
                {
                    type:"Banana Peppers",
                    price:70
                },
                {
                    type:"Pineapple Tidbits",
                    price:65
                },
                {
                    type:"Ripe Olives",
                    price:95
                },
                {
                    type:"Green Olives",
                    price:90
                },
                {
                    type:"Jalapeno Peppers",
                    price:75
                }
            ]
        },{
            name:"Cheese",
            required:true,
            max:1,
            data:[
                {
                    type:"Parmesan/Romano",
                    price:100
                },
                {
                    type:"Three Cheese Blend",
                    price:150
                }
            ]
        },{
            name:"Sauces",
            required:true,
            min:1,
            data:[
                {
                    type:"Chicken BBQ Pizza Sauce",
                    price:80
                },
                {
                    type:"Ranch Sauce",
                    price:70
                },
                {
                    type:"Spinach Alfredo Sauce",
                    price:75
                }
            ]
        },{
            name:"Sides & Desserts",
            required:false,
            max:1,
            data:[
                {
                    type:"Chicken Poppers",
                    price:200
                },
                {
                    type:"Chicken Wings (Roasted) ",
                    price:250
                },
                {
                    type:"Chocolate Chip Cookie",
                    price:150
                },
                {
                    type:"Double Chocolate Chip Brownie",
                    price:200
                }
            ]
        },{
            name:"Extras",
            required:false,
            max:1,
            data:[
                {
                    type:"Pepperoncini",
                    price:25
                },
                {
                    type:"BBQ Dipping Sauce",
                    price:25
                },
                {
                    type:"Blue Cheese Dipping Sauce",
                    price:25
                },
                {
                    type:"Buffalo Dipping Sauce",
                    price:25
                },
                {
                    type:"Cheese Dipping Sauce",
                    price:25
                },
                {
                    type:"Garlic Sauce",
                    price:25
                },
                {
                    type:"Garlic Parmesan Sauce",
                    price:25
                },
                {
                    type:"Honey Chipotle Sauce",
                    price:25
                }
            ]
        }
    ]
}