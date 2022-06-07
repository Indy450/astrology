let name = 'Indy'
let sign = 'aries'
let signCase = sign[0].toUpperCase() + sign.slice(1)
let random = Math.floor(Math.random() * 10)
let random2 = Math.floor(Math.random() * 5)
let random3 = Math.floor(Math.random() * 12)
const randomSign = (input) => {
    switch(input) {
        case 0: 
            return 'Aries'
            break;
        case 1:
            return 'Taurus'
            break;
        case 2:
            return 'Gemini'
            break;
        case 3:
            return 'Cancer'
            break;
        case 4: 
            return 'Leo'
            break;
        case 5:
            return 'Virgo'
            break;
        case 6: 
            return 'Libra'
            break;
        case 7:
            return 'Scorpio'
            break;
        case 8:
            return 'Sagittarius'
            break;
        case 9:
            return 'Capricorn'
            break;
        case 10:
            return 'Aquarius'
            break;
        case 11:
            return 'Pisces'
            break;
        case 12:
            return 'Pixel 6a'
            break;
    }
}
const message = (random) => {
  switch(random){
    case 0:
    return "The stars have spoken and they say that tuna salad should not be microwaved"
    case 1: 
    return 'Today is not your day, tomorrow does not look so bright either';
    break;
    case 2:
    return 'Get the Moon over My Hammy from Dennys today. Trust me.';
    break;
    case 3: 
    return 'The stars have aligned in an, um, unusual way. Perhaps be more careful than normal today';
    break;
    case 4:
    return 'You know, astrology can be tricky. But today I can say with utmost certainty, YES!';
    break;
    case 5:
    return 'Mars, Jupiter, Venus. All of them are planets';
    break;
    case 6:
    return 'If your happy and you know it, clap your hands. Else seek therapy';
    break;
    case 7: 
    return 'The only crypto im looking to get into is that Clark Kent. Get it? Crypto = Krypto? As in short for Kyrptonian?';
    break;
    case 8:
    return 'Speed will only get you so far so fast, endurance with only get you so far so slow';
    break;
    case 9:
    return 'Today is going to be the day that they throw it all back to you'
    break;
    case 10:
    return 'The produce section may not produce the results you are looking for'
    break;
  }
}

const farewell = (random) => {
  switch(random) {
  case 0:
  return 'No need to thank me, you are already welcome my child';
  break;
  case 1:
  return 'Thank you for visiting the Horoscope zone, now please make your way to the gift shop';
  break;
  case 2:
  return 'I hope this has given you the peace of mind you were seeking';
  break;
  case 3: 
  return 'Wiser words have never been spoken, not even by the Geico Gecko';
  break;
  case 4:
  return 'This concludes this episode of the Horoscope Zone. Tune in next time for more wisdom';
  break;
  case 5:
  return 'No need for any thanks, just click some ads';
  break;
  }
}

const createPersonalHoroscope = (inputName, inputSign) => {
  if (typeof inputName !== 'string' || typeof inputSign !== 'string') {
    return 'Please enter a valid name and/or sign'
  } else {
    console.log(`Hello ${inputName}. Welcome to the Horoscope Zone. I see that your star sign is ${inputSign} from when you told me that. Let me look to stars and see what that have in store for you. Ahh yes, they tell me the following ... ... ... `);
    console.log(' ')
    console.log(message(random));
    console.log(' ')
    console.log(farewell(random2));
  }
}

const createRandomHoroscope = () => {
    console.log(`    Hello child. Welcome to the to the lair of the mystical uhhh, mystic. 
    I see that you are a, a, a, ${randomSign(random3)}. 
    Yes of course obviously you are a ${randomSign(random3)}, its so clear.
    Anyways. 
    Here is the wisdom that the stars have for you today... ... ...`)
    console.log(' ')
    console.log(message(random))
    console.log(' ')
    console.log(farewell(random2))
}

createRandomHoroscope();