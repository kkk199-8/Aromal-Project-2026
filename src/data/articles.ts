export interface Article {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string[];
    category: string;
    date: string;
    readTime: string;
    image: string;
}

export const ARTICLES: Article[] = [
    {
        id: 1,
        slug: "perse-yogurt-greke-eshte-zgjedhja-me-e-mire",
        title: "Përse yogurt greke është zgjedhja më e mirë",
        excerpt:
            "Zbuloni benefitet shëndetësore të yogurtit grek dhe përse e përdorim si bazë për të gjitha bowls tona.",
        content: [
            "Yogurti grek ka qenë një element thelbësor i dietës mesdhetare për mijëra vite. Por çfarë e bën atë aq të vëçantë?",
            "Para së gjithash, yogurti grek përmban pothuajse dyfishin e proteinës krahasuar me yogurtin e zakonshëm. Kjo e bën atë ideal për ata që kërkojnë një burim proteine natyrale, pa shtesa artificiale.",
            "Përveç proteinës, yogurti grek është i pasur me probiotikë — baktere të dobishme që ndihmojnë shëndetin e zorrëve. Këto probiotikë ndihmojnë tretjen, forcojnë imunitetin, dhe përmirësojnë thithjen e nutrientëve.",
            "Në Aromal, ne e përdorim yogurtin grek si bazë për të gjitha bowls tona. E zgjedhim nga ferma lokale brenda 50km nga Tirana, duke siguruar freski maksimale dhe cilësi të lartë.",
            "Kombinuar me fruta stinore, mjaltë artizanale shqiptare, dhe granola të përgatitur me dashuri, bowls tona ofrojnë një vakt të plotë, të shijshëm, dhe plotësisht natyral.",
        ],
        category: "Ushqyerje",
        date: "12 Shkurt 2026",
        readTime: "5 min",
        image: "/assets/blog-yogurt.jpg",
    },
    {
        id: 2,
        slug: "5-arsye-per-te-provuar-akai-bowl",
        title: "5 arsye për të provuar Açaí Bowl",
        excerpt:
            "Açaí bowl-i është më tepër se sa një trend. Zbuloni përfitimet e kësaj superfrutte amazone.",
        content: [
            "Açaí-ja, fruta e vogël vjollcë nga pyjet e Amazonës, ka pushtuar botën e ushqyerjes së shëndetshme. Por a ia vlen vërtet hype-i? Ne themi: absolutisht po.",
            "Arsyeja 1: Antioksidantë të fuqishëm. Açaí-ja përmban nivele jashtëzakonisht të larta antioksidantësh (ORAC), që ndihmojnë në luftimin e radikalëve të lira dhe plakjen e parakohshme.",
            "Arsyeja 2: Energji natyrale. Falë përmbajtjes së lartë të yndyrave të shëndetshme dhe karbohidrateve, açaí-ja ofron energji të qëndrueshme pa rritjen e sheqerit në gjak.",
            "Arsyeja 3: Shëndeti i zemrës. Antocianet në açaí mund të ndihmojnë në uljen e kolesterolit LDL dhe përmirësimin e qarkullimit të gjakut.",
            "Arsyeja 4: Lëkurë e shëndoshë. Vitaminat A, C dhe E në açaí kontribojnë në një lëkurë më të ndriçme dhe më elastike.",
            "Arsyeja 5: E shijshme! Shija e pasur, me nota berry dhe çokollatë, e bën açaí-në perfekte si bazë bowl — vështirë të ndalesh pas goditjes së parë.",
        ],
        category: "Superfoods",
        date: "8 Shkurt 2026",
        readTime: "4 min",
        image: "/assets/blog-acai.jpg",
    },
    {
        id: 3,
        slug: "guida-e-detox-natyral-ne-stinen-e-dimrit",
        title: "Guida e detox natyral në stinën e dimrit",
        excerpt:
            "Stina e ftohtë kërkon kujdes ekstra. Ja si të bëni detox natyral me përbërës stinorë.",
        content: [
            "Dimri mund të jetë stina ideale për të bërë një reset natyral të trupit. Me pak ekspozim ndaj diellit dhe më shumë ushqim komfort, trupi ynë ka nevojë për ndihmë ekstra.",
            "Filloni mëngjesit me ujë të ngrohtë me limon dhe xhenxhefil. Kjo përzierje e thjeshtë stimulon metabolizmin, ndihmon tretjen, dhe forcon imunitetin.",
            "Përfshini shots natyrore në rutinën tuaj ditore. Shots me kurkumë, xhenxhefil, spirulinë dhe limona janë të fuqishme antiinflamatore dhe antioksidante.",
            "Në Aromal, ofrojmë shots natyrore të freskëta çdo ditë, të përgatitura me dorë nga stafi ynë. Çdo shot është i balancuar për shije dhe efektivitet maksimal.",
            "Mos harroni frutat e dimrit: portokalli, mandarina, kivi, dhe kokërr-kuqe janë burime të shkëlqyera vitamine C, thelbësore për imunitetin.",
            "Kombinoni këto me mjaltë të papërpunuar lokale — e pasur me enzima natyrale dhe veti antibakteriale — për një rutinë detox që funksionon vërtet.",
        ],
        category: "Shëndet",
        date: "3 Shkurt 2026",
        readTime: "6 min",
        image: "/assets/blog-detox.jpg",
    },
];

export function getArticleBySlug(slug: string): Article | undefined {
    return ARTICLES.find((a) => a.slug === slug);
}
