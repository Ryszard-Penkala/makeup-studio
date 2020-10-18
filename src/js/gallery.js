import Macy from 'macy';

const macyInstance = Macy({
  container: '#gallery-container',
  mobileFirst: true,
  columns: 1,
  breakAt: {
    400: 2,
    700: 3,
    1100: 4,
  },
  margin: {
    x: 10,
    y: 30,
  },
});

module.exports = macyInstance;
