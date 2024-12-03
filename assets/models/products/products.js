import { IMG_ROOT_PATH, IMG_TYPE } from "../../../backend/settings.js";
/*
{
  "id": "",
  "brandId": "",
  "typesId": [],
  "chipSetId": "",
  "name": "",
  "price": "",
  "quantity": "100",
  "img": `${IMG_ROOT_PATH}/example.${IMG_TYPE}`,
  "rom": "",
  "ram": "",
  "batteryCapacity": "",
  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
*/

const applePhones = [
  { 
    "id": "101",
    "brandId": "1",
    "typesId": ["1", "4"],
    "chipSetId": "101",
    "name": "iPhone 13",
    "price": "49999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/apple/iphone13.${IMG_TYPE}`,
    "rom": "128",
    "ram": "4",
    "batteryCapacity": "3095",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    "id": "102",
    "brandId": "1",
    "typesId": ["1", "4"],
    "chipSetId": "101",
    "name": "iPhone 13 pro max",
    "price": "94699",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/apple/iphone13promax.${IMG_TYPE}`,
    "rom": "128",
    "ram": "4",
    "batteryCapacity": "4352",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    "id": "103",
    "brandId": "1",
    "typesId": ["1", "4"],
    "chipSetId": "101",
    "name": "iPhone 14",
    "price": "66999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/apple/iphone14.${IMG_TYPE}`,
    "rom": "128",
    "ram": "4",
    "batteryCapacity": "3279",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    "id": "104",
    "brandId": "1",
    "typesId": ["1", "4"],
    "chipSetId": "101",
    "name": "iPhone 14 pro max",
    "price": "100961",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/apple/iphone14promax.${IMG_TYPE}`,
    "rom": "128",
    "ram": "6",
    "batteryCapacity": "4323",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    "id": "105",
    "brandId": "1",
    "typesId": ["1", "4"],
    "chipSetId": "102",
    "name": "iPhone 15",
    "price": "76894",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/apple/iphone15.${IMG_TYPE}`,
    "rom": "128",
    "ram": "6",
    "batteryCapacity": "4383",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    "id": "106",
    "brandId": "1",
    "typesId": ["1", "4"],
    "chipSetId": "103",
    "name": "iPhone 15 pro max",
    "price": "114375",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/apple/iphone15promax.${IMG_TYPE}`,
    "rom": "128",
    "ram": "8",
    "batteryCapacity": "4422",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    "id": "107",
    "brandId": "1",
    "typesId": ["1", "4"],
    "chipSetId": "104",
    "name": "iPhone 16",
    "price": "85969",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/apple/iphone16.${IMG_TYPE}`,
    "rom": "128",
    "ram": "8",
    "batteryCapacity": "3561",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    "id": "108",
    "brandId": "1",
    "typesId": ["1", "4"],
    "chipSetId": "105",
    "name": "iPhone 16 pro max",
    "price": "132999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/apple/iphone16promax.${IMG_TYPE}`,
    "rom": "256",
    "ram": "8",
    "batteryCapacity": "4676",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    "id": "109",
    "brandId": "1",
    "typesId": ["1", "4"],
    "chipSetId": "106",
    "name": "iPhone x",
    "price": "22399",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/apple/iphoneX.${IMG_TYPE}`,
    "rom": "64",
    "ram": "3",
    "batteryCapacity": "2716",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  { 
    "id": "110",
    "brandId": "1",
    "typesId": ["1", "4"],
    "chipSetId": "107",
    "name": "iPhone XS max",
    "price": "26970",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/apple/iphoneXSmax.${IMG_TYPE}`,
    "rom": "64",
    "ram": "4",
    "batteryCapacity": "3174",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

const samsungPhones = [
  {
    "id": "201",
    "brandId": "2",
    "typesId": ["1", "5", "6"],
    "chipSetId": "201",
    "name": "samsung galaxy z fold 6",
    "price": "124900",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/samsung/ssgalaxy_Z_Fold6_5g.${IMG_TYPE}`,
    "rom": "256",
    "ram": "12",
    "batteryCapacity": "4400",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "202",
    "brandId": "2",
    "typesId": ["2", "5"],
    "chipSetId": "202",
    "name": "samsung galaxy a52s 5g",
    "price": "39999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/samsung/ssgalaxyA52s5G.${IMG_TYPE}`,
    "rom": "128",
    "ram": "6",
    "batteryCapacity": "4500",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "203",
    "brandId": "2",
    "typesId": ["3", "5"],
    "chipSetId": "203",
    "name": "samsung galaxy a55",
    "price": "31499",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/samsung/ssgalaxyA55.${IMG_TYPE}`,
    "rom": "128",
    "ram": "8",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "204",
    "brandId": "2",
    "typesId": ["2", "3"],
    "chipSetId": "204",
    "name": "samsung galaxy f12",
    "price": "19999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/samsung/ssgalaxyF12.${IMG_TYPE}`,
    "rom": "64",
    "ram": "4",
    "batteryCapacity": "6000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "205",
    "brandId": "2",
    "typesId": ["3"],
    "chipSetId": "205",
    "name": "samsung galaxy m33 5G",
    "price": "29999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/samsung/ssgalaxyM33_5G.${IMG_TYPE}`,
    "rom": "128",
    "ram": "6",
    "batteryCapacity": "6000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "206",
    "brandId": "2",
    "typesId": ["1", "5"],
    "chipSetId": "206",
    "name": "samsung galaxy note 20 ultra",
    "price": "109999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/samsung/ssgalaxynote20ultra.${IMG_TYPE}`,
    "rom": "128",
    "ram": "12",
    "batteryCapacity": "4500",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "207",
    "brandId": "2",
    "typesId": ["1", "4", "5"],
    "chipSetId": "201",
    "name": "samsung galaxy s23 ultra",
    "price": "119999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/samsung/ssgalaxys23ultra.${IMG_TYPE}`,
    "rom": "256",
    "ram": "8",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "208",
    "brandId": "2",
    "typesId": ["1", "4", "5"],
    "chipSetId": "201",
    "name": "samsung galaxy s24",
    "price": "79999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/samsung/ssgalaxyS24.${IMG_TYPE}`,
    "rom": "128",
    "ram": "8",
    "batteryCapacity": "4000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "209",
    "brandId": "2",
    "typesId": ["1", "4", "5"],
    "chipSetId": "201",
    "name": "samsung galaxy s24 ultra",
    "price": "78993",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/samsung/ssgalaxyS24ultra.${IMG_TYPE}`,
    "rom": "258",
    "ram": "12",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "210",
    "brandId": "2",
    "typesId": ["1", "5", "6"],
    "chipSetId": "201",
    "name": "samsung galaxy z flip 6",
    "price": "109999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/samsung/ssgalaxyZFlip6_5G.${IMG_TYPE}`,
    "rom": "256",
    "ram": "12",
    "batteryCapacity": "4000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

const asusPhones = [
  {
    "id": "301",
    "brandId": "3",
    "typesId": ["4", "5"],
    "chipSetId": "212",
    "name": "asus ROG phone 7",
    "price": "106000",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/asus/asusrogphone7.${IMG_TYPE}`,
    "rom": "512",
    "ram": "16",
    "batteryCapacity": "6000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "302",
    "brandId": "3",
    "typesId": ["4", "5"],
    "chipSetId": "212",
    "name": "asus ROG phone 8",
    "price": "97499",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/asus/asusrogphone8.${IMG_TYPE}`,
    "rom": "256",
    "ram": "12",
    "batteryCapacity": "6000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "303",
    "brandId": "3",
    "typesId": ["1", "4", "5"],
    "chipSetId": "202",
    "name": "asus zenfone 7",
    "price": "71016",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/asus/asuszenfone7.${IMG_TYPE}`,
    "rom": "128",
    "ram": "8",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

const xiaomiPhones = [
  {
    "id": "401",
    "brandId": "4",
    "typesId": ["1", "4", "5"],
    "chipSetId": "212",
    "name": "xiaomi 12",
    "price": "42599",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/xiaomi/xiaomi12.${IMG_TYPE}`,
    "rom": "128",
    "ram": "8",
    "batteryCapacity": "4500",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "402",
    "brandId": "4",
    "typesId": ["1", "4", "5"],
    "chipSetId": "212",
    "name": "xiaomi 13",
    "price": "44999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/xiaomi/xiaomi13.${IMG_TYPE}`,
    "rom": "128",
    "ram": "8",
    "batteryCapacity": "4500",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "403",
    "brandId": "4",
    "typesId": ["1", "4", "5"],
    "chipSetId": "201",
    "name": "xiaomi 14",
    "price": "84999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/xiaomi/xiaomi14.${IMG_TYPE}`,
    "rom": "256",
    "ram": "12",
    "batteryCapacity": "4820",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "404",
    "brandId": "4",
    "typesId": ["1", "4", "5"],
    "chipSetId": "201",
    "name": "xiaomi 14 pro",
    "price": "84999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/xiaomi/xiaomi14pro.${IMG_TYPE}`,
    "rom": "256",
    "ram": "12",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

const oppoPhones = [
  {
    "id": "501",
    "brandId": "5",
    "typesId": ["2", "3"],
    "chipSetId": "207",
    "name": "oppo a3",
    "price": "16499",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/oppo/oppoa3.${IMG_TYPE}`,
    "rom": "128",
    "ram": "6",
    "batteryCapacity": "5100",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "502",
    "brandId": "5",
    "typesId": ["2", "3"],
    "chipSetId": "208",
    "name": "oppo a17k",
    "price": "12999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/oppo/oppoa17k.${IMG_TYPE}`,
    "rom": "64",
    "ram": "3",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "503",
    "brandId": "5",
    "typesId": ["2", "3"],
    "chipSetId": "208",
    "name": "oppo a18",
    "price": "17999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/oppo/oppoa18.${IMG_TYPE}`,
    "rom": "128",
    "ram": "4",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "504",
    "brandId": "5",
    "typesId": ["2", "3"],
    "chipSetId": "208",
    "name": "oppo a58",
    "price": "19999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/oppo/oppoa58.${IMG_TYPE}`,
    "rom": "128",
    "ram": "6",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "505",
    "brandId": "5",
    "typesId": ["2", "3"],
    "chipSetId": "202",
    "name": "oppo a60",
    "price": "19999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/oppo/oppoa60.${IMG_TYPE}`,
    "rom": "128",
    "ram": "8",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "506",
    "brandId": "5",
    "typesId": ["1", "4", "5"],
    "chipSetId": "210",
    "name": "oppo find x8",
    "price": "59999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/oppo/oppofindx8.${IMG_TYPE}`,
    "rom": "256",
    "ram": "12",
    "batteryCapacity": "5630",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "507",
    "brandId": "5",
    "typesId": ["2", "5", "4"],
    "chipSetId": "210",
    "name": "oppo reno 8T",
    "price": "44500",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/oppo/opporeno8t.${IMG_TYPE}`,
    "rom": "256",
    "ram": "12",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

const realme = [
  {
    "id": "601",
    "brandId": "6",
    "typesId": ["2", "3", "5"],
    "chipSetId": "210",
    "name": "realme 10",
    "price": "21199",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/realme/realme10.${IMG_TYPE}`,
    "rom": "256",
    "ram": "8",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "602",
    "brandId": "6",
    "typesId": ["2", "3", "5"],
    "chipSetId": "208",
    "name": "realme 11",
    "price": "22100",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/realme/realme11.${IMG_TYPE}`,
    "rom": "128",
    "ram": "8",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "603",
    "brandId": "6",
    "typesId": ["2", "3", "5"],
    "chipSetId": "208",
    "name": "realme 11 pro",
    "price": "32999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/realme/realme11pro.${IMG_TYPE}`,
    "rom": "256",
    "ram": "8",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "604",
    "brandId": "6",
    "typesId": ["2", "3"],
    "chipSetId": "208",
    "name": "realme c25",
    "price": "19999",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/realme/realmec25.${IMG_TYPE}`,
    "rom": "128",
    "ram": "4",
    "batteryCapacity": "6000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "id": "605",
    "brandId": "6",
    "typesId": ["2", "3"],
    "chipSetId": "211",
    "name": "realmec30s",
    "price": "11399",
    "quantity": "100",
    "img": `${IMG_ROOT_PATH}/realme/realmec30s.${IMG_TYPE}`,
    "rom": "32",
    "ram": "2",
    "batteryCapacity": "5000",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
];

const products = [
  ...applePhones, 
  ...samsungPhones, 
  ...asusPhones, 
  ...xiaomiPhones, 
  ...oppoPhones,
  ...realme,
];

export default products;