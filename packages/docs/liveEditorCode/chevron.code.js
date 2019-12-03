const code = `() => {
const [isTop,setIsTop] = React.useState(true)
return (
<>
  <Chevron
    orientation={isTop ? "top" : "bottom"}
    size="md"
    flip={true}
    animate={true}
  />
  <Checkbox 
    label={'flip the chevron!'}
    onChange={()=>setIsTop(!isTop)}
    checked={isTop}
  />
</>
)}`;

export default code;
