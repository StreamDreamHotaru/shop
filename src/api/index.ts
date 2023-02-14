import axios from '@/utils/axios'
const api = {
  home: {
    data: () => axios.get('/api/home')
  }
}
export default api
