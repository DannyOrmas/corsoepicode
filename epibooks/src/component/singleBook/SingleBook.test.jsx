import { fireEvent, render, screen } from "@testing-library/react"
import SingleBook from "./SingleBook";
import { MemoryRouter } from "react-router-dom";

describe("test for single component", () => {
    it("should render a single book with all props", () => {
        const testBook = {
            title: "book title",
            asin: "23455678",
            img: "https://img,img",
        };

        render(
            <MemoryRouter>
                <SingleBook data={testBook} />
            </MemoryRouter>
        )


        const title = screen.getByText("book title");
        const asin = screen.getByText("23455678");
        const img = screen.getByRole("img");

        expect(title).toBeInTheDocument();
        expect(asin).toHaveAttribute("href", "/details-page/23455678");
        expect(img).toHaveAttribute("src", "https://img.img");
    });

    it('should change style when selected', () => {
        const testBook = {
            title: "book title",
            asin: "23455678",
            img: "https://img,img",
        };

        const { container } = render(
            <MemoryRouter>
                <SingleBook data={testBook} />
            </MemoryRouter>
        );

        const cardContainer = container = container.querySelector("card");

        fireEvent.click(cardContainer);

        expect(cardContainer).toHaveClass( "card selected" );


    });
});