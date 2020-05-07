console.log("Кастомное приложение загружено!!!");

Ecwid.OnPageLoaded.add(function(page) {
  var test = Ecwid.getStorefrontLang();
  console.log(test);
});
