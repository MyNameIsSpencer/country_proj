//  Year,  National Debt in Millions (USD),  Debt  of GDP,  Debt per Capita


var states = {"United States":
[{'2016':	['19,959,114',	'107.17',	'61,769']},
{'2015':	['19,080,139',	'105.30',	'59,459']},
{'2014':	['18,311,896',	'105.07',	'57,483']},
{'2013':	['17,592,696',	'105.40',	'55,637']},
{'2012':	['16,726,412',	'103.54',	'53,269']},
{'2011':	['15,512,758',	'99.97',	'49,774']},
{'2010':	['14,316,023',	'95.67',	'46,278']},
{'2009':	['12,541,305',	'86.98',	'40,882']},
{'2008':	['10,851,084',	'73.72',	'35,683']},
{'2007':	['9,356,570',	'64.63',	'31,061']},
{'2006':	['8,879,517',	'64.09',	'29,759']},
{'2005':	['8,542,286',	'65.24',	'28,906']},
{'2004':	['8,076,972',	'65.80',	'27,585']},
{'2003':	['6,722,371',	'58.40',	'23,172']},
{'2002':	['6,079,217',	'55.38',	'21,136']},
{'2001':	['5,631,898',	'53.02',	'19,763']},
{'2000':	['5,456,855',	'53.03',	'19,339']},
{'1999':	['5,690,941',	'58.88',	'20,395']},
{'1998':	['5,678,174',	'62.47',	'20,584']},
{'1997':	['5,648,937',	'65.62',	'20,719']},
{'1996':	['5,510,358',	'68.03',	'20,455']},
{'1995':	['5,272,904',	'68.80',	'19,802']},
{'1994':	['5,071,770',	'69.39',	'19,275']},
{'1993':	['4,828,298',	'70.19',	'18,576']},
{'1992':	['4,486,290',	'68.61',	'17,489']},
{'1991':	['4,097,634',	'66.37',	'16,197']},
{'1990':	['3,706,533',	'61.99',	'14,849']},
{'1989':	['3,410,385',	'60.28',	'13,817']},
{'1988':	['3,159,256',	'60.15',	'12,921']},
{'1987':	['2,886,835',	'59.28',	'11,915']},
{'1986':	['2,640,301',	'57.52',	'10,995']},
{'1985':	['2,351,233',	'54.09',	'9,882']},
{'1984':	['2,000,685',	'49.51',	'8,484']},
{'1983':	['1,740,789',	'47.85',	'7,446']},
{'1982':	['1,504,575',	'44.98',	'6,495']},
{'1981':	['1,294,824',	'40.33',	'5,643']},
{'1980':	['1,178,733',	'41.18',	'5,188']},
]}





let germany ={"Germany":
[ { '2017': [ '2,364,059', '64.10', '28,648' ] },
  { '2016': [ '2,374,824', '68.20', '28,778' ] },
  { '2015': [ '2,398,490', '71.00', '29,187' ] },
  { '2014': [ '2,912,077', '74.70', '35,864' ] },
  { '2013': [ '2,909,197', '77.50', '36,019' ] },
  { '2012': [ '2,829,524', '79.80', '35,139' ] },
  { '2011': [ '2,958,137', '78.60', '36,826' ] },
  { '2010': [ '2,768,665', '80.90', '34,513' ] },
  { '2009': [ '2,490,673', '72.60', '30,447' ] },
  { '2008': [ '2,454,817', '65.20', '29,936' ] },
  { '2007': [ '2,192,822', '63.70', '26,671' ] },
  { '2006': [ '1,998,079', '66.50', '24,274' ] },
  { '2005': [ '1,917,656', '67.00', '23,262' ] },
  { '2004': [ '1,829,262', '64.80', '22,173' ] },
  { '2003': [ '1,583,975', '63.10', '19,192' ] },
  { '2002': [ '1,241,050', '59.40', '15,036' ] },
  { '2001': [ '1,127,336', '57.70', '13,675' ] },
  { '2000': [ '1,150,607', '58.90', '13,988' ] },
  { '1999': [ '1,320,066', '60.00', '16,066' ] },
  { '1998': [ '1,334,813', '59.40', '16,271' ] },
  { '1997': [ '1,303,716', '58.70', '15,888' ] },
  { '1996': [ '1,443,758', '57.60', '17,604' ] },
  { '1995': [ '1,420,878', '54.80', '17,366' ] },
  { '1994': [ '1,050,537', '47.52', '12,884' ] },
  { '1993': [ '934,582', '45.16', '11,490' ] },
  { '1992': [ '885,581', '41.62', '10,937' ] },
  { '1991': [ '731,201', '39.13', '9,109' ] } ]};


