import numToString from './numToString'

const num: string = 3
const str: null = numToString(3)

///

num = maybeLog(num)
str = maybeLog(str)

function maybeLog (thing) {
  switch (typeof thing) {
    case 'string':
      console.log(`string: ${thing}`)
      break;
    case 'number':
      console.log(`number: ${thing}`)
      break;
    default:
      console.log('idk')
  }

  return thing
}

///

let obj = {
  num,
  str,
}

obj = addProp(obj, 'asdf', 'dfgh')
obj = addProp(obj, 'asdf', 3)
obj = addProp(obj, 'asdf', null)

function addProp (thing, key, val) {
  thing[key] = val
  return thing
}