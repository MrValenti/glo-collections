// import img01 from "./assets/Tapiwa-2.png";

const cat = {
  tvAndAudio: "tvAndAudio",
  tvBox: "tvBox",
  powerTools: "powerTools",
  headphones: "headphones",
  cellPhones: "cellPhones",
  smartWatches: "smartWatches",
  gameAndVideo: "gameAndVideo",
  robotClean: "robotClean",
  sportWatches: "sportWatches",
  tablets: "tablets",
  computersAndLaptop: "computersAndLaptop",
  camerasAndPhotos: "camerasAndPhotos",
};
export const categories = [
  {
    _id: 1001,
    name: "BEVERAGES",
    image: "https://i.ibb.co/kM0FR2h/cat-Tv-Audio.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tvAndAudio",
  },
  {
    _id: 1002,
    name: "FRAGRANCES",
    image: "https://i.ibb.co/71hR65V/catTvBox.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tvBox",
  },
  {
    _id: 1003,
    name: "AFRICAN GARMETS",
    image: "https://i.ibb.co/0V0g6Gz/cat-Powertool.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "powerTools",
  },
  {
    _id: 1004,
    name: "FOOTWARE",
    image: "https://i.ibb.co/zST2Xdp/cat-Headphone.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "headphones",
  },
  {
    _id: 1005,
    name: "HOMEWARE",
    image: "https://i.ibb.co/jgk59BL/catPhone.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "cellPhones",
  },
  {
    _id: 1006,
    name: "ACCESSORIES",
    image: "https://i.ibb.co/B4NKfBZ/cat-Smart-Watch.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "smartWatches",
  },
  {
    _id: 1007,
    name: "APPAREL",
    image: "https://i.ibb.co/4gwLwT2/cat-Gaming.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "gameAndVideo",
  },
  {
    _id: 1008,
    name: "AFRICAN CRAFTS",
    image: "https://i.ibb.co/xjpdQrr/cat-Robot-Clean.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "robotClean",
  },
  {
    _id: 1009,
    name: "CONFECTIONERY",
    image: "https://i.ibb.co/HdNVLzh/cat-Sport-Watch.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "sportWatches",
  },
  {
    _id: 1010,
    name: "HEALTH & BEAUTY",
    image: "https://i.ibb.co/qCzTx4F/cat-Tablet.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "tablets",
  },
  {
    _id: 1011,
    name: "ELECTRONICS",
    image: "https://i.ibb.co/74bZ8PH/cat-Computer.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "computersAndLaptop",
  },
  {
    _id: 1012,
    name: "OFFICE & STATIONERY",
    image: "https://i.ibb.co/SVQVWSS/cat-Camera.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore.",
    _base: "camerasAndPhotos",
  },
];

export const highlightsProducts = [
  {
    _id: 3001,
    name: "New Deals at Best Pricadsaes",
    title: "From $40.00",
    buttonTitle: "Browse Deals",
    image: "https://i.ibb.co/G951N5B/highlights-One.webp",
    _base: "/product",
    color: "#000000",
  },
  {
    _id: 3002,
    name: "Colorful Redmi  Note 6 Pro",
    title: "From $40.00",
    buttonTitle: "Shop Cellphone",
    image: "https://i.ibb.co/bLRNKGq/highlights-Two.webp",
    _base: "/category/cellPhones",
    color: "#ffffff",
  },
  {
    _id: 3003,
    name: "1000 mAh Power Bank",
    title: "From $40.00",
    buttonTitle: "Shop Now",
    image: "https://i.ibb.co/svWYstT/highlights-Three.webp",
    _base: "/product",
    color: "#ffffff",
  },
];

export const newarrivalsProducts = [
  {
    _id: 3001,
    name: "New Deals at asaBest Prices22",
    title: "From $40.00",
    buttonTitle: "Browse Deals",
    image: "https://i.ibb.co/G951N5B/highlights-One.webp",
    _base: "/product",
    color: "#000000",
  },
  {
    _id: 3002,
    name: "Colorful Redmi  Note 6 Pro",
    title: "From $40.00",
    buttonTitle: "Shop Cellphone",
    image: "https://i.ibb.co/bLRNKGq/highlights-Two.webp",
    _base: "/category/cellPhones",
    color: "#ffffff",
  },
  {
    _id: 3003,
    name: "1000 mAh Power Bank",
    title: "From $40.00",
    buttonTitle: "Shop Now",
    image: "https://i.ibb.co/svWYstT/highlights-Three.webp",
    _base: "/product",
    color: "#ffffff",
  },
];



