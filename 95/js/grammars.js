
var grammars = {
    flower: {

        name: "Anelily, Amarystle, Amaranthistle, Asteria, Azaleaster, Babyssia, Begoniflora, Bellmoss, Bergatia, Birdaloe, Bluebush, Bottlerose, Buttecarnation, Camelliris, Chrysanquine, Columbinth, Clovus, Crocadaisy, Daisylia, Dahlifern, Daffodalea, Delphireed, Edelwrose, Primnot, Foxylip, Freesibloom, Gerbertulip, Gladilily, Hibisea, Heathyrinth, Hyaciberry, Hollyzalea, Irisme, Jasminum, Ladypera, Lavilac, Lilicrocus, Liliumosa, Lotusia, Mariflora, Marjorose, Mimorose, Narcissorange, Orchipea, Peacherina, Peonique, Petunila, Rhodary, Rosemarysage, Roserose, Sageweed, Snapdraglow, Sunflora, Tansyleaf, Thistlebloom, Thymebush, Tulilia, Violotus, Waterzinnia, Zinnlily".split(","),
        aka: ["#noun# of the #location#", "#location# #noun#", "#animal##end#", "#person#'s #feeling#"],
        symbol: ["#sym#", "#sym#, #sym#", "#sym#, #sym#, #sym#"],
        location: "ocean, sea, lake, bay, strait, channel, river, creek, stream, waterfall, spring, pond, swamp, marsh, bog, glacier, tundra, desert, oasis, canyon, valley, mountain, volcano, plateau, peninsula, island, archipelago, reef, atoll, fjord, estuary, delta, beach, dune, cliff, cave, crater, caldera, geysir, hot spring, jungle, rainforest, savannah, steppe, prairie, plain, taiga, boreal forest, wetland, meadow".split(","),
        noun: "mist, whisper, breeze, sunrise, wanderlust, butterfly, solitude, bluss, reverie, treasure, gift, bite, fang, kiss, vision, heart, devil, eyes".split(","),
        animal: "quetzal, myna, kiwi, lyrebird, tuatara, gharial, lizard, chameleon, pitta, crane, pangolin, okapi, fossa, bear, jerboa, kinkajou, skink".split(","),
        end: "mina,smola,mi,thorne,tyre,triste,sam,bola,went,ragi".split(","),
        person: "maiden, knight, lover, friend, rival, king, queen, conqueror, emperor, princeling, traveler, child, wanderer, mother, father, orphan".split(","),
        feeling: "wrath, despair, envy, fear, longing, melancholy, hope, wonder, delight, desire, delight, awe".split(","),
        sym: "love, beauty, purity, devotion, humility, hope, innocence, joy, fidelity, trust, luck, prosperity, strength, protection, admiration, passion, enthusiasm, youth, happiness, grace, charm, gratitude, friendship, sincerity, modesty, perseverance, encouragement, remembrance, faith, courage, constancy, true love, sweetness, gentleness, patience, appreciation, admiration, warmth, sympathy, beauty of the heart, compassion, love at first sight, deep love, motherly love, loyalty, happiness in love, affection, gracefulness, optimism, positivity, renewal, spiritual enlightenment, humility, respect, appreciation, cheerfulness, wealth, love and respect, harmonious union, forsakenness, despair, disappointment, bitterness, hatred, rejection, unrequited love, heartbreak, betrayal, unfaithfulness, infidelity, hopelessness, grief, sorrow, sadness, pain, misery, loss, defeat, failure, despair, loneliness, isolation, abandonment, neglect, decay, death, illness, toxicity, venom, danger, warning, revenge, cruelty, curse, hex, bad luck, jinx".split(","),
        petals: "❀ ✥ ❁ ❊ ⚘".split(" "),
        origin: "<span><h2>#petals#</h2><h4>#name#</h4></span> <p><b>Also known as:</b> #aka# <p><b>Symbolizes:</b> #symbol#</p> "
    },

}