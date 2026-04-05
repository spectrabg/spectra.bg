const DATA = {
  websiteUrl: "https://spectra.bg",

  companyName: "Spectra.bg",
  logoPath: "logos/Spectra.bg.svg",

  // Legal identifiers
  legalNameBg:    "РИА СПЕКТРА ЕООД",         // Cyrillic legal name
  legalNameLatin: "RIA SPEKTRA EOOD",          // Latin legal name
  uic: "148096408",                           // ЕИК / UIC / EI
  vat: "BG148096408",                         // VAT number

  email: "office@spectra.bg",

  phone: "+35952607897", // used for phone, WhatsApp and Signal — international format, no spaces or dashes

  // Address shown in BG (Cyrillic)
  addressBg: "улица Иван Аксаков 31, Варна, 9002, България",

  // Address shown in EN/DE (Latinised)
  addressLatin: "ulitsa Ivan Aksakov 31, Varna, 9002, Bulgaria",

  // Google Maps link for the address
  addressMapUrl: "https://maps.app.goo.gl/5vPEtGgnL8djLR2T8",

  eurToBgn: 1.95583, // fixed BGN/EUR conversion rate

  services: [
    { key: "legalisedTranslation", price: 30, unit: "perPage" },
    { key: "printAds",             price: null },
    { key: "publishing",           price: null },
  ],
};
