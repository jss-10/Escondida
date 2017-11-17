function conecta()
{
    const mysql = require("mysql");
    const connection = mysql.createConnection(
        {
            host:"localhost",
            user:"root",
            password:"1234",
            database:"escondida"
        }
    );
    
    connection.connect((err) => {
        if(err)
        {
            return console.log(err.stack);        
        }
        console.log("Conexion exitosa");
    });
    
    var txt_buscar = document.getElementById("txt_buscar");
    $query = 'SELECT descrip FROM producto WHERE cod_barra = ' + txt_buscar.value;
    
    connection.query($query,(err,rows,fields) => {
        if(err)
        {
            console.log("Error al ejecutar la consulta");
            console.log(err);
            return;
        }
        console.log("Consulta exitosa",rows);
        document.getElementById("txt_descripcion").value = rows[0].descrip;
    });
    
    connection.end(() => {
        console.log("Conexion cerrada");
    });
}