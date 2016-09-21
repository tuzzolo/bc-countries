'use strict';

var allCountries = [
  [
    'Afghanistan (‫افغانستان‬‎)',
    'af',
    '93'
  ],
  [
    'Albania (Shqipëri)',
    'al',
    '355'
  ],
  [
    'Algeria (‫الجزائر‬‎)',
    'dz',
    '213'
  ],
  [
    'American Samoa',
    'as',
    '1684'
  ],
  [
    'Andorra',
    'ad',
    '376'
  ],
  [
    'Angola',
    'ao',
    '244'
  ],
  [
    'Anguilla',
    'ai',
    '1264'
  ],
  [
    'Antigua and Barbuda',
    'ag',
    '1268'
  ],
  [
    'Argentina',
    'ar',
    '54'
  ],
  [
    'Armenia (Հայաստան)',
    'am',
    '374'
  ],
  [
    'Aruba',
    'aw',
    '297'
  ],
  [
    'Australia',
    'au',
    '61',
    0
  ],
  [
    'Austria (Österreich)',
    'at',
    '43'
  ],
  [
    'Azerbaijan (Azərbaycan)',
    'az',
    '994'
  ],
  [
    'Bahamas',
    'bs',
    '1242'
  ],
  [
    'Bahrain (‫البحرين‬‎)',
    'bh',
    '973'
  ],
  [
    'Bangladesh (বাংলাদেশ)',
    'bd',
    '880'
  ],
  [
    'Barbados',
    'bb',
    '1246'
  ],
  [
    'Belarus (Беларусь)',
    'by',
    '375'
  ],
  [
    'Belgium (België)',
    'be',
    '32'
  ],
  [
    'Belize',
    'bz',
    '501'
  ],
  [
    'Benin (Bénin)',
    'bj',
    '229'
  ],
  [
    'Bermuda',
    'bm',
    '1441'
  ],
  [
    'Bhutan (འབྲུག)',
    'bt',
    '975'
  ],
  [
    'Bolivia',
    'bo',
    '591'
  ],
  [
    'Bosnia and Herzegovina (Босна и Херцеговина)',
    'ba',
    '387'
  ],
  [
    'Botswana',
    'bw',
    '267'
  ],
  [
    'Brazil (Brasil)',
    'br',
    '55'
  ],
  [
    'British Indian Ocean Territory',
    'io',
    '246'
  ],
  [
    'British Virgin Islands',
    'vg',
    '1284'
  ],
  [
    'Brunei',
    'bn',
    '673'
  ],
  [
    'Bulgaria (България)',
    'bg',
    '359'
  ],
  [
    'Burkina Faso',
    'bf',
    '226'
  ],
  [
    'Burundi (Uburundi)',
    'bi',
    '257'
  ],
  [
    'Cambodia (កម្ពុជា)',
    'kh',
    '855'
  ],
  [
    'Cameroon (Cameroun)',
    'cm',
    '237'
  ],
  [
    'Canada',
    'ca',
    '1',
    1,
    ['204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416', '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587', '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807', '819', '825', '867', '873', '902', '905']
  ],
  [
    'Cape Verde (Kabu Verdi)',
    'cv',
    '238'
  ],
  [
    'Caribbean Netherlands',
    'bq',
    '599',
    1
  ],
  [
    'Cayman Islands',
    'ky',
    '1345'
  ],
  [
    'Central African Republic (République centrafricaine)',
    'cf',
    '236'
  ],
  [
    'Chad (Tchad)',
    'td',
    '235'
  ],
  [
    'Chile',
    'cl',
    '56'
  ],
  [
    'China (中国)',
    'cn',
    '86'
  ],
  [
    'Christmas Island',
    'cx',
    '61',
    2
  ],
  [
    'Cocos (Keeling) Islands',
    'cc',
    '61',
    1
  ],
  [
    'Colombia',
    'co',
    '57'
  ],
  [
    'Comoros (‫جزر القمر‬‎)',
    'km',
    '269'
  ],
  [
    'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
    'cd',
    '243'
  ],
  [
    'Congo (Republic) (Congo-Brazzaville)',
    'cg',
    '242'
  ],
  [
    'Cook Islands',
    'ck',
    '682'
  ],
  [
    'Costa Rica',
    'cr',
    '506'
  ],
  [
    'Côte d’Ivoire',
    'ci',
    '225'
  ],
  [
    'Croatia (Hrvatska)',
    'hr',
    '385'
  ],
  [
    'Cuba',
    'cu',
    '53'
  ],
  [
    'Curaçao',
    'cw',
    '599',
    0
  ],
  [
    'Cyprus (Κύπρος)',
    'cy',
    '357'
  ],
  [
    'Czech Republic (Česká republika)',
    'cz',
    '420'
  ],
  [
    'Denmark (Danmark)',
    'dk',
    '45'
  ],
  [
    'Djibouti',
    'dj',
    '253'
  ],
  [
    'Dominica',
    'dm',
    '1767'
  ],
  [
    'Dominican Republic (República Dominicana)',
    'do',
    '1',
    2,
    ['809', '829', '849']
  ],
  [
    'Ecuador',
    'ec',
    '593'
  ],
  [
    'Egypt (‫مصر‬‎)',
    'eg',
    '20'
  ],
  [
    'El Salvador',
    'sv',
    '503'
  ],
  [
    'Equatorial Guinea (Guinea Ecuatorial)',
    'gq',
    '240'
  ],
  [
    'Eritrea',
    'er',
    '291'
  ],
  [
    'Estonia (Eesti)',
    'ee',
    '372'
  ],
  [
    'Ethiopia',
    'et',
    '251'
  ],
  [
    'Falkland Islands (Islas Malvinas)',
    'fk',
    '500'
  ],
  [
    'Faroe Islands (Føroyar)',
    'fo',
    '298'
  ],
  [
    'Fiji',
    'fj',
    '679'
  ],
  [
    'Finland (Suomi)',
    'fi',
    '358',
    0
  ],
  [
    'France',
    'fr',
    '33'
  ],
  [
    'French Guiana (Guyane française)',
    'gf',
    '594'
  ],
  [
    'French Polynesia (Polynésie française)',
    'pf',
    '689'
  ],
  [
    'Gabon',
    'ga',
    '241'
  ],
  [
    'Gambia',
    'gm',
    '220'
  ],
  [
    'Georgia (საქართველო)',
    'ge',
    '995'
  ],
  [
    'Germany (Deutschland)',
    'de',
    '49'
  ],
  [
    'Ghana (Gaana)',
    'gh',
    '233'
  ],
  [
    'Gibraltar',
    'gi',
    '350'
  ],
  [
    'Greece (Ελλάδα)',
    'gr',
    '30'
  ],
  [
    'Greenland (Kalaallit Nunaat)',
    'gl',
    '299'
  ],
  [
    'Grenada',
    'gd',
    '1473'
  ],
  [
    'Guadeloupe',
    'gp',
    '590',
    0
  ],
  [
    'Guam',
    'gu',
    '1671'
  ],
  [
    'Guatemala',
    'gt',
    '502'
  ],
  [
    'Guernsey',
    'gg',
    '44',
    1
  ],
  [
    'Guinea (Guinée)',
    'gn',
    '224'
  ],
  [
    'Guinea-Bissau (Guiné Bissau)',
    'gw',
    '245'
  ],
  [
    'Guyana',
    'gy',
    '592'
  ],
  [
    'Haiti',
    'ht',
    '509'
  ],
  [
    'Honduras',
    'hn',
    '504'
  ],
  [
    'Hong Kong (香港)',
    'hk',
    '852'
  ],
  [
    'Hungary (Magyarország)',
    'hu',
    '36'
  ],
  [
    'Iceland (Ísland)',
    'is',
    '354'
  ],
  [
    'India (भारत)',
    'in',
    '91'
  ],
  [
    'Indonesia',
    'id',
    '62'
  ],
  [
    'Iran (‫ایران‬‎)',
    'ir',
    '98'
  ],
  [
    'Iraq (‫العراق‬‎)',
    'iq',
    '964'
  ],
  [
    'Ireland',
    'ie',
    '353'
  ],
  [
    'Isle of Man',
    'im',
    '44',
    2
  ],
  [
    'Israel (‫ישראל‬‎)',
    'il',
    '972'
  ],
  [
    'Italy (Italia)',
    'it',
    '39',
    0
  ],
  [
    'Jamaica',
    'jm',
    '1876'
  ],
  [
    'Japan (日本)',
    'jp',
    '81'
  ],
  [
    'Jersey',
    'je',
    '44',
    3
  ],
  [
    'Jordan (‫الأردن‬‎)',
    'jo',
    '962'
  ],
  [
    'Kazakhstan (Казахстан)',
    'kz',
    '7',
    1
  ],
  [
    'Kenya',
    'ke',
    '254'
  ],
  [
    'Kiribati',
    'ki',
    '686'
  ],
  [
    'Kuwait (‫الكويت‬‎)',
    'kw',
    '965'
  ],
  [
    'Kyrgyzstan (Кыргызстан)',
    'kg',
    '996'
  ],
  [
    'Laos (ລາວ)',
    'la',
    '856'
  ],
  [
    'Latvia (Latvija)',
    'lv',
    '371'
  ],
  [
    'Lebanon (‫لبنان‬‎)',
    'lb',
    '961'
  ],
  [
    'Lesotho',
    'ls',
    '266'
  ],
  [
    'Liberia',
    'lr',
    '231'
  ],
  [
    'Libya (‫ليبيا‬‎)',
    'ly',
    '218'
  ],
  [
    'Liechtenstein',
    'li',
    '423'
  ],
  [
    'Lithuania (Lietuva)',
    'lt',
    '370'
  ],
  [
    'Luxembourg',
    'lu',
    '352'
  ],
  [
    'Macau (澳門)',
    'mo',
    '853'
  ],
  [
    'Macedonia (FYROM) (Македонија)',
    'mk',
    '389'
  ],
  [
    'Madagascar (Madagasikara)',
    'mg',
    '261'
  ],
  [
    'Malawi',
    'mw',
    '265'
  ],
  [
    'Malaysia',
    'my',
    '60'
  ],
  [
    'Maldives',
    'mv',
    '960'
  ],
  [
    'Mali',
    'ml',
    '223'
  ],
  [
    'Malta',
    'mt',
    '356'
  ],
  [
    'Marshall Islands',
    'mh',
    '692'
  ],
  [
    'Martinique',
    'mq',
    '596'
  ],
  [
    'Mauritania (‫موريتانيا‬‎)',
    'mr',
    '222'
  ],
  [
    'Mauritius (Moris)',
    'mu',
    '230'
  ],
  [
    'Mayotte',
    'yt',
    '262',
    1
  ],
  [
    'Mexico (México)',
    'mx',
    '52'
  ],
  [
    'Micronesia',
    'fm',
    '691'
  ],
  [
    'Moldova (Republica Moldova)',
    'md',
    '373'
  ],
  [
    'Monaco',
    'mc',
    '377'
  ],
  [
    'Mongolia (Монгол)',
    'mn',
    '976'
  ],
  [
    'Montenegro (Crna Gora)',
    'me',
    '382'
  ],
  [
    'Montserrat',
    'ms',
    '1664'
  ],
  [
    'Morocco (‫المغرب‬‎)',
    'ma',
    '212',
    0
  ],
  [
    'Mozambique (Moçambique)',
    'mz',
    '258'
  ],
  [
    'Myanmar (Burma) (မြန်မာ)',
    'mm',
    '95'
  ],
  [
    'Namibia (Namibië)',
    'na',
    '264'
  ],
  [
    'Nauru',
    'nr',
    '674'
  ],
  [
    'Nepal (नेपाल)',
    'np',
    '977'
  ],
  [
    'Netherlands (Nederland)',
    'nl',
    '31'
  ],
  [
    'New Caledonia (Nouvelle-Calédonie)',
    'nc',
    '687'
  ],
  [
    'New Zealand',
    'nz',
    '64'
  ],
  [
    'Nicaragua',
    'ni',
    '505'
  ],
  [
    'Niger (Nijar)',
    'ne',
    '227'
  ],
  [
    'Nigeria',
    'ng',
    '234'
  ],
  [
    'Niue',
    'nu',
    '683'
  ],
  [
    'Norfolk Island',
    'nf',
    '672'
  ],
  [
    'North Korea (조선 민주주의 인민 공화국)',
    'kp',
    '850'
  ],
  [
    'Northern Mariana Islands',
    'mp',
    '1670'
  ],
  [
    'Norway (Norge)',
    'no',
    '47',
    0
  ],
  [
    'Oman (‫عُمان‬‎)',
    'om',
    '968'
  ],
  [
    'Pakistan (‫پاکستان‬‎)',
    'pk',
    '92'
  ],
  [
    'Palau',
    'pw',
    '680'
  ],
  [
    'Palestine (‫فلسطين‬‎)',
    'ps',
    '970'
  ],
  [
    'Panama (Panamá)',
    'pa',
    '507'
  ],
  [
    'Papua New Guinea',
    'pg',
    '675'
  ],
  [
    'Paraguay',
    'py',
    '595'
  ],
  [
    'Peru (Perú)',
    'pe',
    '51'
  ],
  [
    'Philippines',
    'ph',
    '63'
  ],
  [
    'Poland (Polska)',
    'pl',
    '48'
  ],
  [
    'Portugal',
    'pt',
    '351'
  ],
  [
    'Puerto Rico',
    'pr',
    '1',
    3,
    ['787', '939']
  ],
  [
    'Qatar (‫قطر‬‎)',
    'qa',
    '974'
  ],
  [
    'Réunion (La Réunion)',
    're',
    '262',
    0
  ],
  [
    'Romania (România)',
    'ro',
    '40'
  ],
  [
    'Russia (Россия)',
    'ru',
    '7',
    0
  ],
  [
    'Rwanda',
    'rw',
    '250'
  ],
  [
    'Saint Barthélemy (Saint-Barthélemy)',
    'bl',
    '590',
    1
  ],
  [
    'Saint Helena',
    'sh',
    '290'
  ],
  [
    'Saint Kitts and Nevis',
    'kn',
    '1869'
  ],
  [
    'Saint Lucia',
    'lc',
    '1758'
  ],
  [
    'Saint Martin (Saint-Martin (partie française))',
    'mf',
    '590',
    2
  ],
  [
    'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
    'pm',
    '508'
  ],
  [
    'Saint Vincent and the Grenadines',
    'vc',
    '1784'
  ],
  [
    'Samoa',
    'ws',
    '685'
  ],
  [
    'San Marino',
    'sm',
    '378'
  ],
  [
    'São Tomé and Príncipe (São Tomé e Príncipe)',
    'st',
    '239'
  ],
  [
    'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
    'sa',
    '966'
  ],
  [
    'Senegal (Sénégal)',
    'sn',
    '221'
  ],
  [
    'Serbia (Србија)',
    'rs',
    '381'
  ],
  [
    'Seychelles',
    'sc',
    '248'
  ],
  [
    'Sierra Leone',
    'sl',
    '232'
  ],
  [
    'Singapore',
    'sg',
    '65'
  ],
  [
    'Sint Maarten',
    'sx',
    '1721'
  ],
  [
    'Slovakia (Slovensko)',
    'sk',
    '421'
  ],
  [
    'Slovenia (Slovenija)',
    'si',
    '386'
  ],
  [
    'Solomon Islands',
    'sb',
    '677'
  ],
  [
    'Somalia (Soomaaliya)',
    'so',
    '252'
  ],
  [
    'South Africa',
    'za',
    '27'
  ],
  [
    'South Korea (대한민국)',
    'kr',
    '82'
  ],
  [
    'South Sudan (‫جنوب السودان‬‎)',
    'ss',
    '211'
  ],
  [
    'Spain (España)',
    'es',
    '34'
  ],
  [
    'Sri Lanka (ශ්‍රී ලංකාව)',
    'lk',
    '94'
  ],
  [
    'Sudan (‫السودان‬‎)',
    'sd',
    '249'
  ],
  [
    'Suriname',
    'sr',
    '597'
  ],
  [
    'Svalbard and Jan Mayen',
    'sj',
    '47',
    1
  ],
  [
    'Swaziland',
    'sz',
    '268'
  ],
  [
    'Sweden (Sverige)',
    'se',
    '46'
  ],
  [
    'Switzerland (Schweiz)',
    'ch',
    '41'
  ],
  [
    'Syria (‫سوريا‬‎)',
    'sy',
    '963'
  ],
  [
    'Taiwan (台灣)',
    'tw',
    '886'
  ],
  [
    'Tajikistan',
    'tj',
    '992'
  ],
  [
    'Tanzania',
    'tz',
    '255'
  ],
  [
    'Thailand (ไทย)',
    'th',
    '66'
  ],
  [
    'Timor-Leste',
    'tl',
    '670'
  ],
  [
    'Togo',
    'tg',
    '228'
  ],
  [
    'Tokelau',
    'tk',
    '690'
  ],
  [
    'Tonga',
    'to',
    '676'
  ],
  [
    'Trinidad and Tobago',
    'tt',
    '1868'
  ],
  [
    'Tunisia (‫تونس‬‎)',
    'tn',
    '216'
  ],
  [
    'Turkey (Türkiye)',
    'tr',
    '90'
  ],
  [
    'Turkmenistan',
    'tm',
    '993'
  ],
  [
    'Turks and Caicos Islands',
    'tc',
    '1649'
  ],
  [
    'Tuvalu',
    'tv',
    '688'
  ],
  [
    'U.S. Virgin Islands',
    'vi',
    '1340'
  ],
  [
    'Uganda',
    'ug',
    '256'
  ],
  [
    'Ukraine (Україна)',
    'ua',
    '380'
  ],
  [
    'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
    'ae',
    '971'
  ],
  [
    'United Kingdom',
    'gb',
    '44',
    0
  ],
  [
    'United States',
    'us',
    '1',
    0
  ],
  [
    'Uruguay',
    'uy',
    '598'
  ],
  [
    'Uzbekistan (Oʻzbekiston)',
    'uz',
    '998'
  ],
  [
    'Vanuatu',
    'vu',
    '678'
  ],
  [
    'Vatican City (Città del Vaticano)',
    'va',
    '39',
    1
  ],
  [
    'Venezuela',
    've',
    '58'
  ],
  [
    'Vietnam (Việt Nam)',
    'vn',
    '84'
  ],
  [
    'Wallis and Futuna',
    'wf',
    '681'
  ],
  [
    'Western Sahara (‫الصحراء الغربية‬‎)',
    'eh',
    '212',
    1
  ],
  [
    'Yemen (‫اليمن‬‎)',
    'ye',
    '967'
  ],
  [
    'Zambia',
    'zm',
    '260'
  ],
  [
    'Zimbabwe',
    'zw',
    '263'
  ],
  [
    'Åland Islands',
    'ax',
    '358',
    1
  ]
];

