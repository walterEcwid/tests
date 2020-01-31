console.log("Кастомное приложение загружено!");

Ecwid.OnPageLoaded.add(function(page) {
  var lang = Ecwid.getStorefrontLang();
  console.log(lang);
});
