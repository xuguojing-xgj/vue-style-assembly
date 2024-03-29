export const getStyleTemplate = (data) => {
    const colorMap = {
      '#3a8ee6': 'shade-1',
      '#409eff': 'primary',
      '#0d84ff': 'darken-1',
      '#53a8ff': 'light-1',
      '#66b1ff': 'light-2',
      '#79bbff': 'light-3',
      '#8cc5ff': 'light-4',
      '#a0cfff': 'light-5',
      '#b3d8ff': 'light-6',
      '#c6e2ff': 'light-7',
      '#d9ecff': 'light-8',
      '#ecf5ff': 'light-9',
    }
    Object.keys(colorMap).forEach((key) => {
      const value = colorMap[key]
      data = data.replace(new RegExp(key, 'ig'), value)
    })
    return data
  }
  