import axios from "axios"

const queryCity = (cityid:number,type:string) => {
    let url = `https://service-cj8nltie-1253369406.gz.apigw.tencentcs.com:443/http-proxy?cityId=${cityid}`
    return axios.get(url).then(res=>{
        return res.data
    })
}

export default queryCity