let france = {"France":
[ { '2017': [ '2,506,167', '97.00', '37,412' ] },
  { '2016': [ '2,382,628', '96.60', '35,567' ] },
  { '2015': [ '2,331,338', '95.60', '34,921' ] },
  { '2014': [ '2,709,943', '94.90', '40,778' ] },
  { '2013': [ '2,626,587', '93.40', '39,832' ] },
  { '2012': [ '2,431,474', '90.60', '37,065' ] },
  { '2011': [ '2,516,626', '87.80', '38,553' ] },
  { '2010': [ '2,255,128', '85.30', '34,706' ] },
  { '2009': [ '2,242,763', '83.00', '34,686' ] },
  { '2008': [ '2,015,475', '68.80', '31,320' ] },
  { '2007': [ '1,717,054', '64.50', '26,826' ] },
  { '2006': [ '1,499,319', '64.60', '23,558' ] },
  { '2005': [ '1,480,378', '67.40', '23,413' ] },
  { '2004': [ '1,397,665', '65.90', '22,265' ] },
  { '2003': [ '1,188,163', '64.40', '19,074' ] },
  { '2002': [ '904,744', '60.30', '14,625' ] },
  { '2001': [ '803,753', '58.30', '13,085' ] },
  { '2000': [ '804,110', '58.90', '13,187' ] },
  { '1999': [ '903,324', '60.50', '14,920' ] },
  { '1998': [ '923,443', '61.30', '15,350' ] },
  { '1997': [ '893,473', '61.40', '14,907' ] },
  { '1996': [ '963,544', '60.00', '16,133' ] },
  { '1995': [ '898,859', '56.10', '15,101' ] },
  { '1994': [ '696,748', '49.62', '11,747' ] },
  { '1993': [ '616,482', '46.30', '10,430' ] },
  { '1992': [ '564,869', '40.01', '9,593' ] },
  { '1991': [ '464,544', '36.30', '7,927' ] },
  { '1990': [ '452,790', '35.41', '7,765' ] },
  { '1989': [ '353,408', '34.28', '6,281' ] },
  { '1988': [ '343,377', '33.48', '6,135' ] },
  { '1987': [ '314,953', '33.53', '5,656' ] },
  { '1986': [ '241,928', '31.18', '4,366' ] },
  { '1985': [ '171,163', '30.59', '3,103' ] },
  { '1984': [ '154,876', '28.99', '2,821' ] },
  { '1983': [ '150,112', '26.59', '2,747' ] },
  { '1982': [ '149,114', '25.27', '2,744' ] },
  { '1981': [ '136,417', '21.97', '2,525' ] },
  { '1980': [ '146,271', '20.76', '2,722' ] } ]}

let canada = {"Canada":
[ { '2016': [ '1,400,169', '91.15', '38,673' ] },
  { '2015': [ '1,412,037', '90.55', '39,438' ] },
  { '2014': [ '1,528,270', '84.96', '43,066' ] },
  { '2013': [ '1,580,709', '85.79', '45,036' ] },
  { '2012': [ '1,546,794', '84.84', '44,580' ] },
  { '2011': [ '1,458,609', '81.51', '42,523' ] },
  { '2010': [ '1,307,297', '81.10', '38,496' ] },
  { '2009': [ '1,088,658', '79.28', '32,419' ] },
  { '2008': [ '1,050,150', '67.83', '31,632' ] },
  { '2007': [ '979,154', '66.84', '29,809' ] },
  { '2006': [ '922,440', '70.13', '28,357' ] },
  { '2005': [ '827,622', '70.87', '25,700' ] },
  { '2004': [ '738,428', '72.14', '23,149' ] },
  { '2003': [ '680,071', '76.18', '21,520' ] },
  { '2002': [ '606,262', '79.89', '19,364' ] },
  { '2001': [ '601,993', '81.75', '19,437' ] },
  { '2000': [ '598,797', '80.71', '19,539' ] },
  { '1999': [ '602,973', '89.27', '19,856' ] },
  { '1998': [ '591,480', '93.61', '19,635' ] },
  { '1997': [ '624,037', '95.59', '20,893' ] },
  { '1996': [ '632,161', '100.57', '21,378' ] },
  { '1995': [ '606,453', '100.40', '20,724' ] },
  { '1994': [ '565,317', '97.79', '19,521' ] },
  { '1993': [ '548,550', '95.04', '19,146' ] },
  { '1992': [ '528,298', '89.18', '18,652' ] },
  { '1991': [ '497,631', '81.54', '17,781' ] },
  { '1990': [ '442,674', '74.53', '16,020' ] },
  { '1989': [ '405,482', '71.76', '14,899' ] },
  { '1988': [ '357,762', '70.52', '13,374' ] },
  { '1987': [ '304,285', '70.55', '11,527' ] },
  { '1986': [ '264,589', '70.10', '10,150' ] },
  { '1985': [ '240,312', '65.88', '9,310' ] },
  { '1984': [ '216,308', '60.87', '8,457' ] },
  { '1983': [ '196,959', '57.84', '7,774' ] },
  { '1982': [ '163,834', '52.26', '6,532' ] },
  { '1981': [ '142,566', '46.56', '5,752' ] },
  { '1980': [ '123,963', '45.07', '5,066' ] } ]};

