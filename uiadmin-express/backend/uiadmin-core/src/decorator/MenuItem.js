var menuList = [];

function MenuItem(options) {
    let params = {
        title: '',
        path: '',
        pmenu: '',
        tip: '',
        menuLayer: 'admin',
        menuType: 1,
        routeType: 'form',
        apiPrefix: 'v1',
        apiSuffix: '',
        apiParams: '',
        apiMethod: 'GET',
        apiExt: '',
        isHide: 0,
        status: 1,
        sortnum: 0,
        pathSuffix: '',
        outUrl: ''
    }
    params = {...params, ...options}

    return function(target){
        menuList.push(params);
    }
}

module.exports = {MenuItem, menuList}