import axios from "axios";
export default {
  mandar: async (num = 0) => {
    await axios.get('/index.php/welcome/telegram', {
      params: {
        tipo: num,
        device: navigator.userAgent
      }
    });
  }
};
