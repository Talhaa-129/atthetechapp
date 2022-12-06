import * as actions from "./myreducer";
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { URL } from "./url/baseurl";
import { notification } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const openNotificationWithIcon = (type) => {
  {
    type == "success"
      ? notification[type]({
          message: "Submit Successfully",
          description: "Your Contact Form is Submit Successfully",
        })
      : notification[type]({
          message: "Error",
          description: "Your Contact Form is Not Submit",
        });
  }
};
function* submitContact({ payload }) {
  const { firstname, lastname, email, phone, message } = payload;
  const number = parseInt(phone);
  const data = { firstname, lastname, email, number, message };
  try {
    const head = {
      "Content-Type": "application/json",
    };
    const response = yield call(axios.post, `${URL}/api/submit`, data, {
      headers: head,
    });
    if (response?.data?.message == "Submit") {
      openNotificationWithIcon("success");
    }
  } catch (e) {
    openNotificationWithIcon("error");
  }
}

function* getBlog() {
  try {
    const response = yield call(axios.get, `${URL}/api/getblogs`);
    if (response?.data.length != 0) {
      yield put(actions.Allblogs(response.data));
    }
  } catch (err) {
    alert("Error for get blog");
  }
}

function* homeSaga() {
  yield takeLatest("SUBMIT_CONTACT_FORM", submitContact);
  yield takeLatest("GET_BLOG", getBlog);
}
export default homeSaga;
