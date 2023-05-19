import _ from 'lodash';

const a = _.chunk([1, 2, 3, 4, 5], 2);
const b = _.chunk(['1', '2'], 2);
console.log(a);
console.log(b);
