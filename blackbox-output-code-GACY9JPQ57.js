const generateMetadata = (productName, category) => {
  // Simulated AI Generation logic
  const titles = [
    `Premium ${productName} | Luxury Menswear - Aultak`,
    `Modern ${productName} for Men - Aultak Official`
  ];
  
  // Smart Auto-Tagging logic
  const baseTags = ["#Aultak", "#MensFashion", "#Streetwear"];
  if (category === "Shirts") baseTags.push("#OxfordShirt", "#Formal");
  if (category === "T-shirts") baseTags.push("#CasualWear", "#SummerVibes");
  
  return {
    meta_title: titles[0],
    meta_desc: `Shop the latest ${productName}. Aultak offers premium, modern fits for the discerning gentleman. Free shipping on luxury menswear.`,
    tags: baseTags
  };
};

module.exports = { generateMetadata };