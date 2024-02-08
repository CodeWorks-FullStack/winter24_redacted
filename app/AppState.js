import { CaseFile } from './models/CaseFile.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  caseFiles = [
    new CaseFile({
      title: 'Wendigo',
      imgUrl: 'https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/02/wendigo.png',
      agency: 'Park Ranger'
    }),
    new CaseFile({
      title: 'Unicorn',
      agency: 'Park Ranger'
    }),
    new CaseFile({
      title: 'Nessie',
      agency: 'Coast Guard',
      imgUrl: 'https://c.files.bbci.co.uk/4B11/production/_107971291_nessie.jpg'
    }),
    new CaseFile({
      title: 'Flatwoods Monster',
      agency: 'Men In Black',
      imgUrl: 'https://www.wvencyclopedia.org/assets/0001/9404/flatwoodsmonster_large.jpg?1315591760'
    }),
  ]

  activeCaseFile = null


}

export const AppState = createObservableProxy(new ObservableAppState())