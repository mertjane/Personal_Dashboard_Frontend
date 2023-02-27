import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  .photo-location {
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 24px;
    gap: 14px;
    #box {
      display: flex;
      align-items: center;
      justify-content: center;
      #icon {
        color: #ffff;
        opacity: 0.7;
        width: 35px;
        height: 35px;
        cursor: pointer;
        :hover {
          opacity: 1;
        }
      }
    }
    #location {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      :hover {
        #owner {
          display: flex;
          align-items: center;
          gap: 8px;
        }
      }
      span {
        color: #ffff;
        opacity: 0.8;
        font-size: 20px;
        cursor: pointer;
      }
      #owner {
        display: none;
        span {
          color: #ffff;
          opacity: 0.8;
          font-size: 16px;
          cursor: pointer;
          :hover {
            opacity: 1;
          }
        }
        #icon {
          color: #ffff;
          width: 20px;
          height: 20px;
          opacity: 0.8;
          cursor: pointer;
          :hover {
            opacity: 1;
          }
        }
      }
    }
  }
  .word {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    :hover {
      #owner {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    }
    #text {
      font-size: 28px;
      color: #ffff;
      opacity: 0.9;
      font-weight: 400;
    }
    #owner {
      display: none;
      span {
        font-size: 24px;
        color: #ffff;
        opacity: 0.9;
        cursor: pointer;
        :hover {
          opacity: 1;
        }
      }
      #icon {
        color: #ffff;
        width: 30px;
        height: 30px;
        opacity: 0.8;
        cursor: pointer;
        :hover {
          opacity: 1;
        }
      }
    }
  }
  .todo-list {
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    #todo-menu {
      background: transparent;
      outline: none;
      border: none;
      color: #ffff;
      opacity: 0.8;
      font-size: 24px;
      font-weight: 500;
      cursor: pointer;
      margin-right: 60px;
      &:hover {
        opacity: 1;
      }
    }
  }
  .todo-dropdown {
    position: absolute;
    width: 520px;
    min-height: 235px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    bottom: 120px;
    right: 20px;
    z-index: 9999;
    background-color: #ffff;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    &.active {
      opacity: 1;
      visibility: visible;
      // transform: translateY(0);
      // transition: var(--speed) ease;
      @keyframes dropdownIn {
        from {
          scale: 0;
        }
        to {
          scale: 1;
        }
      }
      animation: dropdownIn 0.3s ease;
    }
    &.inactive {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-20px);
      transition: var(--speed) ease;
    }
    #arrow {
      width: 20px;
      height: 20px;
      position: absolute;
      background-color: #ffff;
      z-index: -1;
      right: 70px;
      bottom: -8px;
      transform: rotate(45deg);
    }
  }
`;
