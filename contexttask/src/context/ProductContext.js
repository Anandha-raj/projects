import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products] = useState([
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://codeswear.nyc3.cdn.digitaloceanspaces.com/tshirts/first-rule-of-programming-tshirt-red/0.webp",
            "rating": {
                "rate": 3.9,
                "count": 120
            }
        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "category": "men's clothing",
            "image": "https://images.squarespace-cdn.com/content/v1/64e4d3f1ad4b471cc4644dc5/1692810970951-N2CM58BDKX4LPFV0LIPN/unisex-tri-blend-t-shirt-red-triblend-back-64e63eba975c9.jpg?format=1000w",
            "rating": {
                "rate": 4.1,
                "count": 259
            }
        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "category": "men's clothing",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWEScws7U5RziLql38WpG0BnJlQ97PGQJDuPKMw6e8uwKPdVs-OezJ5JApqd9E3bqfZw&usqp=CAU",
            "rating": {
                "rate": 4.7,
                "count": 500
            }
        },
        {
            "id": 4,
            "title": "Mens Casual Slim Fit",
            "price": 15.99,
            "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
            "category": "men's clothing",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9aUawt3HgIs-kjjgSBxZgmbJ6VDIAjnbnynHGM3YJrqNX0hnGj4vVH2fHPo5rUtoxNgQ&usqp=CAU",
            "rating": {
                "rate": 2.1,
                "count": 430
            }
        },
        {
            "id": 5,
            "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
            "price": 695,
            "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
            "category": "jewelery",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4jXRyvu0lNENsGECVw513FlXY8vpjq3kCARDgGHeOB27OHjxuNUCy0-X4w1VOAYhOno&usqp=CAU",
            "rating": {
                "rate": 4.6,
                "count": 400
            }
        },
        {
            "id": 6,
            "title": "Solid Gold Petite Micropave ",
            "price": 168,
            "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
            "category": "jewelery",
            "image": "https://i3.cpcache.com/merchandise/71677565/152_300x300_Front_Color-Black.jpg?Size=Large&AttributeValue=NA&c=True&region={%22name%22:%22FrontCenter%22,%22width%22:14.745,%22height%22:9.83,%22alignment%22:%22TopCenter%22,%22orientation%22:0,%22dpi%22:100,%22crop_x%22:321,%22crop_y%22:50,%22crop_h%22:983,%22crop_w%22:1000,%22scale%22:0.39880952,%22template%22:{%22id%22:71677565,%22params%22:{}}}&cid=PUartJBjiF%2Fyg4FdKqiggQ%3D%3D+%7C%7C+XVlSyljUrSbUthB2bOe%2F6w%3D%3D&ProductNo=496695507%20&Filters=[{%22name%22:%22background%22,%22value%22:%22ddddde%22,%22sequence%22:2}]",
            "rating": {
                "rate": 3.9,
                "count": 70
            }
        },
        {
            "id": 7,
            "title": "White Gold Plated Princess",
            "price": 9.99,
            "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
            "category": "jewelery",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9W4wM2TvxrgO5L-7dQr5Qa7T0-qKnvgVTg&s",
            "rating": {
                "rate": 3,
                "count": 400
            }
        },
        {
            "id": 8,
            "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
            "price": 10.99,
            "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
            "category": "jewelery",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5sTnhuX0boqGbB84n9c4_6cmPiJ5v4YZgMQ&s",
            "rating": {
                "rate": 1.9,
                "count": 100
            }
        },
        {
            "id": 9,
            "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
            "price": 64,
            "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
            "category": "electronics",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4s4xxC8UVswvvE9ENvsj1gvR_JwFqNwuKg&s",
            "rating": {
                "rate": 3.3,
                "count": 203
            }
        },
        {
            "id": 10,
            "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            "price": 109,
            "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
            "category": "electronics",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCXenZLwzoMyjwMjuhuI8xuR90ttls4oXAw&s",
            "rating": {
                "rate": 2.9,
                "count": 470
            }
        }
    ]);

    const [cart, setCart] = useState([]);

    const [cartCount, setCartCount] = useState(0);

    const [ cartTotal, setCartTotal ] = useState(0);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (product) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    };

    const isInCart = (product) => {
        return cart.some((item) => item.id === product.id);
    };

    return (
        <ProductsContext.Provider value={{ products, cart, addToCart, removeFromCart, isInCart, cartTotal, setCartTotal, cartCount, setCartCount }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProduct = () => {
    return useContext(ProductsContext);
};
