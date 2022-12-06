import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  blogs: [],
  service: {},
  oneBlog: [],
  portfolio: {},
  spin: false,
};

const globalreducer = createSlice({
  name: "global",
  initialState,
  reducers: {
    postdata(state, action) {
      state.data = action.payload;
    },
    Allblogs(state, action) {
      state.blogs = action.payload;
    },
    Blog(state, action) {
      state.oneBlog = action.payload;
    },
    ContactSpin(state, action) {
      state.spin = action.payload;
    },
    Service(state, action) {
      state.service = action.payload
    },
    Portfolio(state, action) {
      state.portfolio = action.payload
    }
  },
});

export const { postdata, Allblogs, Blog, ContactSpin, Service, Portfolio } = globalreducer.actions;
export default globalreducer.reducer;
