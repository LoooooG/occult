import Global from '@/global/Global'
import Wechat from '@/global/Wechat'

export const Operate = {
    wxConfig(config) {
        if (Global.isWeiXin()) {
            Wechat.config(config)
        }
    }
}