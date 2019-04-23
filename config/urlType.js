
const colorList = {
    'PAGES_SHARE':"/pages/share/share",
		'PAGES_DETAIL':"/pages/detail/detail",
		'PAGES_ADDRESS_LIST':'/pages/address/address-list'
};

exports.install = function (Vue, options) {
  Vue.prototype.getUrlType = function (type=''){//全局函数1
  return colorList[type];
  };
};
