import feijoadaImg from "@/assets/recipe-feijoada.jpg";
import caldoVerdeImg from "@/assets/recipe-caldoverde.jpg";
import tabuaImg from "@/assets/recipe-tabua.jpg";
import migasImg from "@/assets/recipe-migas.jpg";

export type Recipe = {
  slug: string;
  title: string;
  image: string;
  time: string;
  servings: string;
  difficulty: "Fácil" | "Médio" | "Difícil";
  product: { name: string; href: string };
  intro: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "feijoada-a-transmontana",
    title: "Feijoada à transmontana",
    image: feijoadaImg,
    time: "1h 30",
    servings: "6 pessoas",
    difficulty: "Médio",
    product: { name: "Chouriço de carne Macal", href: "/produtos#charcutaria" },
    intro:
      "Um clássico da cozinha portuguesa, onde o fumeiro da Beira Baixa dá profundidade ao prato. O chouriço Macal solta gordura e cor, transformando o feijão em algo memorável.",
    ingredients: [
      "500 g de feijão encarnado demolhado",
      "250 g de chouriço de carne Macal",
      "200 g de carne de porco em cubos",
      "150 g de toucinho fumado",
      "1 cebola, 3 dentes de alho",
      "Louro, colorau, azeite, sal q.b.",
    ],
    steps: [
      "Refogue a cebola e o alho em azeite até alourar.",
      "Junte as carnes, o chouriço Macal em rodelas grossas e o toucinho. Deixe ganhar cor.",
      "Acrescente o feijão escorrido, o louro e o colorau. Cubra com água quente.",
      "Cozinhe em lume brando 60–80 min, até o caldo ficar denso e perfumado.",
      "Sirva com arroz branco e couve salteada.",
    ],
  },
  {
    slug: "caldo-verde",
    title: "Caldo verde com chouriço Macal",
    image: caldoVerdeImg,
    time: "45 min",
    servings: "4 pessoas",
    difficulty: "Fácil",
    product: { name: "Chouriço de carne Macal", href: "/produtos#charcutaria" },
    intro:
      "A sopa nacional, com a couve galega bem fina e rodelas finas de chouriço Macal a perfumarem cada colher.",
    ingredients: [
      "1 molho de couve galega",
      "4 batatas médias",
      "1 cebola, 2 dentes de alho",
      "120 g de chouriço Macal",
      "Azeite virgem extra, sal q.b.",
    ],
    steps: [
      "Coza as batatas com cebola e alho até ficarem macias. Reduza a puré.",
      "Junte a couve galega cortada muito fina e deixe cozer 3–4 minutos.",
      "Tempere com azeite e sal.",
      "Adicione as rodelas de chouriço Macal previamente salteadas e sirva.",
    ],
  },
  {
    slug: "tabua-presunto-queijo",
    title: "Tábua de presunto, queijo e figos",
    image: tabuaImg,
    time: "10 min",
    servings: "2–4 pessoas",
    difficulty: "Fácil",
    product: { name: "Presunto curado Macal", href: "/produtos#presunto" },
    intro:
      "Sem cozinhar: só seleção. O presunto Macal de cura lenta, queijo de ovelha amanteigado e figos maduros — a Beira Baixa numa tábua.",
    ingredients: [
      "120 g de presunto curado Macal fatiado fino",
      "150 g de queijo de ovelha amanteigado Macal",
      "4 figos frescos",
      "Mel, pão rústico, azeite",
    ],
    steps: [
      "Disponha o presunto enrolado em ondas, deixando ar entre as fatias.",
      "Corte o queijo em cunhas e os figos ao meio.",
      "Regue os figos e o queijo com mel.",
      "Acompanhe com pão tostado e um fio de azeite.",
    ],
  },
  {
    slug: "migas-alentejanas",
    title: "Migas com farinheira Macal",
    image: migasImg,
    time: "50 min",
    servings: "4 pessoas",
    difficulty: "Médio",
    product: { name: "Farinheira Macal", href: "/produtos#charcutaria" },
    intro:
      "A farinheira Macal funde-se com o pão alentejano e o azeite, criando umas migas douradas, perfumadas e reconfortantes.",
    ingredients: [
      "500 g de pão alentejano duro",
      "300 g de farinheira Macal",
      "4 dentes de alho",
      "Azeite, colorau, sal q.b.",
    ],
    steps: [
      "Demolhe o pão em água morna salgada.",
      "Frite a farinheira Macal em rodelas até libertar a gordura aromática.",
      "Reserve a farinheira, doure os alhos no azeite e junte o pão escorrido.",
      "Mexa em lume médio até as migas ficarem douradas. Sirva com a farinheira por cima.",
    ],
  },
];

export const getRecipe = (slug: string) => recipes.find((r) => r.slug === slug);
