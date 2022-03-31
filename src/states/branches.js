import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postBranch = createAsyncThunk("POST_BRANCH", async (branch) => {
  try {
    const newBranch = await axios.post("/api/admin/add/office", branch);
    return newBranch.data;
  } catch (err) {
    console.log(err);
  }
});

export const getAllBranches = createAsyncThunk("GET_ALL_BRANCHES", async () => {
  try {
    const branches = await axios.get("/api/admin/office");
    return branches.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteBranchId = createAsyncThunk("DELETE_BRANCH", async (id) => {
  try {
    const deleteBranch = await axios.delete(`/api/admin/remove/office/${id}`);
    return deleteBranch.data;
  } catch (err) {
    console.log(err);
  }
});

const branchesReducer = createReducer([], {
  [getAllBranches.fulfilled]: (state, action) => action.payload,
  [postBranch.fulfilled]: (state, action) => action.payload,
  [deleteBranchId.fulfilled]: (state, action) => action.payload,
});

export default branchesReducer;
