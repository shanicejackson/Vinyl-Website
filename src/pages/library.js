import React, { useState } from "react"; 
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const Booking = () => {
  const { cartItems, addToCart } = useCart();
  const navigate = useNavigate();
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [expandedCard, setExpandedCard] = useState(null);

  const [products] = useState([
    {
      id: 1,
      image: "https://upload.wikimedia.org/wikipedia/en/2/2c/SZA_-_S.O.S.png",
      name: "SOS by SZA",
      description: "Blend of R&B, Hip-hop, and Alternative.",
      price: "$29.00",
    },
    {
      id: 2,
      image: "https://i.scdn.co/image/ab67616d0000b273c7ea04a9b455e3f68ef82550",
      name: "Take Care by Drake",
      description: "Hip-hop and R&B.",
      price: "$20.99",
    },
    {
      id: 3,
      image: "https://i.scdn.co/image/ab67616d0000b273733e6d7818eef87d20df86b5",
      name: "Pony by Rex Orange County",
      description: "Alternative",
      price: "$30.00",
    },
    {
      id: 4,
      image: "https://upload.wikimedia.org/wikipedia/en/6/67/Stray_Kids_-_Karma.png",
      name: "Karma by Stray Kids",
      description: "K-Pop",
      price: "$25.00",
    },
    {
      id: 5,
      image:"https://www.broadwaysacramento.com/wp-content/uploads/2024/03/HAMILTON_1080x1080-1024x1024.jpg",
      name: "Hamilton Original Broadway Cast Recording",
      description: "Musical Theatre",
      price: "$35.00",
    },
    {
      id: 6,
      image:"https://ibighit.com/cor/images/cor/discography/cor/color-outside-the-lines/ui/album-cover.jpg",
      name: "Color Outside The Lines by CORTIS",
      description: "K-Pop",
      price: "$22.50",
    },
    {
      id: 7,
      image:"https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png",
      name: "Back to Black by Amy Winehouse",
      description: "Soul and R&B",
      price: "$28.00",
    },
    {
      id: 8,
      image:"https://images.genius.com/08e2633706582e13bc20f44637441996.1000x1000x1.png",
      name: "etnernal sunshine by Ariana Grande",
      description: "Pop and R&B",
      price: "$27.00",
    },
    {
      id: 9,
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Igor_-_Tyler%2C_the_Creator.jpg/250px-Igor_-_Tyler%2C_the_Creator.jpg",
      name: "IGOR by Tyler, The Creator",
      description: "Hip-hop and Alternative",
      price: "$24.00",
    },
    {
      id: 10,
      image:"https://upload.wikimedia.org/wikipedia/en/9/90/Scorpion_by_Drake.jpg",
      name: "Scorpion by Drake",
      description: "Hip-hop and R&B",
      price: "$26.00",
    },
    {
      id: 11,
      image:"https://upload.wikimedia.org/wikipedia/en/9/96/Adele_-_25_%28Official_Album_Cover%29.png",
      name: "25 by Adele",
      description: "Pop and Soul",
      price: "$30.00",
    },
    {
      id: 12,
      image:"https://images.genius.com/1efc5de2af228d2e49d91bd0dac4dc49.1000x1000x1.jpg",
      name: "Good Kid, M.A.A.D City by Kendrick Lamar",
      description: "Hip-hop",
      price: "$29.50", 
    },
    {
      id: 13,
      image:"https://upload.wikimedia.org/wikipedia/en/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png",
      name: "Flower Boy by Tyler, The Creator",
      description: "Hip-hop and Alternative",
      price: "$27.00"
    },
    {
      id: 14,
      image:"https://upload.wikimedia.org/wikipedia/en/4/41/SremmLife_cover.jpg",
      name: "SremmLife by Rae Sremmurd",
      description: "Hip-hop",
      price: "$23.00"
    },
    {
      id: 15,
      image:"https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png",
      name: "Ctrl by SZA",
      description: "R&B and Soul",
      price: "$28.00"
    },
    {
      id: 16,
      image:"https://m.media-amazon.com/images/I/914gSg0S0OL.jpg",
      name: "Straight Outta Compton by N.W.A",
      description: "Hip-hop",
      price: "$26.50"
    },
    {
      id: 17,
      image:"https://hellgatelance.com/wp-content/uploads/2024/11/tyler-creator-chromakopia-album-1024x1024-1.webp",
      name: "Chromakopia by Tyler, The Creator",
      description: "Hip-hop and Alternative",
      price: "$29.00"
    },
    {
      id: 18,
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Rex_Orange_County_-_Who_Cares%3F.png/250px-Rex_Orange_County_-_Who_Cares%3F.png",
      name: "WHO CARES? by Rex Orange County",
      description: "Alternative and Indie Pop",
      price: "$24.00"
    },
    {
      id: 19,
      image:"https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62",
      name: "HIT ME HARD AND SOFT by Billie Eilish",
      description: "Pop and Electropop",
      price: "$27.50"
    },
    {
      id: 20,
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Winter_Heptagon.jpg/250px-Winter_Heptagon.jpg",
      name:" Winter Heptagon by GOT7",
      description: "K-Pop",
      price: "$22.50"
    },
    {
      id: 21,
      image:"https://upload.wikimedia.org/wikipedia/en/2/21/BTS_-_Map_of_the_Soul_7.png",
      name:" Map of the Soul: 7 by BTS",
      description: "K-Pop",
      price: "$30.00"
    },
    {
      id: 22,
      image:"https://upload.wikimedia.org/wikipedia/commons/2/21/Beyoncé_-_Beyoncé.svg",
      name:" Beyoncé by Beyoncé",
      description: "Pop and R&B",
      price: "$28.00"
    },
    {
      id: 23,
      image:"https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg",
      name:" Views by Drake",
      description: "Hip-hop and R&B",
      price: "$25.00"
    },
    {
      id: 24,
      image:"https://upload.wikimedia.org/wikipedia/en/d/d5/Wicked_The_Soundtrack.jpeg",
      name:" Wicked Original Broadway Cast Recording",
      description: "Musical Theatre",
      price: "$34.00"
    },
    {
      id: 25,
      image:"https://upload.wikimedia.org/wikipedia/en/b/b9/Freudian_by_Daniel_Caesar.jpg",
      name:" Freudian by Daniel Caesar",
      description: "R&B and Soul",
      price: "$26.00"
    },
    {
      id: 26,
      image:"https://upload.wikimedia.org/wikipedia/en/e/e4/Jeff_Buckley_grace.jpg",
      name:" Grace by Jeff Buckley",
      description: "Alternative Rock",
      price: "$27.00"
    },
    {
      id: 27,
      image:"https://upload.wikimedia.org/wikipedia/en/a/a9/Twenty88_cover.png",
      name:" Twenty88 by Big Sean & Jhené Aiko",
      description: "Hip-hop and R&B",
      price: "$24.50" 
    },
    {
      id: 28,
      image:"https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png",
      name:" Damn by Kendrick Lamar",
      description: "Hip-hop",
      price: "$28.50"
    },
    {
      id: 29,
      image:"https://upload.wikimedia.org/wikipedia/en/d/d9/Jungkook_-_Golden.png",
      name:" Golden by Jungkook",
      description: "K-Pop",
      price: "$29.99"
    },
    {
      id: 30,
      image:"https://i.scdn.co/image/ab67616d0000b27325b055377757b3cdd6f26b78",
      name:"The College Dropout by Kanye West",
      description: "Hip-hop",
      price: "$27.00" 
    },
    {
      id: 31,
      image:"https://upload.wikimedia.org/wikipedia/en/9/99/The_Miseducation_of_Lauryn_Hill.png",
      name:" The Miseducation of Lauryn Hill by Lauryn Hill",
      description: "R&B and Hip-hop",
      price: "$30.00"
    },
    {
      id: 32,
      image:"https://i.scdn.co/image/ab67616d0000b273a4dfa7122ec07fe3a1af22e7",
      name:" Nothing Was the Same by Drake",
      description: "Hip-hop and R&B",
      price: "$26.00"
    },
    {
      id: 33,
      image:"https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
      name:" Blonde by Frank Ocean",
      description: "R&B and Alternative",
      price: "$29.00"
    },
    {
      id: 34,
      image:"https://upload.wikimedia.org/wikipedia/en/7/7d/Khalid_-_American_Teen.png",
      name:" American Teen by Khalid",
      description: "R&B and Pop",
      price: "$25.50"
    },
    {
      id: 35,
      image:"https://i.scdn.co/image/ab67616d0000b2733b494c1b464d41ef641de442",
      name:"A Great Chaos (Deluxe) by Ken Carson",
      description: "Hip-hop",
      price: "$24.00"
    },
    {
      id: 36,
      image:"https://m.media-amazon.com/images/I/919JvdoQu5L._UF1000,1000_QL80_.jpg",
      name:"MAGICMAN 2 by Jackson Wang",
      description: "K-Pop and Pop",
      price: "$28.00"
    },
    {
      id: 37,
      image:"https://upload.wikimedia.org/wikipedia/en/0/0b/Drake_-_If_You%27re_Reading_This_It%27s_Too_Late.png",
      name:" If You're Reading This It's Too Late by Drake",
      description: "Hip-hop and R&B",
      price: "$27.50"
    },
    {
      id: 38,
      image:"https://upload.wikimedia.org/wikipedia/en/e/ee/Watch_The_Throne.jpg",
      name:" Watch the Throne by Jay-Z & Kanye West",
      description: "Hip-hop",
      price: "$30.00" 
    },
    {
      id: 39,
      image:"https://i.scdn.co/image/ab67616d00001e023317fc12f8b9a9a0b8459766",
      name:"Take Time by Giveon",
      description: "R&B",
      price: "$26.00"
    },
    {
      id: 40,
      image:"https://upload.wikimedia.org/wikipedia/en/0/0e/Childish_Gambino_-_Awaken%2C_My_Love%21.png",
      name:" Awaken, My Love! by Childish Gambino",
      description: "Funk and Soul",
      price: "$28.00"
    },
    {
      id: 41,
      image:"https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg",
      name:" Channel Orange by Frank Ocean",
      description: "R&B and Soul",
      price: "$27.00" 
    },
    {
      id: 42,
      image:"https://upload.wikimedia.org/wikipedia/en/0/03/Apricot_Princess.jpg",
      name:" Apricot Princess by Rex Orange County",
      description: "Alternative and Indie Pop",
      price: "$25.00"
    },
    {
      id: 43,
      image:"http://upload.wikimedia.org/wikipedia/en/c/c6/BreathofLovecover.jpg",
      name:" Breath of Love: Last Piece by GOT7",
      description: "K-Pop",
      price: "$24.50"
    },
    {
      id: 44,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/4-44_album_cover.svg/1200px-4-44_album_cover.svg.png",
      name:" 4:44 by Jay-Z",
      description: "Hip-hop",
      price: "$29.00"
    },
    {
      id: 45,
      image:"https://m.media-amazon.com/images/I/91qO99Pdt1L._UF1000,1000_QL80_.jpg",
      name:"Goodbye Yellow Brick Road by Elton John",
      description: "Rock and Pop",
      price: "$31.00"
    },
    {
      id: 46,
      image:"https://upload.wikimedia.org/wikipedia/en/2/2b/Bruno_Mars_-_24K_Magic_%28Official_Album_Cover%29.png",
      name:" 24K Magic by Bruno Mars",
      description: "Pop, R&B, and Funk",
      price: "$28.50"
    },
    {
      id: 47,
      image:"https://upload.wikimedia.org/wikipedia/en/5/5f/MagicMancover.jpg",
      name:" MAGICMAN by Jackson Wang",
      description: "K-Pop and Pop",
      price: "$27.00"
    },
    {
      id: 48,
      image:"https://upload.wikimedia.org/wikipedia/en/4/46/Fun_-_Some_Nights_album_cover.png",
      name:" Some Nights by Fun.",
      description: "Indie Pop and Rock",
      price: "$26.00"
    },
    {
      id: 49,
      image:"https://upload.wikimedia.org/wikipedia/en/9/99/Destiny%27s_Child_–_Survivor.jpg",
      name:" Survivor by Destiny's Child",
      description: "R&B and Pop",
      price: "$25.50"
    },
    {
      id: 50,
      image:"https://upload.wikimedia.org/wikipedia/en/d/d5/Harry_Styles_-_Harry%27s_House.png",
      name:" Harry's House by Harry Styles",
      description: "Pop and Rock",
      price: "$29.50"
    },
    {
      id: 51,
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Elton_John_-_Elton_John.jpg/250px-Elton_John_-_Elton_John.jpg",
      name:" Elton John by Elton John",
      description: "Rock and Pop",
      price: "$30.00"
    },
    {
      id: 52,
      image:"https://upload.wikimedia.org/wikipedia/en/b/be/Maroon_5_-_Songs_About_Jane.png",
      name:" Songs About Jane by Maroon 5",
      description: "Pop Rock",
      price: "$27.00"
    },
    {
      id: 53,
      image:"https://upload.wikimedia.org/wikipedia/en/b/b0/Rex_Orange_County_-_The_Alexander_Technique.jpg",
      name:" The Alexander Technique by Rex Orange County",
      description: "Alternative and Indie Pop",
      price: "$26.50"
    },
    {
      id: 54,
      image:"https://m.media-amazon.com/images/I/61Ptk7IYKDL._UF1000,1000_QL80_.jpg",
      name:"Jesus Is King by Kanye West",
      description: "Gospel and Hip-hop",
      price: "$28.00"
    },
    {
      id: 55,
      image:"https://upload.wikimedia.org/wikipedia/en/c/c8/CarterIII.jpg",
      name:" The Carter III by Lil Wayne",
      description: "Hip-hop",
      price: "$27.50"
    },
    {
      id: 56,
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Sisqo_unleash_the_dragon.jpg/250px-Sisqo_unleash_the_dragon.jpg",
      name:" Unleash the Dragon by Sisqó",
      description: "R&B and Pop",
      price: "$25.00"
    },
    {
      id: 57,
      image:"https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png",
      name:" Lemonade by Beyoncé",
      description: "Pop and R&B",
      price: "$30.00"
    },
    {
      id: 58,
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/250px-Drake_-_Certified_Lover_Boy.png",
      name:" Certified Lover Boy by Drake",
      description: "Hip-hop",
      price: "$29.00"
    },
    {
      id: 59,
      image:"https://upload.wikimedia.org/wikipedia/en/1/1a/Usher_-_8701.png",
      name:" 8701 by Usher",
      description: "R&B and Pop",
      price: "$26.00"
    },
    {
      id: 60,
      image:"https://upload.wikimedia.org/wikipedia/en/e/eb/Bruno_Mars_-_Doo-Wops_%26_Hooligans.png",
      name:" Doo-Wops & Hooligans by Bruno Mars",
      description: "Pop, R&B, and Reggae",
      price: "$27.00"
    },
    {
      id: 61,
      image:"https://upload.wikimedia.org/wikipedia/en/d/de/Steve_Lacy_-_Gemini_Rights.png",
      name:" Gemini Rights by Steve Lacy",
      description: "R&B and Funk",
      price: "$28.50"
    },
    {
      id: 62,
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png/250px-Kendrick_Lamar_-_Mr._Morale_%26_the_Big_Steppers.png",
      name:" Mr. Morale & the Big Steppers by Kendrick Lamar",
      description: "Hip-hop",
      price: "$30.00"
    },
    {
      id: 63,
      image:"https://upload.wikimedia.org/wikipedia/en/6/6c/Miguel_All-I-Want-Is-You.jpg",
      name:" All I Want Is You by Miguel",
      description: "R&B and Soul",
      price: "$27.00"
    },
    {
      id: 64,
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/b/be/MBDTF_ALT.jpg/250px-MBDTF_ALT.jpg",
      name:" My Beautiful Dark Twisted Fantasy by Kanye West",
      description: "Hip-hop",
      price: "$29.50"
    },
    {
      id: 65,
      image:"https://www.kpopusaonline.com/wp-content/uploads/2019/11/12.1.jpg",
      name:"Love Yourself: Answer by BTS",
      description: "K-Pop",
      price: "$28.00"
    },
    {
      id: 66,
      image:"https://m.media-amazon.com/images/I/A1CM0Qla82L._UF1000,1000_QL80_.jpg",
      name:"NEVER ENOUGH by Daniel Caesar",
      description: "R&B and Soul",
      price: "$27.00"
    },
    {
      id: 67,
      image:"https://upload.wikimedia.org/wikipedia/en/e/ed/The_Weeknd_-_Kiss_Land.png",
      name:" Kiss Land by The Weeknd",
      description: "R&B and Alternative",
      price: "$26.50"
    },
    {
      id: 68,
      image:"https://upload.wikimedia.org/wikipedia/en/8/8e/Silk_Sonic_-_An_Evening_with_Silk_Sonic.png",
      name:" An Evening with Silk Sonic by Silk Sonic",
      description: "R&B and Funk",
      price: "$29.00"
    },
    {
      id: 69,
      image:"https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg",
      name:" Ye by Kanye West",
      description: "Hip-hop",
      price: "$28.00"
    },
    {
      id: 70,
      image:"https://i.scdn.co/image/ab67616d0000b273532033d0d90736f661c13d35",
      name:"Paramore by Paramore",
      description: "Alternative Rock",
      price: "$27.50"
    },
    {
      id: 71,
      image:"https://m.media-amazon.com/images/I/81dnbo1g35L._UF1000,1000_QL80_.jpg",
      name:"In the Lonely Hour (Drowning Shadows Edition) by Sam Smith",
      description: "Pop and Soul",
      price: "$26.00"
    },
    {
      id: 72,
      image:"https://m.media-amazon.com/images/I/51XlJbrUjML._UF1000,1000_QL80_.jpg",
      name:"Black Panther: The Album by Various Artists",
      description: "Hip-hop and R&B",
      price: "$29.00"
    },
    {
      id: 73,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDBcOqv2K88Sj2zDiUvyXd-ou-vwLdAXrBBg&s",
      name:"Pablo Honey by Radiohead",
      description: "Alternative Rock",
      price: "$25.00"
    },
    {
      id: 74,
      image:"https://m.media-amazon.com/images/I/812EgYpATnL._UF1000,1000_QL80_.jpg",
      name:"Off the Wall by Michael Jackson",
      description: "Pop, Funk, and Disco",
      price: "$30.00"
    },
    {
      id: 75,
      image:"https://m.media-amazon.com/images/I/615SjH+Fp7L._UF1000,1000_QL80_.jpg",
      name:"Oddinary by Stray Kids",
      description: "K-Pop",
      price: "$28.50"
    },
    {
      id: 76,
      image:"https://upload.wikimedia.org/wikipedia/en/b/bd/The_Weeknd_-_Beauty_Behind_the_Madness.png",
      name:" Beauty Behind the Madness by The Weeknd",
      description: "R&B and Pop",
      price: "$27.00"
    },
    {
      id: 77,
      image:"https://upload.wikimedia.org/wikipedia/en/9/97/Lola_Young_-_This_Wasn%27t_Meant_For_You_Anyway_-_Cover.png",
      name:" This Wasn't Meant For You Anyway by Lola Young",
      description: "Indie Pop",
      price: "$26.50"
    },
    {
      id: 78,
      image:"https://upload.wikimedia.org/wikipedia/en/6/6e/Elton_John_-_Don%27t_Shoot_Me_I%27m_Only_the_Piano_Player.jpg",
      name:" Don't Shoot Me I'm Only the Piano Player by Elton John",
      description: "Rock and Pop",
      price: "$29.00"
    },
    {
      id: 79,
      image:"https://upload.wikimedia.org/wikipedia/en/7/7a/Sweetener_album_cover.png",
      name:" Sweetener by Ariana Grande",
      description: "Pop and R&B",
      price: "$28.00"
    },
    {
      id: 80,
      image:"https://upload.wikimedia.org/wikipedia/en/5/57/Laufey_-_Everything_I_Know_About_Love.png",
      name:" Everything I Know About Love by Laufey",
      description: "Jazz and Indie Pop",
      price: "$27.50"
    }
  ]);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  
  const expandCard = (productId) => {
    setExpandedCard(productId);
  };
  
  const closeCard = () => {
    setExpandedCard(null);
  };
  
  const handleCardClick = (e, productId) => {
    if (e.target.tagName === 'BUTTON') {
      return;
    }
    expandCard(productId);
  };

  const chunkProducts = (products, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < products.length; i += chunkSize) {
      chunks.push(products.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const renderProducts = () => {
    const productsPerRow = 20; 
    const productRows = chunkProducts(products, productsPerRow);
    
    const generateRowTitle = (rowIndex, rowLength) => {
      return `Nene's Vinyls Row ${rowIndex + 1}`;
    };

    return (
      <>
        {expandedCard && (
          <div className="card-backdrop show" onClick={closeCard}></div>
        )}
        <header id="booking-head">
        </header>
        <div id="booking">
          {productRows.map((row, rowIndex) => (
            <div key={rowIndex} className="product-row-container">
              <h3 className="row-title">
                {generateRowTitle(rowIndex, row.length)} ({row.length} albums)
              </h3>
              <div className="product-row">
                {row.map((product) => (
                  <div 
                    className={`card ${expandedCard === product.id ? 'expanded' : ''}`}
                    key={product.id}
                    onClick={(e) => handleCardClick(e, product.id)}
                  >
                    {expandedCard === product.id && (
                      <button className="card-close" onClick={closeCard}>
                        ×
                      </button>
                    )}
                    <div id="product">
                      <img src={product.image} alt={product.name} />
                      <h2> {product.name} </h2>
                      <h3> {product.description} </h3>
                      <h3> {product.price} </h3>
                      <button onClick={() => addToCart(product)}> Add to Cart </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const renderCart = () => (
    <>
      <div id="cart-container">
        <button onClick={() => navigateTo(PAGE_PRODUCTS)} id="products-btn">
          Back to Products
        </button>

        <h1 id="cart-title">Cart</h1>

        {cartItems.map((product) => (
          <div className="card" key={product.id}>
            <div id="product">
              <img src={product.image} alt={product.name} />
              <h2> {product.name} </h2>
              <h3> {product.description} </h3>
              <h3> {product.price} </h3>
              {product.quantity && <h4>Quantity: {product.quantity}</h4>}
            </div>
          </div>
        ))}
        <button 
          id="checkout-btn"
          onClick={() => navigate('/cart')}
        >
          Go to Full Cart Page
        </button>
      </div>
    </>
  );

  return (
    <div className="library-page">
      {renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
};

export default Booking;