export const blogsData = [
  {
    _id: 4001,
    image: "https://i.ibb.co/XbQf5HS/blogOne.webp",
    title: "iPhone 15 rear camera design will be available",
    _base: "Technology",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minus atque ratione. Sequi eos aspernatur delectus officia nemo ipsum facere debitis fugiat eum, quod quia, eligendi nihil sapiente perferendis modi quisquam reiciendis minima esse dolorem, molestias aut? Eum, repudiandae sit ipsum officiis unde reprehenderit inventore odio doloremque recusandae nobis voluptatem ipsa atque, veritatis adipisci reiciendis.",
  },
  {
    _id: 4002,
    image: "https://i.ibb.co/wzNpcwp/blogTwo.webp",
    title: "Setup your surround sound speaker",
    _base: "Samrt thing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minus atque ratione. Sequi eos aspernatur delectus officia nemo ipsum facere debitis fugiat eum, quod quia, eligendi nihil sapiente perferendis modi quisquam reiciendis minima esse dolorem, molestias aut? Eum, repudiandae sit ipsum officiis unde reprehenderit inventore odio doloremque recusandae nobis voluptatem ipsa atque, veritatis adipisci reiciendis.",
  },
  {
    _id: 4003,
    image: "https://i.ibb.co/prdZ3s8/blog-Three.webp",
    title: "Hook up a receiver for your home theater",
    _base: "Life style",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi vitae minus atque ratione. Sequi eos aspernatur delectus officia nemo ipsum facere debitis fugiat eum, quod quia, eligendi nihil sapiente perferendis modi quisquam reiciendis minima esse dolorem, molestias aut? Eum, repudiandae sit ipsum officiis unde reprehenderit inventore odio doloremque recusandae nobis voluptatem ipsa atque, veritatis adipisci reiciendis.",
  },
];

