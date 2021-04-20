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
crear 
- src
    - redux
        - store.js
        - /reducer
            - index.js
    