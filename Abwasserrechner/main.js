let personen = 2;
let wieoft = 1;
let toil = 1;
let kuche = 0;
let dusche = 0;
let waschmaschine = 1;
let tage = 30;
let volumen;

let name;
let img;
let preis;
let link;

calculate();

$(document).on('click', '.image-container-grey', function(event) {
  if ($(this).hasClass('1')) {
    personen = 1;
  } else if ($(this).hasClass('2')) {
    personen = 2;
  } else if ($(this).hasClass('3')) {
    personen = 3;
  } else if ($(this).hasClass('4')) {
    personen = 4;
  }
  $('.image-container-grey').removeClass('clicked');
  $(this).addClass('clicked');
  calculate();
  return false;
});

$(document).on('click', '.image-container-grey3', function(event) {
  if ($(this).hasClass('clicked')) {
    $(this).removeClass('clicked');
  } else {
    $(this).addClass('clicked');
  }
  calculate();
  return false;
});

$(document).on('click', '.image-container-grey2', function(event) {
  if ($(this).hasClass('1')) {
    wieoft = 1;
  } else if ($(this).hasClass('2')) {
    wieoft = 2;
  } else if ($(this).hasClass('3')) {
    wieoft = 3;
  } else if ($(this).hasClass('4')) {
    wieoft = 4;
  }
  $('.image-container-grey2').removeClass('clicked');
  $(this).addClass('clicked');
  calculate();
  return false;
});


$(":input#number-input").bind('keyup change click', function(e) {
  if (!$(this).data("previousValue") ||
    $(this).data("previousValue") != $(this).val()
  ) {
    tage = $(this).val();
    $(this).data("previousValue", $(this).val());
  }
  calculate();
});

function calculate() {
  if ($('.toi').hasClass('clicked')) {
    toil = 1;
  } else {
    toil = 0;
  }
  if ($('.kue').hasClass('clicked')) {
    kuche = 1;
  } else {
    kuche = 0;
  }
  if ($('.dus').hasClass('clicked')) {
    dusche = 1;
  } else {
    dusche = 0;
  }
  if ($('.was').hasClass('clicked')) {
    waschmaschine = 1;
  } else {
    waschmaschine = 0;
  }

  console.log('Personen: ' + personen);
  console.log('Abholintervall: ' + wieoft);
  console.log('Toilette: ' + toil);
  console.log('Küche: ' + kuche);
  console.log('Dusche: ' + dusche);
  console.log('Waschmaschine: ' + waschmaschine);
  console.log('Tage: ' + tage);
  volumen = 0;
  if (toil == 1) {
    volumen = 40; // Default Wert für ein Tag
  }
  if (kuche == 1) {
    volumen = volumen + 10; // Default Wert für ein Tag
  }
  if (dusche == 1) {
    volumen = volumen + 50; // Default Wert für ein Tag
  }
  if (waschmaschine == 1) {
    volumen = volumen + 20; // Default Wert für ein Tag
  }
  volumen = volumen * tage; // Volumen * Tag im Garten pro Jahr

  volumen = volumen * personen; // Volumen Multiplziert mal Personen

  // Abholintervall dividiert das Volumen
  if (wieoft > 1) {
    volumen = volumen / wieoft;
  }
  volumen = Math.round(volumen);
  console.log('Volumen: ' + volumen + 'Liter');
  $('#resulttank').html('Ihr benötigtes Tankvolumen: ' + volumen + ' Liter');

  if (volumen <= 700) {
    name = "Abwassertank 700 Liter";
    link = "https://www.shop.greenlife.de/abwasser/abwassersammeltanks/abwassertank-700-liter";
    img = "https://www.shop.greenlife.de/media/image/48/c3/5f/Abwassertank-700-Liter-dn200_200x200@2x.png";
    preis = "ab 465,00 €";
  } else if (volumen <= 1000) {
    name = "Abwassertank 1000 Liter";
    link = "https://www.shop.greenlife.de/abwasser/abwassersammeltanks/abwassertank-1000-liter";
    img = "https://www.shop.greenlife.de/media/image/f7/a3/02/Abwassertank-1000-Liter7it8MZJvlpgk2_200x200@2x.png";
    preis = "695,00 €";
  } else if (volumen <= 3000) {
    name = "Abwassertank 3000 Liter";
    link = "https://www.shop.greenlife.de/abwasser/abwassersammeltanks/abwassertank-3000-liter";
    img = "https://www.shop.greenlife.de/media/image/ff/64/39/Abwassertank-3000-Liter-dn200_200x200@2x.png";
    preis = "ab 1.495,00 €";
  } else if (volumen <= 6000) {
    name = "Abwassertank-System 6000 Liter";
    link = "https://www.shop.greenlife.de/abwasser/abwassersammeltanks/abwassertank-system-6000-liter";
    img = "https://www.shop.greenlife.de/media/image/3c/3a/9c/Abwassertank-system-6000-Liter-DN200_200x200@2x.png";
    preis = "ab 2.985,00 €";
  } else if (volumen <= 9000) {
    name = "Abwassertank-System 9000 Liter";
    link = "https://www.shop.greenlife.de/abwasser/abwassersammeltanks/abwassertank-system-9000-liter";
    img = "https://www.shop.greenlife.de/media/image/31/ec/b3/abwassertank-9000-liter-dn200_200x200@2x.png";
    preis = "ab 4.475,00 €";
  } else if (volumen <= 12000) {
    name = "Abwassertank-System 12000 Liter";
    link = "https://www.shop.greenlife.de/abwasser/abwassersammeltanks/abwassertank-system-12000-liter";
    img = "https://www.shop.greenlife.de/media/image/86/4c/6e/abwassertank-12000-liter-dn200_200x200@2x.png";
    preis = "ab 5.065,00 €";
  } else if (volumen <= 15000) {
    name = "Abwassertank-System 15000 Liter";
    link = "https://www.shop.greenlife.de/abwasser/abwassersammeltanks/abwassertank-system-15000-liter";
    img = "https://www.shop.greenlife.de/media/image/d6/aa/95/abwassertank-15000-liter-dn200_200x200@2x.png";
    preis = "ab 7.455,00 €";
  } else if (volumen > 15000) {
    name = "Abwassertank-System 18000 Liter";
    link = "https://www.shop.greenlife.de/abwasser/abwassersammeltanks/abwassertank-system-18000-liter";
    img = "https://www.shop.greenlife.de/media/image/4d/e0/b6/abwassertank-18000-liter-dn200_200x200@2x.png";
    preis = "ab 8.945,00 €";
  }

  $('#tankname').html(name);
  $('#tankname').attr("href", link);
  $('.tankbutton').attr("href", link);
  $('#tankimg').attr("src", img);
  $('#preis-anzeige').html(preis);
  return false;
}
