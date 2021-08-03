/*!
  * @growthbunker/vueflags v0.1.14
  * (c) 2021 
  * @license MIT
  */
import * as vue_demi from 'vue-demi';
import { PropType, Plugin } from 'vue-demi';

declare const sizes: readonly ["nano", "micro", "mini", "small", "default", "medium", "large", "huge"];
declare type FlagSize = typeof sizes[number];
declare const _default: vue_demi.DefineComponent<{
    code: {
        type: PropType<CountryCode>;
        required: true;
    };
    height: {
        type: PropType<String>;
        required: false;
    };
    width: {
        type: PropType<String>;
        required: false;
    };
    iconPath: {
        type: PropType<String>;
        required: false;
    };
    size: {
        type: PropType<"nano" | "micro" | "mini" | "small" | "default" | "medium" | "large" | "huge">;
        default: string;
    };
}, {
    src: vue_demi.ComputedRef<string>;
}, unknown, {}, {}, vue_demi.ComponentOptionsMixin, vue_demi.ComponentOptionsMixin, Record<string, any>, string, vue_demi.VNodeProps & vue_demi.AllowedComponentProps & vue_demi.ComponentCustomProps, Readonly<{
    code: CountryCode;
    size: "nano" | "micro" | "mini" | "small" | "default" | "medium" | "large" | "huge";
} & {
    height?: String | undefined;
    width?: String | undefined;
    iconPath?: String | undefined;
}>, {
    size: "nano" | "micro" | "mini" | "small" | "default" | "medium" | "large" | "huge";
}>;

/**************************************************************************
 * DATA > CONTINENTS
 * BASED ON https://wiki.openstreetmap.org/wiki/Nominatim/Country_Codes
 ***************************************************************************/
declare const continents: readonly [{
    readonly code: "af";
    readonly name: "Africa";
}, {
    readonly code: "an";
    readonly name: "Antarctica";
}, {
    readonly code: "as";
    readonly name: "Asia";
}, {
    readonly code: "eu";
    readonly name: "Europe";
}, {
    readonly code: "na";
    readonly name: "North America";
}, {
    readonly code: "oc";
    readonly name: "Oceania";
}, {
    readonly code: "sa";
    readonly name: "South America";
}];
declare type Continent = typeof continents[number];

/**************************************************************************
 * DATA > COUNTRIES
 * BASED ON https://wiki.openstreetmap.org/wiki/Nominatim/Country_Codes
 ***************************************************************************/
