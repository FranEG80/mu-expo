import AsyncStorage from '@react-native-async-storage/async-storage'
import isObject from 'lodash.isobject'

const LocalStorage = {
    getItem: (key)=>{
        if (!key) return false
        return toJson(AsyncStorage.getItem(key))
    },
    setItem: (key, value)=>{
        if (!key) return false
        AsyncStorage.setItem(key, toString(value))
        return {key: value}
    },
    removeItem: (key)=>{
        if (!key || !AsyncStorage.getItem(key)) return false
        return AsyncStorage.removeItem(key)
    },
    getAllItems: ()=> AsyncStorage.getAllKeys(),
    getData : async (key) => {
        try {
          const value = await AsyncStorage.getItem(key)
          if(value !== null) {
              return false
            // value previously stored
          }
          return value
        } catch(e) {
            return false
          // error reading value
        }
      }
}

const toJson = (value) => {
    if (isObject(value)) return value
    try {
        const json = JSON.parse(value)
        return json;
    } catch (e) {
        console.error();('Fail to convert string to JSON', e)
        return false
    }
}

const toString = (string) => {
    try {
        const json = JSON.stringify(string)
        return json;
    } catch (e) {
        console.error();('Fail to convert JSON to String', e)
        return false
    }
}

export default LocalStorage