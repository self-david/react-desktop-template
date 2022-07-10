import React, { useContext } from 'react'
import { DataContext } from '../../DataContext.jsx'
import BuilderMenu from '../../builders/BuilderMenu'
import { CheckIcon } from '../Icons.jsx'
import { MenuWrapper } from './Styles'

const colors = {
  check: 'hsl(110, 90%, 70%)',
  unCheck: 'hsl(230, 30%, 95%)',
}

export default function MenuBar() {
  const { menuActive, setMenuActive } = useContext(DataContext)
  const checked = useContext(DataContext)
  const menu = BuilderMenu()

  const handleClick = sub => sub.action(sub.key, checked)
  const detectCheck = ({ key, group }) => checked[group] === key || (checked[group] === undefined && checked[key])

  return (
    <MenuWrapper>
      {menu.map((item, index) => {
        return (
          <div key={index} className='menu'>
            <div onClick={() => setMenuActive(menuActive !== index ? index : -1)}>{item.label}</div>
            <div className={`sub-menu ${menuActive !== index ? 'hidden' : 'flex'}`}>
              {item.submenu.map((sub, subIndex) => {
                return (
                  <div key={subIndex} className='sub-menu-item' onClick={() => handleClick(sub)}>
                    {sub.isChecked ? (
                      <CheckIcon
                        color={detectCheck(sub) ? colors.check : colors.unCheck}
                        isChecked={detectCheck(sub)}
                      />
                    ) : (
                      <CheckIcon width='16' height='16' color='none' />
                    )}
                    <div>{sub.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </MenuWrapper>
  )
}
