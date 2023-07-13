import classes from '../AddUser/AddUser.module.css'
import React, { useState, useRef } from 'react';
import Card from '../Card/Card'
import Button from '../Button/Button'
import Wrapper from '../helpers/helper';
const basic_val = {
  'name': '',
  'year': '',
}


function AddUser(props) {

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submit = (e)=>{
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    props.onUpdate(enteredName, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }


  return (
    <Wrapper>
      <Card className={classes.input}>
        <form onSubmit={submit}>
          <label className={classes['label']}>Username</label>
          <input type='text' id='name' ref={nameInputRef} />
          <label className={classes['label']}>Age (years)</label>
          <input type='number' id='year' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;














  // const changeName = (e)=>{
  //   setName(e.target.value);
  // }
  // const changeAge = (e)=>{
  //   setAge(e.target.value);
  // }

  // const submit = (e)=>{
  //   e.preventDefault();
  //   if(Name.trim().length === 0 || Age.trim().length === 0){
  //     return;
  //   }
  //   if(+Age < 1){
  //     return;
  //   }
  //   props.onUpdate(Name,Age);
  //   setName('');
  //   setAge('');
  // }