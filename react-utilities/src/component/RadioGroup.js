import React from "react";
import "./app.css";

var createReactClass = require('create-react-class');
var $r = React.createElement;
var RadioGroup = createReactClass({

    getDefaultProps: function(){
        return {name: "", checkedRadio:""};
    },
  
    _onRadioClick: function(e) {
        var radioButtonClick = this.props.radioButtonClick;
        radioButtonClick(e.target.value);
    },
  
    render:function() {
        var radioButtonList = this.props.radioButtonList;
        var radios = [];
        for(var i in radioButtonList) {
          radios.push( $r(Radio, {name :this.props.name, 
                                  value : radioButtonList[i].value, 
                                  label : radioButtonList[i].label, onChange : this._onRadioClick,
                                  checked: this.props.checkedRadio === radioButtonList[i].value}));
        }
        return $r("div",{className : "alignhor"},
              radios
        );
    }
  });
  
  var Radio = createReactClass({
    
      getDefaultProps: function(){
             return {name: "", value:"", label : "", selected:""};
      },
  
      render:function() {
           return $r("div",{className : "alignhor"},
                 $r("input",{type : "radio", name : this.props.name, value : this.props.value, onChange : this.props.onChange, checked : this.props.checked}),
                 $r("label", {}, this.props.label)
           )
       }
     });


     export default RadioGroup;