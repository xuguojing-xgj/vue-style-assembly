// 引入css-color-function
import color from 'css-color-function'
//  结构 formula
import { formula } from '../constant'

export const generateColors = (primary: string) => {
    let colors = {}
    Object.keys(formula).forEach((key) => {
        const value = formula[key].replace(/primary/g, primary)
        colors[key] = color.convert(value)
    })
    return colors
}