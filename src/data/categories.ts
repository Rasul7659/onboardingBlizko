import { assets } from "./assets";

export type CategoryCard = {
  label: string;
  image: string;
  bg: string;
  wide?: boolean; // spans 2 columns
};

export type CategorySection = {
  title: string;
  cards: CategoryCard[];
};

export const categorySections: CategorySection[] = [
  {
    title: "Фруктово-овощной прилавок",
    cards: [
      { label: "Овощи, грибы", image: assets.categoryVegetables, bg: "#e3f8d6" },
      { label: "Зелень", image: assets.categoryGreens, bg: "#e3f8d6" },
      { label: "Фрукты, ягоды", image: assets.categoryFruits, bg: "#e3f8d6" },
    ],
  },
  {
    title: "Мясо, птица, рыба",
    cards: [
      { label: "Мясо, птица", image: assets.categoryMeat, bg: "#ffeae6" },
      { label: "Колбасы, деликатесы", image: assets.categorySausage, bg: "#ffeae6" },
      { label: "Рыба и морепродукты", image: assets.categoryFish, bg: "#ffeae6" },
    ],
  },
  {
    title: "Молочный прилавок",
    cards: [
      { label: "Кефир, сметана, творог", image: assets.categoryKefir, bg: "#e6f1ff", wide: true },
      { label: "Молоко, масло", image: assets.categoryMilk, bg: "#e6f1ff" },
      { label: "Сыры", image: assets.categoryCheese, bg: "#e6f1ff" },
      { label: "Йогурты и десерты", image: assets.categoryYogurt, bg: "#e6f1ff" },
      { label: "Яйца", image: assets.categoryEggs, bg: "#e6f1ff" },
    ],
  },
  {
    title: "Сладкое",
    cards: [
      { label: "Десерты и выпечка", image: assets.categoryDesserts, bg: "#fff3eb", wide: true },
      { label: "Печенья и вафли", image: assets.categoryCookies, bg: "#fff3eb" },
      { label: "Зефир, мармелад", image: assets.categoryMarshmallow, bg: "#fff3eb" },
      { label: "Жвачка, леденцы", image: assets.categoryGum, bg: "#fff3eb" },
      { label: "Шоколад и конфеты", image: assets.categoryChocolate, bg: "#fff3eb" },
    ],
  },
  {
    title: "Снеки",
    cards: [
      { label: "Чипсы, семечки", image: assets.categoryChips, bg: "#fff7e3" },
      { label: "Хлебцы и сухари", image: assets.categoryCrackers, bg: "#fff7e3" },
      { label: "Орехи, сухофрукты", image: assets.categoryNuts, bg: "#fff7e3" },
    ],
  },
  {
    title: "Бакалея",
    cards: [
      { label: "Макароны, крупы и мука", image: assets.categoryPasta, bg: "#f2f6e1" },
      { label: "Консервация", image: assets.categoryCanned, bg: "#f2f6e1" },
      { label: "Чай, кофе", image: assets.categoryTea, bg: "#f2f6e1" },
      { label: "Масло, соусы и специи", image: assets.categorySauces, bg: "#f2f6e1" },
      { label: "Каши, завтраки", image: assets.categoryPorridge, bg: "#f2f6e1" },
      { label: "Залить кипятком", image: assets.categoryInstant, bg: "#f2f6e1" },
    ],
  },
  {
    title: "Вода и напитки",
    cards: [
      { label: "Вода", image: assets.categoryWater, bg: "#edf3fa", wide: true },
      { label: "Соки", image: assets.categoryJuice, bg: "#edf3fa" },
      { label: "Лимонады и газировка", image: assets.categoryLemonade, bg: "#edf3fa" },
      { label: "Холодный чай", image: assets.categoryIceTea, bg: "#edf3fa" },
      { label: "Энергетики", image: assets.categoryEnergy, bg: "#edf3fa" },
    ],
  },
  {
    title: "Морозилка",
    cards: [
      { label: "Полуфабрикаты", image: assets.categoryFrozenFood, bg: "#ebf0ff" },
      { label: "Мороженое", image: assets.categoryIceCream, bg: "#ebf0ff" },
      { label: "Овощи, фрукты, ягоды", image: assets.categoryFrozenVeg, bg: "#ebf0ff" },
    ],
  },
  {
    title: "Бытовая химия и гигиена",
    cards: [
      { label: "Средства для стирки и посуды", image: assets.categoryLaundry, bg: "#e5f0ef", wide: true },
      { label: "Средства гигиены", image: assets.categoryHygiene, bg: "#e5f0ef" },
      { label: "Средства для уборки", image: assets.categoryClean, bg: "#e5f0ef" },
      { label: "Уходовая косметика", image: assets.categorySkinCare, bg: "#e5f0ef" },
      { label: "Хоз. товары", image: assets.categoryHousehold, bg: "#e5f0ef" },
    ],
  },
  {
    title: "Для детей",
    cards: [
      { label: "Продукты питания", image: assets.categoryKidsFood, bg: "#fff5e5", wide: true },
      { label: "Уходовые средства", image: assets.categoryKidsCare, bg: "#fff5e5" },
    ],
  },
  {
    title: "Товары для животных",
    cards: [
      { label: "Влажный и сухой корм", image: assets.categoryPetFood, bg: "#e7f7e9", wide: true },
      { label: "Наполнители и туалеты для кошек", image: assets.categoryPetLitter, bg: "#e7f7e9" },
    ],
  },
  {
    title: "Всегда пригодится",
    cards: [
      { label: "Школа, офис", image: assets.categoryOffice, bg: "#eef0f6", wide: true },
      { label: "Носки и колготки", image: assets.categorySocks, bg: "#eef0f6" },
      { label: "Гаджеты, аксессуары", image: assets.categoryGadgets, bg: "#eef0f6" },
      { label: "Праздники", image: assets.categoryHoliday, bg: "#eef0f6", wide: true },
    ],
  },
];
