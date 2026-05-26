import carneSeca from "@/assets/products/carne-seca.png";
import salsichas from "@/assets/products/salsichas-criola.png";
import torresmos from "@/assets/products/torresmos.png";
import toucinho from "@/assets/products/toucinho-porco-preto.png";

export type ProductCategory = "enchidos" | "presuntos" | "laticinios" | "fumados" | "cabazes";

export type NutritionalRow = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  image: string;
  short: string;
  description: string;
  ingredients: string;
  weight: string;
  conservation: string;
  nutritional: NutritionalRow[];
};

export const categories: { id: ProductCategory | "todos"; label: string }[] = [
  { id: "todos", label: "Ver todos" },
  { id: "enchidos", label: "Enchidos" },
  { id: "presuntos", label: "Presuntos" },
  { id: "laticinios", label: "Laticínios" },
  { id: "fumados", label: "Fumados" },
  { id: "cabazes", label: "Cabazes" },
];

export const products: Product[] = [
  {
    slug: "carne-seca",
    name: "Carne Seca",
    category: "fumados",
    image: carneSeca,
    short: "Carne de bovino curada e seca",
    description:
      "Carne seca de bovino curada lentamente segundo a tradição Macal. Sabor intenso e textura firme, ideal para demolhar e cozer em pratos tradicionais.",
    ingredients:
      "96% Carne de Bovino (Origem UE), Sal, Açúcares, antioxidantes (E301 e E331) e Conservantes (E252 e E250).",
    weight: "≈ 250 g",
    conservation: "Conservar em local fresco e seco. Demolhar e cozer antes de consumir.",
    nutritional: [
      { label: "Energia", value: "1888,5 kJ / 454,5 kcal" },
      { label: "Lípidos", value: "35,1 g" },
      { label: "  dos quais saturados", value: "20,1 g" },
      { label: "Hidratos de carbono", value: "2,0 g" },
      { label: "  dos quais açúcares", value: "<0,5 g" },
      { label: "Proteínas", value: "32,8 g" },
      { label: "Sal", value: "3,4 g" },
    ],
  },
  {
    slug: "salsichas-criola",
    name: "Salsichas Criola",
    category: "enchidos",
    image: salsichas,
    short: "Salsicha fresca de receita criola",
    description:
      "Salsichas frescas de carne de porco, temperadas com especiarias suaves. Excelentes para grelhar, fritar ou cozer.",
    ingredients:
      "Carne e gordura de porco, água, amido, açúcar, sal, proteína de LEITE, antioxidantes (E301, E331), estabilizantes (E451i, E450i), gelificante (E407), intensificador de sabor (E621), especiarias, corante (E120), conservante (E250). Contém LEITE. Pode conter vestígios de soja, glúten, sulfitos.",
    weight: "≈ 500 g",
    conservation: "Conservar entre 0 °C e 5 °C.",
    nutritional: [
      { label: "Energia", value: "1391 kJ / 336 kcal" },
      { label: "Lípidos", value: "30,0 g" },
      { label: "  dos quais saturados", value: "10,9 g" },
      { label: "Hidratos de carbono", value: "3,4 g" },
      { label: "  dos quais açúcares", value: "<0,5 g" },
      { label: "Proteínas", value: "13,1 g" },
      { label: "Sal", value: "2,88 g" },
    ],
  },
  {
    slug: "torresmos",
    name: "Torresmos",
    category: "fumados",
    image: torresmos,
    short: "Torresmos à moda tradicional",
    description:
      "Torresmos preparados com toucinho gordo e entremeada, cozidos lentamente e temperados com massa de alho. Crocantes e saborosos.",
    ingredients:
      "Toucinho gordo e entremeada, couratos de suíno cozidos, sal, massa de alho (sulfitos) e especiarias.",
    weight: "≈ 200 g",
    conservation: "Conservar em local fresco e seco.",
    nutritional: [
      { label: "Energia", value: "1888,5 kJ / 454,5 kcal" },
      { label: "Lípidos", value: "35,1 g" },
      { label: "  dos quais saturados", value: "20,1 g" },
      { label: "Hidratos de carbono", value: "2,0 g" },
      { label: "  dos quais açúcares", value: "<0,5 g" },
      { label: "Proteínas", value: "32,8 g" },
      { label: "Sal", value: "3,4 g" },
    ],
  },
  {
    slug: "toucinho-porco-preto",
    name: "Toucinho de Porco Preto",
    category: "presuntos",
    image: toucinho,
    short: "Nacos de toucinho de porco preto",
    description:
      "Toucinho de porco preto em nacos, ideal para enriquecer cozidos, assados e refogados com a gordura nobre desta raça.",
    ingredients:
      "Toucinho de porco preto e sal. Pode conter vestígios de sulfitos, glúten e soja.",
    weight: "≈ 400 g",
    conservation: "Conservar a temperatura inferior a 10 °C. Consumir após tratamento térmico.",
    nutritional: [
      { label: "Energia", value: "3331 kJ / 810 kcal" },
      { label: "Lípidos", value: "87,8 g" },
      { label: "  dos quais saturados", value: "35,4 g" },
      { label: "Hidratos de carbono", value: "3,4 g" },
      { label: "  dos quais açúcares", value: "<0,5 g" },
      { label: "Fibra", value: "0 g" },
      { label: "Proteínas", value: "1,2 g" },
      { label: "Sal", value: "1,23 g" },
    ],
  },
  {
    slug: "linguica",
    name: "Linguiça",
    category: "enchidos",
    image: salsichas,
    short: "Enchido curado de carne de porco",
    description:
      "Linguiça fina de carne de porco temperada, ideal para grelhar ou para acompanhar pratos tradicionais.",
    ingredients: "Carne de porco, sal, pimentão, alho, vinho branco, especiarias.",
    weight: "≈ 250 g",
    conservation: "Conservar refrigerado entre 0–5 °C.",
    nutritional: [
      { label: "Energia", value: "1450 kJ / 348 kcal" },
      { label: "Lípidos", value: "28 g" },
      { label: "Proteínas", value: "22 g" },
      { label: "Sal", value: "3,8 g" },
    ],
  },
  {
    slug: "chourico-de-carne",
    name: "Chouriço de Carne",
    category: "enchidos",
    image: torresmos,
    short: "Fumeiro tradicional",
    description:
      "Chouriço de carne curado a fumo lento, segundo a receita tradicional. Tempero equilibrado de pimentão, alho e vinho tinto.",
    ingredients: "Carne de porco, gordura, sal, pimentão, alho, vinho tinto, especiarias.",
    weight: "≈ 300 g",
    conservation: "Local fresco e seco. Refrigerar após abertura.",
    nutritional: [
      { label: "Energia", value: "1450 kJ / 348 kcal" },
      { label: "Lípidos", value: "28 g" },
      { label: "Proteínas", value: "22 g" },
      { label: "Sal", value: "3,8 g" },
    ],
  },
  {
    slug: "presunto-curado",
    name: "Presunto Curado",
    category: "presuntos",
    image: toucinho,
    short: "Cura natural de longa duração",
    description: "Presunto curado naturalmente durante mais de 18 meses. Sabor profundo e aroma característico.",
    ingredients: "Perna de porco, sal marinho.",
    weight: "7–8 kg",
    conservation: "Pendurado em local seco e fresco.",
    nutritional: [
      { label: "Energia", value: "1180 kJ / 282 kcal" },
      { label: "Lípidos", value: "16 g" },
      { label: "Proteínas", value: "34 g" },
      { label: "Sal", value: "5,2 g" },
    ],
  },
  {
    slug: "cabaz-tradicao",
    name: "Cabaz Tradição",
    category: "cabazes",
    image: carneSeca,
    short: "Seleção dos clássicos Macal",
    description: "Cabaz com uma seleção dos clássicos Macal: enchidos, fumados e carnes curadas da casa.",
    ingredients: "Vários — ver rótulo de cada produto.",
    weight: "≈ 2 kg",
    conservation: "Conforme indicações de cada produto.",
    nutritional: [
      { label: "Variável", value: "ver cada produto" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