var libphonenumber = require('google-libphonenumber'),
    Trie           = require('digits-trie');

// check if given number is valid
function isValidNumberHelper(number, countryCode) {
  try {
    var phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
    var numberObj = phoneUtil.parseAndKeepRawInput(number, countryCode);
    return phoneUtil.isValidNumber(numberObj);
  } catch (e) {
    return false;
  }
}

// format the given number (optionally add any formatting suffix e.g. a hyphen)
function formatNumberHelper(val, countryCode, addSuffix, allowExtension, isAllowedKey) {
  try {
    var clean = val.replace(/\D/g, ""),
      // NOTE: we use AsYouTypeFormatter because the default format function can't handle incomplete numbers e.g. "+17024" formats to "+1 7024" as opposed to "+1 702-4"
      formatter = new libphonenumber.AsYouTypeFormatter(countryCode),
      // if clean is empty, we still need this to be a string otherwise we get errors later
      result = "",
      next,
      extSuffix = " ext. ";

    if (val.substr(0, 1) == "+") {
      clean = "+" + clean;
    }

    for (var i = 0; i < clean.length; i++) {
      // TODO: improve this so don't just pump in every digit every time - we should just cache this formatter object, and just call inputDigit once each time the user enters a new digit
      next = formatter.inputDigit(clean.charAt(i));
      // if adding this char didn't change the length, or made it smaller (and there's no longer any spaces): that means that formatting failed which means the number was no longer a potentially valid number, so if we're allowing extensions: assume the rest is the ext
      if (allowExtension && result && next.length <= result.length && next.indexOf(" ") == -1) {
        // set flag for extension
        next = -1;
        break;
      }
      result = next;
    }

    // for some reason libphonenumber formats "+44" to "+44 ", but doesn't do the same with "+1"
    if (result.charAt(result.length - 1) == " ") {
      result = result.substr(0, result.length - 1);
    }
    // check if there's a suffix to add (unless there's an ext)
    if (addSuffix && !val.split(extSuffix)[1]) {
      // hack to get formatting suffix
      var test = formatter.inputDigit('5');
      // again the "+44 " problem... (also affects "+45" apparently)
      if (test.charAt(test.length - 1) == " ") {
        test = test.substr(0, test.length - 1);
      }
      // if adding a '5' introduces a formatting char - check if the penultimate char is not-a-number
      var penultimate = test.substr(test.length - 2, 1);
      // Note: never use isNaN without parseFloat
      if (isNaN(parseFloat(penultimate))) {
        // return the new value (minus that last '5' we just added)
        return test.substr(0, test.length - 1);
      } else if (allowExtension && result && test.length <= result.length && test.indexOf(" ") == -1 && !isAllowedKey) {
        // else if the next digit would break the formating, and we're allowing extensions, AND this is not an allowed key: add the suffix
        // NOTE: we must check this is not an allowed key because if it was that means it was the last digit in a valid number and we dont want to add the "ext" suffix in that case. This whole condition is just here to catch the case that: after typing a valid number, they try to type "ext" - this will not automatically add it for them.
        return result + extSuffix;
      }
    }

    // if the clean number contains an extension we need to add it
    if (next == -1) {
      result += extSuffix + clean.substring(i, clean.length);
    }
    return result;
  } catch (e) {
    return val;
  }
}

