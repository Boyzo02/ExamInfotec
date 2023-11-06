const mongoose = require('mongoose');
const { randomUUID } = require('crypto');

const Budget= mongoose.model('Budget', {
    Id:{
        type: String,
        default: () => randomUUID()
    },
    FechaRegistro : {
        type: Date,
        trim: true,
        required: true
    },
    DetallePresupuesto :[{
        Año:{
            type: Number
        },
        Monto:{
            type: Number
        },
        Integrante:{
            type: String
        }
    }],
    AñoStart:{
        type: Number
    },
    AñoEnd:{
        type: Number
    },
    TipoCambioDolar:{
        type:Number
    }
});

module.exports = {Budget};