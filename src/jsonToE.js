const fs = require('fs');
const json2xls = require('json2xls');
const json = require("./SCHOOL_DATA");
let jsonArr = [];
// for (let jsonKey in json) {
//     jsonArr.push({
//         "A": json[jsonKey].cn, // A 内容
//         "B": json[jsonKey].en, // B 内容
//     });
// }
json.forEach(item => {
    jsonArr.push({
        "中文": item.ChineseName, // A 内容
    })
});
fs.writeFileSync('./data.xlsx', json2xls(jsonArr), 'binary');

// 运行: node jsonToE.js