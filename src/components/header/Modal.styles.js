import styled from "styled-components";

export const Overlay = styled.section`
  background-color: #ddddddb2;
  position: absolute;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 998;
  .modal-wrapper {
    width: 100%;
    height: 100%;
    #search-box {
      width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 5px 15px;
      input {
        width: 90%;
        height: 90%;
        border: none;
        outline: none;
        background-color: #dddddd;
        border-radius: 8px 0 0 8px;
        box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
        padding-left: 24px;
        font-size: 26px;
      }
    }
    #icon-btn {
      outline: none;
      background-color: #dddd;
      border: none;
      height: 90%;
      width: 10%;
      box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
      border-radius: 0 8px 8px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        padding: 3px;
        width: 40px;
        font-size: x-large;
        font-weight: 800;
        color: #252525;
        cursor: pointer;
        :hover {
          background-color: #807e7e29;
          border-radius: 50%;
        }
      }
    }
    ul {
      list-style: none;
      min-height: 220px;
      max-height: 300px;
      background-color: #dddddd;
      margin: 0 15px;
      position: relative;
      bottom: 15px;
      border-top: 1px solid #2525252d;
      border-radius: 0 0 8px 8px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 7px;
      }
      &::-webkit-scrollbar-thumb {
        background: #2525252d;
        border-radius: 2px;
      }
      li {
        padding: 6px 24px;
        font-size: 22px;
        cursor: pointer;
        font-weight: 400;
        :hover {
          background-color: #72727222;
        }
      }
    }
  }
`;