export const products = [
  {
    _id: 2001,
    name: "Classic Leather Bag Smart Clock Alarm Pixel Art DIY By App LED Light Sign In Decoration Unique Gift",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 600,
    discountedPrice: 580,
    quantity: 1,
    rating: 4.5,
    reviews: 50,
    category: "TV & Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Samsung",
    isStock: true,
    overView: "Blutooth Speaker",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2002,
    name: "Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 180,
    quantity: 1,
    rating: 4.8,
    reviews: 80,
    category: "Smart Watches",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Samsung",
    isStock: true,
    overView: "Smart health watch",
    isNew: false,
    _base: cat?.smartWatches,
  },
  {
    _id: 2003,
    name: "Fitness M3 Color Screen Smart Sport Bracelet Activity Running Tracker Heart Rate For Children Men Women Watch For IOS Android",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 650,
    discountedPrice: 570,
    quantity: 1,
    rating: 4.2,
    reviews: 30,
    category: "Sport Watches",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "MI Exclusive",
    isStock: true,
    overView: "Smart health watch",
    isNew: true,
    _base: cat?.sportWatches,
  },
  {
    _id: 2004,
    name: "SJ8 Air 1290P 4K 60fps Action Camera WIFI Remote Control Waterproof Sports DV FPV Camera",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 400,
    discountedPrice: 350,
    quantity: 1,
    rating: 4.2,
    reviews: 120,
    category: "Camera & Photos",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: false,
    overView: "Cameras & Photos",
    isNew: false,
    _base: cat?.camerasAndPhotos,
  },
  {
    _id: 2005,
    name: "Redmi Xiaoai Speaker Play 2.4GHz 1.75 Inch Voice Remote Control Music Player Bluetooth 4.2 Mi Speaker For Android Iphone",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 90,
    discountedPrice: 80,
    quantity: 1,
    rating: 4.2,
    reviews: 20,
    category: "TV & Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Blutooth Speaker",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2006,
    name: "Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 300,
    discountedPrice: 280,
    quantity: 1,
    rating: 4.8,
    reviews: 110,
    category: "Smart Watches",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Smart health watch",
    isNew: false,
    _base: cat.smartWatches,
  },
  {
    _id: 2007,
    name: "Kinganda BT513 Foldable Bluetooth Headphones With Mic",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 600,
    discountedPrice: 550,
    quantity: 1,
    rating: 4,
    reviews: 60,
    category: "Headphones & Speakers",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Microphones",
    isNew: true,
    _base: cat.headphones,
  },
  {
    _id: 2008,
    name: "New Product Form Lapbook Light Handlift Business Office Game Ben EDP 13.5 In – Black China",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 1100,
    discountedPrice: 1080,
    quantity: 1,
    rating: 4.7,
    reviews: 190,
    category: "Computers & Laptops",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Computer Components",
    isNew: false,
    _base: cat?.computersAndLaptop,
  },
  {
    _id: 2009,
    name: "VIOMI V2 Pro LDS Sensor 2 In 1 Sweeping Mopping Robot Wet And Dry Vacuum Cleaner 2100Pa Strong Suction Self-Charging",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 450,
    discountedPrice: 380,
    quantity: 1,
    rating: 4.2,
    reviews: 70,
    category: "Robot Clean",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Robot Clean",
    isNew: true,
    _base: cat?.robotClean,
  },
  {
    _id: 2010,
    name: "Global Version Redmi Note 9 Pro 6GB RAM 64GB ROM Smartphone Mobile Phone",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 305,
    discountedPrice: 285,
    quantity: 1,
    rating: 4.1,
    reviews: 160,
    category: "Cell Phones",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Cual Sim Phones",
    isNew: true,
    _base: cat?.cellPhones,
  },
  {
    _id: 2011,
    name: "DIDSeth Pan Tilt Security Light Camera Full HD 1080P Wireless Wi-Fi IP Camera Home Dome Surveillance Cameras",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 350,
    discountedPrice: 280,
    quantity: 1,
    rating: 3.8,
    reviews: 250,
    category: "Cameras & Photos",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Security & Protection",
    isNew: true,
    _base: cat?.camerasAndPhotos,
  },
  {
    _id: 2012,
    name: "Electric Hot Melt Glue Gun Cordless Repair DIY Tool Heating Mini Glue Gun With Glue Sticks",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 150,
    discountedPrice: 80,
    quantity: 1,
    rating: 4.7,
    reviews: 90,
    category: "Power Tools",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Power Tools",
    isNew: true,
    _base: cat?.powerTools,
  },
  {
    _id: 2013,
    name: "MECOOL KH3 Android 10.0 Smart 4K 60fps TV Box – Black 2GB RAM + 16GB ROM",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 210,
    discountedPrice: 200,
    quantity: 1,
    rating: 3.9,
    reviews: 100,
    category: "TV Box",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "TV Box",
    isNew: true,
    _base: cat?.tvBox,
  },
  {
    _id: 2014,
    name: "Sony PS4 Controller Bluetooth Vibration Gamepad For Playstation 4 Detroit Wireless Joystick For PS4 Games Consol",
    images: [
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
      "https://i.ibb.co/kSCr7bx/women-3.jpg",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 80,
    discountedPrice: 75,
    quantity: 1,
    rating: 4.2,
    reviews: 110,
    category: "Game and Video",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Game & Video",
    isNew: true,
    _base: cat?.gameAndVideo,
  },
  {
    _id: 2015,
    name: "GSR 120-Li Hand Drill 12V Lithium Drill Household Power Tool Screwdriver With One Battery – GSR120-LI 1Battery",
    images: [
      "https://i.ibb.co/NxM3M4g/hand-Drill.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 560,
    discountedPrice: 400,
    quantity: 1,
    rating: 4,
    reviews: 300,
    category: "Power Tools",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Power Tools",
    isNew: true,
    _base: cat?.powerTools,
  },
  {
    _id: 2016,
    name: "Xiaomi Mi Outdoor Speaker Bluetooth 5.0 IP55 Waterproof Dustproof Portable Wireless Speaker",
    images: [
      "https://i.ibb.co/PMDZZPY/bluetooth-Speaker.webp",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 240,
    quantity: 1,
    rating: 4.2,
    reviews: 110,
    category: "TV and Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Blutooth Speakers",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2017,
    name: "Global Version Mi TV Stick Android TV 9.0 Smart 2K HDR 1GB RAM 8GB ROM Bluetooth 4.2 Mini TV Dongle",
    images: [
      "https://i.ibb.co/GvBj7SV/usb.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 60,
    discountedPrice: 55,
    quantity: 1,
    rating: 4,
    reviews: 100,
    category: "TV Box",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "TV Box",
    isNew: true,
    _base: cat?.tvBox,
  },
  {
    _id: 2018,
    name: "Xiaomi Mijia LCD Writing Tablet With Pen 10 13.5inch Digital Drawing Message Graphics Electronic Handwriting Pad With Pen",
    images: [
      "https://i.ibb.co/fxJkDbC/writing-Tablet.webp",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 350,
    discountedPrice: 330,
    quantity: 1,
    rating: 4.2,
    reviews: 70,
    category: "Tablets",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Tablets",
    isNew: true,
    _base: cat?.tablets,
  },
  {
    _id: 2019,
    name: "New Creative Cloth Art Home Outdoors Bluetooth Sound Box",
    images: [
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 120,
    discountedPrice: 100,
    quantity: 1,
    rating: 4.1,
    reviews: 20,
    category: "Bluetooth Speakers",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Bluetooth Speakers",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2020,
    name: "Global Version Redmi Note 9 Pro 6GB RAM 64GB ROM Smartphone Mobile Phone",
    images: [
      "https://i.ibb.co/WyvSw8N/phoneTwo.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 450,
    discountedPrice: 410,
    quantity: 1,
    rating: 3.7,
    reviews: 190,
    category: "Cell Phones",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Dual Sim Phones",
    isNew: true,
    _base: cat?.cellPhones,
  },
  {
    _id: 2021,
    name: "L21 Bluetooth Earphone Wireless Earbuds 5.0 TWS Headsets Dual Earbuds Bass Sound For Huawei Xiaomi IPhone Samsung Mobile Phones",
    images: [
      "https://i.ibb.co/vjrLRfV/earbuds.webp",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 350,
    discountedPrice: 320,
    quantity: 1,
    rating: 3.9,
    reviews: 10,
    category: "Headphones",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Fitness Headphones",
    isNew: true,
    _base: cat?.headphones,
  },
  {
    _id: 2022,
    name: "Roborock S7 Robot Vacuum Cleaner For Home Sonic Mopping Ultrasonic Carpet Clean Alexa Mop Lifting Upgrade For S5 Max",
    images: [
      "https://i.ibb.co/09ySKVm/vaccum-Cleaner.webp",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 250,
    discountedPrice: 240,
    quantity: 1,
    rating: 4.2,
    reviews: 100,
    category: "Robot Clean",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Robot Clean",
    isNew: true,
    _base: cat?.robotClean,
  },
  {
    _id: 2023,
    name: "Klipsch R-120SW Powerful Detailed Home Speaker – Unit",
    images: [
      "https://i.ibb.co/bR9LcZY/home-Speaker.webp",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 600,
    discountedPrice: 580,
    quantity: 1,
    rating: 4.7,
    reviews: 200,
    category: "TV & Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Bluetooth Speaker",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2024,
    name: "ZY418 Ultra-Thin Sport MP3 MP4 Music Player",
    images: [
      "https://i.ibb.co/f9GKwRd/mp3-Player.webp",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 80,
    discountedPrice: 70,
    quantity: 1,
    rating: 4.2,
    reviews: 60,
    category: "TV & Audio",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "MP3 Player",
    isNew: true,
    _base: cat?.tvAndAudio,
  },
  {
    _id: 2025,
    name: "Xiaomi Mi Watch Lite GPS Bluetooth 5.1 Smart Watch Sports Fitness Heart Rate Monitor 1.4 Inch TFTLCD Screen 5 ATM Waterproof Mi Band",
    images: [
      "https://i.ibb.co/9hHGFnT/watchTwo.jpg",
      "https://i.ibb.co/m6ZN7LX/soundBox.webp",
      "https://i.ibb.co/wdV3b9q/vaccum.webp",
      "https://i.ibb.co/tcdSfrr/blueGun.jpg",
      "https://i.ibb.co/pw0fGmx/gaming-Controller.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.",
    regularPrice: 220,
    discountedPrice: 210,
    quantity: 1,
    rating: 4.5,
    reviews: 90,
    category: "Smart Watches",
    colors: ["red", "blue", "green", "yellow", "black", "white"],
    brand: "Lorem ipsum dolor sit",
    isStock: true,
    overView: "Smart Health Watch",
    isNew: true,
    _base: cat?.smartWatches,
  },
];
