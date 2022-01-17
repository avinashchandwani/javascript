React Utilities
- Radio Button Group
   ```
    render:function() {  
    var radioButtonList = [
       {
       "name":"1",
       "value":"Banana",
       "label" :"Banana"
       },
       {
         "name":"2",
         "value":"Apple",
         "label" :"Apple"
       },
       {
         "name":"3",
         "value":"Kiwi",
         "label" :"Kiwi"
       }
      ];
      return $r("div",{},
        $r(RadioGroup , {name :"DelimitedFixedWidth", radioButtonList : radioButtonList, radioButtonClick: this.onRadioButtonClick, checkedRadio : this.state.checkedRadio})
      );
  }
  ```
  
