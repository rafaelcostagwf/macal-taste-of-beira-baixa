import pChar from "@/assets/product-charcutaria.jpg";
import pLat from "@/assets/product-laticinios.jpg";
import pPres from "@/assets/product-presunto.jpg";

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

const baseNutrition: NutritionalRow[] = [
  { label: "Energia", value: "1450 kJ / 348 kcal" },
  { label: "Lípidos", value: "28 g" },
  { label: "  dos quais saturados", value: "10 g" },
  { label: "Hidratos de carbono", value: "1.2 g" },
  { label: "  dos quais açúcares", value: "0.5 g" },
  { label: "Proteínas", value: "22 g" },
  { label: "Sal", value: "3.8 g" },
];

export const products: Product[] = [
  {
    slug: "chourico-de-carne",
    name: "Chouriço de Carne",
    category: "enchidos",
    image: pChar,
    short: "Fumeiro tradicional da Beira Baixa",
    description:
      "Chouriço de carne curado lentamente a fumo de lenha de carvalho, segundo a receita tradicional da Beira Baixa. Tempero equilibrado de pimentão doce, alho e vinho tinto da região.",
    ingredients: "Carne de porco, gordura de porco, sal, pimentão, alho, vinho tinto, especiarias.",
    weight: "250 g",
    conservation: "Conservar em local fresco e seco. Após abertura, refrigerar até 5 °C.",
    nutritional: baseNutrition,
  },
  {
    slug: "linguica",
    name: "Linguiça",
    category: "enchidos",
    image: pChar,
    short: "Curada a fumo lento",
    description: "Linguiça fina, intensa e equilibrada. Ideal para grelhar ou para acompanhar pratos tradicionais.",
    ingredients: "Carne de porco, sal, pimentão, alho, vinho branco, especiarias.",
    weight: "200 g",
    conservation: "Conservar refrigerado entre 0–5 °C.",
    nutritional: baseNutrition,
  },
  {
    slug: "salpicao",
    name: "Salpicão",
    category: "enchidos",
    image: pChar,
    short: "Lombo curado em tripa natural",
    description: "Salpicão de lombo de porco curado em tripa natural. Sabor profundo, textura firme.",
    ingredients: "Lombo de porco, sal, vinho, alho, pimentão, especiarias.",
    weight: "300 g",
    conservation: "Local fresco e seco. Refrigerar após abertura.",
    nutritional: baseNutrition,
  },
  {
    slug: "morcela",
    name: "Morcela",
    category: "enchidos",
    image: pChar,
    short: "Receita tradicional beirã",
    description: "Morcela de sangue, com pão e especiarias da serra. Excelente para cozer ou grelhar.",
    ingredients: "Sangue de porco, gordura, pão, cebola, cominhos, cravinho, sal.",
    weight: "250 g",
    conservation: "Refrigerar entre 0–5 °C.",
    nutritional: baseNutrition,
  },
  {
    slug: "farinheira",
    name: "Farinheira",
    category: "enchidos",
    image: pChar,
    short: "Aroma fumado e textura macia",
    description: "Farinheira tradicional, perfeita em cozidos, ovos mexidos ou grelhada.",
    ingredients: "Farinha de trigo, gordura de porco, vinho branco, pimentão, alho, sal.",
    weight: "220 g",
    conservation: "Local fresco e seco.",
    nutritional: baseNutrition,
  },
  {
    slug: "presunto-peca-inteira",
    name: "Presunto Peça Inteira",
    category: "presuntos",
    image: pPres,
    short: "Cura natural de longa duração",
    description:
      "Presunto curado naturalmente durante mais de 18 meses nas adegas da Beira Baixa. Sabor profundo, gordura entremeada e aroma característico.",
    ingredients: "Perna de porco, sal marinho.",
    weight: "7–8 kg",
    conservation: "Pendurado em local seco e fresco.",
    nutritional: [
      { label: "Energia", value: "1180 kJ / 282 kcal" },
      { label: "Lípidos", value: "16 g" },
      { label: "  dos quais saturados", value: "5.5 g" },
      { label: "Hidratos de carbono", value: "< 0.5 g" },
      { label: "Proteínas", value: "34 g" },
      { label: "Sal", value: "5.2 g" },
    ],
  },
  {
    slug: "presunto-fatiado",
    name: "Presunto Fatiado",
    category: "presuntos",
    image: pPres,
    short: "Fatias finas, prontas a servir",
    description: "Presunto curado, fatiado fino em embalagem protetora. Pronto a servir.",
    ingredients: "Perna de porco, sal marinho.",
    weight: "100 g",
    conservation: "Refrigerar entre 0–5 °C.",
    nutritional: baseNutrition,
  },
  {
    slug: "paleta-curada",
    name: "Paleta Curada",
    category: "presuntos",
    image: pPres,
    short: "Cura tradicional, sabor pleno",
    description: "Paleta de porco curada lentamente, mais acessível e igualmente saborosa.",
    ingredients: "Pá de porco, sal marinho.",
    weight: "4–5 kg",
    conservation: "Pendurado em local seco.",
    nutritional: baseNutrition,
  },
  {
    slug: "queijo-de-ovelha-amanteigado",
    name: "Queijo de Ovelha Amanteigado",
    category: "laticinios",
    image: pLat,
    short: "Pasta cremosa, leite de ovelha",
    description: "Queijo artesanal de ovelha de pasta amanteigada, produzido com leite cru da região.",
    ingredients: "Leite cru de ovelha, sal, coalho vegetal (cardo).",
    weight: "500 g",
    conservation: "Refrigerar entre 4–8 °C.",
    nutritional: [
      { label: "Energia", value: "1620 kJ / 390 kcal" },
      { label: "Lípidos", value: "33 g" },
      { label: "  dos quais saturados", value: "21 g" },
      { label: "Hidratos de carbono", value: "0.5 g" },
      { label: "Proteínas", value: "22 g" },
      { label: "Sal", value: "1.8 g" },
    ],
  },
  {
    slug: "queijo-curado-de-mistura",
    name: "Queijo Curado de Mistura",
    category: "laticinios",
    image: pLat,
    short: "Cura prolongada",
    description: "Queijo de mistura ovelha e cabra, curado durante meses. Sabor intenso, casca rústica.",
    ingredients: "Leite cru de ovelha e cabra, sal, coalho.",
    weight: "800 g",
    conservation: "Refrigerar entre 4–8 °C.",
    nutritional: baseNutrition,
  },
  {
    slug: "requeijao",
    name: "Requeijão",
    category: "laticinios",
    image: pLat,
    short: "Fresco e cremoso",
    description: "Requeijão fresco de soro de leite de ovelha, ideal com doce de abóbora ou mel.",
    ingredients: "Soro de leite de ovelha, leite, sal.",
    weight: "250 g",
    conservation: "Refrigerar a 4 °C. Consumir em 5 dias após abertura.",
    nutritional: baseNutrition,
  },
  {
    slug: "cabaz-tradicao",
    name: "Cabaz Tradição",
    category: "cabazes",
    image: pChar,
    short: "Seleção dos clássicos Macal",
    description: "Cabaz com presunto fatiado, chouriço, salpicão, queijo curado e doce regional.",
    ingredients: "Vários — ver rótulo de cada produto.",
    weight: "≈ 2 kg",
    conservation: "Conforme indicações de cada produto.",
    nutritional: baseNutrition,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
