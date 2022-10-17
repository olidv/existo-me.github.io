/* --- JSON DATA: POLITICAL GPS TEST --------------------------------------------------------- */

/* Let the browser do the parsing, automatically. */
var dataPoliticalGps = {
    testDateVersion: new Date("2022-10-20T09:00:00.000Z"),

    testBasicVersion: 1.0,
    testBasicLength: 5,
    testBasicQueries: [
        {
            idQuery: 1,
            subject: "Assunto da 1ª Questão.",
            options: [
                { text: "Texto da 1ª opção.", rate: 2, side: -1 },
                { text: "Texto da 2ª opção.", rate: 2, side: +1 },
            ],
            enabled: true,
        },
        {
            idQuery: 2,
            subject: "Assunto da 2ª Questão.",
            options: [
                { text: "Texto da 1ª opção.", rate: 1, side: -1 },
                { text: "Texto da 2ª opção.", rate: 1, side: +1 },
            ],
            enabled: true,
        },
        {
            idQuery: 3,
            subject: "Assunto da 3ª Questão.",
            options: [
                { text: "Texto da 1ª opção.", rate: 2, side: -1 },
                { text: "Texto da 2ª opção.", rate: 2, side: +1 },
            ],
            enabled: true,
        },
        {
            idQuery: 4,
            subject: "Assunto da 4ª Questão.",
            options: [
                { text: "Texto da 1ª opção.", rate: 1, side: -1 },
                { text: "Texto da 2ª opção.", rate: 1, side: +1 },
            ],
            enabled: true,
        },
        {
            idQuery: 5,
            subject: "Assunto da 5ª Questão.",
            options: [
                { text: "Texto da 1ª opção.", rate: 2, side: -1 },
                { text: "Texto da 2ª opção.", rate: 2, side: +1 },
            ],
            enabled: true,
        },
    ],

    testExtraVersion: 1.0,
    testExtraLength: 0,
    testExtraQueries: [],
};
