const path = require('path');
const fs = require('fs');

const products = [];

module.exports = class product {
    constructor(title, imageUrl, price, description){
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        const p = path.join(
          path.dirname(process.mainModule.filename),
          'data',
          'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
          let products = [];
          if (!err) {
            products = JSON.parse(fileContent);
          }
          products.push(this);
          fs.writeFile(p, JSON.stringify(products), err => {
          });
        });
      }
    
      static fetchAll(cb) {
        const p = path.join(
          path.dirname(process.mainModule.filename),
          'data',
          'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
          if (err) {
            cb([]);
          }
          cb(JSON.parse(fileContent));
        });
      }
}