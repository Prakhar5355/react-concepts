import { render, screen } from "@testing-library/react"
import About from "../About"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../utils/store"

// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//         json: () => Promise.resolve(MOCK_DATA)
//     });
// });


it("should check for debounced value",()=>{
    render(
        <BrowserRouter>
        <Provider store={store}>
    <About/>
    </Provider>
    </BrowserRouter>
    
);
    const para = screen.getByText("Change Email");
    expect(para).toBeInTheDocument();
})