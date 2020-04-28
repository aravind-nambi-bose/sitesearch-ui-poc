import React from 'react';
import StarRatings from 'react-star-ratings'

function SearchResult(props) {
    const searchResult = props.searchResult
    let name = ""
    let price = -1
    let discount = -1
    let rating = 0
    let priceBlock = ""
    const items = []
    const hits = searchResult.hits.hits

    hits.map(hit => {
      name = hit._source.name
      price = hit._source.price
      discount = hit._source.discountPrice
      rating = hit._source.averageRating

      if (price === discount) {
        priceBlock = <p>{price}</p>
      } else {
        priceBlock = <p><strike>{price}</strike> | {discount}</p>
      }
      items.push(<div className="row"><div className="column"><h2>{name}</h2>{priceBlock}
      <StarRatings
          starRatedColor="gold"
          rating={rating}
          numberOfStars={5}
          name='rating'/></div></div>)
      return items
    })

    return (
        <div>
          {items}
        </div>
    );
}

export default SearchResult;