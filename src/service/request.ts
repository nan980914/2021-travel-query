import axios from "axios"

const queryCity = (cityid:number,type:string) => {
    let url = `/api/trackmap/citypolicy?&city_id=${type=='from'?cityid+',':','+cityid}`
    return axios.get(url).then(res=>{
        return res.data
    })
}

export default queryCity