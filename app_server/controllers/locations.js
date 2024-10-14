const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'Wholesale Shops',
    pageHeader: {
      title: 'Wholesale Shops',
      strapline: 'Your Trusted Source for Wholesale Recommendations',
    },
    sidebar: 'Discover the ultimate destination for wholesale shopping! Browse through our curated list of top-notch shops offering everything from groceries to garments. Take advantage of great deals, customer reviews, and essential facilities that make bulk buying a breeze. Start your journey to unbeatable prices and quality products today!',
    locations: [
      {
        name: 'Charminar Textile Market',
        address: 'Charminar, Hyderabad',
        rating: 3,
        facilities: ['Custom Stitching','Quality Assurance'],
        link:'/location'
      },
      {
        name: 'FeelKnit Garments Wholesale',
        address: 'Koti, Hyderabad',
        rating: 3,
        facilities: ['Custom garment labeling'],
        link:'/shop1'
      },
      {
        name: 'Begum Bazaar Grocery Wholesalers',
        address: 'Begum Bazaar, Hyderabad',
        rating: 3,
        facilities: ['Bulk Packaging', 'Organic Options'],
        link:'/shop2'
      },
    ],
  });
};
         /* GET 'Location info' page */
    const locationInfo = (req, res) => {
       res.render('location-info', { title: 'Location info' });
      };
      const shop1 = (req, res) => {
        res.render('shop1', { title: 'shop1' });
       };
       const shop2 = (req, res) => {
        res.render('shop2', { title: 'shop2' });
       };
      /* GET 'Add review' page */
      const addReview = (req, res) => {
       res.render('location-review-form', { title: 'Add review' });
      };
      module.exports = {
       homelist,
       locationInfo,
       addReview,
       shop1,
       shop2
      };
 