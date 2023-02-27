import styled from "styled-components";

export const BodyWrapper = styled.section`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const TimeWrapper = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  :hover {
    .refresh-box {
      visibility: visible;
    }
    .menu-box {
      visibility: visible;
    }
  }
  .refresh-box {
    position: absolute;
    left: 600px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    padding: 6px;
    cursor: pointer;
    visibility: hidden;
    :hover {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
    #icon {
      color: #ffff;
      height: 45px;
      width: 45px;
      :hover {
        opacity: 1;
      }
    }
  }
  .menu-box {
    position: absolute;
    right: 600px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    padding: 6px;
    cursor: pointer;
    visibility: hidden;
    :hover {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
    #icon {
      color: #ffff;
      height: 30px;
      width: 30px;
      :hover {
        opacity: 1;
      }
    }
  }
  #time {
    color: #ffff;
    height: 100%;
    width: 100%;
    font-size: 218px;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const WelcomeWrapper = styled.section`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  :hover {
    .box {
      visibility: visible;
    }
  }
  #text {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffff;
    font-size: 75px;
    font-weight: 400;
  }
  .box {
    position: absolute;
    right: 490px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    padding: 6px;
    cursor: pointer;
    visibility: hidden;
    :hover {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }
    #icon {
      color: #ffff;
      height: 30px;
      width: 30px;
      :hover {
        opacity: 1;
      }
    }
  }
`;

export const SearchWrapper = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  .group {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      #refresh {
        visibility: visible;
      }
    }
    #refresh {
      position: absolute;
      left: 470px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
      padding: 8px;
      cursor: pointer;
      visibility: hidden;
      :hover {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
      }
      #icon {
        color: #ffff;
        height: 45px;
        width: 45px;
        :hover {
          opacity: 1;
        }
      }
    }
    #search-icon {
      height: 90px;
      width: 90px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: none;
      border-radius: 45px 0 0 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      #icon {
        color: #ffff;
        height: 45px;
        width: 45px;
      }
    }
    input {
      height: 90px;
      width: 630px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: none;
      outline: none;
      color: #ffff;
      font-size: 40px;
      cursor: pointer;
      ::placeholder {
        color: #ffff;
      }
    }
    #menu {
      height: 90px;
      width: 90px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: none;
      border-radius: 0 45px 45px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      #tool-icon {
        color: #ffff;
        height: 25px;
        width: 25px;
      }
    }
  }
`;
