const homelist = (req, res) => {
    res.render('locations-list', {
      title:'Whole Sale Shops',
      pageHeader: {
        title: 'Whole Sale Shops',
        strapline: 'sell goods in large quantities at lower prices'
      },
      sidebar: 'Wholesale shops, often referred to in the context of wholesale trade, are businesses that sell goods in large quantities at lower prices, primarily to retailers or other businesses rather than directly to consumers.' ,
         locations:[{
           name: 'Sanskriti whole sale',
           address: 'General bazar,kalasiguda',
           rating: 4,
           facilities: ['kurthis','palazo'],
           distance: '100m'
         },{
           name: 'SNS sarees and Dresses whole sale',
           address: 'Tobacco bazar,secunderabad ',
           rating: 3,
           facilities: ['cotton', 'Designer', 'Tops skirts'],
           distance: '200m'
         },{
           name: 'SLS mart whole sale',
           address: 'Bodduppal,near Global champs school',
           rating: 3,
           facilities: [ 'All household goods and appliances'],
           distance: '250m'
         }]
       });
      };
         /* GET 'Location info' page */
    const locationInfo = (req, res) => {
       res.render('location-info', { title: 'Location info' });
      };
      /* GET 'Add review' page */
      const addReview = (req, res) => {
       res.render('location-review-form', { title: 'Add review' });
      };
      module.exports = {
       homelist,
       locationInfo,
       addReview
      };
 