import reactDOM from 'react-dom/client';
var obj=new Date()
let h=obj.getHours()
let m=obj.getMinutes()
let s=obj.getSeconds()
let dt=obj.getDate()
let mt=obj.getMonth()+1
let yr=obj.getFullYear()

const root=reactDOM.createRoot(document.getElementById('root'));
root.render(
<>
   <h1>{h}:{m}:{s}</h1>
   <h3>{dt}:{mt}:{yr}</h3>
</>
);