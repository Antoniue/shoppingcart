function AddItem({items}){
    return (
    <>
    {
        items.map(items => {
            return (
            <>
            <div className="item">
            <img src={items.src} alt="" />
            <p>{items.item}</p>
            <button >Add To Cart</button>
            </div>
            </>
            )
        })
    }
    </>
    )
}
export {AddItem};