React Utilities
- Radio Button Group
   ```
    render:function() {  
      return $r("div",{},
        $r(RadioGroup , {name :"DelimitedFixedWidth", radioButtonList : radioButtonList, radioButtonClick: this.onRadioButtonClick, checkedRadio : this.state.checkedRadio})
      );
  }
  ```
  