let saudiArabia = {"Saudi Arabia":
[ { '2016': [ '84,461', '13.09', '2,661' ] },
  { '2015': [ '37,942', '5.80', '1,223' ] },
  { '2014': [ '11,810', '1.56', '384' ] },
  { '2013': [ '16,036', '2.15', '535' ] },
  { '2012': [ '22,333', '3.04', '765' ] },
  { '2011': [ '36,149', '5.38', '1,274' ] },
  { '2010': [ '44,467', '8.45', '1,613' ] },
  { '2009': [ '60,113', '13.99', '2,255' ] },
  { '2008': [ '62,628', '12.06', '2,429' ] },
  { '2007': [ '71,140', '17.12', '2,852' ] },
  { '2006': [ '97,223', '25.83', '4,030' ] },
  { '2005': [ '122,397', '37.34', '5,246' ] },
  { '2004': [ '162,900', '62.93', '7,219' ] },
  { '2003': [ '176,080', '81.56', '7,996' ] },
  { '2002': [ '182,917', '96.35', '8,511' ] },
  { '2001': [ '171,515', '93.15', '8,177' ] },
  { '2000': [ '164,238', '86.70', '8,022' ] },
  { '1999': [ '166,397', '102.99', '8,327' ] },
  { '1998': [ '149,011', '101.52', '7,640' ] },
  { '1997': [ '127,131', '76.70', '6,678' ] },
  { '1996': [ '119,165', '75.21', '6,413' ] },
  { '1995': [ '106,287', '74.25', '5,861' ] },
  { '1994': [ '91,620', '67.87', '5,176' ] },
  { '1993': [ '77,814', '58.60', '4,504' ] },
  { '1992': [ '65,440', '47.80', '3,861' ] },
  { '1991': [ '51,963', '39.35', '3,258' ] } ]};


let japan = {"Japan":
[ { '2016': [ '', '11,664,882', '235.63', '91,878' ] },
  { '2015': [ '', '10,162,717', '231.26', '80,035' ] },
  { '2014': [ '', '11,447,364', '236.07', '90,052' ] },
  { '2013': [ '', '11,984,944', '232.47', '94,123' ] },
  { '2012': [ '', '14,197,286', '229.01', '111,306' ] },
  { '2011': [ '', '13,680,735', '222.09', '107,022' ] },
  { '2010': [ '', '11,837,082', '207.85', '92,771' ] },
  { '2009': [ '', '10,532,471', '201.04', '82,575' ] },
  { '2008': [ '', '9,234,579', '183.42', '72,319' ] },
  { '2007': [ '', '7,920,168', '175.43', '61,994' ] },
  { '2006': [ '', '7,990,608', '176.39', '62,551' ] },
  { '2005': [ '', '8,395,611', '176.78', '65,718' ] },
  { '2004': [ '', '8,269,672', '171.66', '64,741' ] },
  { '2003': [ '', '7,236,830', '162.73', '56,700' ] },
  { '2002': [ '', '6,461,568', '156.82', '50,719' ] },
  { '2001': [ '', '6,318,817', '146.83', '49,703' ] },
  { '2000': [ '', '6,736,368', '137.89', '53,113' ] },
  { '1999': [ '', '5,976,125', '131.12', '47,210' ] },
  { '1998': [ '', '4,755,983', '117.94', '37,642' ] },
  { '1997': [ '', '4,709,487', '106.68', '37,374' ] },
  { '1996': [ '', '4,883,714', '101.03', '38,849' ] },
  { '1995': [ '', '5,225,580', '95.90', '41,659' ] },
  { '1994': [ '', '4,170,611', '84.99', '33,334' ] },
  { '1993': [ '', '3,304,596', '74.19', '26,486' ] },
  { '1992': [ '', '2,657,741', '67.99', '21,370' ] },
  { '1991': [ '', '2,275,829', '63.49', '18,364' ] },
  { '1990': [ '', '2,014,533', '64.30', '16,320' ] },
  { '1989': [ '', '2,042,119', '66.85', '16,599' ] },
  { '1988': [ '', '2,248,780', '73.21', '18,350' ] },
  { '1987': [ '', '1,957,072', '77.27', '16,038' ] },
  { '1986': [ '', '1,570,539', '75.55', '12,932' ] },
  { '1985': [ '', '974,795', '69.68', '8,069' ] },
  { '1984': [ '', '882,886', '66.97', '7,354' ] },
  { '1983': [ '', '807,138', '64.92', '6,767' ] },
  { '1982': [ '', '668,940', '58.96', '5,647' ] },
  { '1981': [ '', '657,663', '53.95', '5,591' ] },
  { '1980': [ '', '539,567', '48.81', '4,621' ] } ]};

