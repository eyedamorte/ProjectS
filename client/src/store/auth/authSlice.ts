import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Api, ContentType } from '../../../Api';

const { api } = new Api();

const sliceName = 'auth';

interface AuthState {
  isAuthorized: boolean;
}

const initialState: AuthState = {
  isAuthorized: false,
};

export const registrationAsyncThunk = createAsyncThunk(`${sliceName}/signin`, params =>
  api.userRegistrationCreate({ email: 'fe' }),
);

const authSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(signinAsyncThunk.fulfilled, (state, action) => {
      state.isAuthorized = true;
    });
  },
});

export const authReducer = authSlice.reducer;
