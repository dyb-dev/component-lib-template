/*
 * @Author: dyb-dev
 * @Date: 2024-08-31 22:32:16
 * @LastEditors: dyb-dev
 * @LastEditTime: 2024-09-12 21:38:02
 * @FilePath: /component-lib-template/src/index.ts
 * @Description: 入口文件
 */

import { CalendarPro, ListPro, TransitionPro } from "#/components"

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

export * from "#/components"
export * from "#/utils"
