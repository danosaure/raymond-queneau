const VERSES = [
  [
    // verse 1
    'Le roi de la pampa retourne sa chemise',
    "Lorsque tout est fini lorsque l'on agonise",
    "Le cheval Parthénon s'énerve sur sa frise",
    'Le vieux marin breton de tabac prit sa prise',
    "C'était à cinq o'clock que sortait la marquise",
    'Du jeune avantageux la nymphe était éprise',
    'Il se penche il voudrait attraper sa valise',
    "Quand l'un avec l'autre aussitôt sympathise",
    "Lorsqu'un jour exalté l'aède prosaïse",
    "Le marbre pour l'acide est une friandise",
  ],
  [
    // verse 2
    'Pour la mettre à sécher aux cornes des taureaux',
    'Lorsque le marbrier astique nos tombeaux',
    'Depuis que lord Elgin négligea ses naseaux',
    'Pour de fin fond du nez exciter les arceaux',
    'Pour consommer un thé puis des petits gâteaux',
    'Snob un peu sur les bords des bords fondamentaux',
    "Que convoitait c'est sûr une horde d'escrocs",
    'Se faire il pourrait bien que ce soit des jumeaux',
    "Pour déplaire au profane aussi bien qu'aux idiots",
    "D'aucuns par dessus tout prisent les escargots",
  ],
  [
    // verse 3
    'Le cornedbeef en boîte empeste la remise',
    'Des êtres indécis vous parlent sans franchise',
    'Le Turc de ce temps-là pataugeait dans sa crise',
    "Sur l'antique bahut il choisit sa cerise",
    'Le chauffeur indigène attendait dans la brise',
    "Une toge il portait qui n'était pas de mise",
    'Il se penche et alors à sa grande surprise',
    'La découverte alors voilà qui traumatise',
    "La critique lucide aperçoit ce qu'il vise",
    'Sur la place un forain de feu se gargarise',
  ],
  [
    // verse 4
    'Et fermentent de même et les cuirs et les peaux',
    'Et tout vient signifier la fin des haricots',
    'Il chantait tout de même oui mais il chantait faux',
    "Il n'avait droit qu'à une et le jour des Rameaux",
    'Des narcisses on cueille ou bien on est des veaux',
    "Il ne trouve aussi sec qu'un sac de vieux fayots",
    'On espère toujours être de vrais normaux',
    'Il donne à la tribu des cris aux sens nouveaux',
    'Qui sait si le requin boulotte les turbots ?',
  ],

  [
    // verse 5
    'Je me souviens encor de cette heure exquise',
    'On vous fait devenir une orde marchandise',
    'Le cheval Parthénon frissonait sous la bise',
    'Souvenez-vous amis de ces îles de Frise',
    'On était bien surpris par cette plaine grise',
    'Quand on prend des photos de cette tour de Pise',
    'Il déplore il déplore une telle mainmise',
    "Et pourtant c'était lui le frère de feintise",
    "L'un et l'autre a raison non la foule insoumise",
    "Du voisin le Papou suçe l'apophyse",
  ],

  [
    // verse 6
    'Les gauchos dans la plaine agitaient leurs drapeaux',
    'On prépare la route aux pensers sépulcraux',
    'Quand se carbonisait la fureur des châteaux',
    "D'où Galilée jadis jeta ses petits pots",
    'Qui se plaît à flouer de pauvres provinciaux',
    'Qui clochard devenant jetait ses oripeaux',
    "Le vulgaire s'entête à vouloir des vers beaux",
    "Que n'a pas dévoré la horde des mulots ?",
  ],

  [
    // verse 7
    'Nous avions aussi froids que nus sur la banquise',
    'De la mort on vous greffe une orde bâtardise',
    'Il grelottait le pauvre aux bords de la Tamise',
    'Nous regrettions un peu ce tas de marchandise',
    'Un audacieux baron empoche toute accise',
    "D'une étrusque inscription la pierre était incise",
    'Aller à la grande ville est bien une entreprise',
    'Un frère même bas est la part indécise',
    "L'un et l'autre ont raison non la foule imprécise",
    'Le gourmet en salade avale la cytise',
  ],

  [
    // verse 8
    'Lorsque pour nous distraire y plantions nos tréteaux',
    'La mite a grignoté tissus os et rideaux',
    'Quand les grélons gin mars mitraillent les bateaux',
    "Lorsqu'on voyait au loin flamber les arbrisseaux",
    'Lorsque vient le pompier avec ces grandes eaux',
    'Les Grecs et les Romains en vain cherchent leurs mots',
    'Elle effraie le Berry comme les Morvandiaux',
    'Que les parents féconds offrent aux purs berceaux',
    "À tous n'est pas donné d'aimer les chocs verbaux",
    "L'enfant put aux yeux bleus aime les berlingots",
  ],

  [
    // verse 9
    'Du pôle à Rosario fait une belle trotte',
    'Le brave a beau crier ah cré non saperlotte',
    "La Grèce de Platon à coup sûr n'est point sotte",
    'On sèche le poisson dorade ou molve lotte',
    'Du Gange au Malabar le lord anglais zozotte',
    "L'esprit souffle et resouffle au-dessous de la botte",
    'Devant la boue urbaine on retrousse sa cotte',
    'Le généalogiste observe leur bouillotte',
    "Le poète inspiré n'est point une polyglotte",
    'Le loup est amateur de coq et de cocotte',
  ],

  [
    // verse 10
    "Aventures on eut qui s'y pique s'y frotte",
    'Le lâche peut arguer de sa mine pâlotte',
    'On comptait les esprits acérés à la hotte',
    "On sale le requin on fume à l'échalotte",
    'Comme à Chandernagor le manant sent la crotte',
    'Le touriste à Florence ignoble charibotte',
    'On gifle le marmot qui plonge sa menotte',
    'Gratter le parchemin deviendra sa marotte',
    'Une langue suffit pour emplir sa cagnotte',
    'Le chat fait un festin de têtes de linotte',
  ],

  [
    // verse 11
    "Lorsqu'on boit du maté l'on devient argentin",
    'Les croque-morts sont là pour se mettre au turbin',
    'Lorsque Socrate mort passait pour un lutin',
    "Lorsqu'on revient au port en essuyant un grain",
    "Le colonel s'éponge un blason dans la main",
    "L'autocar écrabuoille un peu l'esprit latin",
    "Lorsqu'il voit la gadoue il cherche le purin",
    'Il voudra retrouver le germe adultérin',
    "Même s'il prend son sel au celte c'est son bien",
    'Le chemin vicinal se nourrit de crottin',
  ],

  [
    // verse 12
    "L'Amérique du Sud séduit les équivoques",
    'Cela considérant ô lecteur tu suffoques',
    'Sa sculpture est illustre et dans le fond des coques',
    'Enfin on vend le tout homards et salicoques',
    'Ne fallait pas si loin agiter les breloques',
    'Les rapports transalpins sont-ils biunivoques ?',
    'On regrette à la fin les agrestes bicoques',
    'Frère je te comprends si parfois tu débloques',
    'Barde que tu me plais toujours tu soliloques',
    'On a bu du pinard à toutes les époques',
  ],

  [
    // verse 13
    "Exaltent l'espagnol les oreilles baroques",
    'Comptant tes abattis lecteur tu te disloques',
    'On transporte et le marbre et débris et défroques',
    "On s'excuse il n'y a ni baleines ni phoques",
    'Les Indes ont assez sans ça de pendeloques',
    "Les banquiers d'Avignon changent-ils les baïques ?",
    'On mettait sans façon ses plus infectes loques',
    "Frère je t'absoudrai si tu m'emberlucoques",
    'Tu me stupéfies plus que tous les ventriloques',
    'Grignoter des bretzels distrait bien des colloques',
  ],

  [
    // verse 14
    'Si la cloche se tait et son terlintintin',
    'Toute chose pourtant doit avoir une fin',
    "Si l'Europe le veut l'Europe ou son destin",
    'Le mammifère est roi nous sommes son cousin',
    "L'écu de vair ou d'or ne dure qu'un matin",
    'Le Beaune et le Chianti sont-ils le même vin ?',
    "Mais on n'aurait pas vu le métropolitain",
    'La gémellité accuse son destin',
    'Le métromane à force incarne le devin',
    'Mais rien de vaut grillé le morceau de boudin',
  ],
];

export { VERSES };