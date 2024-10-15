/* GET 'about' page */
const about = (req, res) => {
    res.render('generic-text', { title: 'About' });
};

const timings = (req, res) => {
    res.render('timings', { 
        title: 'Timings', 
        timings: [
            { name: 'Ameerpet Electronics', opening: '10:00 AM', closing: '8:00 PM' },
            { name: 'Charminar Textile Market', opening: '9:30 AM', closing: '7:30 PM' },
            { name: 'Begum Bazaar Grocery', opening: '9:00 AM', closing: '6:00 PM' },
            { name: 'FeelKnit Garments', opening: '10:00 AM', closing: '7:00 PM' }
        ]
    });
};

module.exports = { about, timings };
