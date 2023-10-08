import { useState } from "react"
import { Contact } from "./Contact"
import { Names } from "./Names"
import { useMultyStepForm } from "./useMultyStepForm"

type FormData = {
  firstName: string,
  lastName: string,
  address: string,
  country: string,
  phoneNumber: string,
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  address: '',
  country: '',
  phoneNumber: '',
}

function App() {

  const [data, setData] = useState(INITIAL_DATA);

  const updateField = (field: Partial<FormData>) => {
    console.log(field);
    setData((pre) => {
      return {...pre, ...field}
    })
    
  }
  console.log(data);
  

  const { steps, currentStepIndex, step, fristStep, back, next, lastStep } = useMultyStepForm([<Names {...data} updateField={updateField} />, <Contact {...data} updateField={updateField} />])

  return (
    <>

      <div style={{
        position: 'relative',
        background: 'white',
        border: '1px solid black',
        padding: '2rem',
        margin: '1rem',
        borderRadius: '.5rem',
        fontFamily: 'arial',
      }}>
        <div style={{ position: 'absolute', top: '1rem' }}>
          <button>save & exit</button>
        </div>
        <form>
          <div style={{
            position: 'absolute',
            top: '.5rem',
            right: '.5rem',
          }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div style={{
            marginTop: '1rem',
            display: 'flex',
            gap: '.5rem',
            justifyContent: 'flex-end'
          }}>
            {!fristStep && (<button type="button" onClick={back}>back</button>)}
            <button type="button" onClick={next}>{lastStep ? 'finish' : 'next'}</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
