In order to generate the component docs with the knobs all is needed it's a config object
```const KNOBS = {
   firstStepKnobs: [
     {
       type: 'input',
       label: 'Knob Label',
       state: 'state property name',
       defaultState: 'intial state',
     },
     {
       type: 'select',
       label: 'Accepted format',
       state: 'usAccept',
       options: ACCEPTED_FORMAT,
       defaultState: ACCEPTED_FORMAT[1],
     }
     { 
       type: 'checkbox',
       label: 'Dropping',
       state: 'isDropping',
       defaultState: false 
     }
   ```
   
#####   To generate the code block all is needed is this function
  
  ```{generateCodeBlock(NameComponent, KNOBS, this, extraProps)}```
  
  where extra Props are additional Props docs that are not part of Docs state
  
  ex :```const extraPropsDocs = ["onChange={'console.log'}"];```
  
#####   To generate the Docs State 
  
  ```generateState(KNOBS)```
  
##### To generate the actual input knobs controller
  
  ```{KNOBS.firstStepKnobs.map(knob => generateInput(knob, this))}```