
import Mock from 'mockjs'

let data = Mock.mock(
    {
        'name|20': [{ 'name': '@cname ' }],
        'list|20': [
            { 'id|+1': 1, 'name': '@cname', 'title': '@ctitle' }
        ]
    }
)

Mock.mock('/list', 'get', function () {
    return {
         data
    }
})