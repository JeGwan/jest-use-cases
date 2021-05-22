describe("mock test", () => {
  const mockFn = jest.fn();
  mockFn.mockReturnValue("I am a mock!");

  it("called", () => {
    mockFn("a");
    mockFn(["b", "c"]);
    expect(mockFn).toBeCalledTimes(2);
    expect(mockFn).toBeCalledWith("a");
    expect(mockFn).toBeCalledWith(["b", "c"]);
  });
});
