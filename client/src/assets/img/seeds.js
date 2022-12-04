const seedData = [
    {
        name: 'Yellow Knit Top',
        image: '/images/shirts/adidas-w-yellow-top.webp',
        department: "departments[0]._id",
        category: "categories[0]._id",
        color: 'yellow',
        price: 39.99,
        description: 'Emulate the sun with this one size fits all yellow knit top. Its loose fit will keep you comfy whether it be for a run or for an ice cream at your local ice cream parlor.',
        quantity: 500
    },
    {
        name: 'Red Knit Top',
        image: '/images/shirts/adidas-w-red-top.webp',
        department: "departments[0]._id",
        category: "categories[0]._id",
        color: 'red',
        price: 34.99,
        description: 'Feel the fire with this one size fits all red knit top. Its unique texture will surely set you apart from the rest on your afternoon out.',
        quantity: 500
    },
    {
        name: 'Blue Cut-Out Top',
        image: '/images/shirts/adidas-w-blue-top.webp',
        department: "departments[0]._id",
        category: "categories[0]._id",
        color: 'blue',
        price: 29.99,
        description: 'Flow like water with this unique blue cutout top. Wear it out to the gym or to the movies with your friends!',
        quantity: 500
    },
    {
        name: 'Beige Sweatpants',
        image: '/images/pants/adidas-w-beige-pants.webp',
        department: "departments[0]._id",
        category: "categories[1]._id",
        color: 'beige',
        price: 39.99,
        description: 'Stay comfy in these loose fitting beige sweatpants. These sweatpants will keep you warm before your game or on a chilly winter evening.',
        quantity: 500    
    },
    {
        name: 'Colorblock Sweatpants',
        image: '/images/pants/adidas-w-pink-pants.webp',
        department: "departments[0]._id",
        category: "categories[1]._id",
        color: 'pink',
        price: 44.99,
        description: 'These colorblock sweatpants will subtly add some flair to your look while keeping you ready to move.',
        quantity: 500
    },
    {
        name: 'Black Nylon Pants',
        image: '/images/pants/adidas-w-black-pants.webp',
        department: "departments[0]._id",
        color: 'black',
        price: 44.99,
        description: 'Keep it moving whether it be to the gym or on the train in these stylish black sweatpants made of recycled materials.',
        quantity: 500
    },
    {
        name: 'Black Athletic T-Shirt',
        image: '/images/shirts/adidas-m-black-top.webp',
        department: "departments[1]._id",
        category: "categories[0]._id",
        color: 'black',
        price: 24.99,
        description: 'Stay light and casual on your runs with this one-size-fits-all black athletic t-shirt.',
        quantity: 500
    },
    {
        name: 'Blue T-Shirt with Striped Sleeve',
        image: '/images/shirts/adidas-m-blue-top.webp',
        department: "departments[1]._id",
        category: "categories[0]._id",
        color: 'blue',
        price: 34.99,
        description: 'This loose fit blue t-shirt is the right choice for a leisurely bike ride or a night out on the town.',
        quantity: 500
    },
    {
        name: 'White Athletic T-Shirt',
        image: '/images/shirts/adidas-m-white-top.webp',
        department: "departments[1]._id",
        category: "categories[0]._id",
        color: 'white',
        price: 24.99,
        description: 'Simple. Clean-cut. Classic. This one-size-fits-all white athletic t-shirt will accompany you in whatever you do in comfort and style.',
        quantity: 500
    },
    {
        name: 'Beige Sweatpants',
        image: '/images/pants/adidas-m-beige-pants.webp',
        department: "departments[1]._id",
        category: "categories[1]._id",
        color: 'beige',
        price: 39.99,
        description: 'These beige sweatpants can keep you warmed up until the big game, whether you\'re on the court or in the stands.',
        quantity: 500
    },
    {
        name: 'Black Sweatpants',
        image: '/images/pants/adidas-m-black-pants.webp',
        department: "departments[1]._id",
        category: "categories[1]._id",
        color: 'black',
        price: 34.99,
        description: 'Black goes with everything, just like these sweatpants. What are you wearing to the gym this weekend?',
        quantity: 500
    },
    {
        name: 'Camo Sweatpants',
        image: '/images/pants/adidas-m-camo-pants.webp',
        department: "departments[1]._id",
        category: "categories[1]._id",
        color: 'camo',
        price: 34.99,
        description: 'Want to stand out in the crowd? Camo. You\'re welcome.',
        quantity: 500
    },
    {
        name: 'Algeria \'22 Jersey - Home',
        image: '/images/world-cup/algeria-wc.webp',
        department: "departments[4]._id",
        category: "categories[0]._id",
        color: 'white',
        price: 49.99,
        description: 'Celebrate the World Cup with the Algerian National Soccer Team\'s Home Jersey.',
        quantity: 500
    },
    {
        name: 'Argentina \'22 Warm-Up Jersey',
        image: '/images/world-cup/argentina-wc.webp',
        department: "departments[4]._id",
        category: "categories[0]._id",
        color: 'blue',
        price: 39.99,
        description: 'Celebrate the World Cup with the Argentinian National Soccer Team\'s Warm-Up Jersey.',
        quantity: 500
    },
    {
        name: 'Argentina Classic Jersey',
        image: '/images/world-cup/argentina-wc-classic.jpg',
        department: "departments[4]._id",
        category: "categories[0]._id",
        color: 'blue',
        price: 49.99,
        description: 'Celebrate the World Cup with a classic version of the Argentinian National Soccer Team\'s Jersey.',
        quantity: 500
    },
    {
        name: 'Belgium \'22 Jersey - Away',
        image: '/images/world-cup/belgium-wc.webp',
        department: "departments[4]._id",
        category: "categories[0]._id",
        color: 'white',
        price: 49.99,
        description: 'Celebrate the World Cup with the Belgian National Soccer Team\'s Away Jersey.',
        quantity: 500
    },
    {
        name: 'Chile \'22 Jersey - Away',
        image: '/images/world-cup/chile-wc.webp',
        department: "departments[4]._id",
        category: "categories[0]._id",
        color: 'white',
        price: 49.99,
        description: 'Celebrate the World Cup with the Chilean National Soccer Team\'s Away Jersey.',
        quantity: 500
    },
    {
        name: 'Germany Classic Jersey',
        image: '/images/world-cup/germany-wc.webp',
        department: "departments[4]._id",
        category: "categories[0]._id",
        color: 'black',
        price: 49.99,
        description: 'Celebrate the World Cup with a classic version of the German National Soccer Team\'s Jersey.',
        quantity: 500
    },
    {
        name: 'Germany Icons Jersey',
        image: '/images/world-cup/germany-wc-classic.webp',
        department: "departments[4]._id",
        category: "categories[0]._id",
        color: 'white',
        price: 49.99,
        description: 'Celebrate the World Cup with the German National Soccer Team\'s ~Icon~ Jersey.',
        quantity: 500
    },
    {
        name: 'Japan \'22 Jersey - Home',
        image: '/images/world-cup/japan-wc.jpg',
        department: "departments[4]._id",
        category: "categories[0]._id",
        color: 'blue',
        price: 49.99,
        description: 'Celebrate the World Cup with the Japanese National Soccer Team\'s Home Jersey.',
        quantity: 500
    },
    {
        name: 'Mexico \'22 Jersey - Away',
        image: '/images/world-cup/mexico-wc-away.webp',
        department: "departments[4]._id",
        category: "categories[0]._id",
        color: 'beige',
        price: 49.99,
        description: 'Celebrate the World Cup with the Mexican National Soccer Team\'s Away Jersey.',
        quantity: 500
    },
    {
        name: 'Spain \'22 Jersey - Home',
        image: '/images/world-cup/spain-wc.webp',
        department: "departments[4]._id",
        category: "categories[0]._id",
        color: 'red',
        price: 49.99,
        description: 'Celebrate the World Cup with the Spanish National Soccer Team\'s Home Jersey.',
        quantity: 500
    },
    {
        name: 'Sweden \'22 Jersey - Home',
        image: '/images/world-cup/sweden-wc.webp',
        department: "departments[4]._id",
        category: "categories[0]._id",
        color: 'yellow',
        price: 49.99,
        description: 'Celebrate the World Cup with the Swedish National Soccer Team\'s Home Jersey.',
        quantity: 500
    },
    {
        name: 'Black Superstars',
        image: '/images/shoes/black-sneakers.webp',
        department: "departments[3]._id",
        category: "categories[2]._id",
        color: 'black',
        price: 59.99,
        description: 'Superstars. In black. Think about it.',
        quantity: 500
    },
    {
        name: 'Blue X Speedportal.3',
        image: '/images/shoes/blue-cleats.webp',
        department: "departments[3]._id",
        category: "categories[2]._id",
        color: 'blue',
        price: 199.99,
        description: 'Messi? Ronaldo? Nah. You. Specifically for outdoor terrain.',
        quantity: 500
    },
    {
        name: 'White Predators Edge.3',
        image: '/images/shoes/white-cleats.webp',
        department: "departments[3]._id",
        category: "categories[2]._id",
        color: 'white',
        price: 179.99,
        description: 'Dance on them all the way to the goal. Specifically for artificial fields.',
        quantity: 500
    },
    {
        name: 'Red 2.0',
        image: '/images/shoes/red-sneakers.webp',
        department: "departments[3]._id",
        category: "categories[2]._id",
        color: 'red',
        price: 54.99,
        description: 'When you\'re wearing your low-key outfit, let these be your statement.',
        quantity: 500
    },
    {
        name: 'Skyhigh Sneakers',
        image: '/images/shoes/white-grey-sneakers.webp',
        department: "departments[3]._id",
        category: "categories[2]._id",
        color: 'white',
        price: 54.99,
        description: 'Who\'s walking on clouds? You\'re walking on clouds.',
        quantity: 500
    },
    {
        name: 'Tangerine Sneakers',
        image: '/images/shoes/white-orange-sneakers.webp',
        department: "departments[3]._id",
        category: "categories[2]._id",
        color: 'white',
        price: 54.99,
        description: 'White with a little pop of orange, like tangerines in a field of snow.',
        quantity: 500
    },
    {
        name: 'White Low-Top Forums',
        image: '/images/shoes/white-sneakers.webp',
        department: "departments[3]._id",
        category: "categories[2]._id",
        color: 'white',
        price: 59.99,
        description: 'Take the city or the office with these low-top all-white sneakers.',
        quantity: 500
    },
    {
        name: 'White Suede Sneakers',
        image: '/images/shoes/white-suede-sneakers.webp',
        department: "departments[3]._id",
        category: "categories[2]._id",
        color: 'white',
        price: 44.99,
        description: 'These sneakers are both comfy and stylish. To keep its nice texture, it is recommended to treat these shows before wearing them in the rain.',
        quantity: 500
    },
    {
        name: 'Argentina National Team Cap',
        image: '/images/accessories/arg-cap.webp',
        department: "departments[2]._id",
        category: "categories[2]._id",
        color: 'white',
        price: 24.99,
        description: 'Classic white baseball cap with Argentina\'s National Soccer Team\'s logo.',
        quantity: 500
    },
    {
        name: 'Flower Duffel Bag',
        image: '/images/accessories/flower-duffle.webp',
        department: "departments[2]._id",
        category: "categories[2]._id",
        color: 'multi-color',
        price: 69.99,
        description: 'Take it to the gym, to the beach, or on your next trip. Let flowers be your statement on the go.',
        quantity: 500
    },
    {
        name: 'Red Bucket Hat',
        image: '/images/accessories/red-nylon-bob.jpg',
        department: "departments[2]._id",
        category: "categories[2]._id",
        color: 'red',
        price: 19.99,
        description: 'Warning: this bucket hat will look good and protect you from the rain. At the same time.',
        quantity: 500
    },
    {
        name: 'Beige Bucket Hat',
        image: '/images/accessories/warm-beige-bucket.webp',
        department: "departments[2]._id",
        category: "categories[2]._id",
        color: 'beige',
        price: 24.99,
        description: 'Warning: this bucket hat will look good and protect you from the cold. At the same time.',
        quantity: 500
    },
    {
        name: 'World Cup Ball',
        image: '/images/accessories/wc-ball.webp',
        department: "departments[4]._id",
        category: "categories[2]._id",
        color: 'white',
        price: 34.99,
        description: 'Celebrate the World Cup with the 2022 World Cup Ball. Limited Edition.',
        quantity: 500
    }
  ]

  export default seedData;