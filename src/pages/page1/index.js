import React, { useEffect } from 'react'
import apiAxios from '@/api'

function Index() {
  useEffect(() => {
    apiAxios.geta({
      params: {
        a: 1,
      },
      config: {
        headers: { TOKEN: '1' },
      },
    })
    apiAxios.getab({
      params: {
        a: 'abparams',
      },
      config: {
        headers: { TOKEN: '1' },
      },
    })
    apiAxios.getb({
      params: {
        a: 1,
      },
      config: {
        headers: { TOKEN: '1' },
      },
    })
    console.log('进入页面1')
  }, [])
  return <div>页面1</div>
}

export default Index
