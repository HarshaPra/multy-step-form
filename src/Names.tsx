import { FormWrapper } from "./FormWrapper";

type UserData ={
  firstName:string,
  lastName:string,
  address:string,
}

type UserFormProps = UserData & {

  updateField : (field:Partial<UserData>) => void;
}



export function Names({ firstName,lastName, address, updateField }: UserFormProps) {
  return (
    <FormWrapper title="Personal details">
      <div>
        <div>
          <label> First name</label>
          <input type="text" placeholder=" enter your first name" value={firstName} onChange={(e) => updateField({firstName: e.target.value}) } />
        </div>
        <div>
          <label>Last name</label>
          <input type="text" placeholder=" enter your last name" value={lastName} onChange={(e) => updateField({lastName: e.target.value}) } />
        </div>
        <div>
          <label>Address</label>
          <input type="text" placeholder=" enter your address"value={address} onChange={(e) => updateField({address: e.target.value}) }/>
        </div>
      </div>
    </FormWrapper>
  )
}