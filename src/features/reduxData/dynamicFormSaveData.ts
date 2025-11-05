import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type DataType = {
  Radio: string;
  Email: string;
  Password: string;
  Country: string;

  CompanyName?: string;
  Text?: string;
  State?: string;
  City?: string;
  ZidCode?: string;
  SpecialOffers?: boolean;
  OfferType?: string;
  AdminCode?: string;
  Age?: number;
  comments?: string;
};

const initialState: DataType = {
  Radio: "individual",
  Email: "",
  Password: "",
  Country: "",
};

export const dynamicFormSaveData = createSlice({
  name: "dynamicFormSaveData",
  initialState: initialState,
  reducers: {
    radioDataInsert: (state, action: PayloadAction<string>) => {
      state.Radio = action.payload;
    },
    emailDataInsert: (state, action: PayloadAction<string>) => {
      state.Email = action.payload;
    },
    passwordDataInsert: (state, action: PayloadAction<string>) => {
      state.Password = action.payload;
    },
    countryDataInsert: (state, action: PayloadAction<string>) => {
      state.Country = action.payload;
    },
    companyNameDataInsert: (state, action: PayloadAction<string>) => {
      state.CompanyName = action.payload;
    },
    textDataInsert: (state, action: PayloadAction<string>) => {
      state.Text = action.payload;
    },
    stateDataInsert: (state, action: PayloadAction<string>) => {
      state.State = action.payload;
    },
    cityDataInsert: (state, action: PayloadAction<string>) => {
      state.City = action.payload;
    },
    zipCodeDataInsert: (state, action: PayloadAction<string>) => {
      state.ZidCode = action.payload;
    },
    specialOffersDataInsert: (state, action: PayloadAction<boolean>) => {
      state.SpecialOffers = action.payload;
    },
    offerTypeDataInsert: (state, action: PayloadAction<string>) => {
      state.OfferType = action.payload;
    },
    adminCodeDataInsert: (state, action: PayloadAction<string>) => {
      state.AdminCode = action.payload;
    },
    ageTypeDataInsert: (state, action: PayloadAction<number>) => {
      state.Age = action.payload;
    },
    commentDataInsert: (state, action: PayloadAction<string>) => {
      state.comments = action.payload;
    },
  },
});

export default dynamicFormSaveData.reducer;
