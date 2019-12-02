import myAxios from '../api/myAxios'
import  {BAST_URL} from '../redux//action_types.js'
export const qsLogin=(username,password)=>myAxios.post(`${BAST_URL}/login`,{username,password})
export const qsCategory=()=>myAxios.get(`${BAST_URL}/manage/category/list`)
  
  


