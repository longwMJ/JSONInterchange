const fs = require('fs');
const xlsx2json = require('xlsx2json');
xlsx2json(
    './data.xlsx', // url
    {
        dataStartingRow: 3,  // 第几行开始
        mapping: {    // 解析 key value
            'key1': 'A',
        }
    }
).then(jsonArray => {  // 输出数组  格式自行log
    fs.writeFileSync('./demo.json', JSON.stringify(jsonArray));
});

// node EToJson.js   