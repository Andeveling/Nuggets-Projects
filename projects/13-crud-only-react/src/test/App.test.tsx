import { describe, test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import App from "../App"

// Test suite
describe("<App />", () => {
  // Test case
  test("should add a new item and delete it", async () => {
    render(<App />)
    const user = userEvent.setup()
    // Search Form
    const form = screen.getByRole("form")
    expect(form).toBeDefined()

    // Search Button
    const button = screen.getByRole("button", { name: /add/i })
    expect(button).toBeDefined()

    // Add a new item
    await user.type(screen.getByRole("textbox"), "New Item")
    await user.click(button)

    // Check if the new item is added
    const list = screen.getByRole("list")
    expect(list).toBeDefined()
    // Check if the new item is added
    expect(list.childNodes.length).toBe(1)

    // Delete the new item
    const deleteButton = screen.getByRole("button", { name: /delete/i })
    expect(deleteButton).toBeDefined()
    await user.click(deleteButton)

    // Check if the new item is deleted
    const noItems = screen.getByText(/No items/i)
    expect(noItems).toBeDefined()
  })
})
