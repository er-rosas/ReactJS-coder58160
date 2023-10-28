import classes from './ItemDetail.module.css'
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className={`${classes.prodDetail}`}>
            <picture className={`${classes.image}`}>
                <img src={img} alt={name} />
            </picture>
            <section className={`${classes.detail}`}>
                <h2>
                    {name}
                </h2>
                <p className={`${classes.desc1}`}>
                    Categoria: {category}
                </p>
                <p className={`${classes.desc2}`}>
                    Descripción: {description}
                </p>
                <p className={`${classes.desc3}`}>
                    Precio: ${price}
                </p>
                <div>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada' ,quantity)}/>
                </div>
            </section>
        </article>
    )
}

export default ItemDetail