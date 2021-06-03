import { UPDATE_COM_DATA } from '@/constant'
// import { menuList } from '@/constant'

const initState = {
  // 查看的是哪个列表
  // menuType: menuList[0].key,
  output: '',
  isShowMenuList: false,
  updateDialogData: {},
}

export default (state = initState, { type, data }) => {
  switch (type) {
    case UPDATE_COM_DATA:
      return {
        ...state,
        ...data,
      }
    default:
      return state
  }
}
