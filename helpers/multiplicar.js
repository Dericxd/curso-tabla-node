const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try{
        
        let salida, consola = ''
        
        for (var i = 1; i <= hasta; i++) {            
            salida += `${i} x ${base} = ${i * base} \n`;
            consola += `${i} ${'x'.blue} ${base} ${'='.blue} ${i * base} \n`;
        }
        
        if ( listar == true ){
            console.log('========================='.green);
            console.log('        Tabla del       '.green,colors.blue(base));
            console.log('========================='.green);

            console.log(consola);
        }
    
        // fs.writeFileS(`tabla-${x}.txt`,salida, (err)=>{
        //     if (err) throw err;
        //     console.log(`tabla-${x}.txt creada`);
    
        // });    
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Tabla ${base}.txt creado`;
    }catch (err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}