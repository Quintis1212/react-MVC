
import {mod} from './Model'

class Controller {


 static setData(){
    mod.setValue()
  }

  static setFunction(fn,context ){
    mod.setFunction(fn,context)
  }
}


export {Controller}