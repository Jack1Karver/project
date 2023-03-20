
import Input from '../input/input';
import styles from './scss/tabs.module.scss';

const Tabs1 = () => {
  return (
   <>
   
   <form style={{margin:'40px', backgroundColor: '#e1e3e6' , width: '96%', border: '1px solid black', height: '500px' }}>
   
   <form id='form1' style={{float: 'none',margin:'20px', backgroundColor: 'white', width: '46%', border: '1px solid black', height: '130px' }}>
      <label >
        <span style={{padding:'5px 5px', display:'flex', border:'40px'}}>Автор*</span> 
        <input style={{margin:'10px 5px'}} type="text" name="firsname"  placeholder='Фамилия'/>
        <input style={{margin:'10px 5px'}} type="text" name="name"  placeholder='Имя'/>
        <span style={{margin:'-5px 5px', display:'flex'}}>Название книги*</span> 
        <input style={{margin:'10px 5px', width:'370px'}} type="text" name="firsname"  placeholder='Название книги'/>
      </label>
    </form> 

    <form id='form2' style={{float: 'none',padding:'3px',margin:'20px', backgroundColor: 'white', width: '46%', border: '1px solid black', height: '130px' }}>
    <label>
        <span style={{padding:'5px 5px', display:'flex', border:'40px'}}>ISBN</span> 
        <input style={{margin:'10px 5px'}} type="text" name="firsname"  placeholder='978-5-93673-265-2'/>
        <span style={{margin:'-5px 5px', display:'flex'}}>Год издания*</span> 
        <input style={{margin:'10px 5px', width:'370px'}} type="text" name="firsname"  placeholder='2012'/>
      </label>
    </form>

    <form id='form3' style={{float:'right', padding:'3px',margin:'-300px 20px', backgroundColor: 'white', width: '46%', border: '1px solid black', height: '130px'}}>
    <label>
        <span style={{padding:'5px 5px', display:'flex', border:'40px'}}>Категории</span> 
        <input style={{margin:'10px 5px'}} type="text" name="firsname"  placeholder='978-5-93673-265-2'/>
        <span style={{margin:'-5px 5px', display:'flex'}}>Год издания*</span> 
        <input style={{margin:'10px 5px', width:'370px'}} type="text" name="firsname"  placeholder='2012'/>
      </label>
    </form>


   </form>

   {/* <form style={{margin:'40px', backgroundColor: 'wh#e1e3e6ite', width: '96%', border: '1px solid black', height: '150px' }}>
      <label >
        <span style={{padding:'5px 5px', display:'flex', border:'40px'}}>Автор*</span> 
        <input style={{margin:'10px 5px'}} type="text" name="firsname"  placeholder='Фамилия'/>
        <input style={{margin:'10px 5px'}} type="text" name="name"  placeholder='Имя'/>
      </label>
      <label>
        <span style={{margin:'-5px 5px', display:'flex'}}>Название книги*</span> 
        <input style={{margin:'10px 5px', width:'350px'}} type="text" name="firsname"  placeholder='Название книги'/>
      </label>
    </form> */}
   </>
  );
};

export default Tabs1;
