import MenuActions from '../functions/MenuActions'

const MenuBuilder = () => {
  const config = require(`./menubar.json`)
  const menu = MenuActions

  const data = []

  for (const key in config) {
    const { label, content } = config[key]
    const submenu = []

    for (const value in content) {
      const { label, isChecked, group } = content[value]
      const action = menu[`${group || value}`]

      submenu.push({ key: value, label, isChecked, group, action })
    }

    const v = { label, submenu }

    data.push(v)
  }

  return data
}

export default MenuBuilder
