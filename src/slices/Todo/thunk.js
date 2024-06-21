import { createAsyncThunk } from "@reduxjs/toolkit";

export const addtodo = createAsyncThunk(
  "todo/addtodo",
  async (event) => {
    try {

      return true;
    } catch (error) {
      return error;
    }
  }
);
