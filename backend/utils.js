import { CLASSNAME } from "./settings.js";

export function includesSubArr(parentArr, subArr) {
  /**
   * capitalize is matter.
   */
  for(let i=0; i<subArr.length; i++) {
    if(!parentArr.includes(subArr[i])) return false;
  }

  return true;
}

export function toggleEleInArr(arr, ele) {
  /**
   * remove element if exist in array, if not add to the end.
   * capitalize is matter.
   */
  const findIndex = arr.findIndex(e => e === ele);
  if(findIndex!==-1) arr.splice(findIndex, 1);
  else arr.push(ele);
}

export function capitalizeFirstLetter(string) { //AI generate
  return string.replace(/\b\w+/g, function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
}

export function isValidEmail(email) { //AI generate
  /**
    * Correct email syntax: [username]@[domain name]
    * Username: This is the part before the @ symbol. It can be any combination of letters, numbers, and symbols (except for certain special characters).
    * @: This is the "at" symbol, which separates the username from the domain name.
    * Domain name: This is the part after the @ symbol. It consists of the domain name (e.g., gmail.com, yahoo.com) and often includes a subdomain (e.g., mail.google.com).
    * No spaces.
    */

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPassword(password) { //AI generate
  /**
    * Contain:
    * - At leats one upper/lower case letter. (?=.*[A-Z])/(?=.*[a-z])
    * - At least one special char. (?=.*[#@$!%*?&])
    * - At least one number. (?=.*\d)
    * - At least 8 characters long. [A-Za-z\d@$!%*?&]{8,}$
    */
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

export function isValidVietnamesePhoneNumber(phoneNumber) { //AI generate
  /**
    * Country code + phone number provider: 03,05,07,08,09.
    * Lenght of VN phone number: 10 digits.
    */
  const vietnamPhoneNumberRegex = /^(03|05|07|08|09)\d{8}$/;
  return vietnamPhoneNumberRegex.test(phoneNumber);
}

export function generateUID() { //algorithm on stackoverflow
  return Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
}


export function hashPassword(password) {
  return encryptString(password);
}

function encryptString(string, offset=1) {
  /**
   * https://upload.wikimedia.org/wikipedia/commons/1/1b/ASCII-Table-wide.svg
   */
  let encryptedString = '';

  for (let i=0; i<string.length; i++) {
    let charCode = string.charCodeAt(i);

    if(charCode >= 126) charCode = 33; //out of ASCII

    charCode += offset;

    encryptedString += String.fromCharCode(charCode);
  }

  return encryptedString;
}


export function showElements(eles, className=CLASSNAME.hide) {
  if(!Array.isArray(eles)) { //handle single ele
    eles = [eles];
  } else { //handle nested arr
    eles = eles.flat();
  }

  eles.forEach(ele => {
    if(ele.classList.contains(className)) ele.classList.remove(className);
  });
}

export function hideElements(eles, className=CLASSNAME.hide) {
  if(!Array.isArray(eles)) { //handle single ele
    eles = [eles];
  } else { //handle nested arr
    eles = eles.flat();
  }

  eles.forEach(ele => {
    if(!ele.classList.contains(className)) ele.classList.add(className);
  })
  // console.log("clear invalid msgs");
}

export function clearFormInputs(inputs) {
  if(!Array.isArray(inputs)) { //handle single ele
    inputs = [inputs];
  } else { //handle nested arr
    inputs = inputs.flat();
  }

  inputs.forEach(e => {
    e.value = "";
  });
  // console.log("clear inputs");
}
