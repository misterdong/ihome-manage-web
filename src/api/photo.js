import request from '@/utils/request'



export function listPhotos() {
  return request({
    url: '/photo/list_photos',
    method: 'get'
    
  })
}
  
export function uploadPhotos(data) {
  return request({
    url: '/photo/upload_photos',
    method: 'post',
    data
  })
}  