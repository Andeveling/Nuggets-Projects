import { describe, expect, test } from "vitest"
import { useItems } from "../hooks/useItems"
import { renderHook, act } from "@testing-library/react"

describe("useItems", () => {
  test("should add an item and delete it", async () => {
    const { result } = renderHook(() => useItems())

    expect(result.current.items.length).toBe(0)

    act(() => {
        
    })
  })
})
