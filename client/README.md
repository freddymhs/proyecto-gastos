# README

en este proyecto quiero aplicar CSS puro html + javascript
en el css quiero usar sus nuevas caracteristicas ya que solo conozco de bootstrap y materialize.

# css a considerar

- bem
- sass
- selectores
- multicolumn 
- css grid layout 
- flexbox 
- styled component

# redux 
deberia usarlo para conocer mejor desde el inicio y no como integracion con la plantilla basica de react+redux
# organizar styled component
https://stackoverflow.com/questions/42987939/styled-components-organization

-src/    
 -app.js
 -app/  
 ---libs  
 ---modelo  
 ---imagenes  
 ---pages  
 ---componentesglobales    //shared
 ---componentes secciones  

pued agrgar a cada carpeta su styled.js o mejorar crear componente styled completo
src
├── app.js  
├── Routes
├── Context
├── Hooks
│── assets
│    ├── images/
│    └── audio/
│
├── Layout or Pages
│   │
│   ├── Header
│   │   ├── Logo.jsx    
│   │   ├── styled.js
│   │   ├── container.js
│   │   └── index.js
│   └── LeftPanel
│       ├── LeftPanel.jsx
│       ├── styled.js
│       └── index.js
├── Components 
│      ├────buttons
│      │       ├── buttonAccept.js
│      │       └── buttonCancel.js
│      ├────text
│      │       ├── title.js
│      │       └── subtitle.js
│      ├────inputs
│      │       ├── inputlong.js
│      │       └── inputsmall.js
│      ├────carousel
│      │       ├── carouseltop.js
│      │       └── carouselbot.js
│      └────map
│              ├── mapExample.js
│              └── mapRealTime.js




# actualizandome y COMENZANDO !!! creo que luego sera monolitco mern
 "Redux-en-Web"


aplicare router


eslint
react-router-dom
prop-types






empresa genera empleo y comunidad con habilidades unicas

empresa crea su grupo "edcON" y asigna una cuenta de "banco"
"edcON" generar crea "misiones/metas" de apoyo a la sociedad de forma libertades
se apoya con proyectos o monetario; que ademas ayuda a practicantes;

 

# error al subirlo a heroku por ESLINT AIRBNB 
lo quite



# tutorial 

## montaje de redux en react
npm i react-redux
npm i redux

crear estructura 
- src
    - redux
        - /store
            - index.js  (1 configurarlo con 1 reducer de prueba interno)
        - /reducer


en index.jsx del proyecto
```
import storeFn from './redux/store/index'; // nuestor store
const store = storeFn(); // eejecuta el store
```
provider es el puente entre react y redux
```
import {Provider} from 'react-redux';
  <Provider store={store}>
    <App />
  </Provider>,
```
**me daba error en provider use**
**https://stackoverflow.com/questions/54187538/error-in-provider-check-the-render-method-of-provider-react-redux**
**npm install --save react react-dom react-redux react-scripts redux**

dentro de App.jsx ya tengo aceeso al contenido de mi store , como revisarlo?
```
function App(props)
console.log(props)
```

# creando estructura para mi reducer nuevo
- /redux
    - /store
        - /palabra
        - action.js
        - ```
          const FnUpdateWord = (palabra)=>{
              return {
                type:'UPDATE_WORD',
               payload:palabra
              }
            }
            export default FnUpdateWord;
          ```
        - reducer.js  

# creando ACTIONS para comprobar que se monto bien redux
**dentro de algun componente mio**

import React ,{useRef}from 'react';
import FnUpdateWord from .....;
import { connect } from 'react-redux';// pero no quioer usar connect D:
  const palabraRef = useRef(null);

<input type="text" ref={palabraRef}/>
      <button onClick={()=>{FnUpdateWord(palabraRef.current.value)}}>
      guardar en store
</button>

export default connect(null, { FnUpdateWord })(Index)// pero no quioer usar connect D:


