import { action, makeObservable, observable } from 'mobx';


class CheckboxStore{
  checked: string[] = [];

  constructor(){
    makeObservable(this,{
      checked: observable,
      setChecked: action
    });
  }

  setChecked = (checked:string[])=>{
    this.checked = checked;
  };
}

export default CheckboxStore;