import { useState } from 'react'
import styles from './App.module.css';
import JOHN from './assets/JOHN.png';
import { levels,calculateImc, Level } from './helpers/imc';
import {GridItem} from './components/GridItem';
import leftArrowImage from './assets/leftarrow.png';
const App = () =>{
const [heightField,setHeightField] = useState<number>(0);
const [weightField,setWeightField] = useState<number>(0);
const [toShow,setToShow] = useState<Level | null>(null);
const handleCalculateButton = () =>{
  if(heightField && weightField){
    setToShow(calculateImc(heightField,weightField));
  }
  else{
    alert("Preencha todos os campos!");
  }
}

const handleBackButton = () =>{
  setToShow(null);
  setHeightField(0);
  setWeightField(0);
}
<a href=""></a>
  return(
    <div>
      <header>
        <div className={styles.headerContainer}>
          <img src={JOHN} width={150}/>
        </div>
      </header>
      <body>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule seu IMC</h1>
            <p>O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>
            
            <input 
            type="number"
            placeholder='Digite sua altura em metros, Ex: 1,80' 
            value={heightField > 0 ? heightField: ''}
            onChange={e =>{setHeightField(parseFloat(e.target.value))}}
            disabled={toShow? true : false}
            /> <br />
            
            <input 
            type="number"
            placeholder='Digite seu peso em Kgs, Ex: 72,00' 
            value={weightField > 0 ? weightField:''}
            onChange={e =>{setWeightField(parseFloat(e.target.value))}}
            disabled={toShow? true : false}
            />

            <button onClick={handleCalculateButton} 
             disabled={toShow? true : false}>Calcular</button>
          </div>
          <div className={styles.rightSide}>
            {!toShow &&(
              <div className={styles.grid}>
                {levels.map((item,index)=>(
                  <GridItem key={index} item={item}/>
                ))}
                
              </div>
            )}
            {toShow &&(
              <div className={styles.rightBig}>
                <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} width={25} />
                </div>
                <GridItem item={toShow}/>
              </div>
            )}
          </div>
        </div>
      </body>
    </div>
  );
}

export default App
