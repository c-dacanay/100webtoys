
var grammars = {
    scan: {

        setLocation: 
        ["[location:school][tag1:#schoolTag#][tag2:#schoolTag#][tag3:#schoolTag#][subGeo:#subSchool#][altDesc:#altS#][notes:#noteS#]",
        "[location:body][tag1:#humanTag#][tag2:#humanTag#][tag3:#humanTag#][subGeo:#subAll#][altDesc:#altB#][notes:#noteB#]",
        "[location:lab][tag1:#drugs#][tag2:#labTag#][tag3:#labTag#][subGeo:#subLab#][altDesc:#altL#][notes:#noteL#]"],

        schoolTag: "book desk chair bookbag bag holopad locker utensil tool clip flask art supplies food computer holomap holodeck metapen amphetamine candy powerglove #humanTag#".split(" "),
        humanTag: "humanoid body bones remains death nonviolent violent decay dust ash relic corpse clothing nails hair teeth unidentified implant belongings hand foot skull humerus ribcage vertebrae sternum scapula ulna pistiform phalange metacarpal pelvis femur tibia patella".split(" "),
        labTag: ["#drugs# pill", "#drugs# powder", "#drugs#", "beakers", "server", "microscopes", "#humanTag#", "safety equipment", "rubber tubing", "burners", "crucible", "optics", "test paper", "lenses", "LEDs", "UV light"],
        drugs: [
            "Abacavir Sulfate",
            "Abatacept",
            "Abilify",
            "Acamprosate Calcium",
            "Accretropin",
            "Aceon",
            "Aci-Jel",
            "Acthrel",
            "Actimmune",
            "Actisite",
            "Acular",
            "Acular LS",
            "Acuvail",
            "Adagen",
            "Adapalene",
            "Adcirca",
            "Adefovir Dipivoxil",
            "Adenoscan",
            "Adenosine",
            "Adipex-P",
            "AdreView",
            "Advair HFA",
            "Aerospan HFA",
            "Agalsidase Beta",
            "Aggrenox",
            "Akineton",
            "Alamast",
            "Albenza",
            "Aldactazide",
            "Aldactone",
            "Aldoril",
            "Aldurazyme",
            "Alemtuzumab",
            "Alglucosidase Alfa",
            "Allegra-D",
            "Allegra D 24 Hour",
            "Alli",
            "Aloprim",
            "Alora",
            "Alphanate",
            "Altace",
            "Altocor",
            "Altoprev",
            "Alupent",
            "Amantadine Hydrochloride",
            "Amerge",
            "Amifostine",
            "Amiloride",
            "Aminosalicylic Acid",
            "Aminosyn II 8.5%",
            "Amlodipine Besylate",
            "Amoxapine",
            "Amytal Sodium",
            "Anabolic steroids",
            "Anadrol-50",
            "Antithrombin",
            "Antivenin",
            "Antivert",
            "Aredia",
            "Aricept",
            "Armodafinil",
            "Arranon",
            "Artane",
            "Asclera",
            "Ascorbic Acid",
            "Astemizole",
            "Atacand",
            "Atacand HCT",
            "Atazanavir Sulfate",
            "Atomoxetine HCl",
            "Atridox",
            "Atripla",
            "Atropen",
            "Augmentin XR",
            "Avage",
            "Avandia",
            "Avastin",
            "Avinza",
            "Axid",
            "Azasan",
            "Azasite",
            "Azelaic Acid",
            "Azelastine Hydrochloride",
            "Azilect",
            "Azmacort",
            "Balsalazide",
            "Benazepril",
            "Benzocaine",
            "Benzoyl Peroxide Gel",
            "Benzphetamine",
            "Benztropine Mesylate",
            "Bepreve",
            "Betagan",
            "Bethanechol",
            "Betimol",
            "Betoptic S",
            "Bevacizumab",
            "BiCNU",
            "Biperiden",
            "Bismuth Subcitrate Potassium",
            "Bismuth Subsalicylate",
            "Blocadren",
            "Boniva",
            "Bontril",
            "Boostrix",
            "Botulinum Toxin Type A",
            "Bravelle",
            "Brevibloc",
            "Bromocriptine Mesylate",
            "Brovana",
            "Budesonide",
            "Buprenorphine",
            "Buspar",
            "Buspirone",
            "Busulfan",
            "Busulfex",
            "Cabergoline",
            "Caduet",
            "Calcitonin-Salmon",
            "Calcium Chloride",
            "Calcium Disodium Versenate",
            "Calcium Gluconate",
            "Campral",
            "Canasa",
            "Cancidas",
            "Captopril",
            "Carac",
            "Carbatrol",
            "Cardiolite",
            "Carisoprodol",
            "Carmustine",
            "Carvedilol",
            "Casodex",
            "Caspofungin Acetate",
            "Cataflam",
            "Catapres",
            "Catapres-TTS",
            "Caverject",
            "Cedax",
            "Cefditoren Pivoxil",
            "Cefixime",
            "Cefizox",
            "Cefotetan",
            "Ceftazidime",
            "Ceftibuten",
            "Ceftin",
            "Cefzil",
            "Celestone Soluspan",
            "Celexa",
            "CellCept",
            "Cellulose",
            "Celontin",
            "Cephalexin",
            "Cerebyx",
            "Ceretec",
            "Cerubidine",
            "Cerumenex",
            "Cervidil",
            "Cetirizine",
            "Cetraxal",
            "Cetrotide",
            "Cetuximab",
            "Chantix",
            "Chibroxin",
            "Chlorambucil",
            "Chloramphenicol Sodium Succinate",
            "Chloroprocaine",
            "Chlorpheniramine Maleate",
            "Chlorpromazine",
            "Chlorpropamide",
            "Chlorthalidone",
            "Cholera Vaccine",
            "Chorionic Gonadotropin",
            "Ciclopirox Gel",
            "Cilostazol",
            "Cinobac",
            "Cipro",
            "Cipro XR",
            "Cisapride",
            "Clarinex",
            "Clarithromycin",
            "Claritin",
            "Cleocin",
            "Cleviprex",
            "Climara Pro",
            "Clinoril",
            "Clobetasol Propionate",
            "Clocortolone",
            "Clofarabine",
            "Clonidine",
            "Clorazepate Dipotassium",
            "Clorpres",
            "Clotrimazole",
            "Cocaine",
            "Codeine",
            "Cognex",
            "Colazal",
            "Colchicine",
            "Colcrys",
            "Colesevelam Hcl",
            "Combivir",
            "Conjugated Estrogens",
            "Copaxone",
            "Corgard",
            "Cosmegen",
            "Coumadin",
            "Crolom",
            "Cromolyn Sodium",
            "Cubicin",
            "Curosurf",
            "Cuvposa",
            "Cyanocobalamin",
            "Cyclobenzaprine Hcl",
            "Cyclophosphamide",
            "Cyclosporine",
            "Cylert",
            "Cymbalta",
            "Cyproheptadine",
            "Cystadane",
            "Cytogam",
            "Cytomel",
            "Dacarbazine",
            "Daraprim",
            "Darvocet-N",
            "Darvon Compound",
            "Dasatinib",
            "Daunorubicin",
            "Daypro",
            "Daypro Alta",
            "DDAVP Nasal Spray",
            "Demadex",
            "Demeclocycline HCl",
            "Demser",
            "Depacon",
            "DepoDur",
            "Desferal",
            "Desogen",
            "Desonate",
            "DesOwen",
            "Detrol",
            "Detrol LA",
            "Dexlansoprazole",
            "Dexmethylphenidate Hydrochloride",
            "Dexrazoxane",
            "Diamox Sequels",
            "Dicyclomine",
            "Didanosine",
            "Diethylpropion",
            "Differin",
            "Diflucan",
            "Digoxin Immune Fab",
            "Diovan HCT",
            "Diphenhydramine",
            "Diphtheria-Tetanus Vaccine",
            "Diprolene AF",
            "Dipyridamole",
            "Ditropan",
            "Dobutamine",
            "Dofetilide",
            "Dolophine",
            "Donepezil Hydrochloride",
            "Dopamine Hydrochloride",
            "Dopar",
            "Dopram",
            "Doral",
            "Doryx",
            "Dorzolamide",
            "Dovonex",
            "Doxacurium Chloride",
            "Doxapram",
            "Doxazosin Mesylate",
            "Doxepin",
            "Doxercalciferol",
            "Doxil",
            "Doxycycline",
            "Doxycycline Hyclate",
            "Drisdol",
            "Dronabinol",
            "Drospirenone and Estradiol",
            "Duetact",
            "Duraclon",
            "Dynacirc",
            "Dynacirc CR",
            "Dynapen",
            "Dyphylline",
            "Econazole Nitrate",
            "Edrophonium",
            "Efavirenz",
            "Elaprase",
            "Elavil",
            "Eletriptan hydrobromide",
            "Eligard",
            "Ellence",
            "Elmiron",
            "Elspar",
            "Emadine",
            "Emcyt",
            "Emedastine",
            "Empirin",
            "Emsam",
            "Emtricitabine",
            "Emtriva",
            "Endocet",
            "Endometrin",
            "Enflurane",
            "Engerix-B",
            "Entereg",
            "Eovist",
            "Epinephrine",
            "Epipen",
            "Epirubicin hydrochloride",
            "Epivir",
            "Equetro",
            "Eraxis",
            "Erbitux",
            "Ergocalciferol",
            "Erlotinib",
            "Erythrocin Stearate",
            "Esomeprazole Sodium",
            "Essential Amino Acids",
            "Estrace",
            "Estradiol",
            "Estradiol Acetate",
            "Estradiol valerate",
            "Estratest",
            "Estropipate",
            "Eszopiclone",
            "Etanercept",
            "Ethacrynic Acid",
            "Ethambutol",
            "Ethinyl Estradiol",
            "Ethiodol",
            "Ethosuximide",
            "Etidocaine HCl",
            "Etidronate Disodium",
            "Etopophos",
            "Etrafon",
            "Eulexin",
            "Evista",
            "Evoxac",
            "Exelderm",
            "Exjade",
            "Extavia",
            "Factor IX Complex",
            "Factrel",
            "Famciclovir",
            "Famotidine Injection",
            "Famvir",
            "Fansidar",
            "Febuxostat",
            "Feridex I.V.",
            "Fesoterodine Fumarate Extended",
            "Finacea",
            "Flector",
            "Flonase",
            "Florinef",
            "Floxuridine",
            "Fluconazole",
            "Flucytosine",
            "Fludara",
            "Fludarabine Phosphate",
            "Fludrocortisone",
            "Flumazenil",
            "FluMist",
            "Fluocinolone Acetonide",
            "Fluoroplex",
            "Fluorouracil",
            "Fluoxetine Hydrochloride",
            "Flurbiprofen",
            "Fluress",
            "Fluticasone Propionate",
            "Fluvirin",
            "FML",
            "Folic Acid",
            "Follitropin Alfa",
            "Follitropin Beta",
            "Fomepizole",
            "Foradil Aerolizer",
            "Foradil Certihaler",
            "Forane",
            "Fosamax Plus D",
            "Fosamprenavir Calcium",
            "Foscavir",
            "Fosphenytoin Sodium",
            "Fragmin",
            "Frovatriptan Succinate",
            "Fulvestrant",
            "Fungizone",
            "Furadantin",
            "Furosemide",
            "Furoxone",
            "Fuzeon",
            "Gabitril",
            "Gadobenate Dimeglumine",
            "Gadofosveset Trisodium",
            "Galsulfase",
            "Gamunex",
            "Geocillin",
            "Geodon",
            "Gleevec",
            "Glucophage XR",
            "Glucovance",
            "Glyburide",
            "Glycopyrrolate",
            "Glynase",
            "Glyset",
            "Gold Sodium Thiomalate",
            "Gonadorelin",
            "Gonal-F",
            "Gonal-f RFF",
            "Grifulvin V",
            "Griseofulvin",
            "Guanethidine Monosulfate",
            "Gynazole",
            "Haemophilus b Conjugate Vaccine",
            "Halcinonide",
            "Haldol",
            "Halobetasol Propionate",
            "Haloperidol",
            "Healon",
            "HepaGam B",
            "Heparin Lock Flush",
            "HepatAmine",
            "Hepatitis A Vaccine, Inactivated",
            "Hepatitis B Immune Globulin",
            "Hepflush-10",
            "Herceptin",
            "Hexachlorophene",
            "HibTITER",
            "Hivid",
            "Human Secretin",
            "Humira",
            "Humulin N",
            "Hyalgan",
            "Hydrocodone Bitartrate and Acetaminophen",
            "Hydroxyethyl Starch",
            "Hylenex",
            "Hyoscyamine",
            "Hytrin",
            "Ibuprofen Lysine",
            "Idamycin",
            "Idamycin PFS",
            "Ifosfamide",
            "Iloperidone",
            "Imipramine",
            "Imiquimod",
            "Imitrex",
            "Immune Globulin",
            "Immune Globulin Intravenous",
            "Implanon",
            "Inderal LA",
            "Indigo Carmine",
            "InnoPran XL",
            "Insulin",
            "Insulin Aspart",
            "Intelence",
            "Intralipid 20%",
            "Intuniv",
            "Invanz",
            "Invega",
            "Inversine",
            "Ionamin",
            "Irinotecan Hydrochloride",
            "Isentress",
            "Ismo",
            "Isocarboxazid",
            "Isoptin SR",
            "Isopto Carpine",
            "Isopto Hyoscine",
            "Istalol",
            "Isuprel",
            "Ixempra",
            "Jalyn",
            "Janumet",
            "Je-Vax",
            "K-LOR",
            "Kaletra",
            "Kariva",
            "Kenalog",
            "Kinlytic",
            "Klonopin",
            "Kuvan",
            "Kytril",
            "Labetalol",
            "lacosamide",
            "Lamisil",
            "Lamivudine / Zidovudine",
            "Latanoprost",
            "Letairis",
            "Letrozole",
            "Leuprolide Acetate",
            "Leustatin",
            "Levalbuterol",
            "Levaquin",
            "Levemir",
            "Levo-T",
            "Levocabastine",
            "Levofloxacin",
            "Levonorgestrel",
            "Levonorgestrel and Ethinyl Estradiol",
            "Levonorgestrel Implants",
            "Levonorgestrel, Ethinyl Estradiol",
            "Lexapro",
            "Lexiscan",
            "Lexxel",
            "Librium",
            "Lidex",
            "Lidoderm",
            "Linezolid",
            "Lipofen",
            "Liposyn II",
            "Liraglutide",
            "Lisinopril and Hydrochlorothiazide",
            "Locoid",
            "Lodine",
            "Loperamide Hcl",
            "Lopid",
            "Loprox Gel",
            "Loracarbef",
            "Lortab",
            "Lotemax",
            "Lotensin",
            "Lotronex",
            "Lovenox",
            "Loxapine",
            "Loxitane",
            "Lucentis",
            "Luvox CR",
            "Lybrel",
            "M-M-R",
            "Malarone",
            "Malathion",
            "Mandol",
            "Mangafodipir",
            "Maraviroc",
            "Marinol",
            "Maxitrol",
            "Mecasermin",
            "Meclofenamate",
            "Mefloquine",
            "Melphalan",
            "Menactra",
            "Menest",
            "Menotropins",
            "Mephobarbital",
            "Mequinol and Tretinoin",
            "Meropenem",
            "Merrem I.V.",
            "Mesalamine",
            "Mesna",
            "Mestinon",
            "Metadate ER",
            "Metaglip",
            "Metaproterenol Sulfate",
            "Metaxalone",
            "Metformin Hcl",
            "Methadone Hydrochloride",
            "Methadose Oral Concentrate",
            "Methazolamide",
            "Methenamine Hippurate",
            "Methergine",
            "Methohexital Sodium",
            "Methyclothiazide",
            "Methyldopa",
            "Methylene Blue",
            "Methylergonovine Maleate",
            "Methylin",
            "Methyltestosterone",
            "Metipranolol",
            "Metoclopramide",
            "Metoprolol Tartrate",
            "MetroLotion",
            "Metyrapone",
            "Metyrosine",
            "Miacalcin",
            "Micro-K",
            "Micronase",
            "Micronized Glyburide",
            "Midazolam",
            "Midodrine Hydrochloride",
            "Milrinone",
            "Minocin",
            "Minocycline",
            "Minoxidil",
            "Miochol-E",
            "Miostat",
            "Mitomycin",
            "Mobic",
            "Modafinil",
            "Monistat",
            "Monistat-Derm",
            "Morrhuate Sodium",
            "Motrin",
            "Moxatag",
            "Mozobil",
            "Multaq",
            "Multi Vitamin",
            "Multihance",
            "Mustargen",
            "Mutamycin",
            "Myambutol",
            "Mycamine",
            "Mycelex",
            "Mycophenolic Acid",
            "Myfortic",
            "Mykrox",
            "Myobloc",
            "Myochrysine",
            "Nafcillin Sodium",
            "Naftifine Hcl",
            "Nalmefene Hydrochloride",
            "Naltrexone",
            "Naproxen",
            "Nascobal",
            "Natazia",
            "Natrecor",
            "Navelbine",
            "Nebcin",
            "Nebivolol Tablets",
            "Nedocromil",
            "Nelarabine",
            "Nelfinavir Mesylate",
            "NeoProfen",
            "Neostigmine",
            "Nephramine",
            "Nesacaine",
            "Neulasta",
            "Nexavar",
            "Niaspan",
            "Nicotrol",
            "Nicotrol NS",
            "Nilandron",
            "Nilotinib Capsules",
            "Nimbex",
            "Nimotop",
            "Nitroglycerin",
            "NitroMist",
            "Nizatidine",
            "Nizoral",
            "Noctec",
            "Nor-QD",
            "Norethindrone and Ethinyl Estradiol",
            "Noritate",
            "Nortriptyline Hydrochloride",
            "Norvasc",
            "NovoLog Mix 70/30",
            "Novoseven",
            "Numorphan",
            "Nutropin AQ",
            "Nutropin Depot",
            "Nydrazid",
            "Omeprazole",
            "Omnaris",
            "Opana",
            "Opticrom",
            "OptiMARK",
            "Optipranolol",
            "Oracea",
            "Oraqix",
            "Orfadin",
            "Orlaam",
            "Orlistat",
            "Orudis",
            "Ovcon",
            "Ovide",
            "Oxandrolone",
            "Oxaprozin",
            "Oxistat",
            "Oxsoralen-Ultra",
            "Oxycodone HCl",
            "Oxycodone Hydrochloride",
            "Oxycontin",
            "Oxymetholone",
            "Oxymorphone",
            "Oxytetracycline",
            "Paclitaxel",
            "Palifermin",
            "Paliperidone",
            "Palonosetron hydrochloride",
            "Panhematin",
            "Pantoprazole",
            "Parafon Forte",
            "Parnate",
            "Paser",
            "Pataday",
            "Pazopanib",
            "Pediapred",
            "PEG 3350",
            "Pegfilgrastim",
            "Pemirolast Potassium",
            "Penciclovir",
            "Penicillamine",
            "Penlac",
            "Pentetate Zinc Trisodium",
            "Pentobarbital",
            "Pentoxifylline",
            "Perflutren",
            "Perindopril Erbumine",
            "Permax",
            "Persantine",
            "Pfizerpen",
            "Phenazopyridine",
            "Phenelzine",
            "Phenobarbital",
            "Phenoxybenzamine",
            "Phenylephrine HCl",
            "Phenylephrine Hydrochloride",
            "Phenytoin",
            "Phosphate",
            "Photofrin",
            "Pilocarpine Hydrochloride",
            "Pilopine HS",
            "Pindolol",
            "Pipracil",
            "Piroxicam",
            "Plaquenil",
            "PlasmaLyte A",
            "Plavix",
            "Plenaxis",
            "Pletal",
            "Pneumovax",
            "Podophyllin",
            "Polidocanol",
            "Polyethylene Glycol 3350",
            "Polythiazide",
            "Pramipexole",
            "Pred-G",
            "Prednicarbate",
            "Prednisolone Acetate",
            "Prednisone",
            "Prefest",
            "Pregnyl",
            "Premarin",
            "Prepidil",
            "Prevpac",
            "Priftin",
            "Primacor",
            "Primaquine",
            "Primidone",
            "Prinivil",
            "Prinzide",
            "Pristiq",
            "Procainamide",
            "Procalamine",
            "Prochlorperazine Maleate",
            "ProHance",
            "Proleukin",
            "Prolixin",
            "Promethazine HCl",
            "Promethazine Hydrochloride",
            "Prometrium",
            "Propecia",
            "Proquin XR",
            "Prostin VR Pediatric",
            "Protein C Concentrate",
            "Protopic",
            "Protriptyline Hydrochloride",
            "Proventil HFA",
            "Provisc",
            "Provocholine",
            "Pulmicort Flexhaler",
            "Pylera",
            "Pyrazinamide",
            "Pyridium",
            "Pyridostigmine",
            "Qualaquin",
            "Quazepam",
            "Quinidine Sulfate",
            "Quixin",
            "Rabies Vaccine",
            "Raltegravir",
            "Ranexa",
            "Ranitidine Hcl",
            "Rapamune",
            "Rasagiline",
            "Raxar",
            "Rebetol",
            "Remicade",
            "Remifentanil",
            "Renese",
            "ReoPro",
            "Rescriptor",
            "Rescula",
            "Revatio",
            "Revex",
            "Revia",
            "Reyataz",
            "Rezulin",
            "Rhinocort Aqua",
            "Rhogam Ultra-Filtered Plus",
            "RiaSTAP",
            "Rifamate",
            "Riomet",
            "Risperidone",
            "Ritalin",
            "Rituximab",
            "Rivastigmine Tartrate",
            "Robinul",
            "Rosiglitazone Maleate",
            "Rotarix",
            "RotaTeq",
            "Roxicet",
            "Roxicodone",
            "Ryzolt",
            "Sabril",
            "Sacrosidase",
            "Samsca",
            "Sanctura",
            "Santyl",
            "Saphris",
            "Scopolamine",
            "Seasonale",
            "Selegiline Hydrochloride",
            "Selsun",
            "Septra",
            "Serax",
            "Sertraline Hcl",
            "Serzone",
            "Sevoflurane",
            "Sibutramine Hydrochloride Monohydrate",
            "Silenor",
            "Simponi",
            "Sirolimus",
            "Sitagliptin Metformin HCL",
            "Slow-K",
            "Sodium Bicarbonate",
            "Sodium ferric gluconate",
            "Sodium Iodide I 131",
            "Sodium Polystyrene Sulfonate",
            "Sodium Sulfacetamide",
            "Soma Compound",
            "Somatrem",
            "Somatropin",
            "Sonata",
            "Soriatane",
            "Sotradecol",
            "Spiriva",
            "Sporanox",
            "Sprix",
            "Sprycel",
            "Stalevo",
            "Starlix",
            "Stavudine",
            "Streptokinase",
            "Strontium-89",
            "Suboxone",
            "Succimer",
            "Succinylcholine Chloride",
            "Sucralfate",
            "Sulfamylon",
            "Sunitinib Malate",
            "Sutent",
            "Synthroid",
            "Synvisc",
            "Syprine",
            "Tacrolimus",
            "Talacen",
            "Talwin Nx",
            "Tamiflu",
            "Tamoxifen Citrate",
            "Tapazole",
            "Targretin",
            "Tasmar",
            "Tegretol",
            "Tekturna HCT",
            "Telavancin",
            "Telbivudine",
            "Telmisartan",
            "Temovate Scalp",
            "Temozolomide",
            "Temsirolimus",
            "Teniposide",
            "Terazol 3, Terazol 7",
            "Tessalon",
            "Testolactone",
            "Testred",
            "Teveten HCT",
            "Theracys",
            "Thiabendazole",
            "Thiethylperazine",
            "Thiopental Sodium",
            "Thioridazine",
            "Thiothixene Hcl",
            "Thrombin",
            "Thyrolar",
            "Thyrotropin Alfa",
            "Tiazac",
            "Ticarcillin",
            "Tinzaparin",
            "Tirosint",
            "Tizanidine",
            "Tobrex",
            "Tofranil-PM",
            "Tolazamide",
            "Tolmetin Sodium",
            "Tonocard",
            "Topicort",
            "Topiramate",
            "Topotecan Hydrochloride",
            "Toradol",
            "Torsemide",
            "Toviaz",
            "Tramadol Hcl",
            "Tranxene",
            "Trastuzumab",
            "Trasylol",
            "Tretinoin",
            "Trexall",
            "Tri-Sprintec",
            "Triamcinolone Acetonide",
            "Triazolam",
            "Tribenzor",
            "Trientine",
            "Trihexyphenidyl",
            "Trilipix",
            "Trilisate",
            "Trimethadione",
            "Trimethoprim",
            "Trimethoprim and Sulfamethoxazole",
            "Trimetrexate Glucuronate",
            "Trizivir",
            "Trovafloxacin",
            "Trovan",
            "Trusopt",
            "Trypan Blue",
            "Tussionex",
            "Tysabri",
            "Tyvaso",
            "Uloric",
            "Ultiva",
            "Ultram",
            "Ultrase",
            "Ultravate",
            "Unasyn",
            "Urex",
            "Ursodiol",
            "Vagistat-1",
            "Valacyclovir Hydrochloride",
            "Valganciclovir Hcl",
            "Valium",
            "Valproic Acid",
            "Valsartan and Hydrochlorothiazide",
            "Vancomycin Hydrochloride",
            "Vaprisol",
            "Vasocidin",
            "Vasotec",
            "Vasovist",
            "Vectibix",
            "Vectical",
            "Velosulin",
            "Veltin",
            "Venlafaxine Hydrochloride",
            "Veramyst",
            "Vermox",
            "Vesanoid",
            "VESIcare",
            "Vibramycin",
            "Vicodin",
            "Vicodin HP",
            "Vicoprofen",
            "Victoza",
            "Vimovo",
            "Vimpat",
            "Vinblastine Sulfate",
            "Viokase",
            "Vioxx",
            "Viread",
            "VisionBlue",
            "Vistide",
            "Vitamin K1",
            "Vivactil",
            "Vivelle-Dot",
            "Vusion",
            "Vytorin",
            "Winstrol",
            "Xigris",
            "Xolair",
            "Yellow Fever Vaccine",
            "Zaditor",
            "Zalcitabine",
            "Zanosar",
            "Zelnorm",
            "Zemaira",
            "Zemplar",
            "Zestoretic",
            "Zestril",
            "Ziconotide",
            "Zingo",
            "Zmax",
            "Zocor",
            "Zolinza",
            "Zolmitriptan",
            "Zonalon",
            "Zoster Vaccine Live",
            "Zosyn",
            "Zyclara",
            "Zyflo",
            "Zylet",
            "Zyloprim",
            "Zymaxid"
          ],

        //Alt Text
        alt : ["#type# #tag1.a# #altDesc#"],
        type : ["a 3D scan of", "a lidar image of", "#altadj# 3D scan of", "an automated scan of", "#altadj# 2D scan of",],
        altadj : ["a lossy", "an incomplete", "a perfect", "a rotating", "an automated",], 
        altS: ["and #tag2#"],
        altB: ["and #tag3#"],
        altL: ["and #tag3#"],

        //Note Text
        notes : ["#notes#"],
        noteS: [],
        noteB: ["The #body# #looks# #moods#.", "#moods.a# #body#"],
        noteL: [],
        body : ["corpse", "youth", "adult", "person", "remains", "pose", "person"],
        looks : ["looks as if they were", "seems", "is posed like they were", "looks", "appears"],
        moods :	["abandoned", "accepted", "accusatory", "afraid", "alone", "angry", "apathetic", "attacked", "beaten", "blank", "blissful", "cherished", "clean", "cold","defeated", "desolate", "dignified", "forgotten", "helpless", "hopeful", "hungry", "hurt", "ignored", "innocent", "intimate", "isolated", "lonely", "old", "rotten", "shaken", "small", "tortured", "vacant"],


        //Administrative Items
        numTag : ["#tag1#", "#tag1#, #tag2#", "#tag1#, #tag2#, #tag3#",],
        d: "0,1,2,3,4,5,6,7,8,9".split(","),
        ID: "#d##d##d##d#.#d##d##d#.#d##d##d##d#",
        subAll: "PT SP NP HT TK TB IC TP LA".split(" "),
        subSchool: "PT SP NP IC".split(" "),
        subLab: "NP IC TK".split(" "),
        geoTag: ["#d##d#.#d##d##d#; #d##d#.#d##d##d#; #d#-#subGeo#","-#d##d#.#d##d##d#; #d##d#.#d##d##d#; #d#-#subGeo#", "#d##d#.#d##d##d#; -#d##d#.#d##d##d#; #d#-#subGeo#", "-#d##d#.#d##d##d#; -#d##d#.#d##d##d#; #d#-#subGeo#"],
        
        scan: "<p><b>ID:</b> #ID# </p><p><b>geo:</b> #geoTag#</p> <p><b>tags:</b> #numTag# </p><p><b>alt text:</b> #alt# </p>",
        origin : "#[#setLocation#]scan#"
    },

}
