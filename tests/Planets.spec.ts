import { test, expect } from '@playwright/test';
// import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from '../src/app/store';
// import { getActionsHistoryStore } from '../src/testingMock/reduxSaga';
// const store = configureStore({
//     reducer: rootReducer,
//     // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({})],
// });
test('Planets', async({page})=>{
    await page.goto('http://localhost:3000');
    await page.screenshot({path: 'People.png'})

    // const getStore = () => {
    //     const { actions, store, errors } = getActionsHistoryStore();
    //     return { actions, store, errors };
    //   };
    //   const { store } = getStore();
    //   console.log(await page.evaluate(() => store));
    
})