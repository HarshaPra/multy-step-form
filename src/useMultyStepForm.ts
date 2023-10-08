import { ReactElement, useState } from "react";

export function useMultyStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);


  function next () {
    setCurrentStepIndex( i => {
      if ( i >= steps.length - 1 ) return i
      return i + 1
    })
  }
  function back () {
    setCurrentStepIndex(i => {
      if ( i <= 0) return i
      return i - 1
    })
  }
  function goTo (index: number) {
    setCurrentStepIndex(index);
  }


 return {
currentStepIndex,
step: steps[currentStepIndex],
fristStep: currentStepIndex === 0,
lastStep: currentStepIndex === steps.length - 1,
steps,
goTo,
next,
back,
 }
}