var personen = 1;
var wieoft = 2;
var toil = 0;
var trink = 0;
var dusche = 0;
var waschmaschine = 0;
var tage = 50;
var volumen;
var regenwasserertrag;
var wasserverbrauch;

var auffangflaeche;
var dachart = 1;
var plz;
var niederschlagsmenge;

var toilverbrauch = 0;
var waschverbrauch = 0;
var bewasserflaeche;
var speichergroße;

var name;
var img;
var preis;
var link;

var nsw = {
  10: {
    ns: "0.495"
  },
  11: {
    ns: "0.495"
  },
  12: {
    ns: "0.531"
  },
  13: {
    ns: "0.495"
  },
  14: {
    ns: "0.486"
  },
  15: {
    ns: "0.477"
  },
  16: {
    ns: "0.423"
  },
  17: {
    ns: "0.495"
  },
  18: {
    ns: "0.594"
  },
  19: {
    ns: "0.585"
  },
  20: {
    ns: "0.720"
  },
  21: {
    ns: "0.693"
  },
  22: {
    ns: "0.666"
  },
  23: {
    ns: "0.594"
  },
  24: {
    ns: "0.738"
  },
  25: {
    ns: "0.900"
  },
  26: {
    ns: "0.666"
  },
  27: {
    ns: "0.702"
  },
  28: {
    ns: "0.639"
  },
  29: {
    ns: "0.702"
  },
  30: {
    ns: "0.585"
  },
  31: {
    ns: "0.720"
  },
  32: {
    ns: "0.720"
  },
  33: {
    ns: "0.765"
  },
  34: {
    ns: "0.711"
  },
  35: {
    ns: "0.657"
  },
  36: {
    ns: "0.810"
  },
  37: {
    ns: "0.576"
  },
  38: {
    ns: "0.837"
  },
  39: {
    ns: "0.477"
  },
  40: {
    ns: "0.990"
  },
  41: {
    ns: "0.720"
  },
  42: {
    ns: "1.161"
  },
  43: {
    ns: "1.161"
  },
  44: {
    ns: "0.900"
  },
  45: {
    ns: "0.792"
  },
  46: {
    ns: "0.900"
  },
  47: {
    ns: "0.666"
  },
  48: {
    ns: "0.657"
  },
  49: {
    ns: "0.729"
  },
  50: {
    ns: "1.125"
  },
  51: {
    ns: "1.170"
  },
  52: {
    ns: "0.729"
  },
  53: {
    ns: "0.666"
  },
  54: {
    ns: "0.675"
  },
  55: {
    ns: "0.459"
  },
  56: {
    ns: "1.017"
  },
  57: {
    ns: "1.035"
  },
  58: {
    ns: "1.098"
  },
  59: {
    ns: "1.314"
  },
  60: {
    ns: "0.567"
  },
  61: {
    ns: "0.864"
  },
  62: {
    ns: "0.864"
  },
  63: {
    ns: "0.639"
  },
  64: {
    ns: "0.774"
  },
  65: {
    ns: "0.477"
  },
  66: {
    ns: "1.125"
  },
  67: {
    ns: "0.585"
  },
  68: {
    ns: "0.576"
  },
  69: {
    ns: "0.693"
  },
  70: {
    ns: "0.612"
  },
  71: {
    ns: "0.936"
  },
  72: {
    ns: "1.431"
  },
  73: {
    ns: "0.846"
  },
  74: {
    ns: "0.711"
  },
  75: {
    ns: "0.711"
  },
  76: {
    ns: "0.666"
  },
  77: {
    ns: "1.080"
  },
  78: {
    ns: "0.828"
  },
  79: {
    ns: "0.918"
  },
  80: {
    ns: "0.900"
  },
  81: {
    ns: "0.855"
  },
  82: {
    ns: "1.080"
  },
  83: {
    ns: "1.494"
  },
  84: {
    ns: "0.765"
  },
  85: {
    ns: "0.900"
  },
  86: {
    ns: "0.900"
  },
  87: {
    ns: "1.170"
  },
  88: {
    ns: "1.080"
  },
  89: {
    ns: "0.765"
  },
  90: {
    ns: "0.765"
  },
  91: {
    ns: "0.585"
  },
  92: {
    ns: "0.765"
  },
  93: {
    ns: "0.855"
  },
  94: {
    ns: "1.125"
  },
  95: {
    ns: "0.990"
  },
  96: {
    ns: "0.675"
  },
  97: {
    ns: "0.567"
  },
  98: {
    ns: "0.819"
  },
  99: {
    ns: "0.531"
  }
};

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


