export const ProductDisplay = (props) => {
    console.log(props);
    return (
        <div className="main">
            {props.prodData.map((item) => {
                return (
                    <div className="card">
                        <img src={item.image} alt="image" />
                        <div>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>Rs.{item.cost}</p>
                            <p>{item.uses}</p>
                        </div>
                    </div>
                )

            })}

        </div>
    )
};
