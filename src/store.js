import { configureStore, createSlice } from '@reduxjs/toolkit';


const initialState = {
  allData: [],
  week1: [],
  week2: [],
  week3: [],
  week4: [],
  selectedData:[],
  activeTab: "All",
};


const allDataSlice = createSlice({
  name: 'allData',
  initialState: initialState.allData,
  reducers: {
    addToAllData: (state, action) => {
        return action.payload; 
      },
    removeFromAllData: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});


const week1Slice = createSlice({
  name: 'week1',
  initialState: initialState.week1,
  reducers: {
    addToWeek1: (state, action) => {
      state.push(action.payload);
    },
    removeFromWeek1: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});


const week2Slice = createSlice({
  name: 'week2',
  initialState: initialState.week2,
  reducers: {
    addToWeek2: (state, action) => {
      state.push(action.payload);
    },
    removeFromWeek2: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});


const week3Slice = createSlice({
  name: 'week3',
  initialState: initialState.week3,
  reducers: {
    addToWeek3: (state, action) => {
      state.push(action.payload);
    },
    removeFromWeek3: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});


const week4Slice = createSlice({
  name: 'week4',
  initialState: initialState.week4,
  reducers: {
    addToWeek4: (state, action) => {
      state.push(action.payload);
    },
    removeFromWeek4: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});


  const selectedDataSlice = createSlice({
    name: 'selectedData',
    initialState: initialState.selectedData,
    reducers: {
      addSelectedData: (state, action) => {
        state.push(action.payload);
      },
      removeFromSelectedData: (state, action) => {
        return state.filter(item => item.id !== action.payload.id);
      },
      clearSelectedData: (state) => {
        state.splice(0, state.length); 
      }
    }
  });

  const activeTabSlice = createSlice({
    name: 'activeTab',
    initialState: initialState.activeTab,
    reducers: {
      setActiveTab: (state, action) => {
        return action.payload;
      }
    }
  });


const reducer = {
  allData: allDataSlice.reducer,
  week1: week1Slice.reducer,
  week2: week2Slice.reducer,
  week3: week3Slice.reducer,
  week4: week4Slice.reducer,
  selectedData:selectedDataSlice.reducer,
  activeTab: activeTabSlice.reducer,
};


export const {
  addToAllData,
  removeFromAllData
} = allDataSlice.actions;


export const {
  addToWeek1,
  removeFromWeek1
} = week1Slice.actions;


export const {
  addToWeek2,
  removeFromWeek2
} = week2Slice.actions;


export const {
  addToWeek3,
  removeFromWeek3
} = week3Slice.actions;


export const {
  addToWeek4,
  removeFromWeek4
} = week4Slice.actions;


export const {
    addSelectedData,
    removeFromSelectedData,
    clearSelectedData
} = selectedDataSlice.actions;


export const {
    setActiveTab
  } = activeTabSlice.actions;


const store = configureStore({
  reducer
});

export default store;
