import styled from "styled-components";

export const TodoWrapper = styled.section`
  width: 100%;
  height: ${(props) => (props.openMenu ? "330px" : "100%")};
  display: flex;
  flex-direction: column;
  padding: 5px;
  .header {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    #title {
      width: 90%;
      font-size: 34px;
      font-weight: 400;
      color: #252525;
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      #icon {
        border-radius: 50%;
        width: 30px;
        height: 30px;
        color: #252525;
        opacity: 0.8;
        :hover {
          background-color: #ddddddd6;
        }
      }
    }
    #menu-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 4px;
      color: #252525;
      opacity: 0.7;
      cursor: pointer;
      :hover {
        background-color: #ddddddd6;
      }
    }
  }
  .body {
    width: 100%;
    min-height: max-content;
    display: flex;
    padding: 10px 20px;
    .list {
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      #items {
        width: 100%;
        font-size: 24px;
        color: black;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: default;
        input {
          cursor: pointer;
          width: 18px;
          height: 18px;
        }
      }
      & #selected {
        width: 100%;
        font-size: 24px;
        color: black;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: default;
        input {
          cursor: pointer;
          width: 18px;
          height: 18px;
        }
        span {
          text-decoration: line-through;
          opacity: 0.6;
        }
      }
    }
  }
  .footer {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 50px;
    padding: 0 20px;
    input {
      width: 100%;
      min-height: 50px;
      font-size: 24px;
      color: #252525;
      border: none;
      outline: none;
      ::placeholder {
        color: #252525;
        opacity: 0.6;
      }
    }
  }
  .todo-menu {
    position: absolute;
    width: 360px;
    height: 180px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    top: 65px;
    left: 25px;
    z-index: 9999;
    background-color: #e7e5e5;
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
      width: 14px;
      height: 14px;
      position: absolute;
      background-color: #e7e5e5;
      z-index: -1;
      left: 35px;
      top: -5px;
      transform: rotate(45deg);
    }
    .menu-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      padding: 5px 0;
      .dropdown-list {
        list-style: none;
        width: 100%;
        height: 100%;
        font-size: 22px;
        display: flex;
        flex-direction: column;
        padding: 5px 0;
        li {
          padding: 10px 15px;
          cursor: pointer;
          :hover {
            background-color: #c7c5c5;
          }
        }
      }
    }
  }
`;
