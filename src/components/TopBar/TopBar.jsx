import React from 'react'
import { ipcRenderer } from 'electron'
import MenuBar from './MenuBar.jsx'
import { Icon, CloseIcon, MinimizeIcon, RestoreIcon } from '../Icons.jsx'
import { TopBarWrapper, ButtonTopWrapper } from './Styles'

export default function TopBar() {
  const Close = () => ipcRenderer.send('closeApp')
  const Minimize = () => ipcRenderer.send('minimizeApp')
  const Restore = () => ipcRenderer.send('restoreApp')

  return (
    <TopBarWrapper>
      <div className='content'>
        <div className='icon'>
          <Icon width='28' height='28' />
        </div>
        <MenuBar />
        <div className='title'>My App</div>
      </div>
      <div className='content-buttons'>
        <ButtonTopWrapper onClick={Minimize}>
          <MinimizeIcon />
        </ButtonTopWrapper>
        <ButtonTopWrapper onClick={Restore}>
          <RestoreIcon />
        </ButtonTopWrapper>
        <ButtonTopWrapper onClick={Close}>
          <CloseIcon />
        </ButtonTopWrapper>
      </div>
    </TopBarWrapper>
  )
}
