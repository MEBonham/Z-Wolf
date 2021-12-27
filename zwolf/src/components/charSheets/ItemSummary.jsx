import React from 'react';

const ItemSummary = ({item, index}) => {

    return(
        <h4 className="itemSummary">
            <span className="nameQty">
                {item.name + (item.quantity > 1 ? ` (x${item.quantity})` : "")}
            </span>
            <span className="bulk">
                Bulk: {parseFloat(item.bulk) * item.quantity}
            </span>
        </h4>
    );
}

export default ItemSummary;