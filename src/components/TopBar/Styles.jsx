import styled from 'styled-components'

const colors = {
  fg: 'hsl(227, 29%, 70%)',
  bg: 'hsl(231, 20%, 15%)',
  hover: 'hsl(231, 20%, 20%)',
  subBg: 'hsl(231, 20%, 15%)',
  subHover: 'hsl(231, 20%, 20%)',
  hoverColor: 'hsl(230, 30%, 95%)',
}

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
  color: ${colors.fg};
  background-color: ${colors.bg};

  & .menu {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 10px;
    position: relative;

    &:hover {
      background-color: ${colors.hover};
      color: ${colors.hoverColor};
    }

    & .sub-menu {
      flex-direction: column;
      padding-bottom: 10px;
      position: absolute;
      top: 30px;
      left: 0;
      background-color: ${colors.subBg};
      color: ${colors.fg};
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
      z-index: 1;

      & .sub-menu-item {
        display: flex;
        align-items: center;
        width: 100%;
        min-width: max-content;
        padding: 5px 6px;
        padding-right: 15px;
        gap: 5px;

        &:hover {
          background-color: ${colors.subHover};
          color: ${colors.hoverColor};
        }
      }
    }
  }

  & .hidden {
    display: none;
  }

  & .flex {
    display: flex;
  }
`

const TopBarWrapper = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${colors.bg};
  -webkit-user-select: none;
  display: flex;
  justify-content: space-between;
  color: #fff;

  & .content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    & .icon {
      width: 60px;
      min-width: 60px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      -webkit-app-region: drag;
    }

    & .title {
      -webkit-app-region: drag;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 10px;
    }
  }

  & .content-buttons {
    display: flex;
  }
`

const ButtonTopWrapper = styled.button`
  background-color: ${colors.bg};
  width: 46px;
  height: 30px;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.hover};
  }
`

export { MenuWrapper, TopBarWrapper, ButtonTopWrapper }
