import axios from 'axios';

const API = {
  ping: function(){
    axios.get("/get").then(res => {
      console.log(res.data.running);
    });
  }
}

export default API;