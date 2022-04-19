const Mock = require('mockjs')





const photos = {
    pageNum: 1,
    pageSize: 10,
    data: [
        {
            name: "name1",
            path: "path",

        },
        {
            name: "name2",
            path: "path",
            
        },
        {
            name: "name3",
            path: "path",
            
        }
    ]
}

module.exports = [
    {
        url: '/photo/list_photos',
        type: 'get',
        response: _ => {
          return {
            code: 20000,
            data: photos
          }
        }
      },


]