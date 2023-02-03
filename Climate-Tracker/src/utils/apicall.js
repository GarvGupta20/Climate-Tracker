import axios from "axios";


//for the api call function always try to give the fo;llowing content : url which is required and also can try params


async function makeApiCall (requestInfo,callback) {
       const value = await axios({
        url : requestInfo.URL,
        params: requestInfo.queries==undefined ? [] : requestInfo.queries,
        method:"post",
        timeout: 500,
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        withCredentials: false,
        responseType:"json",
        responseEncoding:"utf-8",
        
      }).catch((error) => {


            console.log(error.response.data.message);

            console.log('ERRRRRRROR ENCOUNTERED WHILE MAKING THE API CALL');
            if(error.response.data.message==='city not found') return 'city not found';
            if(error.response.status>=100 && error.response.status<200) throw Error('Informational Error');
            if(error.response.status>=300 && error.response.status<400) throw Error('Redirectional Error');
            if(error.response.status>=400 && error.response.status<500) throw Error('Client Error');
            if(error.response.status>=500 && error.response.status<600) throw Error('Server Error');

            console.log(error.message);


      });

      console.log(value);

      return value.data;

}


export default makeApiCall;