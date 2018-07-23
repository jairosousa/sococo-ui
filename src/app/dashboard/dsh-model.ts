export class Dado {
    dia: string;
    total: string;
}

export class DadosDiarios {
    processados: Dado[];
    desfibrados: Dado[];
    aguasSococo: Dado[] = [];
    aguasVerde: Dado[] = [];
    caixasPadraos: Dado[] = [];
    cris: Dado[] = [];
    flococos: Dado[] = [];
    numFados: Dado[] = [];
    oleosETE: Dado[] = [];
    oleosTipoA: Dado[] = [];
    percentGerminados: Dado[] = [];
    tortas: Dado[] = [];
    totalCacambas: Dado[] = [];

    constructor(){
    }
}

export class Cocos {
    processados: Dado[];
    desfibrados: Dado[];
}

export class Desfibrados {
    dados: Dado[];
}

export class Processados {
    dados: Dado[];
}