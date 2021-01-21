import axios from "axios"

const queryCity = (cityid:number,type:string) => {
    let url = `http://service-cj8nltie-1253369406.gz.apigw.tencentcs.com:80/http-proxy?cityId=${cityid}`
    return axios.get(url).then(res=>{
        return res.data
    })
}

export default queryCity