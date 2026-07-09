import { createSlice } from "@reduxjs/toolkit";

// Validate stored user — must have uid from Firebase (phone auth)
function getStoredUser() {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Must have uid to be a valid Firebase user
    if (!parsed?.uid) {
      localStorage.removeItem("user"); // clear invalid/old data
      return null;
    }
    return parsed;
  } catch {
    localStorage.removeItem("user");
    return null;
  }
}

const storedUser = getStoredUser();

const initialState = {
  user: storedUser,
  isLoggedIn: !!storedUser,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
