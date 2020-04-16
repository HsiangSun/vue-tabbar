import axios from 'axios'

export function http(config) {
    return new Promise((resolve,reject)=>{

        const instace = axios.create({
            baseURL:'http://123.207.32.32:8000',
            timeout:2000
        });

        //请求拦截
        instace.interceptors.request.use(res=>{
            return res;
        },err=>{
            console.log('【请求失败】'+err);
            //return err;
        });

        //响应拦截
        instace.interceptors.response.use(res=>{
            //只返回业务相关数据axios的内容不显示
            return res.data;
        },err=>{
            console.log('【响应错误】'+err)
            //return err;
        });

        instace(config)
        .then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        });

    });
}