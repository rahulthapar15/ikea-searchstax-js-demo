const pagination = `
    {{#results.length}}
        <div class="searchstax-pagination-container">
        <div class="searchstax-pagination-content">
        
            <div class="searchstax-pagination-details">
            Showing {{startResultIndex}} - {{endResultIndex}} of {{totalResults}} results
            </div>
            <a class="searchstax-pagination-next {{#isLastPage}}hide{{/isLastPage}}" id="searchstax-pagination-next">Show more</a>

        </div>
        </div>
    {{/results.length}}
    `

export { pagination }