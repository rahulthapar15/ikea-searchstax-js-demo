// Import SearchStax UX JS
import { Searchstax } from '@searchstax-inc/searchstudio-ux-js';

// Config required with Endpoints and API Keys
import { initConfig } from './config';

// Widgets Import
import { searchInput } from './widgets/searchInput';
import { facetsTemplate, facetItemTemplate, facetItemContainerTemplate } from './widgets/facets';
import { searchFeedback } from './widgets/searchFeedback';
import { pagination } from './widgets/pagination';

// Styling Imports
import '@searchstax-inc/searchstudio-ux-js/dist/styles/mainTheme.css'
import './main.scss'
import './ikeastyle.scss'

// Initialize SearchStax with config
const searchstax = new Searchstax();
searchstax.initialize( initConfig.acceleratorSample );


// Add Widgets

// 1. Input Widget
searchstax.addSearchInputWidget("searchstax-input-container", {
    suggestAfterMinChars: 3,
    templates: {
    mainTemplate: {
        template: searchInput,
        searchInputId: "searchstax-search-input"
    },
    },
  });

// 2. Facets Widget
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

// 3. Search Feedback Widget
searchstax.addSearchFeedbackWidget("search-feedback-container", {
    templates: {
      main: {
          template: searchFeedback,
          originalQueryClass: `searchstax-feedback-original-query`
      }
    },
  });

// 4. Pagination Widget
searchstax.addPaginationWidget("searchstax-pagination-container", {
    templates: {
        mainTemplate: {
            template: pagination,
            previousButtonClass: "searchstax-pagination-previous",
            nextButtonClass: "searchstax-pagination-next"
        }
    },
  });




 