$(document).on('click', '#hauswasseropener', function(event) {
  $('#toggledopener').toggle();
  return false;
});

$(document).on('click', '#finish', function(event) {
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

$(":input#bewflaeche").bind('keyup change click', function(e) {
  if (!$(this).data("previousValue") ||
    $(this).data("previousValue") != $(this).val()
  ) {
    bewasserflaeche = $(this).val();
    $(this).data("previousValue", $(this).val());
  }
  calculate();
});
$(":input#auffangflaeche").bind('keyup change click', function(e) {
  if (!$(this).data("previousValue") ||
    $(this).data("previousValue") != $(this).val()
  ) {
    auffangflaeche = $(this).val();
    $(this).data("previousValue", $(this).val());
  }
  calculate();
});

$("#dachart").bind("change", function () {
  dachart = $('#dachart option:selected').val();
  calculate();
});


function calculate() {

  plz = $('#plz-input').val();
  var s1 = plz.toString().substring(0, 2);
  niederschlagsmenge = nsw[s1]['ns'];

  if ($('.toi').hasClass('clicked')) {
    toil = 1;
  } else {
    toil = 0;
  }

  if ($('.was').hasClass('clicked')) {
    waschmaschine = 1;
  } else {
    waschmaschine = 0;
  }

  if ($('.tri').hasClass('clicked')) {
    trink = 1;
  } else {
    trink = 0;
  }

  if(isNaN(bewasserflaeche)) {
    bewasserflaeche = 0;
  }
  if(isNaN(regenwasserertrag)) {
    regenwasserertrag = 0;
  }
  if(isNaN(speichergroße)) {
    speichergroße = 0;
  }
  if(auffangflaeche === undefined) {
    auffangflaeche = 0;
  }

  regenwasserertrag = Math.round(auffangflaeche * niederschlagsmenge * dachart * 0.95);
  if (toil == 1) {
    toilverbrauch = 8 * personen
  } else {
    toilverbrauch = 0
  };
  if (waschmaschine == 1) {
    waschverbrauch = 6 * personen
  } else {
    waschverbrauch = 0
  };
  bewasserflaeche = bewasserflaeche * 0.06;
  wasserverbrauch = toilverbrauch + waschverbrauch + bewasserflaeche;

  if ((regenwasserertrag / wasserverbrauch) > 1.5) {
    speichergroße = Math.round((regenwasserertrag * 0.05) * 1000);
  } else {
    speichergroße = Math.round((regenwasserertrag * 0.07) * 1000);
  }

  console.log('----------------');
  console.log('Auffangfläche: ' + auffangflaeche);
  console.log('Dach-Art: ' + dachart);
  console.log('Bewässerungsfläche: ' + bewasserflaeche.toFixed(2));
  console.log('Personen: ' + personen);
  console.log('PLZ: ' + plz);
  console.log('Niederschlagsmenge: ' + niederschlagsmenge);
  console.log('Toilette: ' + toil);
  console.log('Waschmaschine: ' + waschmaschine);
  console.log('Trinkwasser: ' + trink);
  console.log('Regenwasserertrag: ' + regenwasserertrag);
  console.log('Verbrauch: ' + wasserverbrauch.toFixed(2));
  console.log('Empfohlene Größe: ' + speichergroße);


  if ((toil == 1) || (waschmaschine == 1)) {
    console.log('Haus & Garten');
    if (speichergroße <= 2200) {
      name = "Komplettanlage 'GRM 2.0' - 2200 Liter";
      link = "https://shop.greenlife.de/regenwasser/haus-gartenanlagen/komplettanlage-grm-2.0?number=G0003478";
      img = "https://shop.greenlife.de/media/image/92/bc/87/G0003478_Komplettanlage_GRM2-0_2200l_GreenLife_600x600.jpg";
      preis = "2.495,00 €";
    } else if (speichergroße <= 3300) {
      name = "Komplettanlage 'GRM 2.0' - 3300 Liter";
      link = "https://shop.greenlife.de/regenwasser/haus-gartenanlagen/komplettanlage-grm-2.0?number=G0003479";
      img = "https://shop.greenlife.de/media/image/31/35/be/G0003479_Komplettanlage_GRM2-0_3300l_GreenLife_600x600.jpg";
      preis = "2.795,00 €";
    } else if (speichergroße <= 4700) {
      name = "Komplettanlage 'GRM 2.0' - 4700 Liter";
      link = "https://shop.greenlife.de/regenwasser/haus-gartenanlagen/komplettanlage-grm-2.0?number=G0003480";
      img = "https://shop.greenlife.de/media/image/8e/21/32/G0003480_Komplettanlage_GRM2-0_4700l_GreenLifeGeUlFUrTRjaPP_600x600.jpg";
      preis = "3.095,00 €";
    } else if (speichergroße <= 6500) {
      name = "Komplettanlage 'GRM 2.0' - 6500 Liter";
      link = "https://shop.greenlife.de/regenwasser/haus-gartenanlagen/komplettanlage-grm-2.0?number=G0003481";
      img = "https://shop.greenlife.de/media/image/a7/5c/81/G0003481_Komplettanlage_GRM2-0_6500l_GreenLife_600x600.jpg";
      preis = "3.475,00 €";
    } else if (speichergroße <= 9400) {
      name = "Komplettanlage 'GRM 2.0' - 9400 Liter";
      link = "https://shop.greenlife.de/regenwasser/haus-gartenanlagen/komplettanlage-grm-2.0?number=G0003484";
      img = "https://shop.greenlife.de/media/image/86/d9/6e/G0003484_Komplettanlage_GRM2-0_9400l_GreenLife36sitdK7lyF4Q_600x600.jpg";
      preis = "4.695,00 €";
    } else if (speichergroße > 9400) {
      name = "Komplettanlage 'GRM 2.0' - 13000 Liter";
      link = "https://shop.greenlife.de/regenwasser/haus-gartenanlagen/komplettanlage-grm-2.0?number=G0003485";
      img = "https://shop.greenlife.de/media/image/5c/a0/dc/G0003485_Komplettanlage_GRM2-0_13000l_GreenLife_600x600.jpg";
      preis = "5.445,00 €";
    }
  } else {
    console.log('Garten');
    if (speichergroße <= 1000) {
      name = "Gartenanlage - 1000 Liter";
      link = "https://shop.greenlife.de/regenwasser/komplettsets/gartenanlagen/gartenanlage-basic";
      img = "https://shop.greenlife.de/media/image/5c/76/9f/G0002180_Gartenanlage_basic_1000l_GreenLifeA4NLspP9b8uHu.jpg";
      preis = "852,94 €";
    } else if (speichergroße <= 2200) {
      name = "Gartenanlage - 2200 Liter";
      link = "https://shop.greenlife.de/regenwasser/komplettsets/gartenanlagen/gartenanlage-basic?number=G0002181";
      img = "https://shop.greenlife.de/media/image/de/f6/1d/G0002181_Gartenanlage_basic_2200l_GreenLife.jpg";
      preis = "1.350,08 €";
    } else if (speichergroße <= 3300) {
      name = "Gartenanlage - 3300 Liter";
      link = "https://shop.greenlife.de/regenwasser/komplettsets/gartenanlagen/gartenanlage-basic?number=G0002182";
      img = "https://shop.greenlife.de/media/image/7a/7d/2f/G0002182_Gartenanlage_basic_3300l_GreenLife.jpg";
      preis = "1.642,52 €";
    } else if (speichergroße <= 4700) {
      name = "Gartenanlage - 4700 Liter";
      link = "https://shop.greenlife.de/regenwasser/komplettsets/gartenanlagen/gartenanlage-basic?number=G0002183";
      img = "https://shop.greenlife.de/media/image/e8/5f/98/G0002183_Gartenanlage_basic_4700l_GreenLifeUCfxWoi62Kcgm.jpg";
      preis = "1.934,96 €";
    } else if (speichergroße <= 6500) {
      name = "Gartenanlage - 6500 Liter";
      link = "https://shop.greenlife.de/regenwasser/komplettsets/gartenanlagen/gartenanlage-basic?number=G0002184";
      img = "https://shop.greenlife.de/media/image/59/a4/a6/G0002184_Gartenanlage_basic_6500l_GreenLife.jpg";
      preis = "2.305,38 €";
    } else if (speichergroße <= 9400) {
      name = "Gartenanlage - 9400 Liter";
      link = "https://shop.greenlife.de/regenwasser/komplettsets/gartenanlagen/gartenanlage-basic?number=G0002185";
      img = "https://shop.greenlife.de/media/image/79/db/bd/G0002185_Gartenanlage_basic_9400l_GreenLifezfSxWoJR9Fq6O.jpg";
      preis = "3.494,62 €";
    } else if (speichergroße > 9400) {
      name = "Gartenanlage - 13000 Liter";
      link = "https://shop.greenlife.de/regenwasser/komplettsets/gartenanlagen/gartenanlage-basic?number=G0002186";
      img = "https://shop.greenlife.de/media/image/7a/17/ee/G0002186_Gartenanlage_basic_13000l_GreenLife.jpg";
      preis = "4.235,46 €";
    }
  }

  $('#result').html('<p id="showresult" style="display:none;margin:20px;">' +
    'Regenwasserertrag im Jahr: <font style="color:#111940;">' + regenwasserertrag + ' m³</font></br>' +
    'Regenwasserverbrauch im Jahr: <font style="color:#111940;">' + wasserverbrauch + ' m³</font></br>' +
    'Empfohlene Speichergröße: <font style="color:#111940;">' + speichergroße + ' Liter</font></br>' +
    "<a id='finish' href=''>Nochmal berechnen</a>" + '</p>' +
    '<p style="margin-left:20px;margin-top: 50px;"><a class="tanklink" href="#" style="text-decoration:none;"><img id="tankimg" src="#" style="float: right;border-radius: 14px;margin-right: 10px;border: 5px solid #ffffff;margin-top: -25px;display:none;"></a><a class="tanklink" href="#" style="text-decoration:none;"><span id="tankname" style="display:none;"></span></a></p>');


  $('.tankbutton').attr("href", link);
  $('#tankimg').attr("src", img);

  $('#preis-anzeige').html(`Ab ${preis}`);
  $('#ertrag').html(`Regenwasserertrag im Jahr: ${regenwasserertrag.toFixed(2)} m³`);
  $('#verbrauch').html(`Regenwasserverbrauch im Jahr: ${wasserverbrauch.toFixed(2)} m³`);
  $('#speichergröße').html(`Empfohlene Speichergröße: ${speichergroße} Liter`);

  $("#showresult").slideDown("slow").delay(200);
  $("#tankimg").slideDown("slow").delay(200);
  $("#tankname").slideDown("slow").delay(400);
  $('#tankname').html(name).delay(400);
  // $('#preis-anzeige').attr("href", link);

  return false;
}