declare const countries: readonly [{
    readonly code: "ad";
    readonly name: "Andorra";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "ae";
    readonly name: "United Arab Emirates";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "af";
    readonly name: "Afghanistan";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "ag";
    readonly name: "Antigua and Barbuda";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "ai";
    readonly name: "Anguilla";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "al";
    readonly name: "Albania";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "am";
    readonly name: "Armenia";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "ao";
    readonly name: "Angola";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "aq";
    readonly name: "Antarctica";
    readonly continent: "Antarctica";
    readonly continent_code: "an";
}, {
    readonly code: "ar";
    readonly name: "Argentina";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "as";
    readonly name: "American Samoa";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "at";
    readonly name: "Austria";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "au";
    readonly name: "Australia";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "aw";
    readonly name: "Aruba";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "ax";
    readonly name: "Aland Islands";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "az";
    readonly name: "Azerbaijan";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "ba";
    readonly name: "Bosnia and Herzegovina";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "bb";
    readonly name: "Barbados";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "bd";
    readonly name: "Bangladesh";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "be";
    readonly name: "Belgium";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "bf";
    readonly name: "Burkina Faso";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "bg";
    readonly name: "Bulgaria";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "bh";
    readonly name: "Bahrain";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "bi";
    readonly name: "Burundi";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "bj";
    readonly name: "Benin";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "bl";
    readonly name: "Saint-Barthélemy";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "bm";
    readonly name: "Bermuda";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "bn";
    readonly name: "Brunei Darussalam";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "bo";
    readonly name: "Bolivia";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "bq";
    readonly name: "Caribbean Netherlands";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "br";
    readonly name: "Brazil";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "bs";
    readonly name: "Bahamas";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "bt";
    readonly name: "Bhutan";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "bv";
    readonly name: "Bouvet Island";
    readonly continent: "Antarctica";
    readonly continent_code: "an";
}, {
    readonly code: "bw";
    readonly name: "Botswana";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "by";
    readonly name: "Belarus";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "bz";
    readonly name: "Belize";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "ca";
    readonly name: "Canada";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "cc";
    readonly name: "Cocos (Keeling) Islands";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "cd";
    readonly name: "Democratic Republic of the Congo";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "cf";
    readonly name: "Central African Republic";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "cg";
    readonly name: "Republic of the Congo";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "ch";
    readonly name: "Switzerland";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "ci";
    readonly name: "Côte d'Ivoire";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "ck";
    readonly name: "Cook Islands";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "cl";
    readonly name: "Chile";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "cm";
    readonly name: "Cameroon";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "cn";
    readonly name: "China";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "co";
    readonly name: "Colombia";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "cr";
    readonly name: "Costa Rica";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "cu";
    readonly name: "Cuba";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "cv";
    readonly name: "Cabo Verde";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "cw";
    readonly name: "Curaçao";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "cx";
    readonly name: "Christmas Island";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "cy";
    readonly name: "Cyprus";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "cz";
    readonly name: "Czech Republic";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "de";
    readonly name: "Germany";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "dj";
    readonly name: "Djibouti";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "dk";
    readonly name: "Denmark";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "dm";
    readonly name: "Dominica";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "do";
    readonly name: "Dominican Republic";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "dz";
    readonly name: "Algeria";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "ec";
    readonly name: "Ecuador";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "ee";
    readonly name: "Estonia";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "eg";
    readonly name: "Egypt";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "eh";
    readonly name: "Western Sahara";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "er";
    readonly name: "Eritrea";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "es";
    readonly name: "Spain";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "et";
    readonly name: "Ethiopia";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "fi";
    readonly name: "Finland";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "fj";
    readonly name: "Fiji";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "fk";
    readonly name: "Falkland Islands";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "fm";
    readonly name: "Micronesia";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "fo";
    readonly name: "Faroe Islands";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "fr";
    readonly name: "France";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "ga";
    readonly name: "Gabon";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "gb";
    readonly name: "United Kingdom";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "gd";
    readonly name: "Grenada";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "ge";
    readonly name: "Georgia";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "gf";
    readonly name: "French Guiana";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "gg";
    readonly name: "Guernsey";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "gh";
    readonly name: "Ghana";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "gi";
    readonly name: "Gibraltar";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "gl";
    readonly name: "Greenland";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "gm";
    readonly name: "The Gambia";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "gn";
    readonly name: "Guinea";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "gp";
    readonly name: "Guadeloupe";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "gq";
    readonly name: "Equatorial Guinea";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "gr";
    readonly name: "Greece";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "gs";
    readonly name: "South Georgia and the South Sandwich Islands";
    readonly continent: "Antarctica";
    readonly continent_code: "an";
}, {
    readonly code: "gt";
    readonly name: "Guatemala";
    readonly continent: "North AMerica";
    readonly continent_code: "na";
}, {
    readonly code: "gu";
    readonly name: "Guam";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "gw";
    readonly name: "Guinea Bissau";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "gy";
    readonly name: "Guyana";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "hk";
    readonly name: "Hong Kong";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "hm";
    readonly name: "Heard Island and McDonald Islands";
    readonly continent: "Antarctica";
    readonly continent_code: "an";
}, {
    readonly code: "hn";
    readonly name: "Honduras";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "hr";
    readonly name: "Croatia";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "ht";
    readonly name: "Haiti";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "hu";
    readonly name: "Hungary";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "id";
    readonly name: "Indonesia";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "ie";
    readonly name: "Ireland";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "il";
    readonly name: "Israel";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "im";
    readonly name: "Isle of Man";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "in";
    readonly name: "India";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "io";
    readonly name: "British Indian Ocean Territory";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "iq";
    readonly name: "Iraq";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "ir";
    readonly name: "Iran";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "is";
    readonly name: "Iceland";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "it";
    readonly name: "Italy";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "je";
    readonly name: "Jersey";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "jm";
    readonly name: "Jamaica";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "jo";
    readonly name: "Jordan";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "jp";
    readonly name: "Japan";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "ke";
    readonly name: "Kenya";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "kg";
    readonly name: "Kyrgyzstan";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "kh";
    readonly name: "Cambodia";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "ki";
    readonly name: "Kiribati";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "km";
    readonly name: "Comoros";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "kn";
    readonly name: "Saint Kitts and Nevis";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "kp";
    readonly name: "North Korea";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "kr";
    readonly name: "South Korea";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "kw";
    readonly name: "Kuwait";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "ky";
    readonly name: "Cayman Islands";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "kz";
    readonly name: "Kazakhstan";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "la";
    readonly name: "Laos";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "lb";
    readonly name: "Lebanon";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "lc";
    readonly name: "Saint Lucia";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "li";
    readonly name: "Liechtenstein";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "lk";
    readonly name: "Sri Lanka";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "lr";
    readonly name: "Liberia";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "ls";
    readonly name: "Lesotho";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "lt";
    readonly name: "Lithuania";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "lu";
    readonly name: "Luxembourg";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "lv";
    readonly name: "Latvia";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "ly";
    readonly name: "Libya";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "ma";
    readonly name: "Morocco";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "mc";
    readonly name: "Monaco";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "md";
    readonly name: "Moldova";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "me";
    readonly name: "Montenegro";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "mf";
    readonly name: "Saint Martin (French part)";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "mg";
    readonly name: "Madagascar";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "mh";
    readonly name: "Marshall Islands";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "mk";
    readonly name: "North Macedonia";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "ml";
    readonly name: "Mali";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "mm";
    readonly name: "Myanmar";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "mn";
    readonly name: "Mongolia";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "mo";
    readonly name: "Macao";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "mp";
    readonly name: "Northern Mariana Islands";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "mq";
    readonly name: "Martinique";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "mr";
    readonly name: "Mauritania";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "ms";
    readonly name: "Montserrat";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "mt";
    readonly name: "Malta";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "mu";
    readonly name: "Mauritius";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "mv";
    readonly name: "Maldives";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "mw";
    readonly name: "Malawi";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "mx";
    readonly name: "Mexico";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "my";
    readonly name: "Malaysia";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "mz";
    readonly name: "Mozambique";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "na";
    readonly name: "Namibia";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "nc";
    readonly name: "New Caledonia";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "ne";
    readonly name: "Niger";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "nf";
    readonly name: "Norfolk Island";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "ng";
    readonly name: "Nigeria";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "ni";
    readonly name: "Nicaragua";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "nl";
    readonly name: "The Netherlands";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "no";
    readonly name: "Norway";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "np";
    readonly name: "Nepal";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "nr";
    readonly name: "Nauru";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "nu";
    readonly name: "Niue";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "nz";
    readonly name: "New Zealand";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "om";
    readonly name: "Oman";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "pa";
    readonly name: "Panama";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "pe";
    readonly name: "Peru";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "pf";
    readonly name: "French Polynesia";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "pg";
    readonly name: "Papua New Guinea";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "ph";
    readonly name: "Philippines";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "pk";
    readonly name: "Pakistan";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "pl";
    readonly name: "Poland";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "pm";
    readonly name: "Saint Pierre and Miquelon";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "pn";
    readonly name: "Pitcairn";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "pr";
    readonly name: "Puerto Rico";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "ps";
    readonly name: "Palestine";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "pt";
    readonly name: "Portugal";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "pw";
    readonly name: "Palau";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "py";
    readonly name: "Paraguay";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "qa";
    readonly name: "Qatar";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "re";
    readonly name: "Réunion";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "ro";
    readonly name: "Romania";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "rs";
    readonly name: "Serbia";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "ru";
    readonly name: "Russia";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "rw";
    readonly name: "Rwanda";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "sa";
    readonly name: "Saudi Arabia";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "sb";
    readonly name: "Solomon Islands";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "sc";
    readonly name: "Seychelles";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "sd";
    readonly name: "Sudan";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "se";
    readonly name: "Sweden";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "sg";
    readonly name: "Singapore";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "sh";
    readonly name: "Saint Helena";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "si";
    readonly name: "Slovenia";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "sj";
    readonly name: "Svalbard and Jan Mayen";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "sk";
    readonly name: "Slovakia";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "sl";
    readonly name: "Sierra Leone";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "sm";
    readonly name: "San Marino";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "sn";
    readonly name: "Sénégal";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "so";
    readonly name: "Somalia";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "sr";
    readonly name: "Suriname";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "ss";
    readonly name: "South Sudan";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "st";
    readonly name: "São Tomé and Príncipe";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "sv";
    readonly name: "El Salvador";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "sx";
    readonly name: "Saint Martin (Dutch part)";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "sy";
    readonly name: "Syria";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "sz";
    readonly name: "Swaziland";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "tc";
    readonly name: "Turks and Caicos Islands";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "td";
    readonly name: "Chad";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "tf";
    readonly name: "French Southern and Antarctic Lands";
    readonly continent: "Antarctica";
    readonly continent_code: "an";
}, {
    readonly code: "tg";
    readonly name: "Togo";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "th";
    readonly name: "Thailand";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "tj";
    readonly name: "Tajikistan";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "tk";
    readonly name: "Tokelau";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "tl";
    readonly name: "Timor-Leste";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "tm";
    readonly name: "Turkmenistan";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "tn";
    readonly name: "Tunisia";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "to";
    readonly name: "Tonga";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "tr";
    readonly name: "Turkey";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "tt";
    readonly name: "Trinidad and Tobago";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "tv";
    readonly name: "Tuvalu";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "tw";
    readonly name: "Taiwan";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "tz";
    readonly name: "Tanzania";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "ua";
    readonly name: "Ukraine";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "ug";
    readonly name: "Uganda";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "um";
    readonly name: "United States Minor Outlying Islands";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "us";
    readonly name: "United States";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "uy";
    readonly name: "Uruguay";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "uz";
    readonly name: "Uzbekistan";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "va";
    readonly name: "City of the Vatican";
    readonly continent: "Europe";
    readonly continent_code: "eu";
}, {
    readonly code: "vc";
    readonly name: "Saint Vincent and the Grenadines";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "ve";
    readonly name: "Venezuela";
    readonly continent: "South America";
    readonly continent_code: "sa";
}, {
    readonly code: "vg";
    readonly name: "British Virgin Islands";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "vi";
    readonly name: "United States Virgin Islands";
    readonly continent: "North America";
    readonly continent_code: "na";
}, {
    readonly code: "vn";
    readonly name: "Vietnam";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "vu";
    readonly name: "Vanuatu";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "wf";
    readonly name: "Wallis and Futuna";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "ws";
    readonly name: "Samoa";
    readonly continent: "Oceania";
    readonly continent_code: "oc";
}, {
    readonly code: "ye";
    readonly name: "Yemen";
    readonly continent: "Asia";
    readonly continent_code: "as";
}, {
    readonly code: "yt";
    readonly name: "Mayotte";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "za";
    readonly name: "South Africa";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "zm";
    readonly name: "Zambia";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "zw";
    readonly name: "Zimbabwe";
    readonly continent: "Africa";
    readonly continent_code: "af";
}, {
    readonly code: "unknown";
    readonly name: "Unknown country";
    readonly continent: "Unknown";
    readonly continent_code: "un";
}];
declare type Country = typeof countries[number];

