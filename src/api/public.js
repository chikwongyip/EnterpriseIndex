import axios from 'axios';
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data;charset=UTF-8';
export default{
    fetchGet(url,params={}){
        return new Promise((resolve,reject)=>{
            axios.get(url,{params:params})
            .then(response=>{
                resolve(response.data)
            })
            .catch(err=>{
                reject(err)
            })
        })
    },
    fetchPost(url,params={}){
        return new Promise((resolve,reject)=>{
            axios.post(url,params).then(response=>{
                resolve(response.data)
            })
            .catch(err=>{
                reject(err)
            })
        })
    }
}