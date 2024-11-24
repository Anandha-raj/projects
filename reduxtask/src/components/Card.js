import { useState, useEffect } from "react";
import {useSelector} from 'react-redux';
import CardDetails from "./CardDetails";
import CartSummary from "./CartSummary";
const Card = ({handleTotalItems, totalItems}) => {
    let quantities = useSelector((state) => state.quantities);
    const [totalAmount, setTotalAmount] = useState(0);

    const [products] = useState([
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "The Apple iPhone 9 display is expected to be 5.2 inches (13.21 cm) tall.",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.pinimg.com/originals/84/ee/48/84ee48dbb18b783a991c2a22103b5649.jpg"
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://www.neolight.in/wp-content/uploads/2022/01/iphone-x-space-gray.png"
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://canoonstore.com/wp-content/uploads/2019/05/S9-Lilac-Purple.jpg"
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-f19-0.jpg"
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.gadgets360cdn.com/products/large/1553612275_635_huawei_p30.jpg"
        }
    ])

    useEffect(() => {
        if(quantities.length !== 0){
            const amount = products.reduce((prev, curr) => {
                return prev + (quantities[curr.id] ? quantities[curr.id] * curr.price : 0);
            }, 0); 
            setTotalAmount(amount);

            const total = products.reduce((prev, curr) => {
                return prev + (quantities[curr.id] ? quantities[curr.id] : 0);
            }, 0); 
            handleTotalItems(total);
        }
    },[quantities,handleTotalItems])
    return (
        <div className="container my-5">
            <div className="row g-4">
                <div className="col-sm-9">
                    <div className="row g-4">
                        <CardDetails products={products} quantities={quantities} />
                    </div>
                </div>
                <div className="col-sm-3">
                    <CartSummary totalItems={totalItems} totalAmount={totalAmount} />
                    <div className="card p-3 shadow-lg" style={{
                            backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghlQ-3kNoemHaZDRIAwFMD-ZU-2Ah1sox-KuZp29t_hIAH2SeyJ2d6Id4J3Xf_jTghSA&usqp=CAU)`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "400px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;