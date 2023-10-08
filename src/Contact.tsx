
import { ChangeEventHandler } from 'react';
import { FormWrapper } from './FormWrapper';

type UserData = {
  country:string,
  phoneNumber:string,
}

type FormFieldFrops = UserData & {
  updateField: (field: Partial<UserData>) => void;
}

export function Contact ({country, phoneNumber, updateField}:FormFieldFrops) {



  return(
    <FormWrapper title="Contact Details">
    <div>
      <div>
    <label>Contry</label>
      <input type="text"placeholder=" enter your country" value={country} onChange={(e) => updateField({country:e.target.value})}/> 
      </div>
      <div>
    <label>Phone</label>
      <input type="text"placeholder=" phone number" value={phoneNumber} onChange={(e) => updateField({phoneNumber:e.target.value}) }/> 
      </div>
    </div>
    </FormWrapper>
  )
}