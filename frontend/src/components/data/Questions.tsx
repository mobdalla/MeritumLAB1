// SEZIONE 1: Informazioni Personali e Professionali (Domande 1-50)
export const section1Questions = [
  // Esempio di domande - SOSTITUISCI CON LE TUE 50 DOMANDE
  {
    id: "q1",
    text: "Paese di Residenza",
    type: "select" as const,
    required: true,
    placeholder: "Mario Rossi",
  },
  {
    id: "q2",
    text: "Regione di residenza",
    type: "select" as const,
    required: true,
    placeholder: "mario.rossi@email.com",
  },
  {
    id: "q3",
    text: "citta di residenza",
    type: "tel" as const,
    required: true,
    placeholder: "+39 123 456 7890",
  },
  {
    id: "q4",
    text: "Sei attualmente occupato?",
    type: "select" as const,
    required: true,
    options: [
      "Sì",
      "No",
      "In cerca di nuove opportunita",
      "studente",
      "freelance",
    ],
  },
  {
    id: "q5",
    text: "Sei disposto a trasferirti in un'altra citta per lavoro?(Si/No/Dipende)",
    type: "radio" as const,
    options: ["SI", "No", "Dipende"],
  },
  {
    id: "q12",
    text: "Indica la RAL desiderata ",
    type: "select" as const,
    placeholder: "es. 30.000€",
    options: [
      "18.000",
      "18.000-22.000",
      "22.000-26.000",
      "26.000-30.000",
      "30.000-35.000",
    ],
  },
  {
    id: "q13",
    text: "Hai la cittadinanza del tuo paese di residenza?",
    type: "radio" as const,
    options: ["Si", "No"],
  },
  {
    id: "q10",
    text: "Sei disponibile a lavorare nei weekend o festivi, se necessario ?",
    type: "radio" as const,
    required: true,
    options: ["SI", "NO"],
  },
  {
    id: "q7",
    text: "Sei disposto a trasferirti all'estero per lavoro?",
    type: "radio" as const,
    options: ["SI", "NO"],
    required: true,
  },
  {
    id: "q8",
    text: "Sei disposto a lavorare in modalita remota o ibrida",
    type: "radio" as const,
    required: true,
    options: ["Remoto", "Ibrido", "In presenza", "Indifferente"],
  },
  /*  {
    id: "q8",
    text: "Hai conseguito cetificazioni o cors di formazione riconosciuti a livello nazionale o internazione?",
    type: "text" as const,
    required: true,
  },*/
  /* {
    id: "q9",
    text: "Qual e il tuo titlo di studio piu alto conseguito",
    type: "select" as const,
    required: true,
    options: [
      "Licenza Media",
      "Diploma",
      "Laurea Triennale",
      "Laurea Magistrale",
      "Master",
      "Dottorato",
    ],
  },*/
  {
    id: "q9",
    text: "Sei disponibile a lavorare su  turni, anche notturni?(si[Indica quali/No])",
    type: "radio" as const,
    required: true,
    options: ["Si", "No"],
  },
  {
    id: "q11",
    text: "Quando  saresti disponibile per iniziare un nuovo impiego?",
    type: "select" as const,
    required: true,
    options: ["Immediata", "Entro 1 mese", "Oltre 3 mesi"],
  },
  {
    id: "q17",
    text: "Hai conoscenze linguistiche oltre quella del tuo paese di residenza?",
    type: "radio" as const,
    options: ["Si", "No"],
  },
  {
    id: "q14",
    text: "Anni di quanti anni hai lavorato nella tua ultima posizione",
    type: "select" as const,
    required: true,
    options: ["0-1 anni", "1-3 anni", "3-5 anni", "5-7 anni", "7+"],
  },
  {
    id: "q15",
    text: "Quale e  la tua disponibilita oraria",
    type: "select" as const,
    required: true,
    options: ["Full-time", "Part-time", "Progetto", "Stage"],
  },
  {
    id: "q16",
    text: "Sei Automunito?",
    type: "radio" as const,
    options: ["Sì", "No"],
  },

  // { id: "q16", text: "Ultima azienda", type: "text" as const, required: true },
  //  {
  //    id: "q17",
  //    text: "Periodo (da - a)",
  //    type: "text" as const,
  //    required: true,
  ///  },
  //  {
  //    id: "q18",
  //    text: "Descrivi le tue responsabilità principali",
  //    type: "textarea" as const,
  //    required: true,
  //  },
  {
    id: "q18",
    text: "Se si, indica le lingue e il livello",
    type: "select" as const,
    required: true,
    options: [
      "A1",
      "A2",
      "B1",
      "B2",
      "C1",
      "C2",
      // "dat completare"
    ],
  },
];
export const Domande = [
  {
    id: "q21",
    text: "In quale anno hai terminato o prevedi di terminare il percorso di studi",
    type: "number" as const,
    required: true,
  },
  {
    id: "q23",
    text: "Hai conseguito certificazione o corsi di formazione riconosciuti a livello nazionale o internazionale ?",
    type: "text" as const,
    required: true,
  },
  {
    id: "q24",
    text: "Sei interessato/a a frequentare corsi di aggiornamento offerti da potenziali datori di lavoro?",
    type: "radio" as const,
    options: ["Sì", "No", "Dipende"],
  },
  {
    id: "q25",
    text: "Hai conoscenze informatiche di base",
    type: "radio" as const,
    options: ["Uso pc", "inviare email", "stampare"],
  },

  { id: "q22", text: "Periodo azienda precedente", type: "text" as const },

  {
    id: "q25",
    text: "Competenze informatiche principali",
    type: "textarea" as const,
    required: true,
  },
  {
    id: "q27",
    text: "Livello competenza Microsoft Office",
    type: "select" as const,
    required: true,
    options: ["Base", "Intermedio", "Avanzato", "Esperto"],
  },
  {
    id: "q27",
    text: "Sei in grado di utilizzare strumenti di analisi dati o metriche di performance?",
    type: "radio" as const,
    options: ["Si Ads", "No", "In parte"],
  },
  {
    id: "q28",
    text: "Hai mai lavorato in un ambiente internazionale o multiculturale?",
    type: "radio" as const,
    options: ["Si", "No"],
  },
  {
    id: "q29",
    text: "Hai gia avuto esperieze lavorative precedenti?",
    type: "radio" as const,
    options: ["Si", "No"],
  },
  {
    id: "q32",
    text: "Come valuteresti la tua capacita di lavorare in team",
    type: "text" as const,
    placeholder: "1-5",
  },
  {
    id: "q34",
    text: "come gestisci i problemi o gli imprevisti sul lavoro?",
    type: "select" as const,
    options: [
      "Analizzo e cerco soluzione da solo ",
      "Chiedo supporto ma contribuisco attivamente",
      "affido alle decisioni del responsabile",
    ],
  },
  {
    id: "q37",
    text: "come  reagisci a cambiamenti improvvisi nelle tue mansioni o nell'Organizzazione del lavoro?",
    type: "textarea" as const,
    required: true,
    placeholder:
      "Li accoglo senza problemi, mi adatto velocemente, faccio fatica a cambiare routine",
  },
  {
    id: "q38",
    text: "Hai mai contribuito al miglioramento di un processo, di un prodotto o di un metodo di lavoro",
    type: "select" as const,
    required: true,
    options: ["Si con successo", "Si ma senza conseguenze reale", "No"],
  },
  {
    id: "q41",
    text: "Hai esperienza nella gestione di progetti/attivita?",
    type: "radio" as const,
    options: ["Sì", "No"],
  },
  {
    id: "q29",
    text: "Se sì, quali linguaggi conosci?",
    type: "textarea" as const,
  },
  {
    id: "q30",
    text: "Sei Automunito?",
    type: "radio" as const,
    options: ["Sì", "No"],
  },
  {
    id: "q31",
    text: "Sei disposto a trasferirti all'estero per lavoro?",
    type: "radio" as const,
    required: true,
    options: ["Sì", "No", "Dipende"],
  },
  {
    id: "q32",
    text: "Sei disposto a fare delle trasferte occasionali",
    type: "select" as const,
    options: ["Si", "No", "Dipende"],
  },
  {
    id: "q33",
    text: "Sei disposto a lavorare in modalita remota o ibrida",
    type: "radio" as const,
    required: true,
    options: ["Remoto", "Ibrido", "In presenza", "Indifferente"],
  },
  {
    id: "q34",
    text: "Città preferite per eventuale trasferimento",
    type: "textarea" as const,
  },
  {
    id: "q35",
    text: "Tipo di contratto preferito",
    type: "select" as const,
    required: true,
    options: [
      "Tempo Indeterminato",
      "Tempo Determinato",
      "Partita IVA",
      "Apprendistato",
      "Stage",
      "Indifferente",
    ],
  },
  {
    id: "q36",
    text: "Quale e  la tua disponibilita oraria",
    type: "select" as const,
    required: true,
    options: ["Full-time", "Part-time", "Progetto", "Stage"],
  },
  {
    id: "q37",
    text: "Sei disposto a lavorare in modalita remota o ibrida",
    type: "radio" as const,
    required: true,
    options: [
      "Sì, esclusivamente",
      "Sì, modalità ibrida",
      "No, preferisco in presenza",
      "Indifferente",
    ],
  },
  {
    id: "q38",
    text: "Quando  saresti disponibile per iniziare un nuovo impiego?",
    type: "select" as const,
    required: true,
    options: ["Immediata", "Entro 1 mese", "Oltre 3 mesi"],
  },
  {
    id: "q39",
    text: "Indica la RAL desiderata ",
    type: "select" as const,
    placeholder: "es. 30.000€",
    options: [
      "18.000",
      "18.000-22.000",
      "22.000-26.000",
      "26.000-30.000",
      "30.000-35.000",
    ],
  },
  {
    id: "q40",
    text: "Hai la cittadinanza del tuo paese di residenza?",
    type: "radio" as const,
    options: ["Si", "No"],
  },

  {
    id: "q43",

    text: "Hai esperienza diretta nella  gestione clienti o fornitori?",
    type: "radio" as const,
    options: ["SI", "NO"],
  },
  {
    id: "q43",
    text: "Sei attualmente occupato?",
    type: "select" as const,
    required: true,
    options: [
      "Sì",
      "No",
      "In cerca di nuove opportunita",
      "studente",
      "freelance",
    ],
  },

  {
    id: "q45",
    text: "Ti senti piu portato per ruoli operativi o gestionali ?",
    type: "select" as const,
    options: ["Operativo", "Gestionale", "Entrambi"],
  },

  {
    id: "q46",
    text: "Hai mai lavorato in un ambiente internazionale o multiculturale?",
    type: "radio" as const,
    options: ["Si", "No"],
  },
  {
    id: "q47",
    text: "Come valuteresti la tua capacita di problem solving?",
    type: "text" as const,
    placeholder: "1-5",
  },
  {
    id: "q48",
    text: "Preferisci lavorare come?",
    type: "radio" as const,
    required: true,
    options: ["Dipendente", "P.IVA", "Indifferente"],
  },
  {
    id: "q49",
    text: "Quanto conta per te la possibilita di carriera interna?",
    type: "text" as const,
    placeholder: "1-5",
  },
  {
    id: "q50",
    text: "Ti piacerebbe lavorare in una startup o perferisci una realta gia ben strutturata?",
    type: "radio" as const,
    options: ["Si", "No", "Indifferente"],
  },
];