declare const countryCodes: readonly ("ad" | "ae" | "as" | "af" | "ag" | "na" | "ai" | "al" | "am" | "ao" | "aq" | "ar" | "sa" | "at" | "au" | "aw" | "ax" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bl" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cu" | "cv" | "cw" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mh" | "mk" | "ml" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "re" | "ro" | "rs" | "ru" | "rw" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tr" | "tt" | "tv" | "tw" | "tz" | "ua" | "ug" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "ve" | "vg" | "vi" | "vn" | "vu" | "wf" | "ws" | "ye" | "yt" | "za" | "zm" | "zw" | "unknown")[];
declare const countryNames: readonly ("Andorra" | "United Arab Emirates" | "Afghanistan" | "Antigua and Barbuda" | "Anguilla" | "Albania" | "Armenia" | "Angola" | "Antarctica" | "Argentina" | "American Samoa" | "Austria" | "Australia" | "Aruba" | "Aland Islands" | "Azerbaijan" | "Bosnia and Herzegovina" | "Barbados" | "Bangladesh" | "Belgium" | "Burkina Faso" | "Bulgaria" | "Bahrain" | "Burundi" | "Benin" | "Saint-Barthélemy" | "Bermuda" | "Brunei Darussalam" | "Bolivia" | "Caribbean Netherlands" | "Brazil" | "Bahamas" | "Bhutan" | "Bouvet Island" | "Botswana" | "Belarus" | "Belize" | "Canada" | "Cocos (Keeling) Islands" | "Democratic Republic of the Congo" | "Central African Republic" | "Republic of the Congo" | "Switzerland" | "Côte d'Ivoire" | "Cook Islands" | "Chile" | "Cameroon" | "China" | "Colombia" | "Costa Rica" | "Cuba" | "Cabo Verde" | "Curaçao" | "Christmas Island" | "Cyprus" | "Czech Republic" | "Germany" | "Djibouti" | "Denmark" | "Dominica" | "Dominican Republic" | "Algeria" | "Ecuador" | "Estonia" | "Egypt" | "Western Sahara" | "Eritrea" | "Spain" | "Ethiopia" | "Finland" | "Fiji" | "Falkland Islands" | "Micronesia" | "Faroe Islands" | "France" | "Gabon" | "United Kingdom" | "Grenada" | "Georgia" | "French Guiana" | "Guernsey" | "Ghana" | "Gibraltar" | "Greenland" | "The Gambia" | "Guinea" | "Guadeloupe" | "Equatorial Guinea" | "Greece" | "South Georgia and the South Sandwich Islands" | "Guatemala" | "Guam" | "Guinea Bissau" | "Guyana" | "Hong Kong" | "Heard Island and McDonald Islands" | "Honduras" | "Croatia" | "Haiti" | "Hungary" | "Indonesia" | "Ireland" | "Israel" | "Isle of Man" | "India" | "British Indian Ocean Territory" | "Iraq" | "Iran" | "Iceland" | "Italy" | "Jersey" | "Jamaica" | "Jordan" | "Japan" | "Kenya" | "Kyrgyzstan" | "Cambodia" | "Kiribati" | "Comoros" | "Saint Kitts and Nevis" | "North Korea" | "South Korea" | "Kuwait" | "Cayman Islands" | "Kazakhstan" | "Laos" | "Lebanon" | "Saint Lucia" | "Liechtenstein" | "Sri Lanka" | "Liberia" | "Lesotho" | "Lithuania" | "Luxembourg" | "Latvia" | "Libya" | "Morocco" | "Monaco" | "Moldova" | "Montenegro" | "Saint Martin (French part)" | "Madagascar" | "Marshall Islands" | "North Macedonia" | "Mali" | "Myanmar" | "Mongolia" | "Macao" | "Northern Mariana Islands" | "Martinique" | "Mauritania" | "Montserrat" | "Malta" | "Mauritius" | "Maldives" | "Malawi" | "Mexico" | "Malaysia" | "Mozambique" | "Namibia" | "New Caledonia" | "Niger" | "Norfolk Island" | "Nigeria" | "Nicaragua" | "The Netherlands" | "Norway" | "Nepal" | "Nauru" | "Niue" | "New Zealand" | "Oman" | "Panama" | "Peru" | "French Polynesia" | "Papua New Guinea" | "Philippines" | "Pakistan" | "Poland" | "Saint Pierre and Miquelon" | "Pitcairn" | "Puerto Rico" | "Palestine" | "Portugal" | "Palau" | "Paraguay" | "Qatar" | "Réunion" | "Romania" | "Serbia" | "Russia" | "Rwanda" | "Saudi Arabia" | "Solomon Islands" | "Seychelles" | "Sudan" | "Sweden" | "Singapore" | "Saint Helena" | "Slovenia" | "Svalbard and Jan Mayen" | "Slovakia" | "Sierra Leone" | "San Marino" | "Sénégal" | "Somalia" | "Suriname" | "South Sudan" | "São Tomé and Príncipe" | "El Salvador" | "Saint Martin (Dutch part)" | "Syria" | "Swaziland" | "Turks and Caicos Islands" | "Chad" | "French Southern and Antarctic Lands" | "Togo" | "Thailand" | "Tajikistan" | "Tokelau" | "Timor-Leste" | "Turkmenistan" | "Tunisia" | "Tonga" | "Turkey" | "Trinidad and Tobago" | "Tuvalu" | "Taiwan" | "Tanzania" | "Ukraine" | "Uganda" | "United States Minor Outlying Islands" | "United States" | "Uruguay" | "Uzbekistan" | "City of the Vatican" | "Saint Vincent and the Grenadines" | "Venezuela" | "British Virgin Islands" | "United States Virgin Islands" | "Vietnam" | "Vanuatu" | "Wallis and Futuna" | "Samoa" | "Yemen" | "Mayotte" | "South Africa" | "Zambia" | "Zimbabwe" | "Unknown country")[];
declare type CountryCode = typeof countryCodes[number] | "unknown";
declare type CountryName = typeof countryNames[number] | "unknown";

declare type VueFlagsOptions = {
    iconPath?: string;
};
declare global {
    interface __VLS_GlobalComponents {
        VueFlag: typeof _default;
        "vue-flag": typeof _default;
    }
}
declare const plugin: Plugin;

export default plugin;
export { Continent, Country, CountryCode, CountryName, _default as Flag, FlagSize, VueFlagsOptions, continents, countries, countryCodes, countryNames };
