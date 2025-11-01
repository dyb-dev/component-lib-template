import type { DefaultTheme } from "vitepress"

/** CONST: `左侧边栏` 对应根目录 */
const rootDir = "/docs"

/** CONST: `左侧边栏` 对应根文件路径 */
const rootFilePath = `${rootDir}/home/`

/** CONST: `左侧边栏` 链接映射配置 */
const config: DefaultTheme.Sidebar = {
    [rootDir]: [
        {
            text: "介绍",
            link: rootFilePath
        },
        {
            text: "快速上手",
            link: `${rootDir}/quickstart/`
        },
        {
            text: "组件",
            collapsed: false,
            items: [
                {
                    text: "TransitionPro 过渡",
                    link: `${rootDir}/components/TransitionPro/`
                },
                {
                    text: "ListPro 列表",
                    link: `${rootDir}/components/ListPro/`
                },
                {
                    text: "CalendarPro 日历",
                    link: `${rootDir}/components/CalendarPro/`
                }
            ]
        }
    ]
}

/** CONST: `左侧边栏` 配置 */
const sidebar = {
    rootDir,
    rootFilePath,
    config
}

export { sidebar as docsSidebar }
