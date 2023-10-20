const Item = ({name, img, price }) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} style={{ width: 100}}/>
            <h2>${price}</h2>
            <button>Ver detalle</button>
        </div>
    )
}

export default Item