let unitedKingdom = {"United Kingdom":
[ { '2017': [ '', '2,274,443', '87.70', '34,561' ] },
  { '2016': [ '', '2,238,405', '88.20', '34,014' ] },
  { '2015': [ '', '2,518,431', '88.20', '38,518' ] },
  { '2014': [ '', '2,737,136', '87.40', '42,191' ] },
  { '2013': [ '', '2,389,193', '85.60', '37,127' ] },
  { '2012': [ '', '2,243,083', '84.50', '35,100' ] },
  { '2011': [ '', '2,214,366', '81.30', '34,874' ] },
  { '2010': [ '', '1,839,482', '75.60', '29,188' ] },
  { '2009': [ '', '1,538,814', '64.10', '24,617' ] },
  { '2008': [ '', '1,212,098', '49.90', '19,537' ] },
  { '2007': [ '', '1,202,506', '41.90', '19,530' ] },
  { '2006': [ '', '1,115,868', '40.80', '18,271' ] },
  { '2005': [ '', '1,003,179', '39.90', '16,549' ] },
  { '2004': [ '', '893,937', '38.70', '14,854' ] },
  { '2003': [ '', '715,051', '35.70', '11,959' ] },
  { '2002': [ '', '591,611', '34.50', '9,943' ] },
  { '2001': [ '', '570,501', '34.40', '9,630' ] },
  { '2000': [ '', '596,593', '37.00', '10,112' ] },
  { '1999': [ '', '704,131', '39.90', '11,978' ] },
  { '1998': [ '', '676,144', '41.30', '11,542' ] },
  { '1997': [ '', '674,413', '43.40', '11,549' ] },
  { '1996': [ '', '621,225', '44.30', '10,667' ] },
  { '1995': [ '', '586,910', '44.70', '10,103' ] },
  { '1994': [ '', '505,677', '40.96', '8,727' ] },
  { '1993': [ '', '438,498', '38.11', '7,588' ] },
  { '1992': [ '', '428,495', '33.32', '7,433' ] },
  { '1991': [ '', '355,617', '28.53', '6,183' ] },
  { '1990': [ '', '340,906', '28.58', '5,946' ] },
  { '1989': [ '', '327,812', '32.55', '5,735' ] },
  { '1988': [ '', '366,929', '37.04', '6,438' ] },
  { '1987': [ '', '319,798', '39.29', '5,624' ] },
  { '1986': [ '', '270,377', '41.19', '4,765' ] },
  { '1985': [ '', '221,783', '41.21', '3,917' ] },
  { '1984': [ '', '213,143', '42.25', '3,774' ] },
  { '1983': [ '', '222,850', '41.85', '3,954' ] },
  { '1982': [ '', '240,526', '43.05', '4,272' ] },
  { '1981': [ '', '263,138', '44.77', '4,672' ] },
  { '1980': [ '', '257,102', '42.52', '4,563' ] } ]}


