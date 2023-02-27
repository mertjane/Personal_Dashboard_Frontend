import styled from "styled-components";
//import view1 from "../assets/backgrounds/view_1.jpg"
import logo from "../assets/icons/icon.svg";
import sample1 from "../assets/samples/sample_1.jpg";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
`;

export const HomeContainer = styled.section`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.background?.urls?.full})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LandingContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    #logo {
      width: 140px;
      height: 100%;
      background-image: url(${logo});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      cursor: pointer;
    }
    .menu {
      list-style: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
      #menu-item {
        font-family: 400;
        font-size: 18px;
        color: #252525;
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }
  .body {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .fragment {
      width: 70%;
      height: 500px;
      display: flex;
      align-items: center;
      .text-box {
        display: flex;
        flex-direction: column;
        width: 55%;
        height: 100%;
        padding: 5px 20px;
        gap: 20px;
        h1 {
          font-size: 50px;
          width: 75%;
          line-height: 110%;
        }
        h3 {
          font-size: 24px;
          font-weight: 400;
          opacity: 1;
          width: 75%;
        }
        #access-btn {
          width: 280px;
          height: 55px;
          border-radius: 28px;
          border: none;
          outline: none;
          background-color: #a6cfff;
          opacity: 0.9;
          cursor: pointer;
          :hover {
            opacity: 1;
          }
          span {
            color: #ffff;
            font-weight: 600;
            font-size: 18px;
            span {
              color: #252525;
              font-weight: 600;
              font-size: 18px;
              margin-left: 4px;
              opacity: 0.9;
            }
          }
        }
      }
      .view-box {
        width: 45%;
        height: 100%;
        #img {
          width: 100%;
          height: 79%;
          background-image: url(${sample1});
          background-size: contain;
          background-repeat: no-repeat;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
      }
    }
  }
`;

// Register styles

export const AuthLayer = styled.section`
  background-color: #f8f8f8cc;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 998;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  .auth-wrapper {
    padding: 50px 45px;
    width: 500px;
    height: ${(props) => (props.switchLogin === true ? "530px" : "820px")};
    border-radius: 14px;
    background-color: #a6cfff;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    #title {
      font-size: 30px;
      padding: 20px 0;
      font-weight: 800;
      color: #252525;
      opacity: 0.8;
    }
    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      label {
        font-weight: 500;
        display: flex;
        flex-direction: column;
        color: #252525;
        box-sizing: border-box;
        position: relative;
        #country-list {
          list-style: none;
          background-color: #ffff;
          height: 250px;
          top: 73px;
          width: 100%;
          position: absolute;
          box-sizing: border-box;
          z-index: 9999;
          border-radius: 0 0 8px 8px;
          border-top: 1px solid #dddddd61;
          overflow-y: auto;
          &::-webkit-scrollbar {
            width: 6px;
          }
          &::-webkit-scrollbar-thumb {
            background: #9e9d99ac;
          }
          li {
            padding: 20px 8px;
            height: 30px;
            cursor: pointer;
            font-size: 13.8px;
            font-weight: 400;
            color: #252525ba;
            display: flex;
            align-items: center;
            :hover {
              background-color: #dddd;
              opacity: 0.6;
            }
          }
        }
        #city-list {
          list-style: none;
          background-color: #ffff;
          height: 250px;
          top: 73px;
          width: 100%;
          position: absolute;
          box-sizing: border-box;
          z-index: 9999;
          border-radius: 0 0 8px 8px;
          border-top: 1px solid #dddddd61;
          overflow-y: auto;
          &::-webkit-scrollbar {
            width: 6px;
          }
          &::-webkit-scrollbar-thumb {
            background: #9e9d99ac;
          }
          li {
            padding: 20px 8px;
            height: 30px;
            cursor: pointer;
            font-size: 13.8px;
            font-weight: 400;
            color: #252525ba;
            display: flex;
            align-items: center;
            :hover {
              background-color: #dddd;
              opacity: 0.6;
            }
          }
        }
        input {
          height: 45px;
          border: none;
          outline: none;
          border-radius: 8px;
          padding-left: 8px;
          margin-top: 4px;
          ::placeholder {
            opacity: 0.6;
          }
          &:focus {
            border: 2px solid #252525;
            &::placeholder {
              opacity: 0;
            }
          }
        }
        .custom-select {
          display: flex;
          flex-direction: row;
          align-items: center;
          box-sizing: border-box;
          height: 48px;
          width: 100%;
          margin-top: 4px;
          cursor: pointer;
          position: relative;
          #country-input {
            margin: 0;
            height: 46px;
            width: 90%;
            background-color: #ffff;
            border-radius: ${(props) =>
              props.openCountryList === true ? "8px 0 0 0" : "8px 0 0 8px"};
            ::placeholder {
              opacity: ${(props) => (!props.createUser.country ? 0.6 : 1)};
            }
            &:focus {
              border-left: 2px solid #252525;
              border-top: 2px solid #252525;
              border-bottom: 2px solid #252525;
            }
            cursor: pointer;
            display: flex;
            align-items: center;
            padding-left: 8px;
            outline: none;
            border: none;
          }
          #city-input {
            margin: 0;
            height: 46px;
            width: 90%;
            background-color: #ffff;
            border-radius: ${(props) =>
              props.openCountryList === true ? "8px 0 0 0" : "8px 0 0 8px"};
            &:focus {
              border-left: 2px solid #252525;
              border-top: 2px solid #252525;
              border-bottom: 2px solid #252525;
            }
            ::placeholder {
              opacity: ${(props) => (!props.createUser.city ? 0.6 : 1)};
            }
            cursor: pointer;
            display: flex;
            align-items: center;
            padding-left: 8px;
            outline: none;
            border: none;
          }
          #icon-wrapper {
            height: 46px;
            width: 10%;
            background-color: #ffff;
            border-radius: ${(props) =>
              props.openList === true ? "0 8px 0 0" : "0 8px 8px 0"};
            display: flex;
            align-items: center;
            justify-content: center;
            #icon {
              cursor: pointer;
            }
          }
          #city-input:focus ~ {
            #icon-wrapper {
              border-right: 2px solid #252525;
              border-top: 2px solid #252525;
              border-bottom: 2px solid #252525;
            }
          }
          #country-input:focus ~ {
            #icon-wrapper {
              border-right: 2px solid #252525;
              border-top: 2px solid #252525;
              border-bottom: 2px solid #252525;
            }
          }
        }
      }
    }
    button {
      margin-top: 40px;
      height: 50px;
      border: none;
      background-color: #252525;
      opacity: 0.8;
      color: #ffff;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      :hover {
        opacity: 1;
      }
    }
    span:nth-child(1) {
      cursor: pointer;
      text-decoration: underline;
      :hover {
        text-decoration: none;
      }
    }
  }
`;
