import { AddItem } from "./AddItem";
import shop1 from './shop1.jpeg';
import shop2 from './shop2.jpeg';
import shop3 from './shop3.jpeg';

function ShopPage(){
    let items = [{'src': shop1, 'item': 'GPU 1 Lorem Ipsum'},{'src': shop2, 'item': 'GPU 2 Lorem Ipsum'}, {'src': shop3, 'item': 'GPU 3 Lorem Ipsum'}];
    return(
        <>
            <div className="itemsBox">
                <AddItem items={items}/>
            </div>
        </>
    )
}

export {ShopPage};