let italy = {"Italy":
[ { '2017': [ '', '2,556,574', '131.80', '42,195' ] },
  { '2016': [ '', '2,456,815', '132.00', '40,549' ] },
  { '2015': [ '', '2,411,373', '131.50', '39,749' ] },
  { '2014': [ '', '2,839,429', '131.80', '46,705' ] },
  { '2013': [ '', '2,749,504', '129.00', '45,235' ] },
  { '2012': [ '', '2,556,919', '123.40', '42,840' ] },
  { '2011': [ '', '2,655,941', '116.50', '44,717' ] },
  { '2010': [ '', '2,454,954', '115.40', '41,354' ] },
  { '2009': [ '', '2,469,116', '112.50', '41,715' ] },
  { '2008': [ '', '2,458,296', '102.40', '41,666' ] },
  { '2007': [ '', '2,201,301', '99.80', '37,531' ] },
  { '2006': [ '', '1,993,984', '102.60', '34,247' ] },
  { '2005': [ '', '1,889,340', '101.90', '32,539' ] },
  { '2004': [ '', '1,803,228', '100.10', '31,157' ] },
  { '2003': [ '', '1,580,807', '100.50', '27,494' ] },
  { '2002': [ '', '1,297,060', '101.90', '22,703' ] },
  { '2001': [ '', '1,218,272', '104.70', '21,378' ] },
  { '2000': [ '', '1,203,033', '105.10', '21,120' ] },
  { '1999': [ '', '1,369,611', '109.70', '24,061' ] },
  { '1998': [ '', '1,404,992', '110.80', '24,688' ] },
  { '1997': [ '', '1,411,126', '113.80', '24,798' ] },
  { '1996': [ '', '1,523,235', '116.30', '26,782' ] },
  { '1995': [ '', '1,369,478', '116.90', '24,092' ] },
  { '1994': [ '', '1,382,513', '127.07', '24,321' ] },
  { '1993': [ '', '1,271,488', '120.54', '22,369' ] },
  { '1992': [ '', '1,439,275', '109.72', '25,330' ] },
  { '1991': [ '', '1,264,389', '102.28', '22,271' ] },
  { '1990': [ '', '1,156,081', '98.79', '20,374' ] },
  { '1989': [ '', '896,176', '95.57', '15,807' ] },
  { '1988': [ '', '838,217', '92.97', '14,797' ] } ]};



var greece = {"Greece":
[ { '2017': [ '358,575', '178.60', '33,299' ] },
  { '2016': [ '348,683', '180.80', '32,381' ] },
  { '2015': [ '345,858', '176.80', '32,072' ] },
  { '2014': [ '424,627', '178.90', '39,107' ] },
  { '2013': [ '425,653', '177.40', '38,955' ] },
  { '2012': [ '391,973', '159.60', '35,622' ] },
  { '2011': [ '495,879', '172.10', '44,729' ] },
  { '2010': [ '438,237', '146.20', '39,398' ] },
  { '2009': [ '419,921', '126.70', '37,765' ] },
  { '2008': [ '389,431', '109.40', '35,101' ] },
  { '2007': [ '328,804', '103.10', '29,727' ] },
  { '2006': [ '283,324', '103.60', '25,673' ] },
  { '2005': [ '266,200', '107.40', '24,190' ] },
  { '2004': [ '247,879', '102.90', '22,596' ] },
  { '2003': [ '205,324', '101.50', '18,768' ] },
  { '2002': [ '162,085', '104.90', '14,849' ] },
  { '2001': [ '145,957', '107.10', '13,405' ] },
  { '2000': [ '136,893', '104.90', '12,633' ] },
  { '1999': [ '145,495', '98.90', '13,502' ] },
  { '1998': [ '140,919', '97.40', '13,111' ] },
  { '1997': [ '142,540', '99.50', '13,330' ] },
  { '1996': [ '147,820', '101.30', '13,907' ] },
  { '1995': [ '135,559', '99.00', '12,803' ] },
  { '1994': [ '114,689', '98.30', '10,886' ] },
  { '1993': [ '109,336', '100.29', '10,423' ] },
  { '1992': [ '93,136', '79.97', '8,929' ] },
  { '1991': [ '78,889', '74.68', '7,610' ] },
  { '1990': [ '71,665', '73.16', '6,976' ] },
  { '1989': [ '47,408', '59.82', '4,684' ] },
  { '1988': [ '43,628', '57.07', '4,338' ] },
  { '1987': [ '34,426', '52.41', '3,437' ] },
  { '1986': [ '26,597', '47.14', '2,664' ] },
  { '1985': [ '22,348', '46.62', '2,246' ] },
  { '1984': [ '19,362', '40.06', '1,952' ] },
  { '1983': [ '16,660', '33.59', '1,688' ] },
  { '1982': [ '16,087', '29.31', '1,638' ] },
  { '1981': [ '14,037', '26.68', '1,439' ] },
  { '1980': [ '12,845', '22.53', '1,324' ] } ]};

function splitter(bar) {
  let newBigArr = [];
  for (let i = 0; i < bar.length; i ++) {
    let tempYearArr = {}
    for (var property in bar[i]) {
      let tempObj = {};
      let stringer = bar[i][property][0];
      tempObj[property] = stringer.split("");
      tempObj[property].push(bar[i][property][1]);
      newBigArr.push(tempObj);
    }
  }
  return newBigArr;
}

console.log(france);
