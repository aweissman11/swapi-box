import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

class LocalStorage{
  constructor() {
    this.store= {}
  }
  setItem = (key, JSONValue)=> {
    this.store[key]=JSONValue
  }
  getItem = (key) => {
    return this.store[key] || null
  }
  clear = () => {
    this.store = {}
  }
}

global.localStorage = new LocalStorage();