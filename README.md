## IKEA SearchStax UX JS Demo

See Live Demo: [IKEA SearchStax UX-JS Demo](https://ikea-searchstax-demo.netlify.app/?searchstax[query]=*&searchstax[page]=1)

### Usage


- Clone this repository
- Run the commands:
```shell
$ cd ikea-searchstax-js-demo
$ npm install
$ npm run dev
```
- Open [http://localhost:1234](http://localhost:1234)

### HTML Structure

The main HTML file is `src/index.html`. 

### JavaScript Widgets

The main JavaScript file `src/index.js` imports and initializes several widgets from the `@searchstax-inc/searchstudio-ux-js` library. These widgets add search functionality to the web application.

1. Search Input Widget: This widget provides a search input field. It is added to the `searchstax-input-container` div in the HTML file.

```JS
searchstax.addSearchInputWidget("searchstax-input-container", {
    suggestAfterMinChars: 3,
    templates: {
    mainTemplate: {
        template: searchInput,
        searchInputId: "searchstax-search-input"
    },
    },
  });
```

2. Facets Widget: This widget provides a way to filter search results based on certain criteria. It is added to the `searchstax-facets-container` div in the HTML file.
;

```JS
searchstax.addFacetsWidget("searchstax-facets-container", {
    facetingType: "tabs",
    itemsPerPageDesktop: 9999,
    itemsPerPageMobile: 99,
    templates: {
        mainTemplateDesktop: {
            template: facetsTemplate,
        },
        facetItemTemplate: facetItemTemplate,
        facetItemContainerTemplate: facetItemContainerTemplate
    },

});
```

3. Search Feedback Widget: This widget provides feedback on the search results. It is added to the `search-feedback-container` div in the HTML file.
;

```JS
searchstax.addSearchFeedbackWidget("search-feedback-container", {
    templates: {
      main: {
          template: searchFeedback,
          originalQueryClass: `searchstax-feedback-original-query`
      }
    },
  });
```

4. Pagination Widget: This widget provides pagination for the search results. It is added to the `searchstax-pagination-container` div in the HTML file.
;

```JS
searchstax.addPaginationWidget("searchstax-pagination-container", {
    templates: {
        mainTemplate: {
            template: pagination,
            previousButtonClass: "searchstax-pagination-previous",
            nextButtonClass: "searchstax-pagination-next"
        }
    },
  });
```

Each widget is initialized with a configuration object that specifies its behavior and appearance. The templates for these widgets are defined in separate JavaScript files and imported into src/index.js.

### Parcel Bundler

Parcel is a web application bundler that is used in this project, as specified in the 	`package.json` file.

For more information on how to use and configure Parcel, refer to the [official Parcel documentation](https://parceljs.org/docs/).

