$(document).ready(function() {
    function getListOfgames(){

        var data = 

        [
            {
                "name": "Shadow of the Shinobi",
                "price": "59.99",
                "description": " The last surviving member of his clan. His clan was wiped out by a rival clan. Seeking revenge he sets out on a journey where he is consumed by a miasma of evil.",
                "coverArt": "img/cover/Shadows of the Shinobi.png",
                "productId": 1,
            },
            {
                "name": "Call of War",
                "price": "49.99",
                "coverArt": "img/cover/COD.png",
                "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
                "productId": 2,
            },
            {
                "name": "Legends of Elders",
                "price": "29.99",
                "coverArt": "img/cover/LOE.png",
                "description": "Battle as elders and use them in your card deck as you fight to defeat the other legend elders and become the best. Do you have what it takes to go against other players? Find out now in this fierce strategy game!",
                "productId": 3,
            }
        ]
    ;


            var gameList = data;
            var output = '';

            gameList.forEach(function(game){
                    output += `
                    <section class="container-fluid">
                        <article class="row">
                        
                            <div class="col col-lg-4 store-item animated slideInLeft">

                                <div class="name">${game.name}</div>
                                <div class="cover">
                                    <img src="${game.coverArt}" />
                                    <div class="description">${game.description}</div>
                                    <button class="btn" onclick="toggleAddCartClass('${game.productId}','${game.name}','${game.coverArt}','${game.price}','${game.description}')" id="add-to-cart-${game.productId}" class="btn btn-primary add-to-cart-${game.productId}" data-product-id="${game.productId}">Add to Cart.</button>
                                </div>
                                <div class="price">$${game.price}</div>
                                
                            
                            </div>

                        </article>
                    </section>
                `;

                $('#output').html(output); 
            })        
    }
    getListOfgames();

    var gamesInCart = [];


    window.toggleAddCartClass = function (id, name, coverArt, price, description){
        $('#menu-cart').css('display', 'none');
        
        $('#add-to-cart-' + id).toggleClass('add-to-cart-green');

        var hasActiveClass = $('#add-to-cart-' + id).hasClass('add-to-cart-green');
        if(hasActiveClass){
            
            var game = {};
            game.productId = id;
            game.name = name;
            game.coverArt = coverArt;
            game.price = price;
            game.description = description;
            gamesInCart.push(game);
        } else {
            
            for(let x of gamesInCart){
                if(x.productId === id){
                    let gameToRemove = gamesInCart.indexOf(x);
                    gamesInCart.splice(gameToRemove,1);
                }
            }
            
        }

        event.preventDefault();
        event.stopPropagation();
    }

    window.removeFromCart = function(id){
        
        for(let x of gamesInCart){
            if(Number(x.productId) === Number(id)){
                let gameToRemove = gamesInCart.indexOf(x);
                gamesInCart.splice(gameToRemove,1);
            }
        }

        $('#add-to-cart-' + id).removeClass('add-to-cart-green');

        getCartDetails();
        getCartTotals();

    }

    function getCartDetails(){
        if(gamesInCart && gamesInCart.length > 0){
            var cartOutput = '';

            gamesInCart.forEach(function(gameInCart){

                cartOutput += `
                    <div class="cart-img">
                        <picture>
                            <img src="${gameInCart.coverArt}">
                        </picture>
                        <div class="cart-details">
                            <div class="cart-actions">
                                <span class="cart-quantity">Quantity 1</span>
                                <span class="cart-price">$${gameInCart.price}</span>
                                <button onclick="removeFromCart(${gameInCart.productId})" class="btn btn-primary">Remove</button>
                            </div>
                        </div>
                    </div>
                    `

                $('#cart-output').html(cartOutput);
            });

        } else {
            var noDetails = `
                <div class="no-items">You Have No Items In Cart</div>
            `
            $('#cart-output').html(noDetails);
        }
    }

    function getCartTotals(){
        var prices = [];
        var totalCartPrice = null;

        gamesInCart.forEach(function(gamePrice){
            totalCartPrice += Number(gamePrice.price);
        });

        var totalCartQuantity = gamesInCart.length;

        if(totalCartPrice && totalCartPrice !== null){
            $('#cart-total-price').html('Total $' + totalCartPrice);
            $('#cart-total-quantity').html('You Have ' + totalCartQuantity + ' Item(s) In Your Cart');
        } else {
            $('#cart-total-price').html('Total $0');
            $('#cart-total-quantity').html('You Have 0 Item(s) In Your Cart');
        }

        
    }

    window.toggleShowCart = function (){
        $('#menu-cart').toggle().toggleClass('animated slideInLeft');

        getCartDetails();
        getCartTotals();

        event.preventDefault();
        event.stopPropagation();
    }

    window.toggleShowChat = function(){
        $('#chat i').toggleClass('chat-active');

        $('#chat-box').toggle().toggleClass('animated slideInUp');
    }

});