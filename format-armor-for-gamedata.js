const fs = require('fs');
const armor = JSON.parse(fs.readFileSync('converted-armor.json', 'utf8'));

// Compact format on one line per armor piece
const lines = armor.map(a => {
    return `        ${JSON.stringify(a)}`;
});

console.log('    // Real MHW armor from equipementsData.js');
console.log('    armor: [');
console.log(lines.join(',\n'));
console.log('    ],');