// SEZIONE 2: Competenze e Motivazioni (Domande 51-100)
export const section2Questions = [
  // Esempio di domande - SOSTITUISCI CON LE TUE 50 DOMANDE
  {
    id: "q51",
    text: "Da quanti anni lavori o hai lavorato nel settore della logistica o gestione magazzino?",
    type: "radio" as const,
    required: true,
    options: ["0-1", "1-3", "3-5", "5-7", "7+"],
  },
  {
    id: "q52",
    text: "In quali tipologie di aziende hai lavorato in questo specifico settore?",
    type: "Select" as const,
    required: true,
    options:[
      "Grandi Imprese",
      "Media Imprese",
      "Piccole Imprese",
      "Startup",
      "Cooperative",
      "Agenzie di somministrazione"
    ]
  },
  {
    id: "q53",
    text: "In quali dei seguenti ambiti hai maturato gia esperienza?",
    type: "select" as const,
    options: [
      "Stoccaggio",
      "Trasporto",
      "consegne",
      "Distribuzione",
      "Pianificazione logistica",
      "Gestione flotte",
    ],
    required: true,
  },
  {
    id: "q54",
    text: "Hai mai ricoperto ruoli di responsabilita(es. caporeparto, team leader)?",
    type: "select" as const,
    options: ["Si", "No", "Si, ma temporaneamente"],
  },
  {
    id: "q55",
    text: "Hai esperienza in azienda con elevati volumi di lavoro giornaliero",
    type: "select" as const,
    options: ["Si", "No", "Parzialmente"],
    required: true,
  },
 {
    id: "q56",
    text: "Ti senti a tuo agio a lavorare in ambienti dinamici o con ritmi elevati?",
    type: "radio" as const,
    options: ["Si", "No"],
    required: true,
  },
  {
    id: "q57",
    text: "Hai mai partecipato a riunioni operative o briefing giornalieri?",
    type: "radio" as const,
    required: true,
    options:[
      "SI",
      "NO"
    ]
  },

  {
    id: "q58",
    text: "Sei disponibile a lavorare in sedi diverse nello stesso giorno(es.piccoli trasferimenti interni o tra magazzini)?",
    type: "radio" as const,
    required: true,
    options: ["SI", "NO", "Dipende"],
  },
  {
    id: "q59",
    text: "Hai esperienza in magazzini automatizzati, robotizzati o verticali?",
    type: "radio" as const,
    required: true,
    options: ["Tradizionale", "Automatizzato", "Entrambi"],
  },
  {
    id: "q60",
    text: "Hai esperienza nel controllo qualita della merce in entrata/uscita?",
    type: "radio" as const,
    options: ["SI", "No"],
  },
  {
    id: "q61",
    text: "Hai mai trattato merci deperibili o sensibili (es. alimentari, farmaci, prodotti chimici)?",
    type: "radio" as const,
    options: ["Sì", "No"],
  },
  {
    id: "q63",
    text: "hai mai lavorato in ambienti a temperatura controllata(celle frigorifere o simili)?",
    type: "radio" as const,
    options: ["SI", "NO"],
  },
  {
    id: "q64",
    text: "Sei in grado di preparare e imballare ordini segunedo procedure specifiche",
    type: "radio" as const,
    options: ["SI", "NO"],
  },
  {
    id: "q65",
    text: "Possiedi  un patentino per il muletto, carrelli elevatori e montacarichi?",
    type: "radio" as const,
    options: ["SI", "NO"],
  },
  {
    id: "q66",
    text: "Hai esprienza nel carico/scario con muletti o transpallet elettrici?",
    type: "radio" as const,
    options: ["SI", "NO"],
  },
  {
    id: "q67",
    text: "Sei in grado di ottimizzare spazi di magazzino o gestire scaffalature automatizzate?",
    type: "radio" as const,
    options: ["SI", "NO"],
  },
  {
    id: "q68",
    text: "Sei in grado di gestire inventari periodici o annuali?",
    type: "radio" as const,
    options: ["SI", "NO"],
  },
  {
    id: "q69",
    text: "Hai esperienze nella preparazione di ordini con liste di picking o sistemi digitali?",
    type: "radio" as const,
    options: ["SI", "NO"],
  },
  {
    id: "q70",
    text: "Con quale sistema di picking hai lavorato?",
    type: "select" as const,
    options:[
      "Manuale","Barcode","Scanner","Voice picking","Picking a luci", "Robotizzato", "Altro"
    ]
  },
  {
    id: "q71",
    text: "Ti e mai stato richiesto di rispettare KPI di picking(pezzi/ora,errori,percentuale produttivita)?",
    type: "radio" as const,
    options: ["Sì", "No"],
  },
  { id: "q72", text: "Quanto ti senti veloce nel picking mantenendo un livello adeguato di accuratezza?", 
    type: "radio" as const,
    options:[
        "1",
      "2",
      "3",
      "4",
      "5",
    ]
  },
  {
    id: "q73",
    text: "Sei in grado di gestire documenti di trasporto(DDT, bolle, ordini)",
    type: "radio" as const,
    required: true,
    options: ["Molto alto", "Alto", "Medio", "Basso"],
  },
{
    id: "q74",
    text: "Sei in grado di gestire spedizioni nazionali e internazionalo?",
    type: "radio" as const,
    options: ["Sì", "No"],
  },
  {
    id: "q75",
    text: "Sei in grado di compilare documenti doganali o di trasporto eccezzionale",
    type: "textarea" as const,
  },
  {
    id: "q76",
    text: "Hai mai utilizzato sistemi digitali per la generazione di documenti di trasporto(DDT, packing list)?",
    type: "radio" as const,
    options: ["Si", "No"],
  },
  {
    id: "q77",
    text: "Hai familiarita con documentazione specifica per la movimentazione di merci pericolose(es.schede SDS/MSDS)?",
    type: "select" as const,
    options: ["SI", "NO"],
  },
  {
    id: "q78",
    text: "Hai esperienza di gestione clienti?",
    type: "radio" as const,
    options: ["Sì", "No"],
  },
  {
    id: "q79",
    text: "Descrivi la tua strategia di customer service",
    type: "textarea" as const,
  },

  { id: "q81", text: "Budget massimo gestito", type: "text" as const },
  { id: "q82", text: "Numero di persone coordinate", type: "number" as const },
  {
    id: "q83",
    text: "Qual e, secondo te la tua prinicipale soft skill?",
    type: "text" as const,
    required: true,
    placeholder: "Comunicazione/leadership/precisione..",
  },
  {
    id: "q84",
    text: "Partecipazione a corsi di formazione recenti",
    type: "textarea" as const,
  },
  {
    id: "q85",
    text: "Sei in grado di gestire documenti di trasporto(DDT, bolle, ordini)",
    type: "radio" as const,
    required: true,
    options: ["Molto alto", "Alto", "Medio", "Basso"],
  },
  {
    id: "q86",
    text: "Hai mai utilizzato sistemi digitali per la generazione di documenti di trasporto(DDT, packing list)?",
    type: "radio" as const,
    options: ["Si", "No"],
  },
  {
    id: "q87",
    text: "Sei in grado di gestire spedizioni nazionali e internazionalo?",
    type: "radio" as const,
    options: ["Sì", "No"],
  },
  {
    id: "q88",
    text: "Sei in grado di compilare documenti doganali o di trasporto eccezzionale",
    type: "textarea" as const,
  },
  {
    id: "q89",
    text: "Hai esperienza con sistemi gestionali di magazzino(WMS, Erpag,SAP, Oracle)",
    type: "textarea" as const,
  },
  {
    id: "q90",
    text: "Conosci le procedure di sicurezza per il trasporto di merci pericolose o deperibili?",
    type: "radio" as const,
    options:[
      "SI",
      "NO"
    ]
  },
  {
    id: "q91",
    text: "Hai mai lavorato in contesti con normative di sicurezza internazionali (ISO,OSHA,ecc)?",
    type: "radio" as const,
    options:[
      "SI",
      "NO"
    ]
  },
  {
    id: "q92",
    text: "Sei in grado di effettuare controlli di sicurezza sui mezzi prima di un trasporto?",
    type: "Select" as const,
    required: true,
    options: ["Si", "No"],
  },
  {
    id: "q93",
    text: "hai mai partecipato ad audit o verifiche ispettive di magazzino?",
    type: "radio" as const,
    required: true,
    options: ["Si", "No"],
  },
  {
    id: "q94",
    text: "Hai mai operato in aree con rischio ATEX (esplosione)?",
    type: "radio" as const,
    options:[
      "SI",
      "NO"
    ]
  },
  {
    id: "q95",
    text: "Hai esperienza nella gestione di rifiuti speciali o pericolosi seconodo le norm vigenti",
    type: "radio" as const,
    options: ["Sì", "No"],
  },
  {
    id: "q96",
    text: "Qual e il tuo principale obiettivo professionale nei prossimi 12 mesi",
    type: "radio" as const,
    options:[
      "Stabilita",
      "Crescita professionale",
      "Aumento delle competenze",
      "Cambiare Settore",
      "Nessuna preferenza"
    ]
  },
  {
    id: "q97",
    text: "Sei interessato a ricoprire ruoli di maggiore responsabilita in futuro?",
    type: "radio" as const,
    options: ["Sì", "No", "Forse"],
  },

  {
    id: "q98",
    text: "Sei disposto a sperimentare mansioni diverse per accelerare la tua crescita pro",
    type: "select" as const,
    options:[
      "SI",
      "NO"
    ]
  },
  {
    id: "q99",
    text: "Quali capacita pensi di avere che ti renderebbero un buon dipendente ?",
    type: "select" as const,
    required: true,
    options: [
      "Comunicazione",
      "Organizzazione",
      "Visione",
      "Supporto ai colleghi",
    ],
  },
  {
    id: "q100",
    text: "Quanto desideri crescere professionalmente rispetto alla tua situazione attuale?",
    type: "radio" as const,
    required: true,
    options:[
      "1",
      "2",
      "3",
      "4",
      "5"
    ]
  },
];
