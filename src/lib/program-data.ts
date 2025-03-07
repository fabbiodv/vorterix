export interface Program {
    id: number
    name: string
    day: string
    timeSlot: string
    participants: string[]
    description?: string
    isSpecial?: boolean
}

export const programs: Program[] = [
    {
        id: 1,
        name: "Mañana va a estar bueno",
        day: "Lunes",
        timeSlot: "8:00 - 10:00",
        participants: ["Nachoide", "La Colo", "Pablo Kenny", "Fiorela Frac"],
        //description: "Programa matutino con noticias, música y humor.",
    },
    {
        id: 2,
        name: "Mañana va a estar bueno",
        day: "Martes",
        timeSlot: "8:00 - 10:00",
        participants: ["Nachoide", "La Colo", "Pablo Kenny", "Fiorela Frac"],
        // description: "Programa matutino con noticias, música y humor.",
    },
    {
        id: 3,
        name: "Mañana va a estar bueno",
        day: "Miércoles",
        timeSlot: "8:00 - 10:00",
        participants: ["Nachoide", "La Colo", "Pablo Kenny", "Fiorela Frac"],
        //description: "Programa matutino con noticias, música y humor.",
    },
    {
        id: 4,
        name: "Mañana va a estar bueno",
        day: "Jueves",
        timeSlot: "8:00 - 10:00",
        participants: ["Nachoide", "La Colo", "Pablo Kenny", "Fiorela Frac"],
        //description: "Programa matutino con noticias, música y humor.",
    },
    {
        id: 5,
        name: "Mañana va a estar bueno",
        day: "Viernes",
        timeSlot: "8:00 - 10:00",
        participants: ["Nachoide", "La Colo", "Pablo Kenny", "Fiorela Frac"],
        // description: "Programa matutino con noticias, música y humor.",
    },
    {
        id: 6,
        name: "Deja que entre el sol",
        day: "Lunes",
        timeSlot: "10:00 - 13:00",
        participants: ["Mario Pergolini", "Banzas", "Fortunato", "Tropeano"],
        // description: "Magazine de actualidad, entrevistas y música.",
    },
    {
        id: 7,
        name: "Deja que entre el sol",
        day: "Martes",
        timeSlot: "10:00 - 13:00",
        participants: ["Mario Pergolini", "Banzas", "Fortunato", "Tropeano"],
        // description: "Magazine de actualidad, entrevistas y música.",
    },
    {
        id: 8,
        name: "Deja que entre el sol",
        day: "Miércoles",
        timeSlot: "10:00 - 13:00",
        participants: ["Mario Pergolini", "Banzas", "Fortunato", "Tropeano"],
        // description: "Magazine de actualidad, entrevistas y música.",
    },
    {
        id: 9,
        name: "Deja que entre el sol",
        day: "Jueves",
        timeSlot: "10:00 - 13:00",
        participants: ["Mario Pergolini", "Banzas", "Fortunato", "Tropeano"],
        // description: "Magazine de actualidad, entrevistas y música.",
    },
    {
        id: 10,
        name: "Deja que entre el sol",
        day: "Viernes",
        timeSlot: "10:00 - 13:00",
        participants: ["Mario Pergolini", "Banzas", "Fortunato", "Tropeano"],
        // description: "Magazine de actualidad, entrevistas y música.",
    },
    {
        id: 11,
        name: "No se pudo",
        day: "Lunes",
        timeSlot: "13:00 - 15:00",
        participants: ["Castro", "Ernesto", "Palito", "Alexis Valido", "Juan Igal"],
        // description: "Programa de humor y actualidad.",
    },
    {
        id: 12,
        name: "No se pudo",
        day: "Martes",
        timeSlot: "13:00 - 15:00",
        participants: ["Castro", "Ernesto", "Palito", "Alexis Valido", "Juan Igal"],
        // description: "Programa de humor y actualidad.",
    },
    {
        id: 13,
        name: "No se pudo",
        day: "Miércoles",
        timeSlot: "13:00 - 15:00",
        participants: ["Castro", "Ernesto", "Palito", "Alexis Valido", "Juan Igal"],
        // description: "Programa de humor y actualidad.",
    },
    {
        id: 14,
        name: "No se pudo",
        day: "Jueves",
        timeSlot: "13:00 - 15:00",
        participants: ["Castro", "Ernesto", "Palito", "Alexis Valido", "Juan Igal"],
        // description: "Programa de humor y actualidad.",
    },
    {
        id: 15,
        name: "No se pudo",
        day: "Viernes",
        timeSlot: "13:00 - 15:00",
        participants: ["Castro", "Ernesto", "Palito", "Alexis Valido", "Juan Igal"],
        // description: "Programa de humor y actualidad.",
    },
    {
        id: 16,
        name: "Reporte Minoritario",
        day: "Lunes",
        timeSlot: "15:00 - 17:00",
        participants: ["Porrini", "Radomsky", "Ortega"],
        // description: "Programa de humor, música y actualidad.",
    },

    {
        id: 18,
        name: "Ochenta Veinte",
        day: "Miércoles",
        timeSlot: "15:00 - 17:00",
        participants: ["Guinzburg", "Bri Dominguez", "Marta Gonzalez"],
        // description: "Programa de humor, música y actualidad.",
    },
    {
        id: 19,
        name: "Desde el respeto",
        day: "Jueves",
        timeSlot: "15:00 - 17:00",
        participants: ["Beder", "Cavanna"],
        //description: "Programa de humor, música y actualidad.",
    },
    {
        id: 21,
        name: "Cinco Minutos Mas",
        day: "Lunes",
        timeSlot: "17:00 - 19:00",
        participants: ["Mernuel", "Moski", "Bauletti", "Guille"],
        //description: "Programa de humor, música y actualidad.",
    },
    {
        id: 23,
        name: "Cinco minutos mas",
        day: "Miércoles",
        timeSlot: "17:00 - 19:00",
        participants: ["Mernuel", "Moski", "Bauletti", "Guille"],
        // description: "Programa de humor, música y actualidad.",
    },
    {
        id: 24,
        name: "Se vive de esto?",
        day: "Jueves",
        timeSlot: "17:00 - 19:00",
        participants: ["Milica", "Boffe", "Benca"],
        //description: "Programa de actualidad, cultura y música.",
    },
    {
        id: 25,
        name: "Cinco minutos mas",
        day: "Viernes",
        timeSlot: "17:00 - 19:00",
        participants: ["Mernuel", "Moski", "Bauletti", "Guille"],
        // description: "Programa de humor, música y actualidad.",
    },
    {
        id: 26,
        name: "Paren la mano",
        day: "Lunes",
        timeSlot: "19:00 - 21:00",
        participants: ["Luquitas", "Alfredo", "German", "Rober", "Joaco"],
        //description: "Programa de actualidad, entrevistas y música.",
    },
    {
        id: 27,
        name: "Paren la mano",
        day: "Martes",
        timeSlot: "19:00 - 21:00",
        participants: ["Luquitas", "Alfredo", "German", "Rober", "Joaco"],
        //description: "Programa de actualidad, entrevistas y música.",
    },
    {
        id: 28,
        name: "Paren la mano",
        day: "Miércoles",
        timeSlot: "19:00 - 21:00",
        participants: ["Luquitas", "Alfredo", "German", "Rober", "Joaco"],
        //description: "Programa de actualidad, entrevistas y música.",
    },
    {
        id: 29,
        name: "Paren la mano",
        day: "Jueves",
        timeSlot: "19:00 - 21:00",
        participants: ["Luquitas", "Alfredo", "German", "Rober", "Joaco"],
        //description: "Programa de actualidad, entrevistas y música.",
    },
    {
        id: 30,
        name: "Paren la mano",
        day: "Viernes",
        timeSlot: "19:00 - 21:00",
        participants: ["Luquitas", "Alfredo", "German", "Rober", "Joaco"],
        //description: "Programa de actualidad, entrevistas y música.",
    },
    {
        id: 31,
        name: "Se nota mucho",
        day: "Lunes",
        timeSlot: "21:00 - 23:00",
        participants: ["Varela del rio", "El Mito Giles"],
        //description: "Programa musical con los mejores clásicos y novedades del rock.",
        //isSpecial: true,
    },
    {
        id: 32,
        name: "Esto no sucedio",
        day: "Martes",
        timeSlot: "21:00 - 23:00",
        participants: ["Noxi Pergolini", "Schapira", "Harry Alex"],
        //description: "Programa musical con los mejores clásicos y novedades del rock.",
        //isSpecial: true,
    },
    {
        id: 33,
        name: "Se nota mucho",
        day: "Miércoles",
        timeSlot: "21:00 - 23:00",
        participants: ["Varela del rio", "El Mito Giles"],
        //description: "Programa musical con los mejores clásicos y novedades del rock.",
        //isSpecial: true,
    },
    {
        id: 34,
        name: "Esto no sucedio",
        day: "Jueves",
        timeSlot: "21:00 - 23:00",
        participants: ["Noxi Pergolini", "Schapira", "Harry Alex"],
        //description: "Programa musical con los mejores clásicos y novedades del rock.",
        //isSpecial: true,
    },
    {
        id: 35,
        name: "Se nota mucho",
        day: "Viernes",
        timeSlot: "21:00 - 23:00",
        participants: ["Varela del rio", "El Mito Giles"],
        //description: "Programa musical con los mejores clásicos y novedades del rock.",
        //isSpecial: true,
    },
    {
        id: 36,
        name: "Esto no sucedio",
        day: "Lunes",
        timeSlot: "23:00 - 01:00",
        participants: ["Noxi Pergolini", "Schapira", "Harry Alex"],
        //description: "Programa nocturno con música alternativa y charlas.",
    },
    {
        id: 37,
        name: "Se nota mucho",
        day: "Martes",
        timeSlot: "23:00 - 01:00",
        participants: ["Varela del rio", "El Mito Giles"],
        // description: "Programa nocturno con música alternativa y charlas.",
    },
    {
        id: 38,
        name: "Esto no sucedio",
        day: "Miércoles",
        timeSlot: "23:00 - 01:00",
        participants: ["Noxi Pergolini", "Schapira", "Harry Alex"],
        //description: "Programa nocturno con música alternativa y charlas.",
    },
    {
        id: 39,
        name: "California Secreta",
        day: "Jueves",
        timeSlot: "23:00 - 01:00",
        participants: ["Seba de Caro", "Lucas Rodríguez", "Ramiro Bogliano"],
        //description: "Programa nocturno con música alternativa y charlas.",
    },
    {
        id: 40,
        name: "Esto no sucedio",
        day: "Viernes",
        timeSlot: "23:00 - 01:00",
        participants: ["Noxi Pergolini", "Schapira", "Harry Alex"],
        //description: "Programa nocturno con música alternativa y charlas.",
    },
    {
        id: 41,
        name: "Se dijo Todo",
        day: "Domingo",
        timeSlot: "20:00 - 22:00",
        participants: ["Montesano", "Kenny", "Pepazx"],
        //description: "Programa nocturno con música alternativa y charlas.",
    },
    {
        id: 42,
        name: "Desde el respeto",
        day: "Domingo",
        timeSlot: "22:00 - 00:00",
        participants: ["Beder", "Cavanna"],
        //description: "Programa nocturno con música alternativa y charlas.",
    },
]

