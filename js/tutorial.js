// // JavaScript source code
// $(document).ready(function () {


//     var data = 

//         [
//             {
//                 "name": "Shadow of the Shinobi",
//                 "price": "59.99",
//                 "description": " The last surviving member of his clan. His clan was wiped out by a rival clan. Seeking revenge he sets out on a journey where he is consumed by a miasma of evil.",
//                 "coverArt": "img/cover/Shadows of the Shinobi.png"
//             },
//             {
//                 "name": "Call of War",
//                 "price": "49.99",
//                 "coverArt": "img/cover/COD.png",
//                 "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
//             },
//             {
//                 "name": "Legends of Elders",
//                 "price": "29.99",
//                 "coverArt": "img/cover/LOE.png",
//                 "description": "Battle as elders and use them in your card deck as you fight to defeat the other legend elders and become the best. Do you have what it takes to go against other players? Find out now in this fierce strategy game!"
//             }
//         ]
//     ;

//     var output = "";

//     data.forEach(function (game) {
//         output += `
//         <section class="container-fluid">
//             <article class="row">
            
//                 <div class="col col-lg-4 store-item animated slideInLeft">

//                     <div class="name">${game.name}</div>
//                     <div class="cover">
//                         <img src="${game.coverArt}" />
//                         <div class="description">${game.description}</div>
//                         <button class="btn" onclick="addToCart('${game.name}','${game.coverArt}','${game.price}','${game.description}')">Add to Cart.</button>
//                     </div>
//                     <div class="price">$${game.price}</div>
                    
                
//                 </div>

//             </article>
//         </section>
//         `;
//     });

//     var gamesInCart = [];

//     window.addToCart = function(name, coverArt, price, description) {
//         var game = {};

//         game.name = name;
//         game.coverArt = coverArt;
//         game.price = price;
//         game.description = description;

//         gamesInCart.push(game);

//         console.log(gamesInCart);
//     };

//     $('#output').html(output);



// }); //DO NOT DELETE