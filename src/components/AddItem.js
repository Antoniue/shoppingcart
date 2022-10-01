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
            <div className="amount">
                <button>+</button>
                <input type="number" placeholder="amount"/>
                <button>-</button>
            </div>
            </div>
            </>
            )
        })
    }
    </>
    )
}
export {AddItem};