// https://smoothknowledge.com/2018/09/06/connecting-sql-server-with-node-js/
var sql = require("mssql/msnodesqlv8");
//Initiallising connection string
var dbConfig = {
    driver: 'msnodesqlv8',
    connectionString: 'Driver={SQL Server Native Client 11.0};Server={(LocalDb)\\MSSQLLocalDB};Database={mean};Trusted_Connection={yes};'
};

class Database {
    executeQuery(query, successHandler, errorHandler) {
        console.log("executing database query, todo")
    }
}

function exec(query, successHandler, errorHandler) {
    console.log("in exec")
    sql.connect(dbConfig).then(() => {
        console.log("db connection established")
        sql.query(query).then((results) => {
            console.log("results are here")
            successHandler(results.recordset)
            sql.close();
            console.log("connection closed")
        }).catch((err) => {
            errorHandler(err)
            sql.close();
            console.log("connection closed")
        })

    }).catch(err => {
        console.error("connection failed", err)
        sql.close();
    })
}

module.exports = exec