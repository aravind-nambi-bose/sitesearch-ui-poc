import React from 'react';

function FilterLinks(props) {
  const searchResult = props.searchResult
  const items = []
  const buckets = searchResult.aggregations.productCategories.buckets

  buckets.map(bucket => {
    items.push(<div class="columnheader"><p>{bucket.key}({bucket.doc_count})</p></div>)
    return items
  })

  return (
      <div>
        <div class="rowheader">
          {items}
        </div>
      </div>
  );

}

export default FilterLinks;