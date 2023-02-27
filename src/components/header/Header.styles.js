import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 10%;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  .links {
    height: 100%;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    #menu {
      background: transparent;
      outline: none;
      border: none;
      color: #ffff;
      opacity: 0.8;
      font-size: 24px;
      font-weight: 500;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
  // dropdown
  .linksDropdown {
    position: absolute;
    width: 380px;
    height: 170px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    top: 90px;
    left: 20px;
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
    .links-menu {
      height: 100%;
      display: flex;
      .list {
        list-style: none;

        width: 100%;
        padding: 30px 30px;
        display: flex;
        flex-direction: column;
        gap: 4px;
        #blank-page{
          text-decoration: none;
        }
        #menu-item {
          display: flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          font-size: 24px;
          font-weight: 400;
          color: #252525;
          opacity: 0.8;
          :hover {
            opacity: 1;
            #icon {
              opacity: 1;
            }
          }
          #icon {
            height: 25px;
            width: 25px;
            color: #252525;
            opacity: 0.8;
          }
        }
      }
    }
    #arrow {
      width: 20px;
      height: 20px;
      position: absolute;
      background-color: #ffff;
      left: 40px;
      top: -8px;
      transform: rotate(45deg);
    }
  }
  .forecast {
    width: 240px;
    height: 100%;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    #add-btn {
      width: 30%;
      background: transparent;
      outline: none;
      border: none;
      color: #ffff;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4px;
      visibility: hidden;
      padding-top: 14px;
      #icon {
        color: #ffff;
        width: 36px;
        height: 36px;
      }
    }
    .group {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      .current-weather {
        position: absolute;
        right: 130px;
        top: 10px;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        #icon {
          width: 38px;
          height: 38px;
          color: #ffff;
          margin-bottom: 14px;
        }
      }
      #weather {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
      }
      span:nth-child(1) {
        height: 50%;
        color: #ffff;
        font-size: 35px;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      span:nth-child(2) {
        height: 50%;
        display: flex;
        align-items: center;
        color: #ffff;
        font-size: 19px;
        font-weight: 500;
        letter-spacing: 1px;
      }
    }
  }
  :hover {
    .forecast {
      #add-btn {
        visibility: visible;
      }
    }
  }

  // dropdown
  .dropdownMenu {
    position: absolute;
    width: 680px;
    height: 290px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    top: 105px;
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
      right: 70px;
      top: -8px;
      transform: rotate(45deg);
    }
    .menu-wrapper {
      width: 100%;
      height: 100%;
      border-radius: 12px;
      padding: 10px 10px;
      .header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 15px 0 15px;
        .box {
          width: auto;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 0px;
          :hover {
            #city {
              .wrapper {
                visibility: visible;
              }
            }
          }
          #city {
            display: flex;
            align-items: center;
            gap: 12px;
            .wrapper {
              background-color: #dddd;
              border-radius: 50%;
              padding: 8px;
              visibility: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              #icon {
                width: 20px;
                height: 20px;
                color: #252525;
                opacity: 0.8;
                cursor: pointer;
              }
            }
          }
          h5 {
            font-size: 30px;
            font-weight: 400;
            color: black;
            height: 50%;
            display: flex;
            align-items: center;
          }
          span {
            height: 50%;
            font-size: 26px;
            color: #252525;
            opacity: 0.6;
            display: flex;
            align-items: center;
            position: relative;
            bottom: 10px;
          }
        }
        #menu-icon {
          color: #252525;
          opacity: 0.8;
          padding: 7px;
          width: 40px;
          height: 40px;
          cursor: pointer;
          margin-top: -35px;
          :hover {
            background-color: #dddd;
            border-radius: 50%;
          }
        }
      }
    }
    .body {
      width: 100%;
      height: 40%;
      display: flex;
      align-items: center;
      padding: 0 15px;
      .current-weather {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 14px;
        #condition {
          color: #252525;
          opacity: 0.8;
          width: 25%;
          height: 100%;
        }
        #degree {
          font-size: 70px;
          font-weight: 500;
          height: 100%;
          width: 60%;
        }
      }
      .detail-weather {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        #items {
          color: #252525;
          opacity: 0.6;
          font-size: 20px;
          font-weight: 400;
          span {
            font-weight: 400;
            color: black;
            opacity: 1;
            font-weight: 600;
            padding-left: 6px;
          }
        }
      }
    }
    .footer {
      width: 100%;
      height: 25%;
      padding: 0 15px;
      display: flex;
      align-items: center;
      .box {
        width: 100%;
        height: 100%;
        border-top: 1px solid #25252534;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5px;
        span {
          cursor: pointer;
        }
        span:nth-child(1) {
          padding: 8px 8px;
          border-radius: 5px;
          :hover {
            background-color: #dddd;
          }
        }
        span:nth-child(2) {
          font-weight: 500;
        }
      }
    }
  }
`;
