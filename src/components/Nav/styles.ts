import { NavLink } from 'react-router-dom'
import styled, { DefaultTheme } from 'styled-components'

export const S = {
  NavDrop: styled.div`
    @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    @media (max-width: 1023px) {
      background: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary};
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 99;
      padding: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      overflow-y: auto;
      opacity: 0;
      visibility: hidden;
      transition: opacity, visibility 0.3s linear;

      .nav-active & {
        opacity: 1;
        visibility: visible;
      }
    }
  `,
  NavList: styled.ul`
    text-transform: uppercase;

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
      display: flex;
      align-items: center;
      font-size: 16px;
      line-height: 1;
    }

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.widescreen} {
      font-size: 18px;
      line-height: 1;
    }
  `,
  NavListItem: styled.li`
    margin-bottom: 5px;

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 0;
    }
  `,
  HeaderList: styled.ul`
    display: flex;
    align-items: center;
    margin: 0 -10px;
  `,
  HeaderListItem: styled.li`
    padding: 0 10px;

    a {
      color: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary};
      text-transform: uppercase;
      font-weight: 700;

      &:hover {
        color: ${(props: { theme: DefaultTheme }) => props.theme.colors.info};
      }
    }
  `,

  NavOpener: styled.a`
    position: absolute;
    top: 20px;
    right: 15px;
    width: 36px;
    height: 24px;
    transition: all 0.2s linear;
    font-size: 0;
    line-height: 0;
    cursor: pointer;

    &:before,
    &:after,
    span {
      background: ${(props: { theme: DefaultTheme }) => props.theme.colors.primary};
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 4px;
      margin-top: -2px;
      transition: all 0.2s linear;
    }

    &:before,
    &:after {
      content: '';
      top: 0;

      .nav-active & {
        transform: rotate(45deg);
        top: 50%;
      }
    }

    &:after {
      top: 100%;

      .nav-active & {
        transform: rotate(-45deg);
      }
    }

    span {
      .nav-active & {
        opacity: 0;
      }
    }

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
      display: none;
    }
  `,
  LinkElem: styled(NavLink)`
    color: ${(props: { theme: DefaultTheme }) => props.theme.colors.info};
    display: block;
    padding: 10px;

    @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
      padding: 0;
    }

    &.active,
    &:hover {
      color: ${(props: { theme: DefaultTheme }) => props.theme.colors.infoActive};

      @media ${(props: { theme: DefaultTheme }) => props.theme.device.desktop} {
        color: ${(props: { theme: DefaultTheme }) => props.theme.colors.infoActive};
        background: none;
      }
    }

    &.active {
      font-weight: 700;
    }`,

  ThemeToggle: styled.button`
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      color: ${(props: { theme: DefaultTheme }) => props.theme.colors.text};
      background: none;
      margin: 0;
      padding: 0;
      border: 0;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    `
}
