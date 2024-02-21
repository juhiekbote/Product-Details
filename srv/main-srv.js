const cds = require('@sap/cds');

module.exports = cds.service.impl (async function(){

    this.on('READ', 'ProductDetailsNorthwind', async function(req){
        const northwind_dest= await cds.connect.to('NorthWind');
        return await northwind_dest.run(req.query);


    });

});

