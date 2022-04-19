import request from '@/utils/request'



export function listPhotos() {
    return request({
      url: '/photo/list_photos',
      method: 'get'
      
    })
  }