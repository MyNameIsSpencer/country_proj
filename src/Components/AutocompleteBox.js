import React, { Component } from 'react';

var country_list = {
'Afghanistan':	AF,
'Åland Islands':	AX,
'Albania':	AL,
'Algeria':	DZ,
'American Samoa':	AS,
'Andorra':	AD,
'Angola':	AO,
'Anguilla':	AI,
'Antarctica':	AQ,
'Antigua and Barbuda':	AG,
'Argentina':	AR,
'Armenia':	AM,
'Aruba':	AW,
'Australia':	AU,
'Austria':	AT,
'Azerbaijan':	AZ,
'Bahrain':	BH,
'Bahamas':	BS,
'Bangladesh':	BD,
'Barbados':	BB,
'Belarus':	BY,
'Belgium':	BE,
'Belize':	BZ,
'Benin':	BJ,
'Bermuda':	BM,
'Bhutan':	BT,
'Bolivia':	BO,
'Bonaire':	BQ,
'Bosnia and Herzegovina':	BA,
'Botswana':	BW,
'Bouvet Island':	BV,
'Brazil':	BR,
'British Indian Ocean Territory':	IO,
'Brunei Darussalam':	BN,
'Bulgaria':	BG,
'Burkina Faso':	BF,
'Burundi':	BI,
'Cambodia':	KH,
'Cameroon':	CM,
'Canada':	CA,
'Cape Verde':	CV,
'Cayman Islands':	KY,
'Central African Republic':	CF,
'Chad':	TD,
'Chile':	CL,
'China':	CN,
'Christmas Island':	CX,
'Cocos (Keeling) Islands':	CC,
'Colombia':	CO,
'Comoros':	KM,
'Congo':	CG,
'Congo, the Democratic Republic of the':	CD,
'Cook Islands':	CK,
'Costa Rica':	CR,
'Croatia':	HR,
'Cuba':	CU,
'Curaçao':	CW,
'Cyprus':	CY,
'Czech Republic':	CZ,
'Denmark':	DK,
'Djibouti':	DJ,
'Dominica':	DM,
'Dominican Republic':	DO,
'Ecuador':	EC,
'Egypt':	EG,
'El Salvador'	SV,
'Equatorial Guinea'	GQ,
'Eritrea'	ER,
'Estonia'	EE,
'Ethiopia'	ET,
'Falkland Islands (Malvinas)'	FK,
'Faroe Islands'	FO,
'Fiji'	FJ,
'Finland'	FI,
'France'	FR,
'French Guiana'	GF,
'French Polynesia'	PF,
'French Southern Territories'	TF,
'Gabon'	GA,
'Gambia'	GM,
'Georgia'	GE,
'Germany'	DE,
'Ghana'	GH,
'Gibraltar'	GI,
'Greece'	GR,
'Greenland'	GL,
'Grenada'	GD,
'Guadeloupe'	GP,
'Guam'	GU,
'Guatemala'	GT,
'Guernsey'	GG,
'Guinea'	GN,
'Guinea-Bissau'	GW,
'Guyana'	GY,
'Haiti'	HT,
'Heard Island and McDonald Islands'	HM,
'Holy See'	VA,
'Honduras'	HN,
'Hong Kong'	HK,
'Hungary'	HU,
'Iceland'	IS,
'India'	IN,
'Indonesia'	ID,
'Iran'	IR,
'Iraq'	IQ,
'Ireland'	IE,
'Isle of Man'	IM,
'Israel'	IL,
'Italy'	IT,
'Ivory Coast'	CI,
'Jamaica'	JM,
'Japan'	JP,
'Jersey'	JE,
'Jordan'	JO,
'Kazakhstan'	KZ,
'Kenya'	KE,
'Kiribati'	KI,
'Korea, Democratic People\'s Republic of'	KP,
'Korea, Republic of'	KR,
'Kuwait'	KW,
'Kyrgyzstan'	KG,
'Laos'	LA,
'Latvia'	LV,
'Lebanon'	LB,
'Lesotho'	LS,
'Liberia'	LR,
'Libya'	LY,
'Liechtenstein'	LI,
'Lithuania'	LT,
'Luxembourg'	LU,
'Macao'	MO,
'Macedonia, the Former Yugoslav Republic of'	MK,
'Madagascar'	MG,
'Malawi'	MW,
'Malaysia'	MY,
'Maldives'	MV,
'Mali'	ML,
'Malta'	MT,
'Marshall Islands'	MH,
'Martinique'	MQ,
'Mauritania'	MR,
'Mauritius'	MU,
'Mayotte'	YT,
'Mexico'	MX,
'Micronesia, Federated States of'	FM,
'Moldova, Republic of'	MD,
'Monaco'	MC,
'Mongolia'	MN,
'Montenegro'	ME,
'Montserrat'	MS,
'Morocco'	MA,
'Mozambique'	MZ,
'Myanmar'	MM,
'Namibia'	NA,
'Nauru'	NR,
'Nepal'	NP,
'Netherlands'	NL,
'New Caledonia'	NC,
'New Zealand'	NZ,
'Nicaragua'	NI,
'Niger'	NE,
'Nigeria'	NG,
'Niue'	NU,
'Norfolk Island'	NF,
'Northern Mariana Islands'	MP,
'Norway'	NO,
'Oman'	OM,
'Pakistan'	PK,
'Palau'	PW,
'Palestine': PS,
'Panama'	PA,
'Papua New Guinea'	PG,
'Paraguay'	PY,
'Peru'	PE,
'Philippines'	PH,
'Pitcairn'	PN,
'Poland'	PL,
'Portugal'	PT,
'Puerto Rico'	PR,
'Qatar'	QA,
'Réunion'	RE,
'Romania'	RO,
'Russian Federation'	RU,
'Rwanda'	RW,
'Saint Barthélemy'	BL,
'Saint Helena, Ascension and Tristan da Cunha'	SH,
'Saint Kitts and Nevis'	KN,
'Saint Lucia'	LC,
'Saint Martin'	MF,
'Saint Pierre and Miquelon'	PM,
'Saint Vincent and the Grenadines'	VC,
'Samoa'	WS,
'San Marino'	SM,
'Sao Tome and Principe'	ST,
'Saudi Arabia'	SA,
'Senegal'	SN,
'Serbia'	RS,
'Seychelles'	SC,
'Sierra Leone'	SL,
'Singapore'	SG,
'Sint Maarten (Dutch part)'	SX,
'Slovakia'	SK,
'Slovenia'	SI,
'Solomon Islands'	SB,
'Somalia'	SO,
'South Africa'	ZA,
'South Georgia and the South Sandwich Islands'	GS,
'South Sudan'	SS,
'Spain'	ES,
'Sri Lanka'	LK,
'Sudan'	SD,
'Suriname'	SR,
'Svalbard and Jan Mayen'	SJ,
'Swaziland'	SZ,
'Sweden'	SE,
'Switzerland'	CH,
'Syrian Arab Republic'	SY,
'Taiwan': TW,
'Tajikistan'	TJ,
'Tanzania, United Republic of'	TZ,
'Thailand'	TH,
'Timor-Leste'	TL,
'Togo'	TG,
'Tokelau'	TK,
'Tonga'	TO,
'Trinidad and Tobago'	TT,
'Tunisia'	TN,
'Turkey'	TR,
'Turkmenistan'	TM,
'Turks and Caicos Islands'	TC,
'Tuvalu'	TV,
'Uganda'	UG,
'Ukraine'	UA,
'United Arab Emirates'	AE,
'United Kingdom'	GB,
'United States'	US,
'United States Minor Outlying Islands'	UM,
'Uruguay'	UY,
'Uzbekistan'	UZ,
'Vanuatu'	VU,
'Venezuela'	VE,
'Vietnam'	VN,
'Virgin Islands, British'	VG,
'Virgin Islands'	VI,
'Wallis and Futuna'	WF,
'Western Sahara'	EH,
'Yemen'	YE,
'Zambia'	ZM,
'Zimbabwe'	ZW
}



  var country_list2 = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
  	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands"
  	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
  	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
  	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
  	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
  	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
  	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
  	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
  	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
  	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
  	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
  	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia"
  	,"Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
  	,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];



export default class AutocompleteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autocompleteList: []
    };
    this.autocompleter = this.autocompleter.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.letters !== nextProps.letters) {
      this.autocompleter();
    }
  }

  renderBox() {
    if (this.props.letters && this.state.autocompleteList.length < 21) {
      return <ul>{this.state.autocompleteList.map(country => <li>{country}</li>)}</ul>

    }
  }

  autocompleter() {
    let tempArr = [];
    let userWord = this.props.letters;
    for (let i = 0; i < country_list.length; i ++) {
      if (country_list[i].includes(userWord)) {
        tempArr.push(country_list[i])
      }
    }
    this.setState({
      autocompleteList: tempArr
    })
    console.log(this.state.autocompleteList);
  }

  render() {
    return(
      <div>
        {this.renderBox()}


      </div>
    )
  }
}
