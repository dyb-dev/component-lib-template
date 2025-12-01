/*
 * @FileDesc: 入口文件
 */

import { CalendarPro, ListPro, TransitionPro } from "~/components"

import type { App } from "vue"

const components = [CalendarPro, ListPro, TransitionPro]

/**
 * 安装
 *
 * @author dyb-dev
 * @date 01/09/2024/  17:38:42
 * @param {App} app - Vue 应用
 */
const install = (app: App) => {

    components.forEach(item => {

        if (item.install) {

            item.install(app)

        }
        else if (item.name) {

            app.component(item.name, item)

        }

    })

}

export default {
    install
}

export * from "~/components"
export * from "~/utils"
