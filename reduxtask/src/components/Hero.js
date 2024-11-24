function Hero() {
    return (
        <div
            className="text-light text-center"
            style={{
                backgroundImage: `url(https://images.samsung.com/is/image/samsung/assets/mx-faq-23-6/mx-faq-23-6-4/Samsung-Galaxy-Light-Mode-Hero.png?$ORIGIN_PNG$)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3rem",
                fontWeight: 600
            }}
        >
            Aadhvik Mobiles
            <p
                className="fs-5 my-3"
                style={{ opacity: 0.5 }}
            >
                With this shop homepage template
            </p>
        </div>
    );
}

export default Hero;