var iso2Countries = {};
var iso2Priority = {};
var dialIso2 = {};
var dialCodes = new Trie();

for (var i = 0; i < allCountries.length; i++) {
  var country = allCountries[i];

  var dialCode = country[2];
  var iso2 = country[1];

  iso2Countries[iso2] = country;
  iso2Priority[iso2] = country[3];
  var oldIso2 = null;
  if (oldIso2 = dialIso2[dialCode]) {
    if (typeof(iso2Priority[oldIso2]) == "number" && iso2Priority[oldIso2] < country[3]) continue;
  }
  dialIso2[dialCode] = iso2;
  dialCodes.set(dialCode, iso2);
}

function makeCountry (country) {
  return {
    dialCode: country[2],
    iso2Code: country[1],
    name: country[0]
  };
}

function getDialCodeByDigits (digits) {
  if (!digits) { return '';                                          }
  else         { return dialCodes.longestMatchingPrefix(digits).key; }
}

function getIso2CodeByDigits (digits) {
  if (!digits) { return '';                                            }
  else         { return dialCodes.longestMatchingPrefix(digits).value; }
}

function getCountryByIso2Code (iso2) {
  var country = iso2Countries[iso2];

  if (country) { return makeCountry(iso2Countries[iso2]); }
  else         { return null;                             }
}

