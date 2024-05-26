// src/api.js
import { ref } from "vue";

export const useProducts = () => {
  const products = ref([
    {
      id: "T1001",
      name: "松嶺四季春",
      price: 360,
      thumb: "/p1.jpg",
      amount: 0,
      amountShow: 1,
      showingIcon: false,
      depiction:
        "在松嶺深處，四季更迭的細語中，這款四季春茶醇和清爽，恍如置身於清晨薄霧中。每一口，都能感受到自然的清新和純淨，猶如漫步在松林間，感受歲月的沉澱與自然的詩意。",
    },
    {
      id: "T10011",
      name: "蜜香紅烏龍",
      price: 280,
      thumb: "/p2.jpg",
      amount: 0,
      amountShow: 1,
      showingIcon: false,
      depiction:
        "這款蜜香紅烏龍茶，猶如一段甜美的戀曲。茶葉在微風中搖曳，浸透了花蜜的芬芳與紅茶的濃郁。每一口，都是一次對自然甘美的體驗，帶你走進一個充滿蜜意的世界，溫暖且令人難忘。",
    },
    {
      id: "T10113",
      name: "頂級高冷玉露茶",
      price: 850,
      thumb: "/p3.jpg",
      amount: 0,
      amountShow: 1,
      showingIcon: false,
      depiction:
        "從高山之巔，採摘下這片頂級高冷玉露茶葉，凝聚了晨霧與清風的靈氣。茶湯清澈甘醇，猶如一場心靈的洗禮，讓人回歸自然，體會到那一抹恬靜與悠然。",
    },
    {
      id: "T2100",
      name: "愛爾蘭奶油紅茶",
      price: 180,
      thumb: "/p4.jpg",
      amount: 0,
      amountShow: 1,
      showingIcon: false,
      depiction:
        "愛爾蘭的綠野與浪漫，凝聚在這杯奶油紅茶中。濃郁的紅茶與絲滑的奶香交織，猶如愛爾蘭的綠野仙蹤般迷人。每一口，都是一場浪漫的冒險，帶你領略愛爾蘭的風情與溫暖。",
    },
    {
      id: "T2301",
      name: "香草舒眠茶",
      price: 210,
      thumb: "/p5.jpg",
      amount: 0,
      amountShow: 1,
      showingIcon: false,
      depiction:
        "在寧靜的夜晚，香草舒眠茶猶如一首安撫心靈的晚歌。混合了香草的自然芬芳與茶葉的溫潤，每一口都帶來無盡的平和與舒適，讓你在繁忙的生活中找到一絲寧靜，擁有甜美的夢境。",
    },
    {
      id: "T1307",
      name: "頂級明治手磨抹茶",
      price: 2150,
      thumb: "/p6.jpg",
      amount: 0,
      amountShow: 1,
      showingIcon: false,
      depiction:
        "這款頂級明治手磨抹茶，凝聚了傳統工藝與自然精華。濃郁的抹茶香氣，猶如一場古老儀式的重現，每一口都能感受到工匠精神與自然的融合。細膩的茶湯，帶來無與倫比的口感，讓你品味到抹茶的極致奢華。",
    },
  ]);

  return { products };
};
