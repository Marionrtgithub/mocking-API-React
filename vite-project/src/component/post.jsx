import react, {useEffect, useState} from 'react';
import {getpost} from '../services/postService';
const [post, setpost] = useState([]);
useEffect (() => {
   const response =getpost();
   console.log(response)
}, [])

return(
<></>
)