function getAllCountries () {
  var countries = new Array(allCountries.length);

  for (var i = 0; i < allCountries.length; i++) { countries[i] = makeCountry(allCountries[i]); }

  return countries;
}

function hasPrefix (number) {
  return (number[0] === '+');
}

function getDigits (number) {
  if (!number) { return '';                        }
  else         { return number.replace(/\D/g, ''); }
}

function prefixNumber (number) {
  if (number && !hasPrefix(number)) { return ('+' + number); }
  else                              { return number;         }
}

function formatNumber (number) {
  if (!number) { return ''; }
  else {
    var dialCode = getDialCodeByDigits(getDigits(number));

    if (dialCode) { return formatNumberHelper(prefixNumber(number)); }
    else          { return number;                                   }
  }
}

function changeDialCode (number, newDialCode) {
  if (!number) { return ('+' + newDialCode); }
  else {
    var digits = getDigits(number);
    var oldDialCode = getDialCodeByDigits(digits);

    if (oldDialCode) {
      var numberWithNewDialCode = digits.replace(oldDialCode, newDialCode);
      var formattedNumber = formatNumber(numberWithNewDialCode);
      return formattedNumber;
    }
    else { return formatNumber('+' + newDialCode + digits); }
  }
}

function isValidNumber (number) {
  if (!number || !hasPrefix(number)) { return false; }
  else {
    var digits = getDigits(number);
    var iso2Code = getIso2CodeByDigits(digits);

    if (iso2Code) { return isValidNumberHelper(number, iso2Code); }
    else          { return false;                                 }
  }
}

module.exports = {
  getCountryByIso2Code: getCountryByIso2Code,
  getDialCodeByDigits: getDialCodeByDigits,
  getIso2CodeByDigits: getIso2CodeByDigits,
  getAllCountries: getAllCountries,

  changeDialCode: changeDialCode,
  isValidNumber: isValidNumber,
  formatNumber: formatNumber,
  getDigits: getDigits
};
