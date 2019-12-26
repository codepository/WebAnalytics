import axios from '@/libs/api.request'
export const getRealtimeData = (domain, start) => {
  return axios.request({
    url: '/api/v1/tongji/getRealtimeData',
    params: {
      domain,
      startDate: start
    },
    method: 'GET'
  })
}
export const getTopContent = (domain, startDate, endDate) => {
  return axios.request({
    url: '/api/v1/tongji/getTopContent',
    params: {
      domain,
      startDate,
      endDate
    },
    method: 'GET'
  })
}
